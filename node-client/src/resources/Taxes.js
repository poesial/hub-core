'use strict';

import CandyResource from '../CandyResource'

// const CandyResource = require('../CandyResource');

export default class Taxes extends CandyResource {
  get(params) {
    return this.$get('taxes', params);
  }
}
