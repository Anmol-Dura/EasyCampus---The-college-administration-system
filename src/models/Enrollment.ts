export class Enrollment {
    private enrollmentId: string;
    private studentId: string;
    private programId: string;
    private status: string;
  
    constructor(enrollmentId: string, studentId: string, programId: string) {
      this.enrollmentId = enrollmentId;
      this.studentId = studentId;
      this.programId = programId;
      this.status = "Enrolled";
    }
  
    public confirmEnrollment(): void {
      console.log(`Enrollment confirmed for student ${this.studentId} in program ${this.programId}`);
    }
  
    public waitlistStudent(courseId: string): void {
      console.log(`Student ${this.studentId} waitlisted for course ${courseId}`);
    }
  
    public dropCourse(courseId: string): void {
      console.log(`Course ${courseId} dropped by student ${this.studentId}`);
    }
  }