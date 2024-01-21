describe('Launch application', () => {
    it('Launch the app!', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('testnew')
        cy.get("input[type='password']").type('mypassword')

        
    })

  })