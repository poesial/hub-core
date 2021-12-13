
<template>
  <div>
    <form v-if="blog" @submit.prevent="save">
      <form-field :label="$t('Blog name')" for="name" :error="getFirstFormError('name')" required>
        <gc-input id="name" v-model="blog.name[locale]" />
      </form-field>
      <form-field :label="$t('SKU')" :error="getFirstFormError('sku')" for="sku" required>
        <gc-sku-input id="sku" v-model="blog.sku" />
      </form-field>
      <div class="mb-4">
        <header class="mb-2 text-sm">
          <label class="block font-bold text-gray-700">{{ $t('Blog Family') }}</label>
        </header>
        <div>
          <auto-complete
            v-model="selectedFamily"
            :data="families"
            @select="setBlogFamily"
            @search="searchFamilies"
          />
        </div>
      </div>
      <form-field :label="$t('Price')" :error="getFirstFormError('price')" for="price" required>
        <gc-price-input id="price" v-model="blog.price" :is-cents="false" />
      </form-field>
      <form-field :label="$t('Stock')" for="stock">
        <gc-input id="stock" v-model="blog.stock" type="number" steps="1" />
      </form-field>
      <form-field :label="$t('Slug')" :error="getFirstFormError('url')" for="slug" required>
        <gc-slug-input id="slug" v-model="blog.url" :initial="blog.name[locale]" />
      </form-field>

      <gc-button :disabled="processing" :loading="processing" type="submit">
        {{ $t('Create blog') }}
      </gc-button>
    </form>
  </div>
</template>

<script>
import HandlesForms from '@poesial/hub-core/src/mixins/HandlesForms.js'
import HasAttributes from '@poesial/hub-core/src/mixins/HasAttributes.js'

export default {
  mixins: [
    HasAttributes,
    HandlesForms
  ],
  data () {
    return {
      request: null,
      selectedFamily: null,
      createBlog: false,
      blog: null,
      families: [],
      isFetching: false,
      processing: false,
      page: 1
    }
  },
  computed: {
    blogName () {
      return this.blog.name[this.locale]
    },
    slug () {
      return this.$format.slug(this.blog.url)
    },
    blogUrl: {
      get () {
        return this.blog.url.slugify()
      }
    }
  },
  mounted () {
    this.blog = this.baseBlog()
  },
  methods: {
    async save () {
      this.clearFormErrors()
      this.processing = true
      try {
        const data = JSON.parse(
          JSON.stringify(this.blog)
        )

        if (!this.blogName) {
          delete data.name
        }
        const response = await this.$gc.blogs.create(data)

        this.$router.push({
          name: 'blogs.view',
          params: {
            id: response.data.data.id
          }
        })
      } catch (e) {
        this.setFormErrors(e.response.data)
      }

      this.processing = false
    },
    setBlogFamily (option) {
      this.blog.family_id = option ? option.id : null
    },
    async searchFamilies () {
      const response = await this.$gc.blogs.families.get({
        page: this.page,
        keywords: this.selectedFamily
      })
      this.families = response.data.data
    },
    baseBlog () {
      return {
        name: {
          [this.locale]: ''
        },
        family_id: null,
        sku: '',
        price: '',
        url: '',
        stock: 1
      }
    }
  }
}
</script>
