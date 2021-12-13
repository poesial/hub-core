'use strict';

import CandyResource from '../CandyResource'

export default class Collections extends CandyResource {
  get(params) {
    return this.$get('collections', params)
  }
  find(id, params) {
    return this.$get(`collections/${id}`, params);
  }
  createDraft (id, data, params) {
    return this.$post(`collections/${id}/drafts`, data, params)
  }
  destroy (id) {
    return this.$delete(`collections/${id}`);
  }
  publish (id, data, params) {
    return this.$post(`collections/${id}/publish`, data, params)
  }
  update(id, params) {
    return this.$put(`collections/${id}`, params)
  }
}
