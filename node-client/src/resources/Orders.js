'use strict';

import CandyResource from '../CandyResource'

export default class Orders extends CandyResource {
    get(params) {
        return this.$get('orders', params)
    }
    find(orderId, params) {
        return this.$get(`orders/${orderId}`, params)
    }
    types(params) {
        return this.$get('orders/types', params)
    }
    emailPreview(status, params) {
        return this.$post(`orders/email-preview/${status}`, params)
    }
    updateStatus (id, status, send_emails = false, extraText = null) {
        return this.$put(`orders/${id}`, {
            status,
            send_emails,
            data: {
                content: extraText
            }
        })
    }
}
