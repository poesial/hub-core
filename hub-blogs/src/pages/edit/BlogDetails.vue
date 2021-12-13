<template>
  <div v-if="blog">
    <attribute-translate
      :attribute-groups="attributeGroups"
      :attribute-data="blog.attribute_data"
      :errors="errors || {}"
      @changed="attributesChanged"
    />
  </div>
</template>

<script>
import { NormalizesObjects, HasDrafts, HubPage } from '@poesial/hub-core/src/mixins/Index.js'

const find = require('lodash/find')
const orderBy = require('lodash/orderBy')
const each = require('lodash/each')
const debounce = require('lodash/debounce')

export default {
  layout: 'blog',
  mixins: [
    HubPage,
    NormalizesObjects,
    HasDrafts
  ],
  data () {
    return {
      translateChannel: null,
      translateLanguage: null,
      attributeGroups: [],
      blog: null,
      translating: false
    }
  },
  computed: {
    model () {
      return this.$store.state.blog.model
    },
    attributes () {
      return this.$store.state.blog.attributes
    },
    familyId () {
      return this.model.family.data.id
    },
    errors () {
      return this.$store.state.blog.errors
    },
    hasErrors () {
      return !!Object.keys(this.errors).length
    }
  },
  mounted () {
    this.translateChannel = this.channel
    this.translateLanguage = this.locale
    this.loadBlog()
  },
  methods: {
    loadBlog () {
      this.blog = this.normalize(this.model)
      this.decorate(this.blog)
    },
    /**
     * Create a new draft and save values against the result
     */
    attributesChanged: debounce(async function (val) {
      await this.createDraft('blog', this.blog.id)
      this.save(val)
    }, 300),
    /**
       * Decorates the data ready for the template to use
       * @param  {Object} data
       * @return
       */
    decorate (data) {
      // Get all groups associated to this blog.
      let groups = []
      each(data.attributes.data, (attribute) => {
        const exists = find(groups, (group) => {
          return group.handle === attribute.group.data.handle
        })
        if (attribute.group && !exists) {
          groups.push(attribute.group.data)
        }
      })

      if (data.family.data) {
        each(data.family.data.attributes.data, (attribute) => {
          // // Find the attribute
          const existing = find(groups, (group) => {
            return group.handle === attribute.group.data.handle
          })
          if (!data.attribute_data[attribute.handle]) {
            this.$set(data.attribute_data, attribute.handle, {
              [this.channel]: {
                en: ''
              }
            })
          }

          if (!existing) {
            const group = attribute.group.data
            if (group) {
              this.$set(group, 'attributes', {
                data: []
              })
              group.attributes.data.push(attribute)
              groups.push(group)
            }
          } else {
            const attributes = existing.attributes.data
            // If the attribute doesn't exist, then we add it.
            const existingAttribute = find(attributes, (att) => {
              return att.handle === attribute.handle
            })
            if (!existingAttribute) {
              existing.attributes.data.push(attribute)
            }
          }
        })
      }

      groups = orderBy(groups, 'position', 'asc')

      this.attributeGroups = groups
    },
    save (val) {
      this.$store.dispatch('blog/save', {
        context: this.$getcandy,
        data: {
          attribute_data: val
        }
      })

      // this.$store.dispatch('blog/setAttribute', {
      //   field: 'attribute_data',
      //   value: val
      // })

      if (!this.hasErrors) {
        this.$notify.queue('success', 'Blog saved')
      }
    }
  }
}
</script>
