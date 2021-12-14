<template>
  <search-table
    :search-placeholder="$t('Search blogs by attribute')"
    :limit="limit"
    :external-term="searchTerm"
    type="blogs"
    :checkable="checkable"
    class="has-round-edge"
    includes="family,assets.transforms,draft"
    :hide-search="hideSearch"
    :columns="tableColumns"
    @loaded="(e) => $emit('loaded', e)"
  >
    <template v-slot:selection="{ row }" v-if="checkable">
      <input type="checkbox" v-model="selected" :value="row" />
    </template>
    <template v-slot:status="{ row }">
      <span
        class="px-2 py-1 text-xs border rounded"
        :class="{
          'bg-green-50 text-green-500 border-green-300': visibilityStatus(row).status === 'live',
          'bg-blue-50 text-blue-500 border-blue-300': visibilityStatus(row).status === 'limited',
          'bg-red-50 text-red-500 border-red-300': visibilityStatus(row).status === 'unpublished'
        }"
      >
        <span>{{ visibilityStatus(row).label }}</span>
      </span>
    </template>
    <template v-slot:date="{ row }">
      {{ $format.date(row.created_at) }}
    </template>
    <template v-slot:author="{ row }">
      {{ attribute(row.attribute_data, 'author') }}
    </template>
    <template v-slot:title="{ row }">
      <nuxt-link
        class="flex items-center block"
        :to="{
          name: 'blogs.view',
          params: {
            id: row.id
          }
        }"
      >
        {{ attribute(row.attribute_data, 'title') }}
      </nuxt-link>
    </template>
  </search-table>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes.js'
import HasGroups from '../mixins/HasGroups.js'
const get = require('lodash/get')
const find = require('lodash/find')

export default {
  mixins: [
    HasGroups,
    HasAttributes
  ],
  props: {
    limit: {
      type: Number,
      default: 30
    },
    hideSearch: {
      type: Boolean,
      default: true
    },
    checkable: {
      type: Boolean,
      default: false
    },
    searchTerm: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selected: []
    }
  },
  watch: {
    selected(val) {
      this.$emit('selected', val)
    }
  },
  computed: {
    tableColumns() {
      const columns = [
        {label: 'Status', field: 'status'},
        {label: this.$t('Date'), field: 'date'},
        {label: this.$t('Title'), field: 'title', truncate: true},
        {label: 'Author', field: 'author'},
      ];

      if (this.checkable) {
        columns.unshift({
          name: null, field: 'selection'
        })
      }
      return columns;
    }
  },
  methods: {
    hasDraft (row) {
      return get(row, 'draft.data', null)
    }
  }
}
</script>

<style scoped>
</style>
