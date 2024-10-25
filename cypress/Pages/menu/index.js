/// <reference types="cypress" />



class Menu {
    Elements = {
        btn: {
            ContateNos: '.fa.fa-envelope',
            Produtos: '.material-icons.card_travel',
            Carrinho: "View Cart",
            Login: '[href$=login]',
            Logout: ' Logout',
            ExcluirConta: '[href *="delete"]'
        }

    }

    irParaContactUs() {
        cy.get(this.Elements.btn.ContateNos).click()
    }

    irParaProdutos() {
        cy.get(this.Elements.btn.Produtos).click()
    }

    irParaCarrinho() {
        cy.contains(this.Elements.btn.Carrinho).click()
    }

    irParaLogin() {
        cy.get(this.Elements.btn.Login).click()
    }
    irParaLogout() {
        cy.contains(this.Elements.btn.Logout).click()
    }
    irParaDeletar() {
        cy.get(this.Elements.btn.ExcluirConta).click()



    }

}

export default new Menu()