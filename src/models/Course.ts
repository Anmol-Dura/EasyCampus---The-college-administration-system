export class Course {
    private courseId: string;
    private courseName: string;
    private description: string;
    private prerequisites: string[];
    private credits: number;
    private capacity: number;
    private instructor: string;
  
    constructor(courseId: string, courseName: string,description: string, credits: number, capacity: number, instructor: string) {
      this.courseId = courseId;
      this.courseName = courseName;
      this.description = description;  // Initialize description here
      this.credits = credits;
      this.capacity = capacity;
      this.instructor = instructor;
      this.prerequisites = [];
    }
  
    // Getters and Setters
    public getCourseId(): string {
      return this.courseId;
    }
  
    public getCourseName(): string {
      return this.courseName;
    }
  
    public setCourseName(newName: string): void {
      this.courseName = newName;
    }
  
    public getCredits(): number {
      return this.credits;
    }
  
    public setCredits(newCredits: number): void {
      this.credits = newCredits;
    }
  
    public getCapacity(): number {
      return this.capacity;
    }
  
    public setCapacity(newCapacity: number): void {
      this.capacity = newCapacity;
    }
  
    public getInstructor(): string {
      return this.instructor;
    }
  
    public setInstructor(newInstructor: string): void {
      this.instructor = newInstructor;
    }
  
    public getPrerequisites(): string[] {
      return this.prerequisites;
    }
  
    public addPrerequisite(prerequisite: string): void {
      this.prerequisites.push(prerequisite);
    }
  
    public scheduleCourse(termId: string): void {
      console.log(`Course ${this.courseName} scheduled for term ${termId}`);
    }
  
    public assignInstructor(instructorId: string): void {
      this.instructor = instructorId;
      console.log(`Instructor ${instructorId} assigned to course ${this.courseName}`);
    }
  
    public checkCapacity(): boolean {
      return this.capacity > 0;
    }
  
    public getCourseDetails(): string {
      return `${this.courseName} (${this.credits} credits)`;
    }
  }