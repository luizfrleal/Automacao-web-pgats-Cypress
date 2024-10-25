class Footer {

    Elements = {

        btn :{
            SeInscrever: '#subscribe'
        },
        fill :{
            SeInscreverEmail: '#susbscribe_email'
        }
    }

    seIncrever(email) {
        cy.get(this.Elements.fill.SeInscreverEmail).type(email)
        cy.get(this.Elements.btn.SeInscrever).click()
    }

}

export default new Footer()