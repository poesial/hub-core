'use strict';

import CandyResource from '../CandyResource'

export default class Languages extends CandyResource {
    get(params) {
        return this.$get('languages', params)
    }
    find (id, params) {
        return this.$get(`languages/${id}`, params)
    }
}
