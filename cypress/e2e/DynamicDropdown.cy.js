describe('Dynamic dropdown functionality', () => {
    it('Select dynamic value from dropdown!', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('#BE_flight_origin_city').click().clear().type("New", {delay: 200})
        cy.get('.viewport span:last-child').each(($el, index, $list) => {
            cy.log($el.text())
            if($el.text() === 'NYC'){
                cy.wrap($el).click()   
            }

        })

    })

})

       
        
           

        
  