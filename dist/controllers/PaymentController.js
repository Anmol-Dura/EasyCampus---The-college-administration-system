"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
class PaymentController {
    processPayment(payment, amount) {
        // Process the payment
        payment.processPayment(amount);
        console.log(`Payment of ${amount} processed`);
    }
    refundPayment(payment) {
        // Refund the payment
        payment.refundPayment();
        console.log(`Refund processed for payment ID: ${payment.getPaymentId()}`);
    }
}
exports.PaymentController = PaymentController;
