<template>
  <div>
    <div class="search-table">
      <div class="b-table">
        <table class="table">
          <thead>
            <tr>
              <th>Blog name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in value" :key="blog.id">
              <td>
                <nuxt-link
                  :to="{
                    name: 'blogs.view',
                    params: {
                      id: blog.id
                    }
                  }"
                >
                  {{ attribute(blog.attribute_data, 'name') }}
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes.js'

export default {
  mixins: [
    HasAttributes
  ],
  props: {
    value: {
      type: Array,
      required: true
    }
  }
}
</script>
