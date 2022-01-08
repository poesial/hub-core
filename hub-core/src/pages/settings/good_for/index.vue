<template>
  <div>
    <simple-modal heading="Permanent delete" :open="showDeleteConfirm" @confirmed="deleteIcon" @close="showDeleteConfirm = false">
      {{ $t('Are you sure you want to delete this record? This action cannot be undone.') }}
    </simple-modal>

    <toolbar :heading="$t('Available Good For')">
      <gc-button @click="showCreateModal = true">
        {{ $t('Create good for') }}
      </gc-button>
      <quick-view-panel :heading="$t('Create good for')" :open="showCreateModal" @close="showCreateModal = false">
        <create-icon @close="showCreateModal = false; fetch()" />
      </quick-view-panel>
    </toolbar>

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
        <gc-button @click="showDeleteConfirm = true; deleteId = row.id;" theme="danger">
          <gc-icon icon="trash" />
        </gc-button>
      </template>
    </gc-table>
  </div>
</template>

<script>
const get = require('lodash/get')

export default {
  layout: 'settings',
  async fetch () {
    const response = await this.$gc.attributeGroups.get({})
    this.attributeGroups = response.data.data
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
    deleteIcon() {
      if (this.deleteId) {
        this.$gc.goodFor.delete(this.deleteId).then(() => {
          this.$buefy.toast.open({
            message: this.$t('Icon Deleted'),
            position: 'is-bottom',
            type: 'is-success'
          })

          this.showDeleteConfirm = false;
          this.fetch();
        })
      }
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
