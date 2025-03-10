<template>
  <default-layout>
    <div v-if="$fetchState.pending" class="flex items-center justify-center w-full h-screen">
      <div class="flex items-center text-gray-500">
        <loading-spinner class="mr-2" />
        <span class="text-xs font-medium uppercase">{{ $t('Fetching Category') }}</span>
      </div>
    </div>
    <div v-else>
      <div v-if="isDraft" class="p-2 text-sm text-center text-orange-700 bg-orange-100 border-b border-orange-300">
        {{ $t("You are viewing a draft, changes below won't be reflected until published") }}
      </div>
      <toolbar heading="Category" :sub-heading="title">
        <div class="flex items-center">
          <div>
            <draft-tools
              :preview-url="previewUrl"
              :creating-draft="creatingDraft"
              :publishing-draft="publishingDraft"
              :is-draft="isDraft"
              :versions="category.versions ? category.versions.data : []"
              :created-at="category.created_at"
              :updated-at="category.updated_at"
              @delete="triggerDelete"
              @discard="discard"
              @restore="restore"
              @publish="publish"
            />
          </div>
        </div>
      </toolbar>
      <div>
        <div class="flex">
          <gc-resource-nav :nav="navItems" />
        </div>
        <div>
          <nuxt />
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
import DefaultLayout from '@poesial/hub-core/src/layouts/Default.vue'

export default {
  components: {
    DefaultLayout
  },
  mixins: [
    HasAttributes
  ],
  async fetch () {
    await this.load()

    const items = [
      {
        route: 'categories.edit.details',
        label: 'Attribute Details'
      },
      {
        route: 'categories.edit.media',
        label: 'Media'
      },
      {
        route: 'categories.edit.availability',
        label: 'Availability &amp; Pricing'
      },
      {
        route: 'categories.edit.associations',
        label: 'Associations'
      },
      {
        route: 'categories.edit.routes',
        label: 'URLs'
      }
    ]
    this.$nuxt.context.app.$hooks.callHook('category.main.tabs', items)

    this.navItems = {
      params: {
        id: this.category.id
      },
      items
    }
  },
  data () {
    return {
      section: 'details',
      navItems: {}
    }
  },
  computed: {
    creatingDraft () {
      return this.$store.state.categories.creatingDraft
    },
    publishingDraft () {
      return this.$store.state.categories.publishingDraft
    },
    title () {
      return this.category ? this.attribute(this.category.attribute_data, 'name') : 'Loading...'
    },
    category () {
      return this.$store.state.categories.model
    },
    isDraft () {
      return this.$store.state.categories.isDraft
    },
    liveId () {
      return this.$store.state.categories.liveId
    },
    previewUrl () {
      return this.config.preview_url.replace(':id', this.category.id) || null
    },
    config () {
      return this.$store.state.categories.config
    }
  },
  destroyed () {
    this.$store.dispatch('categories/resetState')
  },
  methods: {
    setSection (section) {
      this.section = section
    },
    async load (id) {
      try {
        await this.$store.dispatch('categories/fetch', {
          $nuxt: this.$nuxt,
          id: id || this.$route.params.id
        })
      } catch (e) {
        return this.$nuxt.error({ statusCode: e.response.status, message: e.message })
      }
    },
    async save () {
      await this.$store.dispatch('categories/save', {
        context: this.$gc,
        data: {
          attributes: this.category.attribute_data,
          layout_id: this.category.layout_id
        }
      })

      this.$notify.queue('success', this.$t('Category saved'))
      this.$store.commit('categories/setModel', this.category)
    },
    async triggerDelete () {
      try {
        await this.$gc.categories.destroy(this.category.id)
        this.$router.push({
          name: 'categories'
        })
        this.$notify.queue('success', this.$t('Category deleted'))
      } catch (error) {
        this.$notify.queue('error', this.$t('Unable to delete category'))
      }
    },
    async discard () {
      const categoryId = this.category.id
      this.$store.dispatch('categories/resetState')
      this.loading = true
      await this.$gc.categories.destroy(categoryId)
      await this.$router.replace({
        name: 'categories'
      })
      await this.$router.replace({
        name: 'categories.edit.details',
        params: {
          id: this.liveId
        }
      })
      this.load(this.liveId)
    },
    async publish () {
      try {
        await this.$store.dispatch('categories/publish', {
          id: this.category.id,
          $nuxt: this.$nuxt
        })
        this.$nuxt.context.app.$hooks.callHook('category.publish')
      } catch (error) {
        this.$notify.queue('error', this.$t('Unable to publish draft'))
      }
    },
    async restore (versionId) {
      const response = await this.$gc.versions.restore(versionId, {
        type: 'categories'
      })
      this.loading = true
      await this.$router.push({
        name: 'categories.edit.details',
        params: {
          id: response.data.id
        }
      })
      this.load(response.data.id)
      this.$notify.queue('success', this.$t('Category restored and draft created'))
    }

  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
