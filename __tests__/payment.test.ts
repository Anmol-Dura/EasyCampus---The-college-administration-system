const { Payment } = require('../src/models/Payment'); 

describe('Payment', () => {
  let payment;

  beforeEach(() => {
    payment = new Payment('P123', 'Credit Card', 200);
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(payment.getPaymentId()).toBe('P123');
    expect(payment.paymentType).toBe('Credit Card');
    expect(payment.amountPaid).toBe(200);
  });

  test('should process payment and log output', () => {
    const amount = 300;
    const result = payment.processPayment(amount);

    expect(payment.amountPaid).toBe(300);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith('Payment of 300 processed');
  });

  test('should refund payment and log output', () => {
    const result = payment.refundPayment();

    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith('Payment of 200 refunded');
  });
});
