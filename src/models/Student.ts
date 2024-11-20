export  class Student {
    private studentId: string;
    private name: string;
    private email: string;
    private academicHistory: string[];
    private status: string;
    private fee : number;
    private rent: number;


    constructor(studentId: string, name: string, email: string, fee=1, rent=1) {
      this.studentId = studentId;
      this.name = name;
      this.email = email;
      this.academicHistory = [];
      this.status = "Good Standing";
      this.fee=fee;
      this.rent=rent;
    }
  
    // Getter for studentId (read-only)
    public getStudentId(): string {
      return this.studentId;
    }
  
    public gettotalexpenses():number{
      return this.rent+this.fee;
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