<template>
  <div>
    <div class="px-24 py-4 text-xs font-bold text-gray-600 uppercase bg-gray-200">
      Name
    </div>
    <div
      v-sortable="{
        handle: '.sorter',
        group: 'root',
        onEnd: reorder,
        animation: 150,
      }"
      class="m-4"
    >
      <category-list-item v-for="category in categories" :key="category.id" :sortable="categories.length > 1" :category="category" @expanded="handleExpanded" />
    </div>
  </div>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes'
import CategoryListItem from './CategoryListItem.vue'

export default {
  components: {
    CategoryListItem
  },
  mixins: [
    HasAttributes
  ],
  data () {
    return {
      categories: [],
      trail: []
    }
  },
  mounted () {
    this.$getcandy.on('categories', 'getCategories', {
      query: {
        tree: true
      }
    }).then((response) => {
      this.categories = response.data.data
    })
  },
  methods: {
    handleExpanded () {
    },
    handleClosed () {

    },
    reorder ({ newIndex, oldIndex }) {
      // Get the current one
      const moved = this.categories[oldIndex]
      const node = this.categories[newIndex]

      this.categories.splice(oldIndex, 1)
      this.categories.splice(newIndex, 0, moved)

      let type = 'before'
      if (newIndex > oldIndex) {
        type = 'after'
      }

      this.$gc.categories.reorder(node.id, moved.id, type).then(() => {
        this.$buefy.toast.open({
          message: 'Categories Reordered',
          type: 'is-success'
        })
      }).catch(() => {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Unable to reorder categories',
          position: 'is-bottom',
          type: 'is-danger'
        })
      })
    }
  }
}
</script>

<style scoped>
.search-table {
  max-height: 200px;
  overflow-y: auto;
}
</style>
