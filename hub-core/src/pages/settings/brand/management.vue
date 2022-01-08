<template>
  <div>
    <toolbar :heading="$t('Brand Management')" :subHeading="brand.name">
      <div class="flex">
        <div>
          <gc-button @click="save">
            {{ $t('Save changes') }}
          </gc-button>
        </div>
      </div>
    </toolbar>
    <div class="pb-4 pt-4 bg-white shadow">
      <div class="px-6">
        <div class="mb-4">
          <header class="mb-2 text-sm">
            <label class="block font-bold text-gray-700">{{ $t('Name of Brand') }}</label>
          </header>
          <div>
            <gc-input v-model="brand.name" />
          </div>
        </div>

        <div class="mb-4">
          <header class="mb-2 text-sm">
            <label class="block font-bold text-gray-700">{{ $t('Brand Description') }}</label>
          </header>
          <div>
            <gc-textarea v-model="brand.description"  class="form-input"/>
          </div>
        </div>

        <div class="mb-4">
          <header class="mb-2 text-sm">
            <label class="block font-bold text-gray-700">{{ $t('Brand Logo') }}</label>
          </header>
          <div>
            <input type="file"
                   class="form-control"
                   @change="changeFile"
            />

            <img :src="brand.logo" v-if="brand.logo" style="width: 200px; object-fit: contain" class="mt-3 d-block">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'settings',
  head () {
    return {
      title: this.brand.name
    }
  },
  data () {
    return {
      lookups: [],
      showDeleteConfirm: false,
      brand: {}
    }
  },
  async asyncData ({ app, params }) {
    const response = await app.$gc.brandManagement.get()

    return {
      brand: response.data.data,
    }
  },
  methods: {
    async save () {
      try {
        let formData = new FormData();
        if (this.brand.logo) {
          formData.append('logo', this.brand.logo);
        }
        formData.append('name', this.brand.name);
        formData.append('_method', 'PUT');
        formData.append('description', this.brand.description);
        await this.$gc.brandManagement.update(formData)
        this.$notify.queue('success', this.$t('Brand saved'))
      } catch (e) {
        this.$notify.queue('error', this.$t('Unable to save Brand'))
      }
    },
    changeFile(e) {
      this.brand.logo = e.target.files[0];
    }
  },
  computed: {
    locale() {
      return this.$store.state.core.locale
    }
  }
}
</script>

<style scoped>

</style>
