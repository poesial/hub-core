'use strict';

// const CandyResource = require('../CandyResource');
import CandyResource from '../CandyResource'

export default class CustomerGroups extends CandyResource {
  get(params) {
    return this.$get('customers/groups', params);
  }
}
