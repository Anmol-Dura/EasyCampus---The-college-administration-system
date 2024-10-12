"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantController = void 0;
class ApplicantController {
    submitApplication(applicant) {
        applicant.submitApplication();
        console.log(`Application submitted by ${applicant.getApplicantId()}`);
    }
    uploadDocuments(applicant) {
        applicant.uploadDocuments();
        console.log(`Documents uploaded for ${applicant.getApplicantId()}`);
    }
    checkApplicationStatus(applicant) {
        return applicant.checkApplicationStatus();
    }
}
exports.ApplicantController = ApplicantController;
