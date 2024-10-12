"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicant = void 0;
class Applicant {
    constructor(applicantId, name, email, address, contact) {
        this.applicantId = applicantId;
        this.name = name;
        this.email = email;
        this.address = address;
        this.contact = contact;
    }
    // Getter for applicantId (read-only)
    getApplicantId() {
        return this.applicantId;
    }
    // Getters and Setters for other attributes
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
    getAddress() {
        return this.address;
    }
    setAddress(newAddress) {
        this.address = newAddress;
    }
    getContact() {
        return this.contact;
    }
    setContact(newContact) {
        this.contact = newContact;
    }
    submitApplication() {
        console.log(`Application submitted by ${this.name}`);
    }
    uploadDocuments() {
        console.log(`Documents uploaded by ${this.name}`);
    }
    checkApplicationStatus() {
        return "Application in Review";
    }
}
exports.Applicant = Applicant;
