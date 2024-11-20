"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Applicant_1 = require("./models/Applicant");
const Student_1 = require("./models/Student");
const Program_1 = require("./models/Program");
const Course_1 = require("./models/Course");
const EnrollmentController_1 = require("./controllers/EnrollmentController");
const StudentController_1 = require("./controllers/StudentController");
// 1. Create an applicant (representing yourself)
const applicant = new Applicant_1.Applicant("app123", "Your Name", "yourname@email.com", "123 Main St, Toronto", "555-1234");
applicant.submitApplication();
applicant.uploadDocuments();
console.log(applicant.checkApplicationStatus());
// 2. After application approval, the student profile is created
const student = new Student_1.Student("stu001", "Your Name", "yourname@email.com");
// 3. Create a program (Full Stack Web Development)
const fullStackProgram = new Program_1.Program("prog101", "Full Stack Web Development", 50);
// 4. Create a course (React for Beginners)
const reactCourse = new Course_1.Course("course001", "A beginner course on React", "React for Beginners", 3, 30, "Instructor Name");
// 5. Enroll the student in the Full Stack Web Development program
const enrollmentController = new EnrollmentController_1.EnrollmentController();
enrollmentController.enrollStudentInProgram(student, fullStackProgram);
// 6. Register the student for the React course
const studentController = new StudentController_1.StudentController();
studentController.registerStudentForCourse(student, reactCourse);
// 7. View the student's transcript and academic standing
studentController.viewStudentTranscript(student);
console.log(`Academic Standing: ${student.checkAcademicStanding()}`);
