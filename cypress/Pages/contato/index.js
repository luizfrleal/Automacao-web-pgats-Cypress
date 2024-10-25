/// <reference types="cypress" />



class Contato {

    Elements = {

        btn: {
            Enviar: '[data-qa="submit-button"]',
            Upload: 'input[type="file"]'
        },

        fill: {
            Nome: '[data-qa="name"]',
            Email: '[data-qa="email"]',
            Assunto: '[data-qa="subject"]',
            Mensagem: '[data-qa="message"]'
        }
    }

    PreencherFormulario(nome, email, assunto, mensagem, arquivo) {
        cy.get(this.Elements.fill.Nome).type(nome)
        cy.get(this.Elements.fill.Email).type(email)
        cy.get(this.Elements.fill.Assunto).type(assunto)
        cy.get(this.Elements.fill.Mensagem).type(mensagem)
        cy.get(this.Elements.btn.Upload).selectFile(arquivo)
        cy.get(this.Elements.btn.Enviar).click()
    }
}

export default new Contato()