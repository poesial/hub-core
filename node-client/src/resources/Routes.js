'use strict';

import CandyResource from '../CandyResource'

export default class Routes extends CandyResource {
    put(id, data, params) {
        return this.$put(`/routes/${id}`, data, params);
    }
    delete(id, params) {
        return this.$delete(`/routes/${id}`, params);
    }
}
