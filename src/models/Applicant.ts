export class Applicant {
    private applicantId: string;
    private name: string;
    private email: string;
    private address: string;
    private contact: string;
  
    constructor(applicantId: string, name: string, email: string, address: string, contact: string) {
      this.applicantId = applicantId;
      this.name = name;
      this.email = email;
      this.address = address;
      this.contact = contact;
    }
  
    // Getter for applicantId (read-only)
    public getApplicantId(): string {
      return this.applicantId;
    }
  
    // Getters and Setters for other attributes
    public getName(): string {
      return this.name;
    }
  
    public setName(newName: string): void {
      this.name = newName;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(newEmail: string): void {
      this.email = newEmail;
    }
  
    public getAddress(): string {
      return this.address;
    }
  
    public setAddress(newAddress: string): void {
      this.address = newAddress;
    }
  
    public getContact(): string {
      return this.contact;
    }
  
    public setContact(newContact: string): void {
      this.contact = newContact;
    }
  
    public submitApplication(): void {
      console.log(`Application submitted by ${this.name}`);
    }
  
    public uploadDocuments(): void {
      console.log(`Documents uploaded by ${this.name}`);
    }
  
    public checkApplicationStatus(): string {
      return "Application in Review";
    }
  }