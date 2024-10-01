export class Term {
    private termId: string;
    private termName: string;
    private registrationStart: Date;
    private addDropDeadline: Date;
    private withdrawalDeadline: Date;
    private studyStartDate: Date;
  
    constructor(termId: string, termName: string, registrationStart: Date, addDropDeadline: Date, withdrawalDeadline: Date, studyStartDate: Date) {
      this.termId = termId;
      this.termName = termName;
      this.registrationStart = registrationStart;
      this.addDropDeadline = addDropDeadline;
      this.withdrawalDeadline = withdrawalDeadline;
      this.studyStartDate = studyStartDate;
    }
  
    // Getters and Setters
    public getTermId(): string {
      return this.termId;
    }
  
    public getTermName(): string {
      return this.termName;
    }
  
    public setTermName(newName: string): void {
      this.termName = newName;
    }
  
    public getRegistrationStart(): Date {
      return this.registrationStart;
    }
  
    public setRegistrationStart(newDate: Date): void {
      this.registrationStart = newDate;
    }
  
    public getAddDropDeadline(): Date {
      return this.addDropDeadline;
    }
  
    public setAddDropDeadline(newDate: Date): void {
      this.addDropDeadline = newDate;
    }
  
    public getWithdrawalDeadline(): Date {
      return this.withdrawalDeadline;
    }
  
    public setWithdrawalDeadline(newDate: Date): void {
      this.withdrawalDeadline = newDate;
    }
  
    public getStudyStartDate(): Date {
      return this.studyStartDate;
    }
  
    public setStudyStartDate(newDate: Date): void {
      this.studyStartDate = newDate;
    }
  
    public openRegistration(): void {
      console.log(`Registration opened for term ${this.termName}`);
    }
  
    public closeRegistration(): void {
      console.log(`Registration closed for term ${this.termName}`);
    }
  
    public getTermSchedule(): string[] {
      return [`Term: ${this.termName}`, `Registration Start: ${this.registrationStart.toDateString()}`, `Add/Drop Deadline: ${this.addDropDeadline.toDateString()}`];
    }
  }