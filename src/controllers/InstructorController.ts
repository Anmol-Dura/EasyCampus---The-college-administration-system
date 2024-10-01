// Import necessary models
import { Instructor } from '../models/Instructor';
import { Course } from '../models/Course';

export class InstructorController {
  public assignInstructorToCourse(instructor: Instructor, course: Course): void {
    // Assign the instructor to the course
    console.log(`Assigning ${instructor.getInstructorName()} to course ${course.getCourseName()}`);
    course.assignInstructor(instructor.getInstructorId());
  }

  public submitGrades(instructor: Instructor, studentId: string, courseId: string, grade: string): void {
    // Instructor submits grades for the course
    instructor.submitGrades(studentId, courseId, grade);
    console.log(`Grade submitted by ${instructor.getInstructorId()} for student ${studentId}`);
  }
}