
'use strict';

import CandyResource from '../CandyResource'

export default class ProductFamilies extends CandyResource {
    get (params) {
        return this.$get('product-families', params)
    }
    find (id, params) {
        return this.$get(`product-families/${id}`, params)
    }
    update (id, data, params) {
        return this.$put(`product-families/${id}`, data, params)
    }
}
