describe('Login functionality', () => {
    it('Login new user!', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('Aarti80')
        cy.get("input[name='password']").type('Intel@123')
        cy.get("input[value='Log In']").click()

      })

    })