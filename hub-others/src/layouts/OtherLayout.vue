<template>
  <div>
    <default-layout>
      <toolbar heading="Other Content" :subHeading="blocks[$route.params.id]">
        <gc-button @click="save">Save content</gc-button>
      </toolbar>
      <nuxt />
    </default-layout>
  </div>
</template>

<script>
const map = require('lodash/map')
const each = require('lodash/each')
const get = require('lodash/get')
import Gravatar from 'vue-gravatar'
import DefaultLayout from '@poesial/hub-core/src/layouts/Default.vue'

export default {
  components: {
    Gravatar,
    DefaultLayout
  },
  data () {
    return {
      blocks: {
         "privacy-policy": "Privacy Policy",
         "about-us": "About Us",
         "terms-of-use": "Terms of use",
      },
    }
  },
  methods: {
    async save () {
      // // Save other
      await this.$getcandy.on('contents', 'putContentsContentId',
        this.other.slug,
        {
          slug: this.other.slug,
          content: this.other.content,
        }
      )

      this.$notify.queue('success', 'Content updated')
    }
  },
  computed: {
    other() {
      return this.$store.state.other.model
    },
  }
}
</script>
