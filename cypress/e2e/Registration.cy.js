describe('Registration functionality', () => {
    it('Register new user!', () => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click() 
        cy.get("input[id='customer.firstName']").type('Aarti')
        cy.get("input[id='customer.lastName']").type('Goel')
        cy.get("input[id='customer.address.street']").type('Nelson street')
        cy.get("input[id='customer.address.city']").type('Auckland')
        cy.get("input[id='customer.address.state']").type('CBD')
        cy.get("input[id='customer.address.zipCode']").type('1010')
        cy.get("input[id='customer.phoneNumber']").type('4107085')
        cy.get("input[id='customer.ssn']").type('5555')
        cy.get("input[id='customer.username']").type('Aarti80')
        cy.get("input[id='customer.password']").type('Intel@123')
       cy.get('#repeatedPassword').type('Intel@123')
       cy.get("input[value='Register']").click()

    })

  })