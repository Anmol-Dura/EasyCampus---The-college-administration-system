// Import necessary models
import { Financial } from '../models/Financial';

export class FinancialController {
  public calculateTuition(financial: Financial, studentId: string): number {
    // Calculate and return the tuition amount for the student
    return financial.calculateTuition(studentId);
  }

  public applyScholarship(financial: Financial, scholarshipId: string): void {
    // Apply a scholarship to reduce tuition cost
    financial.applyScholarship(scholarshipId);
  }
}