<template>
  <div v-if="category">
    <media-manager
      :refreshing="pendingDraftCreation"
      assetable="categories"
      assetable-type="category"
      :parent="category"
      :process-on-add="false"
      @file-added="handleFileAdded"
      @changed="handleChange"
      @beforeSave="handleChange"
      @externalAssetAdded="handleExternalAssetUpload"
    />
  </div>
</template>

<script>
import NormalizesObjects from '@poesial/hub-core/src/mixins/NormalizesObjects.js'
import HasDrafts from '@poesial/hub-core/src/mixins/HasDrafts.js'
const filter = require('lodash/filter')

export default {
  layout: 'category',
  mixins: [
    NormalizesObjects,
    HasDrafts
  ],
  data () {
    return {
      pendingDraftCreation: false,
      category: null,
      storeHandle: 'categories'
    }
  },
  computed: {
    model () {
      return this.$store.state.categories.model
    }
  },
  mounted () {
    this.category = this.normalize(this.model)
  },
  methods: {
    async handleFileAdded () {
      this.pendingDraftCreation = true
      await this.createDraft('categories', this.category.id, {
        beforeRedirect: (draft) => {
          this.category.id = draft.id
        }
      })
      this.pendingDraftCreation = false
    },
    async handleChange (assets, done) {
      await this.createDraft('categories', this.category.id, {
        afterRedirect: (category) => {
          this.category.id = category.id
          done()
        },
        alreadyDrafted: () => {
          done()
        }
      })
      return assets
    },
    async handleExternalAssetUpload (asset) {
      try {
        await this.createDraft('product', this.product.id, {
          beforeRedirect: (draft) => {
            this.product.id = draft.id
          }
        }, this.$getcandy)
        await this.$gc.products.attachAsset(this.product.id, asset.data.id)
      } catch (err) {

      }
    },
    handleFileUploaded (file) {
      const pending = this.files

      const remaining = filter(pending, (existing) => {
        return existing.id !== file.id
      })

      this.$store.commit('categories/setPendingAssets', remaining)
    }
  }
}
</script>
