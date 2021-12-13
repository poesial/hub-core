'use strict';

import CandyResource from '../CandyResource'

export default class Attributes extends CandyResource {
  get(params) {
    return this.$get('attributes', params);
  }
  find(id, params) {
    return this.$get(`attributes/${id}`, params);
  }
  delete (id) {
    return this.$delete(`attributes/${id}`);
  }
  post(data, params) {
      return this.$post('attributes', data, params)
  }
  update(id, data, params) {
    return this.$put(`attributes/${id}`, data, params)
  }
  reorder (groups, params) {
    return this.$put(`attributes/order`, {
        attributes: groups
    }, params);
  }
}
