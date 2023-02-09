describe('The user is authenticated', function() {
    it('when performing basic auth', function() {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            }
        })
        cy.contains('Congratulations! You must have the proper credentials.')
    })
    
    it('when performing standard login', function() {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id=username]').type('tomsmith')
        cy.get('input[id=password]').type('SuperSecretPassword!')
        cy.get('button[type=submit]').click().wait(500)
        cy.contains('Secure Area').should('be.visible')
        cy.get('a[href="/logout"]').should('exist')
    })
})
