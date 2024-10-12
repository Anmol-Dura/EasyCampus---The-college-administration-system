"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
class Instructor {
    constructor(instructorId, name, department) {
        this.instructorId = instructorId;
        this.name = name;
        this.department = department;
    }
    getInstructorId() {
        return this.instructorId;
    }
    getInstructorName() {
        return this.name;
    }
    submitGrades(studentId, courseId, grade) {
        console.log(`Grade ${grade} submitted for student ${studentId} in course ${courseId}`);
    }
    getAssignedCourses() {
        return [`Assigned course list for instructor ${this.name}`];
    }
}
exports.Instructor = Instructor;
