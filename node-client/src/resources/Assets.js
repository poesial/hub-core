'use strict';

import CandyResource from '../CandyResource'

export default class Assets extends CandyResource{
  put(data, params) {
    return this.$put('assets', data, params);
  }
  upload(data, params) {
    return this.$post('assets', data, params);
  }
  uploadSimple (data, params) {
    return this.$post('assets/simple', data, params);
  }
  delete(id) {
    return this.$delete(`assets/${id}`);
  }
  detach(id, ownerId, type) {
    return this.$post(`assets/${id}/detach/${ownerId}`, {
        type: type
    });
  }
}
