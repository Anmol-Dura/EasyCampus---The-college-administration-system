"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {

    constructor(courseId, courseName, description, credits, capacity, instructor) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.description = description; // Initialize description here
        this.credits = credits;
        this.capacity = capacity;
        this.instructor = instructor;
        this.prerequisites = [];
    }
    // Getters and Setters
    getCourseId() {
        return this.courseId;
    }
    getCourseName() {
        return this.courseName;
    }
    setCourseName(newName) {
        this.courseName = newName;
    }
    getCredits() {
        return this.credits;
    }
    setCredits(newCredits) {
        this.credits = newCredits;
    }
    getCapacity() {
        return this.capacity;
    }
    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
    getInstructor() {
        return this.instructor;
    }
    setInstructor(newInstructor) {
        this.instructor = newInstructor;
    }
    getPrerequisites() {
        return this.prerequisites;
    }
    addPrerequisite(prerequisite) {
        this.prerequisites.push(prerequisite);
    }
    scheduleCourse(termId) {
        console.log(`Course ${this.courseName} scheduled for term ${termId}`);
    }
    assignInstructor(instructorId) {
        this.instructor = instructorId;
        console.log(`Instructor ${instructorId} assigned to course ${this.courseName}`);
    }
    checkCapacity() {
        return this.capacity > 0;
    }
    getCourseDetails() {
        return `${this.courseName} (${this.credits} credits)`;
    }
}
exports.Course = Course;
