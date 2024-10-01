// Import necessary models
import { Student } from '../models/Student';
import { Course } from '../models/Course';

export class StudentController {
  public registerStudentForCourse(student: Student, course: Course): void {
    // Register the student for a course
    student.registerForProgram(course.getCourseId());
    console.log(`${student.getName()} registered for course ${course.getCourseId()}`);
  }

  public viewStudentTranscript(student: Student): void {
    // View the student's transcript
    console.log(student.viewTranscript());
  }

  public checkAcademicStanding(student: Student): string {
    // Check and return academic standing of the student
    return student.checkAcademicStanding();
  }
}