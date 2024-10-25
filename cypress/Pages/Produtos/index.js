class Produtos {

    Elements = {
        btn: {
                PesquisaPRod: '#submit_search'
        }, 
        fill : {
            PesquisaPRod: '#search_product'
        }
    }

    Pesquisar(produto) {
        cy.get(this.Elements.fill.PesquisaPRod).type(produto)
        cy.get(this.Elements.btn.PesquisaPRod).click()
    }

}

export default new Produtos()