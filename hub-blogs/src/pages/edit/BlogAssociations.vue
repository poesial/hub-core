<template>
  <div v-if="blog">
    <!-- Here we want to loop through any sections that have been hooked into -->
    <div class="flex pl-4 text-gray-600 bg-gray-200">
      <button
        v-for="(item, tabIndex) in tabs"
        :key="tabIndex"
        :class="activeTab == tabIndex ? 'bg-white text-gray-600' : 'hover:bg-gray-300'"
        class="px-6 py-4 text-sm border-none outline-none focus:border-none focus:outline-none "
        @click="activeTab = tabIndex"
      >
        {{ item.title }}
      </button>
    </div>
    <component :is="tab" :blog="blog" @changed="handleChanged" />
  </div>
</template>

<script>
import HubPage from '@poesial/hub-core/src/mixins/HubPage'
import HasDrafts from '@poesial/hub-core/src/mixins/HasDrafts.js'
import NormalizesObjects from '@poesial/hub-core/src/mixins/NormalizesObjects.js'
import BlogAssociation from '../../components/BlogAssociation'

export default {
  layout: 'blog',
  mixins: [
    HubPage,
    HasDrafts,
    NormalizesObjects
  ],
  data () {
    return {
      blog: null,
      activeTab: 0,
      tabs: [{
        title: 'Blogs',
        component: BlogAssociation
      }],
      storeHandle: 'blog',
    }
  },
  computed: {
    tab () {
      return this.tabs[this.activeTab].component
    }
  },
  mounted () {
    this.blog = this.normalize(this.$store.state.blog.model)
    this.$nextTick(async () => {
      await this.$nuxt.context.app.$hooks.callHook('blogs.associations.tabs', this.tabs)
    })
  },
  methods: {
    async handleChanged (callback) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (draft) => {
          this.blog.id = draft.id
        }
      }, this.$getcandy)
      if (callback) {
        callback()
      }
    }
  }
}
</script>
