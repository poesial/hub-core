'use strict';

import CandyResource from '../CandyResource'

export default class Addresses extends CandyResource {
  create (params) {
    return this.$post('addresses', params);
  }
  update (id, params) {
    return this.$put(`addresses/${id}`, params);
  }
}
