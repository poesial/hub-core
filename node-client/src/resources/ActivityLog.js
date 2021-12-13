'use strict';

import CandyResource from '../CandyResource'

export default class ActivityLog extends CandyResource{
  get(params) {
    return this.$get('activity-log', params);
  }
  post(data, params) {
    return this.$post('activity-log', data, params);
  }
}
