
'use strict';

import CandyResource from '../CandyResource'

export default class ProductVariants extends CandyResource {
  updateInventory (id, params) {
    return this.$put(`products/variants/${id}/inventory`, params)
  }
  create (productId, data, params) {
    return this.$post(`products/${productId}/variants`, data, params)
  }
  put (id, params) {
    return this.$put(`products/variants/${id}`, params)
  }
}
