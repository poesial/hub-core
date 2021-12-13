<template>
  <div v-if="blog">
    <media-manager
      :refreshing="pendingDraftCreation"
      assetable="blogs"
      :assetable-id="blog.id"
      assetable-type="blog"
      :process-on-add="false"
      :parent="blog"
      @file-added="handleFileAdded"
      @changed="handleChange"
      @beforeSave="handleChange"
      @externalAssetAdded="handleExternalAssetUpload"
    />
  </div>
</template>

<script>
import { NormalizesObjects, HasDrafts } from '@poesial/hub-core/src/mixins/Index.js'

export default {
  layout: 'blog',
  mixins: [
    NormalizesObjects,
    HasDrafts
  ],
  data () {
    return {
      blog: null,
      pendingDraftCreation: false,
      processOnAdd: false,
      pending: [],
      assetsToMerge: []
    }
  },
  computed: {
    storeModel () {
      return this.$store.state.blog.model
    }
  },
  watch: {
    isDraft (val) {
      this.processOnAdd = val
    }
  },
  mounted () {
    this.blog = this.normalize(this.storeModel)
    if (this.isDraft) {
      this.processOnAdd = true
    }
  },
  methods: {
    async handleFileAdded () {
      this.pendingDraftCreation = true
      await this.createDraft('blog', this.blog.id, {
        beforeRedirect: (draft) => {
          this.blog.id = draft.id
        }
      })
      this.pendingDraftCreation = false
    },
    async handleExternalAssetUpload (asset) {
      try {
        await this.createDraft('blog', this.blog.id, {
          beforeRedirect: (draft) => {
            this.blog.id = draft.id
          }
        }, this.$getcandy)
        await this.$gc.blogs.attachAsset(this.blog.id, asset.data.id)
      } catch (err) {

      }
    },
    // eslint-disable-next-line
    async handleChange (assets, done) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id
          done()
        },
        alreadyDrafted: () => {
          done()
        }
      })
    }
  }
}
</script>
