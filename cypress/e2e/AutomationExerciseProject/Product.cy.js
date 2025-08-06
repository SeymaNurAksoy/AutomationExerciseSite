import { HomePage } from "../../PageObjectModel/HomePage";
let homePage = new HomePage();
describe('Products and product detail page', () => {
    it('Verify All Products and product detail page', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items > h2').should('have.text', 'All Products');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information > h2').should('have.text', 'Blue Top');
        cy.get('.product-information > :nth-child(3)').should('have.text', 'Category: Women > Tops');
        cy.get('.product-information > :nth-child(6)').should('have.text', 'Availability: In Stock');
        cy.get('.product-information > :nth-child(7)').should('have.text', 'Condition: New');
        cy.get(':nth-child(5) > span').should('have.text', 'Rs. 500');
        cy.get('.product-information > :nth-child(8)').should('have.text', 'Brand: Polo');
        
    });

    it('Search Product', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items > h2').should('have.text', 'All Products');
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();
        cy.get('.title').should('have.text', 'Searched Products');
        cy.get('.productinfo > p').should('have.text', 'Blue Top');

    });

    it('Verify Subscription in home page', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get('.single-widget > h2').should('have.text', 'Subscription');
        cy.get('#susbscribe_email').type('test250805@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!');
    });
    it('Verify Subscription in home page', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.text-center > b').should('have.text', 'Cart is empty!');
        cy.get('h2').should('have.text', 'Subscription');
        cy.get('#susbscribe_email').type('test250805@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!');
    });
    it.only(' Add Products in Cart', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items > h2').should('have.text', 'All Products');
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').click();
        cy.get('#product-1 > .cart_price > p').should('have.text', 'Rs. 500');
        cy.get('#product-2 > .cart_price > p').should('have.text', 'Rs. 400');
        cy.get('#product-1 > .cart_quantity > .disabled').should('have.text', '1');
        cy.get('#product-2 > .cart_quantity > .disabled').should('have.text', '1');
        cy.get('.col-sm-6 > .btn').click();
        cy.get(':nth-child(4) > .cart_total_price').should('have.text', 'Rs. 900');
        cy.go('back');
        cy.get('#product-1 > .cart_delete > .cart_quantity_delete').click();
        cy.get('.cart_quantity_delete > .fa').click({ multiple: true });

    });
});