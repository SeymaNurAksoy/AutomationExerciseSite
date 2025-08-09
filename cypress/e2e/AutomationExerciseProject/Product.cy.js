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
    it(' Add Products in Cart', () => {
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

    it('Verify Product quantity in Cart', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information > h2').should('have.text', 'Blue Top');
        cy.get('#quantity').clear().type('4');
        cy.get('.btn').contains('Add to cart').click();
        cy.get('u').click();
    });

    it('Place Order: Register while Checkout', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').should('have.text', 'Add to cart');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').should('have.text', 'Continue Shopping');
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').should('have.text', 'Proceed To Checkout');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.modal-body > :nth-child(2) > a > u').should('have.text', 'Register / Login');
        cy.get('.modal-body > :nth-child(2) > a > u').click();
        cy.signup('seyma', 'Mrs_Test_User99s3@gmail.com', '12345678');
        cy.get(':nth-child(10) > a')
            .should('contain', 'Logged in as seyma');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should('contain', 'Cart');
        cy.get('.col-sm-6 > .btn').should('have.text', 'Proceed To Checkout');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery > .address_title > .page-subheading').should('have.text', 'Your delivery address');
        cy.get('#address_delivery > .address_firstname').should('have.text', 'Mrs. Test User');
        cy.get(':nth-child(7) > .btn').should('have.text', 'Place Order');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Test User');
        cy.get('[data-qa="card-number"]').type('1234567890123456');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('#submit').click();
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
        cy.get('.col-sm-9 > .btn-default').should('have.text', 'Download Invoice');
        homePage.navigateToHomePage();

        homePage.clickDeleteAccount();
        cy.url().should('include', 'delete_account');
        cy.get('b').should('have.text', 'Account Deleted!');
        homePage.clickContinue();
        cy.url().should('include', 'automationexercise.com');
    });

    it('Place Order: Login before Checkout', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        homePage.clickOnLogin();
        cy.login('test250805@gmail.com', '12345678');
        cy.get(':nth-child(10) > a')
            .should('contain', 'Logged in as seyma');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').should('have.text', 'Add to cart');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').should('have.text', 'Continue Shopping');
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').should('have.text', 'Proceed To Checkout');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should('contain', 'Cart');
        cy.get('.col-sm-6 > .btn').should('have.text', 'Proceed To Checkout');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery > .address_title > .page-subheading').should('have.text', 'Your delivery address');
        cy.get('#address_delivery > .address_firstname').should('have.text', 'Mrs. Test User');
        cy.get(':nth-child(7) > .btn').should('have.text', 'Place Order');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Test User');
        cy.get('[data-qa="card-number"]').type('1234567890123456');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('#submit').click();
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
        cy.get('.col-sm-9 > .btn-default').should('have.text', 'Download Invoice');
    });

    it(' Remove Products From Cart', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('have.text', 'All Products');
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').should('have.text', 'Add to cart');
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').should('have.text', 'View Cart');
        cy.get('u').click();
        cy.get('.cart_quantity_delete > .fa').click();
        cy.get('b').should('have.text', 'Cart is empty!');

    });

    it('View Category Products', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click();
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').should('contain', 'Dress');
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').should('have.text', 'Sleeveless Dress');

    });
    it.only('View & Cart Brand Products', () => {
        homePage.navigateToHomePage();
        cy.url().should('include', 'automationexercise.com');
        cy.title().should('include', 'Automation Exercise');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items > h2').should('have.text', 'All Products');
        cy.get('.brands_products > h2').should('have.text', 'Brands');
        cy.get('.brands-name > .nav > :nth-child(1) > a').should('contain', 'Polo');
        cy.get('.brands-name > .nav > :nth-child(1) > a').click();
        cy.get('.title').should('contain', 'Brand - Polo Products');
        cy.get('.active').should('contain', 'Polo');
        

    });

});