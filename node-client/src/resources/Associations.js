'use strict';

import CandyResource from '../CandyResource'

export default class Associations extends CandyResource{
  groups(params) {
    return this.$get('associations/groups', params);
  }
}
