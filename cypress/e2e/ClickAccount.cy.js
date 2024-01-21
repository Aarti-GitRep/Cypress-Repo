describe('Account details functionality', () => {
    it('click on account number!', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('Aarti80')
        cy.get("input[name='password']").type('Intel@123')
        cy.get("input[value='Log In']").click()
        cy.get("a[class='ng-binding']").click()
        

      })

    })