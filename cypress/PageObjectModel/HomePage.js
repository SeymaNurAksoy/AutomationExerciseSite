export class HomePage {
    navigateToHomePage() {
        cy.visit('https://automationexercise.com/');
        return this;
    }
    clickOnLogin() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }

    clickDeleteAccount() {
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    }

    clickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }
    clickLogout() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }

}