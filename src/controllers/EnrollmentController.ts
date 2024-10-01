// Import necessary models
import { Enrollment } from '../models/Enrollment';
import { Student } from '../models/Student';
import { Program } from '../models/Program';

export class EnrollmentController {
  public enrollStudentInProgram(student: Student, program: Program): void {
    // Check if the program has capacity
    if (!program.checkCapacity()) {
      console.error(`Program ${program.getProgramDetails()} is full.`);
      return;
    }

    // Create the enrollment record
    const enrollment = new Enrollment(`enr-${Date.now()}`, student.getStudentId(), program.getProgramId());
    enrollment.confirmEnrollment();

    // Notify the user of successful enrollment
    console.log(`${student.getName()} successfully enrolled in ${program.getProgramDetails()}`);
  }

  public dropStudentFromCourse(student: Student, courseId: string): void {
    // Logic to drop the student from a course
    console.log(`Dropping student ${student.getName()} from course ${courseId}`);
    // Drop course logic here (if applicable)
  }
}