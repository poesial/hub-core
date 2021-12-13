'use strict';

import CandyResource from '../CandyResource'

export default class Categories extends CandyResource {
  tree(params) {
    return this.$get('categories', {
      tree: true,
      ...params
    });
  }
  find(id, params) {
    return this.$get(`categories/${id}`, params);
  }
  post(data, params) {
    return this.$post(`categories`, data, params);
  }
  children(parentId, params) {
    return this.$get(`categories/${parentId}/children`, params);
  }
  update(id, params) {
    return this.$put(`categories/${id}`, params)
  }
  createDraft (id, data, params) {
    return this.$post(`categories/${id}/drafts`, data, params)
  }
  destroy (id) {
    return this.$delete(`categories/${id}`);
  }
  updateChannels (id, data, params) {
    return this.$post(`categories/${id}/channels`, data, params)
  }
  updateCustomerGroups (id, data, params) {
    return this.$post(`categories/${id}/customer-groups`, data, params)
  }
  publish (id, data, params) {
    return this.$post(`categories/${id}/publish`, data, params)
  }
  addRoute(id, data, params) {
    return this.$post(`/categories/${id}/routes`, data, params)
  }
  reorder(parentId, movedId, direction) {
    return this.$post('categories/reorder', {}, {
        node: parentId,
        'moved-node': movedId,
        action: direction
    });
  }
}
