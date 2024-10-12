"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
class Enrollment {
    constructor(enrollmentId, studentId, programId) {
        this.enrollmentId = enrollmentId;
        this.studentId = studentId;
        this.programId = programId;
        this.status = "Enrolled";
    }
    confirmEnrollment() {
        console.log(`Enrollment confirmed for student ${this.studentId} in program ${this.programId}`);
    }
    waitlistStudent(courseId) {
        console.log(`Student ${this.studentId} waitlisted for course ${courseId}`);
    }
    dropCourse(courseId) {
        console.log(`Course ${courseId} dropped by student ${this.studentId}`);
    }
}
exports.Enrollment = Enrollment;
