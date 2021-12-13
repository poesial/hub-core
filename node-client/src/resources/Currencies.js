'use strict';

import CandyResource from '../CandyResource'

export default class Currencies extends CandyResource {
  get(params) {
    return this.$get('currencies', params)
  }
}
