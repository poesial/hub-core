'use strict';

import CandyResource from '../CandyResource'

export default class Versions extends CandyResource {
  restore (id, data, params) {
    return this.$post(`versions/${id}/restore`, data, params)
  }
}
