import { Instructor } from "../src/models/Instructor";

describe('Instructor', () => {
  let instructor: Instructor;

  beforeEach(() => {
    instructor = new Instructor('I123', 'John Doe', 'Computer Science');
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(instructor.getInstructorId()).toBe('I123');
    expect(instructor.getInstructorName()).toBe('John Doe');
  });

  test('should submit grades and log output', () => {
    const studentId = 'S456';
    const courseId = 'C101';
    const grade = 'A';

    instructor.submitGrades(studentId, courseId, grade);

    expect(console.log).toHaveBeenCalledWith('Grade A submitted for student S456 in course C101');
  });

  test('should return assigned courses', () => {
    const courses = instructor.getAssignedCourses();

    expect(courses).toEqual(['Assigned course list for instructor John Doe']);
  });
});
