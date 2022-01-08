
'use strict';

import CandyResource from '../CandyResource'

export default class BrandManagement extends CandyResource {
  get (params) {
    return this.$get('brand-management', params)
  }
  update (data, params) {
    return this.$post(`brand-management`, data, params)
  }
}
