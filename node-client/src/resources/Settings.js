'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class Settings extends CandyResource {
    get(params) {
        return this.$get(`settings`, params)
    }
    find(path, params) {
        return this.$get(`settings/${path}`, params)
    }
    fetch(path, params) {
        return this.find(path, params)
    }
}
