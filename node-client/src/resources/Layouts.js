'use strict';

import CandyResource from '../CandyResource'

export default class Layouts extends CandyResource {
    get(params) {
        return this.$get('layouts', params)
    }
    find (id, params) {
        return this.$get(`layouts/${id}`, params)
    }
}
