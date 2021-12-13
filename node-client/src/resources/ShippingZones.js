'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class ShippingZones extends CandyResource {
    get(params) {
        return this.$get(`shipping/zones`, params)
    }
    find(id, params) {
        return this.$get(`shipping/zones/${id}`, params)
    }
    update(id, data,params) {
        return this.$put(`shipping/zones/${id}`, data, params)
    }
}
