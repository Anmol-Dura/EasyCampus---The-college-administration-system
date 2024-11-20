"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorController = void 0;
class InstructorController {
    assignInstructorToCourse(instructor, course) {
        // Assign the instructor to the course
        console.log(`Assigning ${instructor.getInstructorName()} to course ${course.getCourseName()}`);
        course.assignInstructor(instructor.getInstructorId());
    }
    submitGrades(instructor, studentId, courseId, grade) {
        // Instructor submits grades for the course
        instructor.submitGrades(studentId, courseId, grade);
        console.log(`Grade submitted by ${instructor.getInstructorId()} for student ${studentId}`);
    }
}
exports.InstructorController = InstructorController;
