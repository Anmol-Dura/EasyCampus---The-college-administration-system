"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
class Program {
    constructor(programId, programName, capacity) {
        this.programId = programId;
        this.programName = programName;
        this.requirements = [];
        this.capacity = capacity;
    }
    // Getter for programId (read-only)
    getProgramId() {
        return this.programId;
    }
    // Getter and Setter for programName
    getProgramName() {
        return this.programName;
    }
    setProgramName(newName) {
        this.programName = newName;
    }
    getRequirements() {
        return this.requirements;
    }
    addRequirement(requirement) {
        this.requirements.push(requirement);
    }
    // Getter and Setter for capacity
    getCapacity() {
        return this.capacity;
    }
    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
    addCourse(courseId) {
        console.log(`Course ${courseId} added to program ${this.programName}`);
    }
    checkCapacity() {
        return this.capacity > 0;
    }
    getProgramDetails() {
        return `Program: ${this.programName}, Capacity: ${this.capacity}`;
    }
}
exports.Program = Program;
