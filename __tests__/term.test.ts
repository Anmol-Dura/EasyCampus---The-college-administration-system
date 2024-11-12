const { Term } = require('../src/models/Term'); // Adjust the path as necessary

describe('Term', () => {
  let term;

  beforeEach(() => {
    const registrationStart = new Date('2024-01-01');
    const addDropDeadline = new Date('2024-02-01');
    const withdrawalDeadline = new Date('2024-03-01');
    const studyStartDate = new Date('2024-01-15');

    term = new Term('T001', 'Spring 2024', registrationStart, addDropDeadline, withdrawalDeadline, studyStartDate);

    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });


  test('should initialize with correct properties', () => {
    expect(term.getTermId()).toBe('T001');
    expect(term.getTermName()).toBe('Spring 2024');
    expect(term.getRegistrationStart()).toEqual(new Date('2024-01-01'));
    expect(term.getAddDropDeadline()).toEqual(new Date('2024-02-01'));
    expect(term.getWithdrawalDeadline()).toEqual(new Date('2024-03-01'));
    expect(term.getStudyStartDate()).toEqual(new Date('2024-01-15'));
  });

  test('should set and get termName correctly', () => {
    term.setTermName('Fall 2024');
    expect(term.getTermName()).toBe('Fall 2024');
  });

  test('should set and get registrationStart correctly', () => {
    const newDate = new Date('2024-05-01');
    term.setRegistrationStart(newDate);
    expect(term.getRegistrationStart()).toEqual(newDate);
  });

  test('should open registration and log output', () => {
    term.openRegistration();
    expect(console.log).toHaveBeenCalledWith('Registration opened for term Spring 2024');
  });

  test('should close registration and log output', () => {
    term.closeRegistration();
    expect(console.log).toHaveBeenCalledWith('Registration closed for term Spring 2024');
  });

  test('should return term schedule correctly', () => {
    const schedule = term.getTermSchedule();
    expect(schedule).toEqual([
      'Term: Spring 2024',
      'Registration Start: Tue Jan 01 2024',
      'Add/Drop Deadline: Thu Feb 01 2024'
    ]);
  });
});
