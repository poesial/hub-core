<template>
  <default-layout>
    <div v-if="$fetchState.pending" class="flex items-center justify-center w-full h-screen">
      <div class="flex items-center text-gray-500">
        <loading-spinner class="mr-2" />
        <span class="text-xs font-medium uppercase">{{ $t('Fetching Blog') }}</span>
      </div>
    </div>
    <div v-else>
      <div v-if="isDraft" class="p-2 text-sm text-center text-orange-700 bg-orange-100 border-b border-orange-300">
        {{ $t("You are viewing a draft, changes below won't be reflected until published") }}
      </div>
      <toolbar heading="Blogs" :sub-heading="title">
        <template v-slot:subHeadingExtra>
          <span class="block text-xs text-red-600">{{ sku }}</span>
        </template>
        <div class="flex items-center">
          <div>
            <draft-tools
              :preview-url="previewUrl"
              :live-url="liveUrl"
              :is-draft="isDraft"
              :creating-draft="creatingDraft"
              :publishing-draft="publishingDraft"
              :versions="blog.versions ? blog.versions.data : []"
              :created-at="blog.created_at"
              :updated-at="blog.updated_at"
              @discard="discard"
              @delete="triggerDelete"
              @publish="publish"
              @restore="restore"
            />
          </div>
          <div class="ml-3">
            <gc-button theme="gray" @click="showSettingsPanel = true">
              <gc-icon icon="settings" size="sm" class="mr-1" /> Settings
            </gc-button>
            <quick-view-panel
              :open="showSettingsPanel"
              heading="Blog Settings"
              @close="showSettingsPanel = false"
            >
              <div class="p-6">
                <blog-settings :blog="blog" @save="handleSettingsSave" />
              </div>
            </quick-view-panel>
          </div>
        </div>
      </toolbar>
      <div class="flex">
        <gc-resource-nav :nav="navItems" />
      </div>
      <nuxt />
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@poesial/hub-core/src/layouts/Default.vue'
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
import HasDrafts from '@poesial/hub-core/src/mixins/HasDrafts'
import BlogSettings from './blogs/components/BlogSettings.vue'
const first = require('lodash/first')
const get = require('lodash/get')

export default {
  components: {
    DefaultLayout,
    BlogSettings
  },
  mixins: [
    HasAttributes,
    HasDrafts
  ],
  async fetch () {
    await this.load(this.$route.params.id)
    const items = [
      {
        route: 'blogs.view',
        label: 'Attribute Details'
      },
      {
        route: 'blogs.edit.media',
        label: 'Media'
      },
      {
        route: 'blogs.edit.availability',
        label: 'Availability &amp; Pricing'
      },
      {
        route: 'blogs.edit.associations',
        label: 'Associations'
      },
      {
        route: 'blogs.edit.urls',
        label: 'URLs'
      }
    ]
    this.$nuxt.context.app.$hooks.callHook('blog.main.tabs', items)

    this.navItems = {
      params: {
        id: this.blog.id
      },
      items
    }
  },
  data () {
    return {
      loading: false,
      showHistoryModal: false,
      showSettingsPanel: false,
      navItems: {}
    }
  },
  computed: {
    creatingDraft () {
      return this.$store.state.blog.creatingDraft
    },
    publishingDraft () {
      return this.$store.state.blog.publishingDraft
    },
    title () {
      return this.blog ? this.attribute(this.blog.attribute_data, 'name') : 'Loading...'
    },
    previewUrl () {
      return this.blog ? (this.config.preview_url.replace(':id', this.blog.id) || null) : null
    },
    liveUrl () {
      const { routes } = this.blog
      const route = first(routes ? routes.data : [])
      if (!route) {
        return null
      }
      if (!this.config.live_url) {
        return null
      }
      return this.blog ? (this.config.live_url.replace(':slug', route.slug) || null) : null
    },
    blog () {
      return this.$store.state.blog.model
    },
    sku () {
      const variants = get(this.blog, 'variants.data', [])
      if (!variants.length || variants.length > 1) {
        return null
      }
      return variants.map(v => v.sku).join(', ')
    },
    liveId () {
      return this.$store.state.blog.liveId
    },
    isDraft () {
      return this.$store.state.blog.isDraft
    },
    config () {
      return this.$store.state.blog.config
    }
  },
  watch: {
    '$route.params': '$fetch'
  },
  destroyed () {
    this.$store.dispatch('blog/resetState')
  },
  mounted () {
    this.$store.commit('blog/setPendingAssets', [])
  },
  methods: {
    handleSettingsSave ({ familyId }) {
      this.$getcandy.on('blogs', 'putBlogsBlogId', this.blog.id, {
        family_id: familyId,
        attribute_data: this.blog.attribute_data
      }).then(() => {
        this.load(this.blog.id)
        this.showSettingsPanel = false
        this.$notify.queue('success', 'Blog settings saved')
      })
    },
    async load (id) {
      try {
        await this.$store.dispatch('blog/fetch', {
          $nuxt: this.$nuxt,
          id
        })
      } catch (e) {
        return this.$nuxt.error({
          statusCode: e.response ? e.response.status : 500,
          message: e.message
        })
      }
    },
    async triggerDelete () {
      await this.$gc.blogs.destroy(this.blog.id)
      this.$router.push({
        name: 'blogs'
      })
      this.$notify.queue('success', this.$t('Blog deleted'))
    },
    async discard () {
      try {
        await this.$store.dispatch('blog/discard', {
          id: this.blog.id,
          $nuxt: this.$nuxt,
          liveId: this.liveId
        })

        if (this.$route.params.id === this.liveId) {
          await this.$fetch()
        }
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to discard draft'))
      }
    },
    async publish () {
      try {
        await this.$store.dispatch('blog/publish', {
          id: this.blog.id,
          $nuxt: this.$nuxt
        })
      } catch (error) {
        this.$notify.queue('error', this.$t('Unable to publish draft'))
      }
    },
    async restore (versionId) {
      const response = await this.$gc.versions.restore(versionId)
      this.loading = true
      await this.$router.replace({
        name: 'blogs.view',
        params: {
          id: response.data.id
        }
      })
      this.load(response.data.id)
      this.$notify.queue('success', this.$t('Blog restored and draft created'))
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
