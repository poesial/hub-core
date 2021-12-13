'use strict';

export default class CandyResource {
  constructor(candy) {
    this._candy = candy;
    this.path = '';
    if (candy.$http) {
      this.$http = candy.$http;
    } else {
      this.$http = require('axios').create({
        baseURL: candy.url,
        headers: {
          Authorization: candy.token
        }
      })
    }
  }
  initialize() {}

  $get(path, params) {
    return this.$http.get(path, {
      params: params
    });
  }
  $post(path, data, params, headers) {
    return this.$http.post(path, data, {
      params,
      headers
    })
  }
  $put(path, data, params) {
    return this.$http.put(path, data, {
      params
    })
  }

//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
// }
  $delete(path, data) {
    return this.$http.delete(path, data)
  }
}

// const utils = require('./utils');

// CandyResource.extend = utils.protoExtend;

// /**
//  * Encapsulates request logic for a Stripe Resource
//  */
// function CandyResource(candy) {
//     this._candy = candy;

//     if (candy.$http) {
//         this.$http = candy.$http;
//     } else {
//         this.$http = require('axios').create({
//             baseURL: candy.url,
//             headers: {
//                 Authorization: candy.token
//             }
//         })
//     }
// }

// CandyResource.prototype = {
//     path: '',
//     initialize() {},

//     $get(path, params) {
//         return this.$http.get(path, {
//             params: params
//         });
//     },
//     $post(path, data, params) {
//         return this.$http.post(path, data, {
//             params,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         });
//     },
//     $put(path, data, params) {
//         return this.$http.put(path, data, {
//             params
//         });
//     },
//     $delete(path, data) {
//         return this.$http.delete(path, data);
//     }
// }

// module.exports = CandyResource;
