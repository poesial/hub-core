<template>
  <div>
    <blog-family-attribute-manager v-model="blogAttributes" :initial-available="availableAttributes" @input="updateAttributes" />
  </div>
</template>

<script>
import NormalizesObjects from '@poesial/hub-core/src/mixins/NormalizesObjects.js'
import BlogFamilyAttributeManager from '../../components/BlogFamilyAttributeManager.vue'

const filter = require('lodash/filter')
const map = require('lodash/map')

export default {
  layout: 'blog-family',
  components: {
    BlogFamilyAttributeManager
  },
  mixins: [
    NormalizesObjects
  ],
  async asyncData ({ app }) {
    const attributeResponse = await app.$gc.attributes.get({
      per_page: 500
    })
    return {
      attributes: attributeResponse.data.data
    }
  },
  data () {
    return {
      blogAttributes: []
    }
  },
  computed: {
    family () {
      return this.$store.state.blogFamily.model
    },
    availableAttributes () {
      let attributes = this.attributes
      const existing = map(this.family.attributes.data, att => att.id)
      attributes = filter(attributes, (att) => {
        return !existing.includes(att.id)
      })
      return attributes
    }
  },
  mounted () {
    this.blogAttributes = this.normalize(this.family.attributes.data)
  },
  methods: {
    updateAttributes () {
      this.$store.commit('blogFamily/setOnModel', {
        field: 'attributes',
        value: {
          data: this.normalize(this.blogAttributes)
        }
      })
    }
  }
}
</script>
