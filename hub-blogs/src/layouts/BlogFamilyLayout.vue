<template>
  <default-layout>
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <i class="text-3xl ri-loader-5-line spin-fast" />
    </div>
    <div v-else>
      <toolbar :heading="family.name">
        <gc-button @click="save">
          {{ $t('Save changes') }}
        </gc-button>
      </toolbar>
      <nuxt v-if="!loading" />
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@poesial/hub-core/src/layouts/Default.vue'
import NormalizesObjects from '@poesial/hub-core/src/mixins/NormalizesObjects.js'
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
const map = require('lodash/map')

export default {
  components: {
    DefaultLayout
  },
  mixins: [
    NormalizesObjects,
    HasAttributes
  ],
  data () {
    return {
      loading: true
    }
  },
  computed: {
    family () {
      return this.$store.state.blogFamily.model
    }
  },
  async mounted () {
    if (this.family && (this.family.id !== this.$route.params.id)) {
      this.$store.commit('blogFamily/setModel', null)
    }
    // If we don't have a family already loaded in the state, get it.
    if (!this.family) {
      this.loading = true
      const response = await this.$gc.blogFamilies.find(this.$route.params.id, {
        include: 'attributes.group.attributes',
        full_response: true
      })
      this.$store.commit('blogFamily/setModel', response.data.data)
    }

    this.loading = false
  },
  methods: {
    async save () {
      try {
        await this.$gc.blogFamilies.update(this.family.id, {
          name: this.family.name,
          attribute_ids: map(this.family.attributes.data, att => att.id)
        })
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to save blog family'))
        return
      }
      this.$notify.queue('success', this.$t('Blog family updated'))
      // this.$store.commit('blogFamily/setModel', this.family)
    }
  }
}
</script>
