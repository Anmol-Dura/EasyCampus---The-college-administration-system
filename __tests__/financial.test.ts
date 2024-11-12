const { Financial } = require('../src/models/Financial');

describe('Financial', () => {
  let financial;

  beforeEach(() => {
    financial = new Financial('R123', 5000, 1000);
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(financial.getReceiptId()).toBe('R123');
    expect(financial.getAmountDue()).toBe(5000);
    expect(financial.getScholarship()).toBe(1000);
  });

  test('should calculate tuition correctly', () => {
    const studentId = 'S456';
    const tuition = financial.calculateTuition(studentId);

    expect(tuition).toBe(4000); // 5000 - 1000 = 4000
    expect(console.log).toHaveBeenCalledWith('Calculating tuition for student S456');
  });

  test('should apply scholarship and log output', () => {
    const scholarshipId = 'SCH101';
    financial.applyScholarship(scholarshipId);

    expect(console.log).toHaveBeenCalledWith('Scholarship SCH101 applied');
  });

  test('should generate correct receipt', () => {
    const receipt = financial.generateReceipt();

    expect(receipt).toBe('Receipt ID: R123, Amount Due: 5000');
  });
});
