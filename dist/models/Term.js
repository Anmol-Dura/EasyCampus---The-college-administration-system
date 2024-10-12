"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Term = void 0;
class Term {
    constructor(termId, termName, registrationStart, addDropDeadline, withdrawalDeadline, studyStartDate) {
        this.termId = termId;
        this.termName = termName;
        this.registrationStart = registrationStart;
        this.addDropDeadline = addDropDeadline;
        this.withdrawalDeadline = withdrawalDeadline;
        this.studyStartDate = studyStartDate;
    }
    // Getters and Setters
    getTermId() {
        return this.termId;
    }
    getTermName() {
        return this.termName;
    }
    setTermName(newName) {
        this.termName = newName;
    }
    getRegistrationStart() {
        return this.registrationStart;
    }
    setRegistrationStart(newDate) {
        this.registrationStart = newDate;
    }
    getAddDropDeadline() {
        return this.addDropDeadline;
    }
    setAddDropDeadline(newDate) {
        this.addDropDeadline = newDate;
    }
    getWithdrawalDeadline() {
        return this.withdrawalDeadline;
    }
    setWithdrawalDeadline(newDate) {
        this.withdrawalDeadline = newDate;
    }
    getStudyStartDate() {
        return this.studyStartDate;
    }
    setStudyStartDate(newDate) {
        this.studyStartDate = newDate;
    }
    openRegistration() {
        console.log(`Registration opened for term ${this.termName}`);
    }
    closeRegistration() {
        console.log(`Registration closed for term ${this.termName}`);
    }
    getTermSchedule() {
        return [`Term: ${this.termName}`, `Registration Start: ${this.registrationStart.toDateString()}`, `Add/Drop Deadline: ${this.addDropDeadline.toDateString()}`];
    }
}
exports.Term = Term;
