'use strict';

import CandyResource from '../CandyResource'

export default class RecycleBin extends CandyResource {
    get(params) {
        return this.$get(`/recycle-bin`, params);
    }
    find(id, params) {
        return this.$get(`/recycle-bin/${id}`, params);
    }
    delete(id, params) {
        return this.$delete(`/recycle-bin/${id}`, params);
    }
    restore(id, params) {
        return this.$post(`/recycle-bin/${id}/restore`, params);
    }
}
