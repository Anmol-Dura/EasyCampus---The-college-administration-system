import { Applicant } from '../models/Applicant';
export class ApplicantController {
    public submitApplication(applicant: Applicant): void {
      applicant.submitApplication();
      console.log(`Application submitted by ${applicant.getApplicantId()}`);
    }
  
    public uploadDocuments(applicant: Applicant): void {
      applicant.uploadDocuments();
      console.log(`Documents uploaded for ${applicant.getApplicantId()}`);
    }
  
    public checkApplicationStatus(applicant: Applicant): string {
      return applicant.checkApplicationStatus();
    }
  }
  