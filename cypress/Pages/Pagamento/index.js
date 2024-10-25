/// <reference types="cypress" />

class Pagamento {

    Elements = {

        btn: {
            Pagar: '[data-qa="pay-button"]'
        }, 
        fill: {
            NomeCartao: '[data-qa="name-on-card"]', 
            NumeroCartao: '[data-qa="card-number"]', 
            CvvCartao: '[data-qa="cvc"]', 
            MesExpiracao: '[data-qa="expiry-month"]', 
            AnoExpiracao: '[data-qa="expiry-year"]'
        }
    }

    preencherDadosCartao(nomeCartao, numerocartaoCredito, cvv, mesVencimento, anoVencimento) {
        cy.get(this.Elements.fill.NomeCartao).type(nomeCartao)
        cy.get(this.Elements.fill.NumeroCartao).type(numerocartaoCredito)
        cy.get(this.Elements.fill.CvvCartao).type(cvv)
        cy.get(this.Elements.fill.MesExpiracao).type(mesVencimento)
        cy.get(this.Elements.fill.AnoExpiracao).type(anoVencimento)
        cy.get(this.Elements.btn.Pagar).click()
    }   

}

export default new Pagamento()