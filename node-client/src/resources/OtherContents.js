
'use strict';

import CandyResource from '../CandyResource'

export default class OtherContents extends CandyResource {
  get (params) {
    return this.$get('other-contents', params)
  }
  find (id, params) {
    return this.$get(`other-contents/${id}`, params)
  }
  update (id, data, params) {
    return this.$put(`other-contents/${id}`, data, params)
  }
}
