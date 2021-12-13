'use strict';

import CandyResource from '../CandyResource'

export default class Reports extends CandyResource {
    metrics(type, params) {
        return this.$get(`/reports/metrics/${type}`, params);
    }
    get(type, params) {
        return this.$get(`/reports/${type}`, params);
    }
}
