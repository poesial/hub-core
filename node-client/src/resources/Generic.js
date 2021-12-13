'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class Generic extends CandyResource {
  get(path, params) {
    return this.$get(path, params);
  }
  post(path, data, params) {
    return this.$post(path, data, params);
  }
  put(path, data, params) {
    return this.$put(path, data, params);
  }
  delete(path, data, params) {
    return this.$delete(path, data, params);
  }
}
