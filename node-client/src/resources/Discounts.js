'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class Discounts extends CandyResource {
  get(params) {
    return this.$get('discounts', params);
  }
  find(id, params) {
    return this.$get(`discounts/${id}`, params);
  }
}
