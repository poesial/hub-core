
'use strict';

import CandyResource from '../CandyResource'

export default class BlogFamilies extends CandyResource {
    get (params) {
        return this.$get('blog-families', params)
    }
    find (id, params) {
        return this.$get(`blog-families/${id}`, params)
    }
    update (id, data, params) {
        return this.$put(`blog-families/${id}`, data, params)
    }
}
