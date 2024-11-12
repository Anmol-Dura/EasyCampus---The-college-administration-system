const { Enrollment } = require('../src/models/Enrollment'); // Adjust path as needed

describe('Enrollment', () => {
  let enrollment;

  beforeEach(() => {
    enrollment = new Enrollment('E123', 'S456', 'P789');
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(enrollment.getEnrollmentId()).toBe('E123');
    expect(enrollment.getStudentId()).toBe('S456');
    expect(enrollment.getProgramId()).toBe('P789');
    expect(enrollment.status).toBe('Enrolled');
  });

  test('should confirm enrollment and log output', () => {
    enrollment.confirmEnrollment();

    expect(console.log).toHaveBeenCalledWith('Enrollment confirmed for student S456 in program P789');
  });

  test('should waitlist student and log output', () => {
    const courseId = 'C101';
    enrollment.waitlistStudent(courseId);

    expect(console.log).toHaveBeenCalledWith('Student S456 waitlisted for course C101');
  });

  test('should drop course and log output', () => {
    const courseId = 'C101';
    enrollment.dropCourse(courseId);

    expect(console.log).toHaveBeenCalledWith('Course C101 dropped by student S456');
  });
});
