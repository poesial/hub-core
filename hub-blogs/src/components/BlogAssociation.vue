<template>
  <div>
    <div>
      <div class="px-6 py-3 text-right">
        <gc-button v-if="associations.length" theme="gray" @click="showBrowser = true">
          {{ $t('Add Blog') }}
        </gc-button>
      </div>
      <quick-view-panel heading="Search blogs" :open="showBrowser" width="w-2/3" @close="showBrowser = false">
        <search-table
          :limit="10"
          includes="assets.transforms,variants"
          :update-query-string="false"
          :search-placeholder="$t('Search blogs')"
          type="blogs"
          :columns="[
            {label: '', field: 'thumbnail'},
            {label: $t('Name'), field: 'name'},
            {label: $t('SKU'), field: 'sku'},
            {label: null, field: 'actions'},
          ]"
        >
          <template v-slot:thumbnail="{ row }">
            <nuxt-link
              :to="{
                name: 'blogs.view',
                params: {
                  id: row.id
                }
              }"
            >
              <thumbnail-loader width="30px" :asset="row.assets.data[0]" />
            </nuxt-link>
          </template>
          <template v-slot:name="{ row }">
            <nuxt-link
              :to="{
                name: 'blogs.view',
                params: {
                  id: row.id
                }
              }"
            >
              {{ attribute(row.attribute_data, 'name') }}
            </nuxt-link>
          </template>
          <template v-slot:sku="{ row }">
            {{ getSkus(row).join(', ') }}
          </template>
          <template v-slot:actions="{ row }">
            <template v-if="row.id != blog.id">
              <gc-button v-if="!selected.includes(row.id)" theme="green" @click="attach(row)">
                Attach
              </gc-button>
              <gc-button v-else theme="danger" @click="detach(row)">
                Detach
              </gc-button>
            </template>
          </template>
        </search-table>
      </quick-view-panel>
    </div>
    <div v-if="!associations.length" class="py-24 mx-auto text-center">
      <h1 class="mt-6 mb-4 text-xl">
        No blog associations exist
      </h1>
      <p class="mb-4 text-sm text-gray-600">
        Associating blogs together will help show your customers which blogs belong to each other
      </p>

      <gc-button @click="showBrowser = true">
        {{ $t('Create association') }}
      </gc-button>
    </div>
    <div class="search-table">
      <div class="b-table">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th />
              <th>{{ $t('Name') }}</th>
              <th>{{ $t('SKU') }}</th>
              <th>{{ $t('Type') }}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(association, rowIndex) in associations" :key="rowIndex">
              <td><thumbnail-loader width="50px" :asset="association.thumbnail" /></td>
              <td>{{ attribute(association.attribute_data, 'name') }}</td>
              <td>{{ association.skus.join(', ') }}</td>
              <td>
                <gc-select v-model="association.type" placeholder="Select a type" @change="updateAssociationType">
                  <option
                    v-for="option in groups"
                    :key="option.id"
                    :value="option.id"
                    :selected="option.id === association.type"
                  >
                    {{ option.name }}
                  </option>
                </gc-select>
              </td>
              <td>
                <gc-button theme="danger" @click="detach(association.id)">
                  {{ $t('Remove') }}
                </gc-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { NormalizesObjects, HasAttributes } from '@poesial/hub-core/src/mixins/Index.js'
const each = require('lodash/each')
const map = require('lodash/map')
const get = require('lodash/get')
const findIndex = require('lodash/findIndex')
const first = require('lodash/first')

export default {
  mixins: [
    HasAttributes,
    NormalizesObjects
  ],
  props: {
    blog: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      showBrowser: false,
      associations: [],
      selected: [],
      groups: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      each(this.associations, (item) => {
        this.selected.push(item.id)
      })
    })

    this.associations = map(get(this.blog, 'associations.data', []), (item) => {
      return {
        id: item.association.data.id,
        skus: this.getSkus(item.association.data),
        thumbnail: item.association.data.assets.data[0],
        attribute_data: item.association.data.attribute_data,
        type: item.group.data.id
      }
    })

    // We need to get the association groups, this is quite specific
    // to what we're trying to do here so we can just fetch them?
    // TODO: Is this still correct?
    this.$gc.associations.groups().then((response) => {
      this.groups = response.data.data
    })
  },
  methods: {
    /**
       * Detach a blog from the associations
       */
    detach (blogId) {
      this.selected.splice(this.selected.indexOf(blogId), 1)
      const toRemove = findIndex(this.associations, (item) => {
        return item.id === blogId
      })
      this.associations.splice(toRemove, 1)

      this.$emit('changed', () => {
        this.save()
      })
    },
    getSkus(blog) {
      const variants = get(blog, 'variants.data', [])
      return map(variants, v => {
        return v.sku
      })
    },
    updateAssociationType () {
      this.$emit('changed', () => {
        this.save()
      })
    },
    attach (blog) {
      /**
         * Add the new association into the array for the blog
         */
      const group = this.normalize(first(this.groups))
      this.associations.push({
        id: blog.id,
        thumbnail: blog.assets.data[0],
        attribute_data: blog.attribute_data,
        type: group.id
      })
      this.selected.push(blog.id)

      this.$emit('changed', () => {
        this.save()
      })
    },
    async save () {
      // Map it out so our API can understand it.
      const relations = map(this.associations, (item) => {
        return {
          association_id: item.id,
          type: item.type
        }
      })

      await this.$gc.blogs.updateBlogAssociations(this.blog.id, relations)
      this.$notify.queue('success', this.$t('Associations updated'))
    }
  }
}
</script>
