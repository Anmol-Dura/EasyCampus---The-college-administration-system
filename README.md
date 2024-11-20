# EasyCampus College Administration System

**EasyCampus College Administration System** is a TypeScript library that simplifies college management tasks, including course scheduling, instructor assignments, and student capacity checks.

---

## 📦 Installation

You can install the package via npm:

npm install @devopsguardians/easycampus-college-admin-system


## Traceability Matrix

| Requirement ID | Requirement Description                                                   | Feature/Function                                                                 | Jest Test Case ID | Test Status |
|----------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------|-------------------|-------------|
| RQ001          | The system shall allow to create new applicants and submit applications   | Applicant constructor and submit application method                             | TC001             | Passed      |
| RQ002          | The system shall maintain a catalog of academic courses                   | Course constructor, assigning an instructor for the course, checking capacity, and getting course details methods | TC002             | Passed      |
| RQ003          | The system shall allow instructors to create and manage their profiles.   | Instructor constructor, and submit grades and get assigned courses methods       | TC003             | Passed      |
| RQ004          | The system shall maintain a catalog of academic programs                  | Program constructor and get Capacity, add a course and retrieve program details methods | TC004             | Passed      |
| RQ005          | The system shall allow students to enroll in courses                      | Enrollment constructor                                                          | TC005             | Failed      |
| RQ006          | The system shall allow students to register for program and to get relevant academic information | Student constructor, register for program, view transcript and check academic standing methods | TC006             | Passed      |
| RQ007          | The system shall provide different access levels based on user roles.     | Role constructor                                                                | TC007             | Failed      |

## Test Journal Entry

Date: 2024-11-15
Test Case ID: TC001
Description: Verified adding an Applicant and submitting an application
Result: Passed
Command to run the test: npx jest applicant
Observations:
The test gets the applicant, sets and retrieves the applicant’s name, email, address, and contact. It also allows the applicant to submit an application, upload documents, and check the application status.

Date: 2024-11-15
Test Case ID: TC002
Description: Verified adding a course, assigning an instructor for the course, checking capacity, and getting course details
Result: Passed
Command to run the test: npx jest course
Observations:
The test adds a new course with all its arguments, then it tested the getter and setter methods, and finally assigned an instructor to the course and retrieved the course details.

Date: 2024-11-15
Test Case ID: TC003
Description: Verified adding an instructor and allowing the instructor to get all assigned courses and submit grades for a student
Result: Passed
Command to run the test: npx jest instructor
Observations:
The test creates a new instructor, assigns some courses, and tests its capability of submitting students’ grades.

Date: 2024-11-15
Test Case ID: TC004
Description: Verified adding a program
Result: Passed
Command to run the test: npx jest program.test.ts
Observations:
The test creates a new program, associates a course with the new program, and retrieves the program details.

Date: 2024-11-15
Test Case ID: TC005
Description: Verified creating an enrollment
Result: Failed
Command to run the test: npx jest enrollment
Observations:
The test did not run successfully. According to the error, the enrollment variable type has not been defined correctly.

Date: 2024-11-15
Test Case ID: TC006
Description: Verified creating a new student, registering for a program, viewing their transcript, and checking academic standing
Result: Passed
Command to run the test: npx jest student
Observations:
The test ran correctly, allowing the creation of a new student with all its arguments, and then tested all the getter and setter methods along with the registerForProgram(), addAcademicRecord(), and checkAcademicStanding() methods.

Date: 2024-11-15
Test Case ID: TC007
Description: Verified creating a role in the system
Result: Failed
Command to run the test: npx jest role
Observations:
The test did not run successfully. According to the error, the role variable type has not been defined correctly.


## 📖 API Documentation

Class: Applicant

Constructor
typescript
new Applicant(
  applicantId: string,
  name: string,
  email: string,
  address: string,
  contact: string
);

•	applicantId: A unique identifier for the applicant.
•	name: Name of the applicant.
•	email: Email address of the applicant.
•	address: Residential address of the applicant.
•	contact: Contact number of the applicant.

Methods
•	getApplicantId(): string
Returns the unique applicant ID. (Read-only)
•	getName(): string
Returns the name of the applicant.
•	setName(newName: string): void
Updates the applicant’s name.
•	getEmail(): string
Returns the email address of the applicant.
•	setEmail(newEmail: string): void
Updates the email address of the applicant.
•	getAddress(): string
Returns the residential address of the applicant.
•	setAddress(newAddress: string): void
Updates the residential address of the applicant.
•	getContact(): string
Returns the contact number of the applicant.
•	setContact(newContact: string): void
Updates the contact number of the applicant.
•	submitApplication(): void
Logs the submission of an application by the applicant.
•	uploadDocuments(): void
Logs the uploading of documents by the applicant.
•	checkApplicationStatus(): string
Returns the status of the application, e.g., “Application in Review”.



Class: Course
Constructor
typescript
new Course(
  courseId: string,
  description: string,
  courseName: string,
  credits: number,
  capacity: number,
  instructor: string
);

•	courseId: A unique identifier for the course.
•	description: Description of the course.
•	courseName: Name of the course.
•	credits: Number of credits the course offers.
•	capacity: Maximum number of students allowed.
•	instructor: Name of the instructor assigned to the course.

Methods
•	getCourseId(): string
Returns the course ID.
•	getCourseName(): string
Returns the course name.
•	setCourseName(newName: string): void
Updates the course name.
•	getCredits(): number
Returns the number of credits for the course.
•	setCredits(newCredits: number): void
Updates the number of credits for the course.
•	getCapacity(): number
Returns the course capacity.
•	setCapacity(newCapacity: number): void
Updates the course capacity.
•	getInstructor(): string
Returns the name of the instructor assigned to the course.
•	setInstructor(newInstructor: string): void
Updates the instructor assigned to the course.
•	getPrerequisites(): string[]
Returns a list of prerequisites for the course.
•	addPrerequisite(prerequisite: string): void
Adds a prerequisite to the course.
•	scheduleCourse(termId: string): void
Schedules the course for a specified term, logging the event.
•	assignInstructor(instructorId: string): void
Assigns a new instructor to the course and logs the assignment.
•	checkCapacity(): boolean
Checks if there is available capacity for the course (returns true if capacity is greater than 0).
•	getCourseDetails(): string
Returns a string with the course name and credits (formatted as ${this.courseName} (${this.credits} credits)).



Class: Enrollment
Constructor

typescript
new Enrollment(
  enrollmentId: string,
  studentId: string,
  programId: string
);

•	enrollmentId: A unique identifier for the enrollment.
•	studentId: ID of the student associated with the enrollment.
•	programId: ID of the program the student is enrolled in.
•	status: Enrollment status, initialized to “Enrolled”.

Methods
•	confirmEnrollment(): void
Confirms the enrollment for the student in the specified program and logs the confirmation.
•	waitlistStudent(courseId: string): void
Adds the student to the waitlist for the specified course and logs the action.
•	dropCourse(courseId: string): void
Drops the specified course for the student and logs the action.



Class: Financial
Constructor

typescript
new Financial(
  receiptId: string,
  amountDue: number,
  scholarship: number
);

•	receiptId: A unique identifier for the financial receipt.
•	amountDue: The total amount due for the student.
•	scholarship: The amount of scholarship applied to reduce the tuition cost.

Methods
•	calculateTuition(studentId: string): number
Calculates the tuition due for the specified student by subtracting the scholarship amount from the total amount due and logs the calculation.
Returns: The net tuition amount.
•	applyScholarship(scholarshipId: string): void
Applies the specified scholarship to the student’s account and logs the application.
•	generateReceipt(): string
Generates and returns a string representing the receipt details, including the receipt ID and amount due.



Class: Instructor
Constructor
typescript
new Instructor(
  instructorId: string,
  name: string,
  department: string
);

•	instructorId: A unique identifier for the instructor.
•	name: Name of the instructor.
•	department: Department the instructor belongs to.

Methods
•	getInstructorId(): string
Returns the unique ID of the instructor.
•	getInstructorName(): string
Returns the name of the instructor.
•	submitGrades(studentId: string, courseId: string, grade: string): void
Submits a grade for the specified student in the specified course and logs the submission.
•	getAssignedCourses(): string[]
Returns a list of assigned courses for the instructor.



Class: Payment
Constructor
typescript
new Payment(
  paymentId: string,
  paymentType: string,
  amountPaid: number
);

•	paymentId: A unique identifier for the payment.
•	paymentType: The type of payment (e.g., credit card, cash).
•	amountPaid: The amount paid.

Methods
•	getPaymentId(): string
Returns the unique payment ID.
•	processPayment(amount: number): boolean
Processes a payment for the specified amount, updates the amountPaid, and logs the payment processing.
Returns: true if the payment is successfully processed.
•	refundPayment(): boolean
Refunds the payment and logs the refund action.
Returns: true if the refund is successfully processed.



Class: Program
Constructor
typescript
new Program(
  programId: string,
  programName: string,
  capacity: number
);

•	programId: A unique identifier for the program.
•	programName: Name of the program.
•	capacity: Maximum number of students allowed in the program.

Methods
•	getProgramId(): string
Returns the unique ID of the program.
•	getProgramName(): string
Returns the name of the program.
•	setProgramName(newName: string): void
Updates the name of the program.
•	getRequirements(): string[]
Returns a list of requirements for the program.
•	addRequirement(requirement: string): void
Adds a requirement to the program.
•	getCapacity(): number
Returns the capacity of the program.
•	setCapacity(newCapacity: number): void
Updates the capacity of the program.
•	addCourse(courseId: string): void
Adds a course to the program and logs the action.
•	checkCapacity(): boolean
Checks if there is available capacity for the program (returns true if capacity is greater than 0).
•	getProgramDetails(): string
Returns a string containing the program details, including the program name and capacity.



Class: Role
Constructor
typescript
new Role(
  roleId: string,
  roleName: string
);

•	roleId: A unique identifier for the role.
•	roleName: The name of the role.
•	permissions: A list of permissions associated with the role (initialized as an empty array).

Methods
•	getRoleID(): string
Returns the unique ID of the role.
•	getRoleName(): string
Returns the name of the role.
•	assignRole(userId: string, roleId: string): void
Assigns the role to the specified user and logs the assignment.
•	revokeRole(userId: string): void
Revokes the role from the specified user and logs the revocation.



Class: Student
Constructor
typescript
new Student(
  studentId: string,
  name: string,
  email: string
);

•	studentId: A unique identifier for the student.
•	name: Name of the student.
•	email: Email address of the student.
•	academicHistory: An array representing the student’s academic records (initialized as an empty array).
•	status: The academic standing status of the student (default is “Good Standing”).

Methods
•	getStudentId(): string
Returns the unique ID of the student.
•	getName(): string
Returns the name of the student.
•	setName(newName: string): void
Updates the name of the student.
•	getEmail(): string
Returns the email address of the student.
•	setEmail(newEmail: string): void
Updates the email address of the student.
•	getAcademicHistory(): string[]
Returns the academic history of the student.
•	addAcademicRecord(record: string): void
Adds a record to the student’s academic history.
•	getStatus(): string
Returns the current academic status of the student.
•	setStatus(newStatus: string): void
Updates the academic status of the student.
•	registerForProgram(programId: string): void
Registers the student for the specified program and logs the registration.
•	viewTranscript(): string
Returns the student’s transcript as a string, listing academic records.
•	checkAcademicStanding(): string
Returns the academic standing status of the student.



Class: Term
Constructor
typescript
new Term(
  termId: string,
  termName: string,
  registrationStart: Date,
  addDropDeadline: Date,
  withdrawalDeadline: Date,
  studyStartDate: Date
);

•	termId: A unique identifier for the term.
•	termName: Name of the term.
•	registrationStart: Date when registration begins for the term.
•	addDropDeadline: Date when adding or dropping courses is no longer allowed.
•	withdrawalDeadline: Date when withdrawal from courses is no longer allowed.
•	studyStartDate: Date when the term’s studies officially begin.

Methods
•	getTermId(): string
Returns the unique ID of the term.
•	getTermName(): string
Returns the name of the term.
•	setTermName(newName: string): void
Updates the name of the term.
•	getRegistrationStart(): Date
Returns the registration start date.
•	setRegistrationStart(newDate: Date): void
Updates the registration start date.
•	getAddDropDeadline(): Date
Returns the add/drop deadline date.
•	setAddDropDeadline(newDate: Date): void
Updates the add/drop deadline date.
•	getWithdrawalDeadline(): Date
Returns the withdrawal deadline date.
•	setWithdrawalDeadline(newDate: Date): void
Updates the withdrawal deadline date.
•	getStudyStartDate(): Date
Returns the study start date.
•	setStudyStartDate(newDate: Date): void
Updates the study start date.
•	openRegistration(): void
Logs that registration has opened for the term.
•	closeRegistration(): void
Logs that registration has closed for the term.
•	getTermSchedule(): string[]
Returns an array containing key schedule details of the term, including term name, registration start date, and add/drop deadline date.



🛠️ Development
To contribute or run the project locally:

Clone the repository:
git clone https://github.com/devopsguardians/easycampus-college-admin-system.git

Install dependencies:
npm install

Run tests:
npm test

🤝 Contributing
We welcome contributions! Please open an issue or submit a pull request for any improvements or bug fixes.
