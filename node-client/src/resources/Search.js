'use strict';

import CandyResource from '../CandyResource'

export default class Search extends CandyResource {
    get(params) {
        return this.$get('search', params);
    }
    saved(type, params) {
        return this.$get(`saved-searches/${type}`, params);
    }
    find(id, params) {
        return this.$get(`products/${id}`, params);
    }
}
