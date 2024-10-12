"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financial = void 0;
class Financial {
    constructor(receiptId, amountDue, scholarship) {
        this.receiptId = receiptId;
        this.amountDue = amountDue;
        this.scholarship = scholarship;
    }
    calculateTuition(studentId) {
        console.log(`Calculating tuition for student ${studentId}`);
        return this.amountDue - this.scholarship;
    }
    applyScholarship(scholarshipId) {
        console.log(`Scholarship ${scholarshipId} applied`);
    }
    generateReceipt() {
        return `Receipt ID: ${this.receiptId}, Amount Due: ${this.amountDue}`;
    }
}
exports.Financial = Financial;
