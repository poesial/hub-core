'use strict';

import CandyResource from '../CandyResource'

export default class Users extends CandyResource {
  current (params) {
    return this.$get('users/current', params)
  }
  create (params) {
    return this.$post('users', params)
  }
  fields (params) {
    return this.$get('users/fields', params)
  }
  update (id, params) {
    return this.$put(`users/${id}`, params)
  }
}
