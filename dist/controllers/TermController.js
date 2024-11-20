"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermController = void 0;
class TermController {
    openRegistration(term) {
        // Open registration for the term
        term.openRegistration();
        console.log(`Registration opened for term ${term.getTermId()}`);
    }
    closeRegistration(term) {
        // Close registration for the term
        term.closeRegistration();
        console.log(`Registration closed for term ${term.getTermName()}`);
    }
}
exports.TermController = TermController;
