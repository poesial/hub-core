<template>
  <div v-if="blog">
    <gc-tabs>
      <gc-tab-item :label="$t('Pricing &amp; Variants')">
        <div v-if="config.allow_variant_options && blog.variants.data.length <= 1" class="px-6 py-3 text-right">
          <gc-button type="is-primary" theme="gray" @click="showVariantOptions = true">
            Edit options
          </gc-button>
        </div>
        <quick-view-panel :open="showVariantOptions" width="w-4/5 xl:w-3/5" @close="showVariantOptions = false">
          <variant-options :blog="blog" :initial-price="firstVariant.price" :errors="variantErrors" @save="saveVariants" />
        </quick-view-panel>
        <variant-manager :blog="blog" :languages="languages" @change="handleVariantsChange" @delete="handleVariantDelete" />
      </gc-tab-item>
      <gc-tab-item :label="$t('Channels')">
        <channel-manager :channels="blog.channels.data" @change="handleChannelChange" />
      </gc-tab-item>
      <gc-tab-item :label="$t('Customer Groups')">
        <customer-group-manager :groups="blog.customer_groups.data" @change="handleCustomerGroupsChange" />
      </gc-tab-item>
    </gc-tabs>
  </div>
</template>

<script>
import { HubPage, NormalizesObjects, HasDrafts } from '@poesial/hub-core/src/mixins/Index.js'
import VariantManager from '../../components/variants/VariantManager.vue'
import VariantOptions from '../../components/variants/VariantOptions.vue'

const find = require('lodash/find')
const debounce = require('lodash/debounce')
const map = require('lodash/map')

export default {
  layout: 'blog',
  components: {
    VariantManager,
    VariantOptions
  },
  mixins: [
    HubPage,
    NormalizesObjects,
    HasDrafts
  ],
  data () {
    return {
      blog: null,
      showVariantOptions: false,
      variantErrors: {}
    }
  },
  computed: {
    isDraft () {
      return this.$store.state.blog.isDraft
    },
    storeModel () {
      return this.$store.state.blog.model
    },
    config () {
      return this.$store.state.blog.config
    },
    firstVariant () {
      return this.blog.variants.data[0]
    }
  },
  mounted () {
    this.syncModel()
  },
  methods: {
    syncModel () {
      this.blog = this.normalize(this.storeModel)
    },
    handleCustomerGroupsChange: debounce(async function (groups) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id
        }
      }, this.$getcandy)
      try {
        this.$gc.blogs.updateCustomerGroups(this.blog.id, {
          groups
        })
        this.$notify.queue('success', this.$t('Blog customer groups updated'))
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to save customer groups'))
      }
    }, 300),
    handleChannelChange: debounce(async function (channels) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id
        }
      })
      try {
        await this.$gc.blogs.updateChannels(this.blog.id, {
          channels
        })
        this.$notify.queue('success', this.$t('Blog channels updated'))
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to save channels'))
      }
    }, 300),
    async saveVariants (event) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id
        }
      })
      this.variantErrors = {}
      try {
        const { variants, options } = event
        await this.$store.dispatch('blog/createVariants', {
          blogId: this.blog.id,
          $nuxt: this.$nuxt,
          variants: {
            variants,
            options
          }
        })
        this.$notify.queue('success', this.$t('Blog updated'))
        this.syncModel()
        this.showVariantOptions = false
        event.callback()
      } catch (error) {
        this.variantErrors = error.response.data
        this.$notify.queue('error', this.$t('Unable to create variants'))
      }
    },
    async handleVariantDelete (variant) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id

          const variants = blog.variants.data
          // We need to find the drafted variant equivalent
          const variantDraft = find(variants, (v) => {
            if (v.published_parent && v.published_parent.data) {
              return v.published_parent.data.id === variant.id
            }
          })
          variant.id = variantDraft ? variantDraft.id : variant.id
        }
      }, this.$getcandy)

      try {
        await this.$getcandy.on('blog-variants', 'deleteBlogVariant', variant.id)
        this.$notify.queue('success', this.$t('Blog variant deleted'))
      } catch (error) {
      }
    },
    handleVariantsChange: debounce(async function (variant, done) {
      await this.createDraft('blog', this.blog.id, {
        afterRedirect: (blog) => {
          this.blog.id = blog.id

          const variants = blog.variants.data
          // We need to find the drafted variant equivalent
          const variantDraft = find(variants, (v) => {
            if (v.published_parent && v.published_parent.data) {
              return v.published_parent.data.id === variant.id
            }
          })
          variant.id = variantDraft ? variantDraft.id : variant.id
        }
      }, this.$getcandy)

      const payload = {
        price: variant.price,
        asset_id: variant.asset_id,
        tax_id: variant.tax.data.id,
        sku: variant.sku,
        weight: variant.weight,
        min_qty: variant.min_qty,
        unit_qty: variant.unit_qty,
        min_batch: variant.min_batch,
        height: variant.height,
        depth: variant.depth,
        width: variant.width,
        volume: variant.volume,
        inventory: variant.inventory,
        incoming: variant.incoming,
        backorder: variant.backorder,
        pricing: variant.customer_pricing.data,
        tiers: [],
        options: variant.options,
        cost: variant.cost,
        import_tax: variant.import_tax,
        inward_shipping_cost: variant.inward_shipping_cost,
        margin: variant.margin,
        profit: variant.profit,
        replenishment_arrival_date: variant.replenishment_arrival_date,
        replenishment_units: variant.replenishment_units,
      }

      if (variant.tiers.data.length) {
        payload.tiers = map(variant.tiers.data, (tier) => {
          return {
            lower_limit: tier.lower_limit,
            price: tier.price,
            customer_group_id: tier.group.id
          }
        })
      }

      try {
        await this.$gc.blogs.variants.put(variant.id, payload)
        this.$notify.queue('success', this.$t('Blog updated'))

        this.$store.commit('blog/setState', 'saved')

        if (done) {
          done()
        }
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to save blog'))
      }
    }, 300)
  }
}
</script>
