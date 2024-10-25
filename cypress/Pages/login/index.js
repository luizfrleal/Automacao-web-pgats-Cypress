/// <reference types="cypress" />

//import cypress from "cypress"


class Login {

    Elements = {
        btn : {
            Login: '[data-qa=login-button]'
        },

        fill : {
            Email: '[data-qa="login-email"]',
            Senha: '[data-qa=login-password]'

        }
    }

    UsuarioTemp(senha) {
        const nome = "Iron Man"
        Cypress.env('nome', nome)
        const email = Cypress.env('email')
        Cypress.env('email', email)
        
        cy.get(this.Elements.fill.Email).type(Cypress.env('email', email))
        cy.get(this.Elements.fill.Senha).type(senha)
        cy.get(this.Elements.btn.Login).click()

    }

    Usuario(email, senha) {
          cy.get(this.Elements.fill.Email).type(email)
        cy.get(this.Elements.fill.Senha).type(senha)
        cy.get(this.Elements.btn.Login).click()


    }
    


}

export default new Login()