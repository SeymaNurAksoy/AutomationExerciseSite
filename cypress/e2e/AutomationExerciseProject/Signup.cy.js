import { HomePage } from "../../PageObjectModel/HomePage";
let homePage = new HomePage();
describe('Signup ,Login,Logout,Delete Account', () => {

  it('Success SignUp ', () => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.signup('seyma','abcde337s@gmail.com', '12345678');
    homePage.clickDeleteAccount();
    cy.url().should('include', 'delete_account');
    cy.get('b').should('have.text', 'Account Deleted!');
    homePage.clickContinue();
    cy.url().should('include', 'automationexercise.com');
  })


  it('Login and Delete Account', () => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.signup('seyma','hello12345seyma@gmail.com', '12345678');
    homePage.clickLogout();
    cy.login('hello12345seyma@gmail.com','12345678');
    cy.get('b').should('have.text', 'seyma');
    homePage.clickDeleteAccount();
    cy.url().should('include', 'delete_account');
    
  });

  it('InCorrect Login', () => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.login('ad@gmail.com',"12345678");
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!');
  });

  it('Logout', () => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.login('test250805@gmail.com','12345678');
    homePage.clickLogout();
    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('.login-form > h2').should('have.text', 'Login to your account');
  });

  it('Register User with existing email',() => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.signupFirstStep('seyma','test250805@gmail.com')
    cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!');
    cy.get('.signup-form > form > p').should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('.signup-form > form > p').should('have.css', 'font-size', '14px');
    });

    it('Contact Us', () => {
      homePage.navigateToHomePage();
      cy.url().should('include', 'automationexercise.com');
      cy.title().should('include', 'Automation Exercise');
      cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
      cy.url().should('include', 'contact_us');
      cy.get('.contact-form > h2').should('have.text', 'Get In Touch');
      cy.get('[data-qa="name"]').type('Test User');
      cy.get('[data-qa="email"]').type('user@gmail.com');
      cy.get('[data-qa="subject"]').type('Test Subject'); 
      cy.get('[data-qa="message"]').type('This is a test message.');
      cy.get(':nth-child(6) > .form-control').attachFile('testfile.txt'); // Ensure you have a file named testfile.txt in the fixtures folder
      cy.get('[data-qa="submit-button"]').click();
      cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    });

    it('Verify Test Cases Page', () => {
      homePage.navigateToHomePage();
      cy.url().should('include', 'automationexercise.com');
      cy.title().should('include', 'Automation Exercise');
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
      cy.url().should('include', 'test_cases');
      cy.get('.title').should('have.text', 'Test Cases');
      cy.get('h5').should('have.text', 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
      
    });
})