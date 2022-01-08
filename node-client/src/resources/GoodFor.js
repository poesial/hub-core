
'use strict';

import CandyResource from '../CandyResource'

export default class BrandManagement extends CandyResource {
  get (params) {
    return this.$get('good-for')
  }
  post (params) {
    return this.$post('good-for', params)
  }
  delete (id) {
    return this.$delete(`good-for/${id}`)
  }
  attach(id, productId) {
    return this.$post(`good-for/${id}/product/${productId}`)
  }
}
