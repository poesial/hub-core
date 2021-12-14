<template>
  <div>
    <url-manager
      :routes="routes"
      :errors="formErrors"
      element-type="blog"
      :element-id="blog.id"
      @created="handleCreated"
      @added="handleAdded"
      @updated="handleUpdated"
      @deleted="handleDeleted"
    />
  </div>
</template>

<script>
import HubPage from '@poesial/hub-core/src/mixins/HubPage'
import HasDrafts from '@poesial/hub-core/src/mixins/HasDrafts'
import HandlesForms from '@poesial/hub-core/src/mixins/HandlesForms.js'

const each = require('lodash/each')
const first = require('lodash/first')
const find = require('lodash/find')
const get = require('lodash/get')

export default {
  layout: 'blog',
  mixins: [
    HubPage,
    HasDrafts,
    HandlesForms
  ],
  data () {
    return {
      routes: [],
      redirects: [],
      storeHandle: 'blog',
    }
  },
  computed: {
    blog () {
      return JSON.parse(JSON.stringify(this.$store.state.blog.model))
    }
  },
  mounted () {
    this.routes = this.blog.routes.data
    // const allRoutes = this.blog.routes.data;
    // this.routes = filter(allRoutes, route => !route.redirect) || []
    // this.redirects = filter(allRoutes, route => route.redirect) || []
  },
  methods: {
    handleAdded (route) {
      this.routes.push(route)
    },
    async handleCreated (callback) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (draft) => {
          this.blog.id = draft.id
        }
      }, this.$getcandy)
      callback()
    },
    async handleUpdated (route) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (draft) => {
          this.blog.id = draft.id
          const routes = draft.routes.data

          // We need to find the drafted route
          const routeDraft = find(routes, (r) => {
            if (r.published_parent && r.published_parent.data) {
              return r.published_parent.data.id === route.id
            }
          })
          route.id = routeDraft ? routeDraft.id : route.id
        }
      }, this.$getcandy)

      try {
        await this.$gc.routes.put(route.id, route)
        this.$notify.queue('success', this.$t('URLs updated'))
      } catch (e) {
        const errors = get(e, 'response.data.errors', [])

        each(errors, (error) => {
          each(error, (e) => {
            this.$notify.queue('error', this.$t(e))
          })
        })
      }
    },
    async handleDeleted (index) {
      const route = this.routes[index]
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (draft) => {
          this.blog.id = draft.id
          const routes = draft.routes.data

          // We need to find the drafted route
          const routeDraft = find(routes, (r) => {
            if (r.published_parent && r.published_parent.data) {
              return r.published_parent.data.id === route.id
            }
          })
          route.id = routeDraft ? routeDraft.id : route.id
        }
      }, this.$getcandy)
      await this.$gc.routes.delete(route.id)
      this.routes.splice(index, 1)
      if (this.routes.length === 1) {
        first(this.routes).default = true
      }
    }
  }
}
</script>
