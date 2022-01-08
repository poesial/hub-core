<template>
  <form class="p-6" action="" @submit.prevent="submit">
    <div class="mb-4">
      <gc-form-field :label="$t('Name')" required :error="getFirstFormError('name')">
        <gc-input
          v-model="icon.name"
          :placeholder="$t('Good for')"
          required
        />
      </gc-form-field>
    </div>
    <div class="mb-4">
      <gc-form-field :label="$t('Icon')" required :error="getFirstFormError('icon')">
        <input type="file"
               class="form-control"
               @change="changeFile"
        />
      </gc-form-field>
    </div>
    <footer>
      <gc-button type="submit">
        {{ $t('Create icon') }}
      </gc-button>
    </footer>
  </form>
</template>

<script>
import HandlesForms from '@poesial/hub-core/src/mixins/HandlesForms'

export default {
  mixins: [
    HandlesForms
  ],
  data () {
    return {
      icon: {},
    }
  },
  computed: {
    locale () {
      return this.$store.state.core.locale
    }
  },
  methods: {
    changeFile(e) {
      this.icon.icon = e.target.files[0];
    },
    submit () {
      let formData = new FormData();
      formData.append('name', this.icon.name);
      formData.append('icon', this.icon.icon);

      this.$gc.goodFor.post(formData).then(() => {
        this.$buefy.toast.open({
          message: this.$t('Icon Created'),
          position: 'is-bottom',
          type: 'is-success'
        })
        this.$emit('close');
      }).catch((error) => {
        const response = error.response
        if (response.status !== 422) {
          this.$buefy.toast.open({
            duration: 5000,
            message: this.$t('Unable to create icon'),
            position: 'is-bottom',
            type: 'is-danger'
          })
        } else {
          this.setFormErrors(response.data)
        }
      })
    }
  }
}
</script>
