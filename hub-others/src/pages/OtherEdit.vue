<template>
  <div v-if="other">
    <div class="flex p-6 bg-white">
      <div class="w-full mr-6">
        <form-field label="Content">
          <gc-rich-text v-model="other.content" />
        </form-field>
      </div>
    </div>
  </div>
</template>

<script>
import HandlesForms from '@poesial/hub-core/src/mixins/HandlesForms.js'

const get = require('lodash/get')
const map = require('lodash/map')
const each = require('lodash/each')

export default {
  layout: 'other',
  mixins: [
    HandlesForms
  ],
  data () {
    return {
      other: null,
      fields: []
    }
  },
  async fetch () {
    const response = await this.$getcandy.on('contents', 'getContentById', this.$route.params.id)
    this.other = get(response, 'data.data')
  },
  methods: {
    syncOther () {
      this.$store.commit('other/setModel', JSON.parse(JSON.stringify(this.other)))
    }
  },
  watch: {
    other: {
      deep: true,
      handler () {
        this.syncOther()
      }
    },
  }
}
</script>
