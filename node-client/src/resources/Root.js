'use strict';

// const CandyResource = require('../CandyResource');

// module.exports = CandyResource.extend({
//     get() {
//         return this.$get('/');
//     }
// })

import CandyResource from '../CandyResource'
export default class Root extends CandyResource {
  get(params) {
    return this.$get('/', params);
  }
}
