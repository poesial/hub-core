<template>
  <div>
    <toolbar heading="Blogs">
      <template v-slot:search>
        <gc-input v-model="searchTerm" icon="search" placeholder="Search Blogs" />
      </template>
      <gc-button @click="showCreatePanel = true">
        {{ $t('Create blog') }}
      </gc-button>
    </toolbar>
    <quick-view-panel heading="Create a blog" :open="showCreatePanel" @close="showCreatePanel = false">
      <div class="p-6">
        <blog-create :locale="locale" />
      </div>
    </quick-view-panel>
    <blog-table :search-term="searchTerm" />
  </div>
</template>

<script>
import BlogTable from '../components/BlogTable.vue'
import BlogCreate from '../components/BlogCreate.vue'
export default {
  components: {
    BlogTable,
    BlogCreate
  },
  data () {
    return {
      showCreatePanel: false,
      searchTerm: null,
      families: []
    }
  },
  computed: {
    locale () {
      return this.$store.state.core.locale
    }
  },
  async mounted () {
    const response = await this.$gc.blogs.families.get({
      per_page: 200
    })

    const query = this.$route.query
    this.searchTerm = query.keywords || null
    this.families = response.data.data
  },
  head () {
    return {
      title: this.$t('Blogs')
    }
  }
}
</script>
