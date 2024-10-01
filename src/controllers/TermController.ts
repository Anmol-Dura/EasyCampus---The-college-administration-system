// Import necessary models
import { Term } from '../models/Term';

export class TermController {
  public openRegistration(term: Term): void {
    // Open registration for the term
    term.openRegistration();
    console.log(`Registration opened for term ${term.getTermId()}`);
  }

  public closeRegistration(term: Term): void {
    // Close registration for the term
    term.closeRegistration();
    console.log(`Registration closed for term ${term.getTermName()}`);
  }
}