class Clicar {

    BtnContinuar() {
        cy.get('[data-qa="continue-button"]').click()

    }
    BtnCheckOut() {
        cy.get('.btn-default.check_out').click()

    }

    BtnAdicionarCarrinho() {
        cy.contains("Add to cart").click()

    }
    
}

export default new Clicar()