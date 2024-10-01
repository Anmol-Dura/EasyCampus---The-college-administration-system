export class Program {
    private programId: string;
    private programName: string;
    private requirements: string[];
    private capacity: number;
  
    constructor(programId: string, programName: string, capacity: number) {
      this.programId = programId;
      this.programName = programName;
      this.requirements = [];
      this.capacity = capacity;
    }
  
    // Getter for programId (read-only)
    public getProgramId(): string {
      return this.programId;
    }
  
    // Getter and Setter for programName
    public getProgramName(): string {
      return this.programName;
    }
  
    public setProgramName(newName: string): void {
      this.programName = newName;
    }
  
    public getRequirements(): string[] {
      return this.requirements;
    }
  
    public addRequirement(requirement: string): void {
      this.requirements.push(requirement);
    }
  
    // Getter and Setter for capacity
    public getCapacity(): number {
      return this.capacity;
    }
  
    public setCapacity(newCapacity: number): void {
      this.capacity = newCapacity;
    }
  
    public addCourse(courseId: string): void {
      console.log(`Course ${courseId} added to program ${this.programName}`);
    }
  
    public checkCapacity(): boolean {
      return this.capacity > 0;
    }
  
    public getProgramDetails(): string {
      return `Program: ${this.programName}, Capacity: ${this.capacity}`;
    }
  }