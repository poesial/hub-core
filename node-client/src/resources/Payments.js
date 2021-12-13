'use strict';

import CandyResource from '../CandyResource'

export default class Layouts extends CandyResource {
    refund(transactionId, amount, notes) {
        return this.$post(`payments/${transactionId}/refund`, {
            amount: amount,
            notes: notes,
        })
    }
}
