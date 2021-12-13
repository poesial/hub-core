<template>
  <div>
    <toolbar heading="Blog Families">
      <gc-button @click="showCreatePanel = true">
        {{ $t('Create blog family') }}
      </gc-button>
    </toolbar>
    <quick-view-panel :open="showCreatePanel" heading="Create blog family" @close="showCreatePanel = false">
      <blog-family-create />
    </quick-view-panel>
    <gc-table
      :columns="tableColumns"
      :data="families"
      :meta="meta"
      @changePage="changePage"
      :loading="loading"
    >
      <template v-slot:name="{ row }">
        <nuxt-link
          :to="{
            name: 'blog-families.edit',
            params: {
              id: row.id
            }
          }"
        >
          {{ row.name }}
        </nuxt-link>
      </template>
      <template v-slot:blogs_count="{ row }">
        {{ row.blogs_count }}
      </template>
      <template v-slot:attributes_count="{ row }">
        {{ row.attributes_count }}
      </template>
    </gc-table>
  </div>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
import BlogFamilyCreate from '../../components/BlogFamilyCreate'

export default {
  mixins: [
    HasAttributes
  ],
  components: {
    BlogFamilyCreate
  },
  data () {
    return {
      searchTerm: null,
      page: 1,
      perPage: 30,
      total: 0,
      meta: {},
      families: [],
      showCreatePanel: false,
      loading: true
    }
  },
  computed: {
    locale () {
      return this.$store.state.core.locale
    },
    tableColumns () {
      return [
        { label: this.$t('Name'), field: 'name' },
        { label: this.$t('No. Blogs'), field: 'blogs_count' },
        { label: this.$t('No. Attributes'), field: 'attributes_count' },
      ]
    }
  },
  mounted () {
    const query = this.$route.query
    this.page = parseInt(query.page || 1)
    this.searchTerm = query.keywords || null
    this.fetch()
  },
  methods: {
    changePage (val) {
      this.loading = true
      this.page = val
      this.fetch()
    },
    async fetch () {
      const response = await this.$gc.blogs.families.get({
        page: this.page,
        per_page: this.perPage,
        counts: 'blogs,attributes'
      })
      const { data } = response
      const meta = data.meta
      this.meta = meta
      const pagination = meta
      this.total = pagination.total
      this.families = data.data
      this.$router.push({
        path: this.$route.path,
        query: {
          keywords: this.searchTerm,
          page: this.page
        }
      })
      this.loading = false
    }
  },
  head () {
    return {
      title: this.$t('Blog Families')
    }
  }
}
</script>
