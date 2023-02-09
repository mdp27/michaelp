describe('The user is able to validate elements', function() {  
    it('on the challenging DOM page', function() {
        cy.visit('/challenging_dom')
        cy.contains('Challenging DOM').should('be.visible')
        cy.get('.large-2.columns').children().eq(0).should('be.visible')
        cy.get('.large-2.columns').children().eq(0).invoke('text').should('match', /^\w{3}$/)
        cy.get('id=convas').should('be.visible')
        cy.get('id=canvas').invoke('text').should('match', 'Answer:' + /^\s\d{5}$/)

    })
})