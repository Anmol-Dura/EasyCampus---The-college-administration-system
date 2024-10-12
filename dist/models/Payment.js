"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentId, paymentType, amountPaid) {
        this.paymentId = paymentId;
        this.paymentType = paymentType;
        this.amountPaid = amountPaid;
    }
    //getter and setter 
    getPaymentId() {
        return this.paymentId;
    }
    processPayment(amount) {
        this.amountPaid = amount;
        console.log(`Payment of ${amount} processed`);
        return true;
    }
    refundPayment() {
        console.log(`Payment of ${this.amountPaid} refunded`);
        return true;
    }
}
exports.Payment = Payment;
