/// <reference types="cypress" />

const { should } = require("chai");
import { faker } from '@faker-js/faker';
import cadastro from '../Pages/cadastro';
import menu from '../Pages/menu';
import contato from '../Pages/contato';
import Pagamento from '../Pages/Pagamento';
import Login from '../Pages/login';
import clicar from '../Pages/Botoes';
import Produtos from '../Pages/Produtos';
import footer from '../Pages/footer';





describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('/')
            .get('#susbscribe_email').should('be.visible')

    })
    it('Test Case 01: Register User', () => {
        cadastro.Usuario('5r4s15sd5f1', 25, 5, '1989', 'Tony', 'Stark', 'Stark Industries',
            'XXXX', 'United States', 'California', 'Los Angeles', '8789498', '378 98562-8781')
        cy.get('[data-qa=account-created]').children('b')
            .should('contain', 'Account Created!')
        cy.url()
            .should('includes', 'account_created')
        cy.get('[data-qa="account-created"]')
            .should('be.visible')
        clicar.BtnContinuar()
        cy.contains(Cypress.env('nome'))
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cadastro.Usuario('5r4s15sd5f1', 25, 5, '1989', 'Tony', 'Stark',
            'Stark Industries', 'XXXX', 'United States', 'California', 'Los Angeles',
            '8789498', '378 98562-8781')
        menu.irParaLogin()
        menu.irParaLogout()
        Login.UsuarioTemp('5r4s15sd5f1')
        cy.contains('Iron Man')
        menu.irParaDeletar()
        cy.get('b')
            .should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]')
            .should('be.visible')

    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irParaLogin()
        Login.Usuario("ironman@qa.com", "121564")
        cy.get('p')
            .should('contain', 'Your email or password is incorrect!')

    });

    it('Test Case 4: Logout User', () => {
        menu.irParaLogin()
        Login.Usuario('ironman@qa.com.br', '5r4s15sd5f1')
        cy.contains('Iron Man')
        cy.get('.fa.fa-user')
            .should('be.visible')
        menu.irParaLogout()
        cy.url()
            .should('be.equal', 'https://automationexercise.com/login')
    });
    it('Test Case 5: Register User with existing email', () => {
        cadastro.UsuarioCadastrado(faker.person.fullName(), 'ironman@qa.com.br')
        cy.get(`.signup-form form p`)
            .should('be.visible')
            .and('contain', 'Email Address already exist!')


    });
    it('Test Case 6: Contact Us Form', () => {
        menu.irParaContactUs()
        contato.PreencherFormulario(faker.person.fullName(), faker.internet.email(),
            "Validando função", "Isso é um teste", "cypress/fixtures/PGATS.png")
        cy.get('.status')
            .should('contain', 'Success! Your details have been submitted successfully.')
    })
    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.irParaProdutos()
        cy.get('.col-sm-9.padding-right')
            .should('be.visible')
        cy.url()
            .should('be.equal', 'https://automationexercise.com/products')
        cy.get('[href$="details/1"]').click()
        cy.get('[src$="picture/1"]')
            .should('be.visible')
        cy.get('.product-information>h2')
            .should('be.visible')
        cy.get('.product-information>span>span')
            .should('be.visible')
        cy.get('.product-information p')
            .should('be.visible')


    })
    it('Test Case 9: Search Product', () => {
        menu.irParaProdutos()
        cy.url()
            .should('be.equal', 'https://automationexercise.com/products')
        Produtos.Pesquisar('Frozen')
        cy.get('.features_items>h2')
            .should('contain', 'Searched Products')
        cy.get('[data-product-id="13"]')
            .should('be.visible')
    })

    it('Test Case 10: Verify Subscription in home page', () => {
        menu.irParaProdutos()
        cy.get('footer').scrollIntoView()
        cy.get('h2')
            .should('contain', 'Subscription')
        footer.seIncrever(faker.internet.email())
        cy.get('.alert-success.alert')
            .should('contain', 'You have been successfully subscribed!')
    })


    it('Test Case 15: Place Order: Register before Checkout', () => {
        cadastro.Usuario('5r4s15sd5f1', 25, 5, '1989', 'Tony', 'Stark',
            'Stark Industries', 'XXXX', 'United States', 'California', 'Los Angeles',
            '8789498', '378 98562-8781')

        cy.url()
            .should('includes', 'account_created')

        cy.get('[data-qa="account-created"]')
            .should('be.visible')
        clicar.BtnContinuar()
        cy.get('b')
            .should('contain', Cypress.env('nome'))
        clicar.BtnAdicionarCarrinho()

        menu.irParaCarrinho()

        cy.get('.btn-default.check_out')
            .should('be.visible')
        clicar.BtnCheckOut()
        cy.get('.heading').first()
            .should('have.text', 'Address Details')
        cy.get('.heading').last()
            .should('have.text', 'Review Your Order')
        cy.get('.form-control').type('378 98562-8781')
        clicar.BtnCheckOut()

        Pagamento.preencherDadosCartao(faker.person.fullName(), faker.finance.creditCardNumber(),
            faker.finance.creditCardCVV(), '12', '2035')

        cy.get('[data-qa="order-placed"]')
            .should('be.visible')

        menu.irParaDeletar()

        cy.get('b')
            .should('contain', 'Account Deleted!')
        clicar.BtnContinuar()
    });
})