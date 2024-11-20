import { Applicant } from '../src/models/Applicant'; // Adjust the import path as needed

describe('Applicant Class', () => {
    let applicant: Applicant;

    // Before each test, create a new applicant instance
    beforeEach(() => {
        applicant = new Applicant('1', 'Isabel Melendez', 'isabel@example.com', '123 Bloor St', '437-888-9999');
    });

    test('should get applicantId', () => {
        expect(applicant.getApplicantId()).toBe('1');
    });

    test('should get and set name', () => {
        expect(applicant.getName()).toBe('Isabel Melendez');
        applicant.setName('Madhavi Neupane');
        expect(applicant.getName()).toBe('Madhavi Neupane');
    });

    test('should get and set email', () => {
        expect(applicant.getEmail()).toBe('isabel@example.com');
        applicant.setEmail('madhavi@example.com');
        expect(applicant.getEmail()).toBe('madhavi@example.com');
    });

    test('should get and set address', () => {
        expect(applicant.getAddress()).toBe('123 Bloor St');
        applicant.setAddress('456 Elm St');
        expect(applicant.getAddress()).toBe('456 Elm St');
    });

    test('should get and set contact', () => {
        expect(applicant.getContact()).toBe('437-888-9999');
        applicant.setContact('987-654-3210');
        expect(applicant.getContact()).toBe('987-654-3210');
    });

    test('should submit application', () => {
        console.log = jest.fn(); // Mock console.log
        applicant.submitApplication();
        expect(console.log).toHaveBeenCalledWith('Application submitted by Isabel Melendez');
    });

    test('should upload documents', () => {
        console.log = jest.fn(); // Mock console.log
        applicant.uploadDocuments();
        expect(console.log).toHaveBeenCalledWith('Documents uploaded by Isabel Melendez');
    });

    test('should check application status', () => {
        expect(applicant.checkApplicationStatus()).toBe('Application in Review');
    });
});