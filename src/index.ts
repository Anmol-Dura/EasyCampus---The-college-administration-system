import { Applicant } from './models/Applicant';
import { Student } from './models/Student';
import { Program } from './models/Program';
import { Course } from './models/Course';
import { Term } from './models/Term';
import { Enrollment } from './models/Enrollment';
import { Financial } from './models/Financial';
import { Payment } from './models/Payment';
import { Instructor } from './models/Instructor';
import { Role } from './models/Role';

import { EnrollmentController } from './controllers/EnrollmentController';
import { StudentController } from './controllers/StudentController';
import { ProgramController } from './controllers/ProgramController';
import { CourseController } from './controllers/CourseController';
import { TermController } from './controllers/TermController';
import { FinancialController } from './controllers/FinancialController';
import { PaymentController } from './controllers/PaymentController';
import { InstructorController } from './controllers/InstructorController';
import { RoleController } from './controllers/RoleController';
// 1. Create an applicant (representing yourself)
const applicant = new Applicant("app123", "Your Name", "yourname@email.com", "123 Main St, Toronto", "555-1234");
applicant.submitApplication();
applicant.uploadDocuments();
console.log(applicant.checkApplicationStatus());

// 2. After application approval, the student profile is created
const student = new Student("stu001", "Your Name", "yourname@email.com");

// 3. Create a program (Full Stack Web Development)
const fullStackProgram = new Program("prog101", "Full Stack Web Development", 50);

// 4. Create a course (React for Beginners)
const reactCourse = new Course("course001","A beginner course on React", "React for Beginners", 3, 30, "Instructor Name");

// 5. Enroll the student in the Full Stack Web Development program
const enrollmentController = new EnrollmentController();
enrollmentController.enrollStudentInProgram(student, fullStackProgram);

// 6. Register the student for the React course
const studentController = new StudentController();
studentController.registerStudentForCourse(student, reactCourse);

// 7. View the student's transcript and academic standing
studentController.viewStudentTranscript(student);
console.log(`Academic Standing: ${student.checkAcademicStanding()}`);