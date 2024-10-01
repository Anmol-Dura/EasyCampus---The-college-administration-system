export class Financial {
    private receiptId: string;
    private amountDue: number;
    private scholarship: number;
  
    constructor(receiptId: string, amountDue: number, scholarship: number) {
      this.receiptId = receiptId;
      this.amountDue = amountDue;
      this.scholarship = scholarship;
    }
  
    public calculateTuition(studentId: string): number {
      console.log(`Calculating tuition for student ${studentId}`);
      return this.amountDue - this.scholarship;
    }
  
    public applyScholarship(scholarshipId: string): void {
      console.log(`Scholarship ${scholarshipId} applied`);
    }
  
    public generateReceipt(): string {
      return `Receipt ID: ${this.receiptId}, Amount Due: ${this.amountDue}`;
    }
  }