"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentController = void 0;
// Import necessary models
const Enrollment_1 = require("../models/Enrollment");
class EnrollmentController {
    enrollStudentInProgram(student, program) {
        // Check if the program has capacity
        if (!program.checkCapacity()) {
            console.error(`Program ${program.getProgramDetails()} is full.`);
            return;
        }
        // Create the enrollment record
        const enrollment = new Enrollment_1.Enrollment(`enr-${Date.now()}`, student.getStudentId(), program.getProgramId());
        enrollment.confirmEnrollment();
        // Notify the user of successful enrollment
        console.log(`${student.getName()} successfully enrolled in ${program.getProgramDetails()}`);
    }
    dropStudentFromCourse(student, courseId) {
        // Logic to drop the student from a course
        console.log(`Dropping student ${student.getName()} from course ${courseId}`);
        // Drop course logic here (if applicable)
    }
}
exports.EnrollmentController = EnrollmentController;
