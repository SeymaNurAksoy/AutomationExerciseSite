
import Login from "../PageObjectModel/Login";
import Signup from "../PageObjectModel/Signup";
import 'cypress-file-upload';


Cypress.Commands.add('signup', (name, email, password) => {
    Signup.SignupFormName.type(name);
    Signup.SignupFormEmail.type(email);
    Signup.SignupButton.click();
    cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information');
    Signup.SignupGender.click();
    Signup.SignupPassword.type(password);
    Signup.SignupDay.select('1');
    Signup.SignupMonth.select('January');
    Signup.SignupYear.select('2000');
    Signup.SignupNewsletter.check();
    Signup.SignupOffers.check();
    Signup.SignupFirstName.type('Test');
    Signup.SignupLastName.type('User');
    Signup.SignupCompany.type('Test Company');
    Signup.SignupAddress1.type('123 Test St');
    Signup.SignupAddress2.type('Apt 456');
    Signup.SignupCountry.select('United States');
    Signup.SignupState.type('California');
    Signup.SignupCity.type('Los Angeles');
    Signup.SignupZipcode.type('90001');
    Signup.SignupMobileNumber.type('1234567890');
    Signup.SignupCreateAccountButton.click();
    cy.get('b').should('have.text', 'Account Created!');
    Signup.SignupContinueButton.click();
});

Cypress.Commands.add('signupFirstStep', (name, email, password) => {
    Signup.SignupFormName.type(name);
    Signup.SignupFormEmail.type(email);
    Signup.SignupButton.click();
});
Cypress.Commands.add('login', (email, password) => {
    Login.LoginEmail.type(email);
    Login.LoginPassword.type(password);
    Login.LoginButton.click();
});