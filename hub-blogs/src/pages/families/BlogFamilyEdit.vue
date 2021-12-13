<template>
  <div v-if="family">
    <div class="px-6 py-4 bg-white">
      <form-field :label="$t('Name')" required>
        <gc-input v-model="family.name" @input="updateName" />
      </form-field>
    </div>
    <div class="bg-white">
      <div class="flex mb-2">
        <div class="w-1/2 pl-12 text-sm font-bold text-gray-500 uppercase">
          Selected
        </div>
        <div class="w-1/2 pl-12 text-sm font-bold text-gray-500 uppercase">
          Available
        </div>
      </div>
      <blog-family-attribute-manager
        v-model="blogAttributes"
        :attributes="attributes"
        :initial-available="availableAttributes"
        :groups="attributeGroups"
        @changed="updateAttributes"
      />
    </div>
  </div>
</template>

<script>
import NormalizesObjects from '@poesial/hub-core/src/mixins/NormalizesObjects.js'
import BlogFamilyAttributeManager from '../../components/BlogFamilyAttributeManager.vue'

const filter = require('lodash/filter')
const map = require('lodash/map')
const flattenDeep = require('lodash/flattenDeep')

export default {
  layout: 'blog-family',
  head () {
    return {
      title: this.family ? this.family.name : null
    }
  },
  components: {
    BlogFamilyAttributeManager
  },
  mixins: [
    NormalizesObjects
  ],
  async asyncData ({ app }) {
    const groupResponse = await app.$gc.attributeGroups.get({
      all_records: true,
      include: 'attributes'
    })

    const groups = groupResponse.data.data

    const attributes = map(groups, group => group.attributes.data)

    return {
      attributes: flattenDeep(attributes),
      attributeGroups: groups
    }
  },
  data () {
    return {
      blogAttributes: [],
      family: null
    }
  },
  computed: {
    familyModel () {
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
    this.translateChannel = this.channel
    this.translateLanguage = this.locale
    this.family = this.normalize(this.familyModel)
    this.blogAttributes = this.normalize(this.family.attributes.data)
  },
  methods: {
    updateName () {
      this.$store.commit('blogFamily/setOnModel', {
        field: 'name',
        value: this.family.name
      })
    },
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
