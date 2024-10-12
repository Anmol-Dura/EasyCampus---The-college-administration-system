"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
class CourseController {
    scheduleCourse(course, termId) {
        // Schedule the course for a specific term
        course.scheduleCourse(termId);
        console.log(`Course ${course.getCourseName()} scheduled for term ${termId}`);
    }
    assignInstructor(course, instructorId) {
        // Assign an instructor to the course
        course.assignInstructor(instructorId);
        console.log(`Instructor ${instructorId} assigned to course ${course.getCourseName()}`);
    }
    checkCourseCapacity(course) {
        // Check if the course has capacity
        return course.checkCapacity();
    }
}
exports.CourseController = CourseController;
