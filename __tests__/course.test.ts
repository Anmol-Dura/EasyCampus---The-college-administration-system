// tests/Course.test.ts
import { Course } from '../src/models/Course';

describe('Course Class', () => {
  let course: Course;

  beforeEach(() => {
    // Initialize a new Course object before each test
    course = new Course('CS101', 'Intro to Computer Science', 'Basic introductory course to programming', 3, 30, 'Prof. Smith');
  });

  // Test the constructor
  it('should initialize the course with correct properties', () => {
    expect(course.getCourseId()).toBe('CS101');
    expect(course.getCourseName()).toBe('Intro to Computer Science');
    expect(course.getCredits()).toBe(3);
    expect(course.getCapacity()).toBe(30);
    expect(course.getInstructor()).toBe('Prof. Smith');
    expect(course.getPrerequisites()).toEqual([]);
  });

  // Test setter and getter for course name
  it('should allow changing the course name', () => {
    course.setCourseName('Advanced Computer Science');
    expect(course.getCourseName()).toBe('Advanced Computer Science');
  });

  // Test setter and getter for credits
  it('should allow changing the course credits', () => {
    course.setCredits(4);
    expect(course.getCredits()).toBe(4);
  });

  // Test setter and getter for capacity
  it('should allow changing the course capacity', () => {
    course.setCapacity(50);
    expect(course.getCapacity()).toBe(50);
  });

  // Test setter and getter for instructor
  it('should allow changing the course instructor', () => {
    course.setInstructor('Prof. Johnson');
    expect(course.getInstructor()).toBe('Prof. Johnson');
  });

  // Test addPrerequisite method
  it('should add a prerequisite correctly', () => {
    course.addPrerequisite('Math101');
    expect(course.getPrerequisites()).toContain('Math101');
  });

  // Test scheduleCourse method (checking if console.log is called)
  it('should schedule the course correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Spy on console.log
    const termId = 'Fall2024';
    course.scheduleCourse(termId);
    expect(consoleSpy).toHaveBeenCalledWith(`Course ${course.getCourseName()} scheduled for term ${termId}`);
    consoleSpy.mockRestore(); // Restore the console.log spy
  });

  // Test assignInstructor method (checking if console.log is called)
  it('should assign an instructor correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Spy on console.log
    const instructorId = 'Prof. Williams';
    course.assignInstructor(instructorId);
    expect(consoleSpy).toHaveBeenCalledWith(`Instructor ${instructorId} assigned to course ${course.getCourseName()}`);
    consoleSpy.mockRestore(); // Restore the console.log spy
  });

  // Test checkCapacity method
  it('should check if the course has available capacity', () => {
    expect(course.checkCapacity()).toBe(true); // Capacity is 30, so it should return true

    // Change the capacity to 0 and check again
    course.setCapacity(0);
    expect(course.checkCapacity()).toBe(false); // Capacity is now 0, so it should return false
  });

  // Test getCourseDetails method
  it('should return correct course details', () => {
    expect(course.getCourseDetails()).toBe('Intro to Computer Science (3 credits)');
  });
});