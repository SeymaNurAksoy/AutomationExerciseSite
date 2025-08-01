import { HomePage } from "../../PageObjectModel/HomePage";
let homePage = new HomePage();
describe('Signup and Delete Account', () => {

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


  it.only('Login and Delete Account', () => {
    homePage.navigateToHomePage();
    cy.url().should('include', 'automationexercise.com');
    cy.title().should('include', 'Automation Exercise');
    homePage.clickOnLogin();
    cy.signup('seyma','hello12345seyma@gmail.com', '12345678');
    homePage.clickLogout();
    cy.login('hello12345seyma@gmail.com','12345678');
    homePage.clickDeleteAccount();
    cy.url().should('include', 'delete_account');
    
  });
})