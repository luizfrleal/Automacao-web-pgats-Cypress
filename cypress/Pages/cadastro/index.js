/// <reference types="cypress" />



class Cadastro {

    Elements = {

        btn: {
            Login: '[href$=login]',
            InscrecerSe: '[data-qa="signup-button"]',
            CriarConta: '[data-qa="create-account"]'


        },
        fill: {
            Nome: '[data-qa="signup-name"]',
            Email: '[data-qa=signup-email]',
            Senha: '[data-qa="password"]',
            PrimeiroNome: '[data-qa="first_name"]',
            UltimoNome: '[data-qa="last_name"]',
            Empresa: '[data-qa="company"]',
            Endereco: '[data-qa="address"]',
            Estado: '[data-qa="state"]',
            Cidade: '[data-qa="city"]',
            Cep: '[data-qa="zipcode"]',
            Celular: '[data-qa="mobile_number"]'

        },
        Select: {
            DiaNasc: '[data-qa=days]',
            MesNasc: '[data-qa="months"]',
            AnoNasc: '[data-qa="years"]',
            Pais: '[data-qa="country"]',

        },

        Check: {
            AssinarNewsletter: 'input[type=checkbox]#newsletter',
            ReceberOfertasParceiros: 'input[type=checkbox]#optin'
        },
        Radio: {
            Titulo: 'input[type=radio]'
        }




    }


    Usuario(senha, diaNasc, mesNasc, anoNasc, Nome, sobreNome, empresa,
             endereco, pais, estado, cidade, cep, celular) {
        const timestamp = new Date().getTime()
        const nome = "Iron Man"
        Cypress.env('nome', nome)
        const email = `ironman${timestamp}@qa.com.br`
        Cypress.env('email', email)
        cy.get(this.Elements.btn.Login).click()
        cy.get(this.Elements.fill.Nome).type(Cypress.env('nome', nome))
        cy.get(this.Elements.fill.Email).type(Cypress.env('email', email))
        cy.get(this.Elements.btn.InscrecerSe).click()
        cy.get(this.Elements.Radio.Titulo).eq(0).check();
        cy.get(this.Elements.fill.Senha).type(senha);
        cy.get(this.Elements.Select.DiaNasc).select(diaNasc)
        cy.get(this.Elements.Select.MesNasc).select(mesNasc)
        cy.get(this.Elements.Select.AnoNasc).select(anoNasc)
        cy.get(this.Elements.Check.AssinarNewsletter).check()
        cy.get(this.Elements.Check.ReceberOfertasParceiros).check()
        cy.get(this.Elements.fill.PrimeiroNome).type(Nome)
        cy.get(this.Elements.fill.UltimoNome).type(sobreNome)
        cy.get(this.Elements.fill.Empresa).type(empresa)
        cy.get(this.Elements.fill.Endereco).type(endereco)
        cy.get(this.Elements.Select.Pais).select(pais)
        cy.get(this.Elements.fill.Estado).type(estado)
        cy.get(this.Elements.fill.Cidade).type(cidade)
        cy.get(this.Elements.fill.Cep).type(cep)
        cy.get(this.Elements.fill.Celular).type(celular)
        cy.get(this.Elements.btn.CriarConta).click()


    }
    UsuarioCadastrado(nome, email) {

        cy.get(this.Elements.btn.Login).click()
        cy.get(this.Elements.fill.Nome).type(nome)
        cy.get(this.Elements.fill.Email).type(email)
        cy.get(this.Elements.btn.InscrecerSe).click()


    }

}

export default new Cadastro()