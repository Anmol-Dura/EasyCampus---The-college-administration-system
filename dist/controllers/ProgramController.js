"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramController = void 0;
class ProgramController {
    addCourseToProgram(program, course) {
        // Add a course to the program
        program.addCourse(course.getCourseId());
        console.log(`Course ${course.getCourseName()} added to program ${program.getProgramDetails()}`);
    }
    checkProgramCapacity(program) {
        // Check if the program has available capacity
        return program.checkCapacity();
    }
}
exports.ProgramController = ProgramController;
