import {Student} from '../src/models/Student'
const student=new Student("1","Aarati","Thapa");

  test('Calculates Total fees!', () => {
    expect(student.gettotalexpenses()).toBe(2);
  });