export class Instructor {
    private instructorId: string;
    private name: string;
    private department: string;
  
    constructor(instructorId: string, name: string, department: string) {
      this.instructorId = instructorId;
      this.name = name;
      this.department = department;
    }
    public getInstructorId(): string{
        return this.instructorId
    }
    public getInstructorName(): string{
        return this.name;
    }
    public submitGrades(studentId: string, courseId: string, grade: string): void {
      console.log(`Grade ${grade} submitted for student ${studentId} in course ${courseId}`);
    }
  
    public getAssignedCourses(): string[] {
      return [`Assigned course list for instructor ${this.name}`];
    }
  }