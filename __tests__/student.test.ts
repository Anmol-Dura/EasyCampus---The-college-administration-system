import { Student } from '../src/models/Student'; 

describe('Student', () => {
  let student: Student ;

  beforeEach(() => {
    student = new Student('S123', 'Jane Doe', 'jane.doe@example.com');
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  
  test('should initialize with correct properties', () => {
    expect(student.getStudentId()).toBe('S123');
    expect(student.getName()).toBe('Jane Doe');
    expect(student.getEmail()).toBe('jane.doe@example.com');
    expect(student.getAcademicHistory()).toEqual([]);
    expect(student.getStatus()).toBe('Good Standing');
  });

  test('should set and get name', () => {
    student.setName('John Doe');
    expect(student.getName()).toBe('John Doe');
  });

  test('should set and get email', () => {
    student.setEmail('john.doe@example.com');
    expect(student.getEmail()).toBe('john.doe@example.com');
  });

  test('should add an academic record', () => {
    const record = 'Math 101 - A';
    student.addAcademicRecord(record);
    expect(student.getAcademicHistory()).toContain(record);
  });

  test('should set and get status', () => {
    student.setStatus('Probation');
    expect(student.getStatus()).toBe('Probation');
  });

  test('should register for program and log output', () => {
    const programId = 'P101';
    student.registerForProgram(programId);

    expect(console.log).toHaveBeenCalledWith('Jane Doe registered for program P101');
  });

  test('should view transcript', () => {
    student.addAcademicRecord('Math 101 - A');
    student.addAcademicRecord('Science 102 - B');

    const transcript = student.viewTranscript();
    expect(transcript).toBe("Jane Doe's transcript: Math 101 - A, Science 102 - B");
  });

  test('should check academic standing', () => {
    expect(student.checkAcademicStanding()).toBe('Good Standing');
    student.setStatus('Probation');
    expect(student.checkAcademicStanding()).toBe('Probation');
  });
});
