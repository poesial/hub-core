<template>
  <div>
    <blog-family-blogs-manager v-model="family.blogs.data" />
  </div>
</template>

<script>
import BlogFamilyBlogsManager from '../../components/BlogFamilyBlogsManager.vue'

export default {
  layout: 'blog-family',
  components: {
    BlogFamilyBlogsManager
  },
  computed: {
    family () {
      return this.$store.state.blogFamily.model
    }
  }
}
</script>
