<template>
  <div v-if="product">
    <media-manager
      :refreshing="pendingDraftCreation"
      assetable="products"
      :assetable-id="product.id"
      assetable-type="product"
      :process-on-add="false"
      :parent="product"
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
  layout: 'product',
  mixins: [
    NormalizesObjects,
    HasDrafts
  ],
  data () {
    return {
      product: null,
      pendingDraftCreation: false,
      processOnAdd: false,
      pending: [],
      assetsToMerge: []
    }
  },
  computed: {
    storeModel () {
      return this.$store.state.product.model
    }
  },
  watch: {
    isDraft (val) {
      this.processOnAdd = val
    }
  },
  mounted () {
    this.product = this.normalize(this.storeModel)
    if (this.isDraft) {
      this.processOnAdd = true
    }
  },
  methods: {
    async handleFileAdded () {
      this.pendingDraftCreation = true
      await this.createDraft('product', this.product.id, {
        beforeRedirect: (draft) => {
          this.product.id = draft.id
        }
      })
      this.pendingDraftCreation = false
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
    // eslint-disable-next-line
    async handleChange (assets, done) {
      await this.createDraft('product', this.product.id, {
        afterRedirect: (product) => {
          this.product.id = product.id
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
