<template>
  <form class="p-4" @submit.prevent="createBlogFamily">
    <gc-form-field label="Name" class="mb-4" required :error="getFirstFormError('name')">
      <gc-input v-model="name" />
    </gc-form-field>
    <gc-button type="submit" :loading="processing">
      Create blog family
    </gc-button>
  </form>
</template>

<script>
import HandlesForms from '@poesial/hub-core/src/mixins/HandlesForms.js'
const get = require('lodash/get')

export default {
  mixins: [
    HandlesForms
  ],
  data () {
    return {
      name: null,
      processing: false
    }
  },
  methods: {
    async createBlogFamily () {
      this.processing = true
      // this.setFormErrors([])
      try {
        const { data } = await this.$getcandy.on('blog-families', 'postBlogFamilies', {
          data: {
            name: this.name
          }
        })
        this.$router.push({
          name: 'blog-families.edit',
          params: {
            id: data.data.id
          }
        })
      } catch (e) {
        console.log(e);
        this.setFormErrors(
          get(e, 'response.data.errors', [])
        )
      }
      this.processing = false
    }
  }
}
</script>
