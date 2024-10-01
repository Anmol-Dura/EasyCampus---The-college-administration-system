// Import necessary models
import { Course } from '../models/Course';

export class CourseController {
  public scheduleCourse(course: Course, termId: string): void {
    // Schedule the course for a specific term
    course.scheduleCourse(termId);
    console.log(`Course ${course.getCourseName()} scheduled for term ${termId}`);
  }

  public assignInstructor(course: Course, instructorId: string): void {
    // Assign an instructor to the course
    course.assignInstructor(instructorId);
    console.log(`Instructor ${instructorId} assigned to course ${course.getCourseName()}`);
  }

  public checkCourseCapacity(course: Course): boolean {
    // Check if the course has capacity
    return course.checkCapacity();
  }
}