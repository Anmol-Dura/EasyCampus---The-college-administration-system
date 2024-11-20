"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(studentId, name, email) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.academicHistory = [];
        this.status = "Good Standing";
    }
    // Getter for studentId (read-only)
    getStudentId() {
        return this.studentId;
    }
    // Getters and Setters for name and email
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
    getAcademicHistory() {
        return this.academicHistory;
    }
    addAcademicRecord(record) {
        this.academicHistory.push(record);
    }
    getStatus() {
        return this.status;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
    registerForProgram(programId) {
        console.log(`${this.name} registered for program ${programId}`);
    }
    viewTranscript() {
        return `${this.name}'s transcript: ${this.academicHistory.join(', ')}`;
    }
    checkAcademicStanding() {
        return this.status;
    }
}
exports.Student = Student;
