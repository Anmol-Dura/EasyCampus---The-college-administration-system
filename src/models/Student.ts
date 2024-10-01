export class Student {
    private studentId: string;
    private name: string;
    private email: string;
    private academicHistory: string[];
    private status: string;
  
    constructor(studentId: string, name: string, email: string) {
      this.studentId = studentId;
      this.name = name;
      this.email = email;
      this.academicHistory = [];
      this.status = "Good Standing";
    }
  
    // Getter for studentId (read-only)
    public getStudentId(): string {
      return this.studentId;
    }
  
    // Getters and Setters for name and email
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
  
    public getAcademicHistory(): string[] {
      return this.academicHistory;
    }
  
    public addAcademicRecord(record: string): void {
      this.academicHistory.push(record);
    }
  
    public getStatus(): string {
      return this.status;
    }
  
    public setStatus(newStatus: string): void {
      this.status = newStatus;
    }
  
    public registerForProgram(programId: string): void {
      console.log(`${this.name} registered for program ${programId}`);
    }
  
    public viewTranscript(): string {
      return `${this.name}'s transcript: ${this.academicHistory.join(', ')}`;
    }
  
    public checkAcademicStanding(): string {
      return this.status;
    }
  }