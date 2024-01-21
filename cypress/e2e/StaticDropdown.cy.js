describe('Static Dropdown functionality', () => {
    it('Select Value from dropdown!', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('Aarti80')
        cy.get("input[name='password']").type('Intel@123')
        cy.get("input[value='Log In']").click()
        cy.get("a[class='ng-binding']").click()
        cy.get("#month").select(11)
        cy.get("#month").select('March')
        cy.get("#month").select('December')
        cy.get("#transactionType").select(0)
        cy.get("#transactionType").select('Debit')
        cy.get("#transactionType").select('Credit')
        cy.get("input[value='Go']").click()
        

      })

    })