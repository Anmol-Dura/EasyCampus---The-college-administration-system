import { Program } from '../src/models/Program';

describe('Program', () => {
  let program : Program;

  beforeEach(() => {
    program = new Program('PRG101', 'Computer Science', 30);
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(program.getProgramId()).toBe('PRG101');
    expect(program.getProgramName()).toBe('Computer Science');
    expect(program.getRequirements()).toEqual([]);
    expect(program.getCapacity()).toBe(30);
  });

  test('should set and get programName', () => {
    program.setProgramName('Data Science');
    expect(program.getProgramName()).toBe('Data Science');
  });

  test('should add requirement', () => {
    const requirement = 'Mathematics 101';
    program.addRequirement(requirement);
    expect(program.getRequirements()).toContain(requirement);
  });

  test('should set and get capacity', () => {
    program.setCapacity(40);
    expect(program.getCapacity()).toBe(40);
  });

  test('should add course and log output', () => {
    const courseId = 'CS101';
    program.addCourse(courseId);

    expect(console.log).toHaveBeenCalledWith('Course CS101 added to program Computer Science');
  });

  test('should check if capacity is available', () => {
    expect(program.checkCapacity()).toBe(true);

    program.setCapacity(0);
    expect(program.checkCapacity()).toBe(false);
  });

  test('should return program details', () => {
    const details = program.getProgramDetails();
    expect(details).toBe('Program: Computer Science, Capacity: 30');
  });
});
