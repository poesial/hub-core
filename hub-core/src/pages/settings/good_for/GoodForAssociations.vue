<template>
  <div>
    <gc-table
      :data="icons"
      :columns="[
        {label: 'Icon', field: 'icon'},
        {label: 'Name', field: 'name'},
        {label: 'Actions', field: 'actions'},
      ]"
    >

      <template v-slot:name="{ row }">
        {{ row.name }}
      </template>
      <template v-slot:icon="{ row }">
        <img :src="row.icon" style="width: 50px; object-fit: contain" />
      </template>
      <template v-slot:actions="{ row }">
        <gc-button theme="green" @click="attach(row.id)" v-if="!selected.includes(row.id)">
          Attach
        </gc-button>
        <gc-button theme="danger" v-else @click="attach(row.id)">
          Detach
        </gc-button>
      </template>
    </gc-table>
  </div>
</template>

<script>
const get = require('lodash/get')

export default {
  layout: 'settings',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      icons: [],
      attributeGroups: [],
      meta: {},
      page: 1,
      perPage: 15,
      total: 0,
      showCreateModal: false,
      showDeleteConfirm: false,
      deleteId: null,
      selected: this.product.good_for_icons.data.map(i => i.id),
    }
  },
  async mounted () {
    await this.fetch()
  },
  methods: {
    getLocaleValue (data) {
      return get(data, this.locale, data.en)
    },
    async fetch () {
      const response = await this.$gc.goodFor.get()

      this.icons = response.data.data;
    },
    attach(id) {
      if (!this.selected.includes(id)) this.selected.push(id);
      else {
        let index = this.selected.indexOf(id);
        if (index > -1) {
          this.selected.splice(index, 1)
        }
      }
      this.$gc.goodFor.attach(id, this.product.id);
    }
  },
  head () {
    return {
      title: this.$t('Available Attributes')
    }
  },
  locale () {
    return this.$store.state.core.locale
  }
}
</script>
