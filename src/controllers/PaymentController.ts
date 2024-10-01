// Import necessary models
import { Payment } from '../models/Payment';

export class PaymentController {
  public processPayment(payment: Payment, amount: number): void {
    // Process the payment
    payment.processPayment(amount);
    console.log(`Payment of ${amount} processed`);
  }

  public refundPayment(payment: Payment): void {
    // Refund the payment
    payment.refundPayment();
    console.log(`Refund processed for payment ID: ${payment.getPaymentId()}`);
  }
}