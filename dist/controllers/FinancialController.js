"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialController = void 0;
class FinancialController {
    calculateTuition(financial, studentId) {
        // Calculate and return the tuition amount for the student
        return financial.calculateTuition(studentId);
    }
    applyScholarship(financial, scholarshipId) {
        // Apply a scholarship to reduce tuition cost
        financial.applyScholarship(scholarshipId);
    }
}
exports.FinancialController = FinancialController;
