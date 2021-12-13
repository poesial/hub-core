'use strict';

import CandyResource from '../CandyResource'

export default class AttributeGroups extends CandyResource {
  get(params) {
    return this.$get('attribute-groups', params);
  }
  delete (id) {
    return this.$delete(`attribute-groups/${id}`);
  }
  find(id, params) {
    return this.$get(`attribute-groups/${id}`, params);
  }
  post(data, params) {
    return this.$post(`attribute-groups`, data, params);
  }
  put(id, data, params) {
    return this.$put(`attribute-groups/${id}`, data, params);
  }
  reorder (groups, params) {
    return this.$put(`attribute-groups/order`, {
        groups: groups
    }, params);
  }
}
