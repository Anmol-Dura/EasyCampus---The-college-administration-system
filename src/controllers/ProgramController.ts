// Import necessary models
import { Program } from '../models/Program';
import { Course } from '../models/Course';

export class ProgramController {
  public addCourseToProgram(program: Program, course: Course): void {
    // Add a course to the program
    program.addCourse(course.getCourseId());
    console.log(`Course ${course.getCourseName()} added to program ${program.getProgramDetails()}`);
  }

  public checkProgramCapacity(program: Program): boolean {
    // Check if the program has available capacity
    return program.checkCapacity();
  }
}