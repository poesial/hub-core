<template>
  <div>
    <toolbar heading="Orders">
      <template v-slot:search>
        <gc-input v-model="searchTerm" icon="search-line" :placeholder="$t('Search orders...')" @input="initSearch" />
      </template>
      <div class="flex items-center">
        <div class="mr-4">
          <div class="flex p-1 text-xs bg-gray-200 rounded shadow-inner">
            <button class="px-3 py-2 rounded focus:outline-none" :class="{ 'bg-white shadow text-purple-600': view == 'table', 'bg-transparent text-gray-600 hover:text-gray-800' : view != 'table' }" @click="view = 'table'">
              Table View
            </button>
            <button class="px-3 py-2 rounded focus:outline-none" :class="{ 'bg-white shadow text-purple-600': view == 'split', 'bg-transparent text-gray-600 hover:text-gray-800' : view != 'split' }" @click="view = 'split'">
              Split view
            </button>
          </div>
        </div>
        <gc-button theme="gray" @click="showFilters = true">
          <b-icon icon="equalizer-line" />
        </gc-button>
      </div>
    </toolbar>
    <quick-view-panel
      :open="showFilters"
      heading="Apply filters"
      @close="showFilters = false"
    >
      <form action="" class="mx-4 text-sm">
        <div class="mt-4">
          <header class="mb-1 text-sm font-bold text-gray-700">
            <label>{{ $t('Order date') }}</label>
          </header>
          <div>
            <b-datepicker
              v-model="dates"
              icon="calendar-line"
              :placeholder="$t('Select date')"
              range
              @input="updateDate"
            />
          </div>
        </div>
        <div class="my-4">
          <header class="mb-1 text-sm font-bold text-gray-700">
            <label>{{ $t('Shipping Zone') }}</label>
          </header>
          <div>
            <gc-select-input v-model="filters.zone" @input="filter('zone', filters.zone)">
              <option value>
                {{ $t('All Zones') }}
              </option>
              <option v-for="(zone, handle) in zones" :key="handle" :value="zone.name">
                {{ zone.name }}
              </option>
            </gc-select-input>
          </div>
        </div>
        <div>
          <header class="mb-1 text-sm font-bold text-gray-700">
            <label>{{ $t('Status') }}</label>
          </header>
          <div>
            <gc-select-input v-model="filters.status" @input="filter('status', filters.status)">
              <option value>
                {{ $t('All Statuses') }}
              </option>
              <option v-for="(status, handle) in settings.statuses.options" :key="handle" :value="handle">
                {{ status.label ? status.label : $t('Unknown') }}
              </option>
            </gc-select-input>
          </div>
        </div>
        <div class="my-4">
          <header class="mb-1 text-sm font-bold text-gray-700">
            <label>{{ $t('Payment Types') }}</label>
          </header>
          <div>
            <gc-select-input v-model="filters.type" @input="filter('type', filters.type)">
              <option value>
                {{ $t('All Types') }}
              </option>
              <option v-for="(type, typeIndex) in types" :key="typeIndex" :value="type.label">
                {{ type.label ? type.label : $t('Unknown') }}
              </option>
            </gc-select-input>
          </div>
        </div>
      </form>
    </quick-view-panel>
    <orders-table-view
      v-if="view == 'table'"
      :orders="orders"
      :loading="loading"
      :total="total"
      :per-page="perPage"
      :settings="settings"
      :meta="meta"
      @changePage="changePage"
      @filterStatus="filterStatus"
    />

    <orders-split-view
      v-if="view == 'split'"
      :orders="orders"
      :settings="settings"
      :page="page"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
import moment from 'moment'
import UpdateOrderStatus from '../components/UpdateOrderStatus.vue'
import OrderExport from '../components/OrderExport.vue'
import OrdersSplitView from '../components/OrdersSplitView.vue'
import OrdersTableView from '../components/OrdersTableView.vue'
const debounce = require('lodash/debounce')
const find = require('lodash/find')
const map = require('lodash/map')

export default {
  components: {
    UpdateOrderStatus,
    OrderExport,
    OrdersTableView,
    OrdersSplitView
  },
  mixins: [
    HasAttributes
  ],
  async asyncData ({ app, params }) {
    const settingResponse = await app.$gc.settings.fetch('orders')

    return {
      loading: true,
      perPage: 30,
      dates: [],
      filters: {
        status: null,
        zone: null,
        type: null,
      },
      checkedRows: [],
      page: 1,
      total: 0,
      orders: [],
      types: [],
      showFilters: false,
      zones: [],
      searchTerm: null,
      settings: settingResponse.data.data,
      view: 'table',
      meta: {}
    }
  },
  async fetch () {
    this.loading = true

    const {
      page,
      to,
      from,
      status,
      keywords,
      per_page,
      type,
      sort,
      zone
    } = this.$route.query

    const response = await this.$gc.orders.get({
      includes: 'user.firstOrder,user.customer,shipping',
      to: to || null,
      from: from || null,
      page: page || 1,
      sort: sort || null,
      status: status || null,
      zone: zone || null,
      keywords: keywords || null,
      per_page: per_page || 50,
      type: type || null
    })

    this.orders = response.data.data
    this.meta = response.data.meta
    this.loading = false
    const meta = response.data.meta
    this.total = meta.total
    this.perPage = meta.per_page
    this.page = meta.current_page

  },
  mounted () {
    const { keywords, page, type } = this.$route.query
    this.searchTerm = keywords
    this.page = page
    this.filters.type = type

    this.loadTypes()
    this.loadShippingZones()
  },
  head () {
    return {
      title: 'Orders'
    }
  },
  watch: {
    '$route': '$fetch',
  },
  methods: {
    filterStatus(status) {
      this.filter('status', status)
    },
    filter (handle, value) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{
            [handle]: value
          }
        }
      })
    },
    changePage (page) {
      this.page = page
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{
            page: this.page
          }
        }
      })
    },
    loadTypes () {
      this.$gc.orders.types().then((response) => {
        this.types = response.data.data
      })
    },
    loadShippingZones () {
      this.$gc.shippingZones.get().then((response) => {
        this.zones = response.data.data
      })
    },
    initSearch: debounce(function () {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{
            keywords: this.searchTerm
          }
        }
      })
    }, 500),
    updateDate () {
      let [from, to] = this.dates

      if (to) {
        to = moment(to).format('YYYY-MM-DD')
      }

      if (from) {
        from = moment(from).format('YYYY-MM-DD')
      }

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{
            to,
            from
          }
        }
      })
    },
  },
  computed: {
    currencies () {
      return this.$store.state.core.currencies
    },
    selectedIds () {
      return map(this.checkedRows, row => row.id)
    }
  }
}
</script>
