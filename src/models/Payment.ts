export class Payment {
    private paymentId: string;
    private paymentType: string;
    private amountPaid: number;
  
    constructor(paymentId: string, paymentType: string, amountPaid: number) {
      this.paymentId = paymentId;
      this.paymentType = paymentType;
      this.amountPaid = amountPaid;
    }
    //getter and setter 
    public getPaymentId(): string{
        return this.paymentId;
    }
    public processPayment(amount: number): boolean {
      this.amountPaid = amount;
      console.log(`Payment of ${amount} processed`);
      return true;
    }
  
    public refundPayment(): boolean {
      console.log(`Payment of ${this.amountPaid} refunded`);
      return true;
    }
  }