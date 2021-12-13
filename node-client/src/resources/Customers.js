'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class Customers extends CandyResource {
  get (params) {
    return this.$get('customers', params);
  }
  find (id, params) {
    return this.$get(`customers/${id}`, params);
  }
}
