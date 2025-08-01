class Signup{

    get SignupFormEmail() {
        return cy.get('[data-qa="signup-email"]');
    }

    get SignupFormName() {
        return cy.get('[data-qa="signup-name"]');
    }

    get SignupButton() {
        return cy.get('[data-qa="signup-button"]');
    }

    get  SignupGender() {
        return cy.get('#id_gender2'); 
    }

    get SignupPassword() {
        return cy.get('[data-qa="password"]');
    }
    
    get SignupDay() {
        return cy.get('#days');
    }
    get SignupMonth() {
        return cy.get('#months');
    }
    get SignupYear() {
        return cy.get('#years');
    }
    get SignupNewsletter() {
        return cy.get('#newsletter');
    }
    get SignupOffers() {
        return cy.get('#optin');
    }
    get SignupFirstName() {
        return cy.get('[data-qa="first_name"]');
    }
    get SignupLastName() {
        return cy.get('[data-qa="last_name"]');
    }
    get SignupCompany() {
        return cy.get('[data-qa="company"]');
    }
    get SignupAddress1() {
        return cy.get('[data-qa="address"]');
    }
    get SignupAddress2() {
        return cy.get('[data-qa="address2"]');
    }
    get SignupCountry() {
        return cy.get('#country');
    }
    get SignupState() {
        return cy.get('#state');
    }
    get SignupCity() {
        return cy.get('[data-qa="city"]');
    }
    get SignupZipcode() {
        return cy.get('[data-qa="zipcode"]');
    }
    get SignupMobileNumber() {
        return cy.get('[data-qa="mobile_number"]');
    }
    get SignupCreateAccountButton() {
        return cy.get('[data-qa="create-account"]');
    }   

    get SignupContinueButton() {
        return cy.get('[data-qa="continue-button"]');
    }
    
}
export default new Signup();