'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class ShippingMethods extends CandyResource {
    get(params) {
        return this.$get(`shipping`, params)
    }
    find(id, params) {
        return this.$get(`shipping/${id}`, params)
    }
    update(id, params) {
        return this.$put(`shipping/${id}`, params)
    }
}
