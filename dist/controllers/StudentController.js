"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    registerStudentForCourse(student, course) {
        // Register the student for a course
        student.registerForProgram(course.getCourseId());
        console.log(`${student.getName()} registered for course ${course.getCourseId()}`);
    }
    viewStudentTranscript(student) {
        // View the student's transcript
        console.log(student.viewTranscript());
    }
    checkAcademicStanding(student) {
        // Check and return academic standing of the student
        return student.checkAcademicStanding();
    }
}
exports.StudentController = StudentController;
