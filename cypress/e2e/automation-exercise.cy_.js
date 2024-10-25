/// <reference types="cypress" />

const { should } = require("chai");
import { faker } from '@faker-js/faker';



describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com')
            .get('#susbscribe_email').should('be.visible')

    });
    it('Test Case 01: Register User', () => {
        const timestamp = new Date().getTime()
        const nome = "Iron Man"
        
        cy.get('[href$=login]').click()
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa=signup-email]').type(`ironman${timestamp}@qa.com.br`)
        cy.get('[data-qa="signup-button"]').click()
        //elemento do tipo radio ou checkboxes =>Check
        //cy.get('#id_gender1').check()
        //cy.get('input[type=radio]').check('Mrs');
        //cy.get('input[type=radio]').first().check();
        //cy.get('input[type=radio]').last().check();
        cy.get('input[type=radio]').eq(0).check();
        cy.get('[data-qa="password"]').type('5r4s15sd5f1', { log: false });
        cy.get('[data-qa=days]').select(25)
        cy.get('[data-qa="months"]').select(5)
        cy.get('[data-qa="years"]').select('1989')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Tony')
        cy.get('[data-qa="last_name"]').type('Stark')
        cy.get('[data-qa="company"]').type('Stark Industries')
        cy.get('[data-qa="address"]').type('XXXX')
        //cy.get('[data-qa="address2"]')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('8789498')
        cy.get('[data-qa="mobile_number"]').type('378 98562-8781')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b')
            .should('contain', 'Account Created!')

        cy.url().should('includes', 'account_created')

        cy.get('[data-qa="account-created"]')
            .should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('contain', nome)


    });

    it('Test Case 2: Login User with correct email and password', () => {
        const timestamp = new Date().getTime()
        const nome = "Iron Man"
        const email=`ironman${timestamp}@qa.com.br`

        cy.get('[href$=login]').click()
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa=signup-email]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('input[type=radio]').eq(0).check();
        cy.get('[data-qa="password"]').type('5r4s15sd5f1', { log: false });
        cy.get('[data-qa=days]').select(25)
        cy.get('[data-qa="months"]').select(5)
        cy.get('[data-qa="years"]').select('1989')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Tony')
        cy.get('[data-qa="last_name"]').type('Stark')
        cy.get('[data-qa="company"]').type('Stark Industries')
        cy.get('[data-qa="address"]').type('XXXX')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('8789498')
        cy.get('[data-qa="mobile_number"]').type('378 98562-8781')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('contain', 'Account Created!')
        cy.get('[href$=login]').click()
        cy.contains(' Logout').click()
        cy.get('[data-qa=login-email]').type(email)
        cy.get('[data-qa=login-password]').type('5r4s15sd5f1', { log: false })
        cy.get('[data-qa=login-button]').click()
        cy.get('b').should('contain', 'Iron Man')
        cy.get('[href *="delete"]').click()
        cy.get('[data-qa="continue-button"]').should('be.visible')
        cy.get('b').should('contain', 'Account Deleted!')

    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.get('[href$=login]').click()
        cy.get('[data-qa=login-email]').type('ironman871@qa.com.br')
        cy.get('[data-qa=login-password]').type('5r4s15sd5f1', { log: false })
        cy.get('[data-qa=login-button]').click()
        cy.get('p').should('contain', 'Your email or password is incorrect!')
        //refatorar o mapeamento pois esta encontrando três <p>
    });

    it('Test Case 4: Logout User', () => {
        cy.get('[href$=login]').click()
        cy.get('[data-qa=login-email]').type('ironman@qa.com.br')
        cy.get('[data-qa=login-password]').type('5r4s15sd5f1', { log: false })
        cy.get('[data-qa=login-button]').click()
        cy.get('b').should('contain', 'Iron Man')
        cy.get('.fa.fa-user').should('be.visible')
        cy.get('[href *="logout"]').click()
        cy.url()
            .should('be.equal', 'https://automationexercise.com/login')
    });
    it('Test Case 5: Register User with existing email', () => {
        cy.get('[href$=login]').click()
        cy.get('[data-qa="signup-name"]').type("Iron Man")
        cy.get('[data-qa=signup-email]').type('ironman@qa.com.br')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('p').should('contain', 'Email Address already exist!')
        //refatorar o mapeamento pois esta encontrando três <p>

    });
    it('Test Case 6: Contact Us Form', () => {
        cy.get('.fa.fa-envelope').click()
        cy.get('[data-qa="name"]').type("Iron Man")
        cy.get('[data-qa="email"]').type('ironman@qa.com.br')
        cy.get('[data-qa="subject"]').type("Assunto")
        cy.get('[data-qa="message"]').type("Mensagem de teste")
        cy.get('input[type="file"]').selectFile('cypress/fixtures/PGATS.png')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('contain', 'Success! Your details have been submitted successfully.')

    })
    it('Test Case 8: Verify All Products and product detail page', () => {
        cy.get('.material-icons.card_travel').click()
        cy.get('.col-sm-9.padding-right').should('be.visible')
        cy.url()
            .should('be.equal', 'https://automationexercise.com/products')
        cy.get
        cy.get('[href$="details/1"]').click()
        cy.get('[src$="picture/1"]').should('be.visible')
        cy.get('.product-information>h2').should('be.visible')
        cy.get('.product-information>span>span').should('be.visible')
        cy.get('.product-information p').should('be.visible')
        cy.get('p:nth-child(7)>b').should('be.visible')
        cy.get('p:nth-child(8)>b').should('be.visible')
    })
    it('Test Case 9: Search Product', () => {

        cy.get('.material-icons.card_travel').click()
        cy.url()
            .should('be.equal', 'https://automationexercise.com/products')
        cy.get('#search_product').type('Frozen Tops For Kids')
        cy.get('#submit_search').click()
        cy.get('.features_items>h2').should('contain', 'Searched Products')
        cy.get('[data-product-id="13"]').should('be.visible')
    })

    it('Test Case 10: Verify Subscription in home page', () => {
        cy.get('.material-icons.card_travel').click()
        cy.get('footer').scrollIntoView()
        cy.get('h2').should('contain', 'Subscription')
        cy.get('#susbscribe_email').type('ironman@qa.com.br')
        cy.get('#subscribe').click()
        cy.get('.alert-success.alert').should('contain', 'You have been successfully subscribed!')
    })


    it('Test Case 15: Place Order: Register before Checkout', () => {
        const timestamp = new Date().getTime()
        const nome = "Iron Man"

        cy.visit('https://automationexercise.com')
        cy.get('[href$=login]').click()
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa=signup-email]').type(`ironman${timestamp}@qa.com.br`)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('input[type=radio]').eq(0).check();
        cy.get('[data-qa="password"]').type('5r4s15sd5f1', { log: false });
        cy.get('[data-qa=days]').select(25)
        cy.get('[data-qa="months"]').select(5)
        cy.get('[data-qa="years"]').select('1989')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Tony')
        cy.get('[data-qa="last_name"]').type('Stark')
        cy.get('[data-qa="company"]').type('Stark Industries')
        cy.get('[data-qa="address"]').type('XXXX')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('8789498')
        cy.get('[data-qa="mobile_number"]').type('378 98562-8781')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b')
            .should('contain', 'Account Created!')
        cy.url().should('includes', 'account_created')
        cy.get('[data-qa="account-created"]')
            .should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('contain', nome)
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
        cy.get('.form-control').type('378 98562-8781')
        cy.get('.btn-default.check_out').click()
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2035)
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"]').should('be.visible')
        cy.get('[href *="delete"]').click()
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    
    
    });
})