class Login{

    get LoginEmail() {
        return cy.get('[data-qa="login-email"]');
    }
    get LoginPassword() {
        return cy.get('[data-qa="login-password"]');
    }
    get LoginButton() {
        return cy.get('[data-qa="login-button"]');
    }


}
export default new Login();
