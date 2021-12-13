'use strict';

import CandyResource from '../CandyResource'

export default class Channels extends CandyResource {
  get(params) {
    return this.$get('channels', params)
  }
}
