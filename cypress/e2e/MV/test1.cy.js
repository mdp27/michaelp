describe('The user is authenticated', function() {
    it('when performing basic auth', function() {
        cy.visit('/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            }
        })
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible')
    })

    it('when performing standard login', function() {
        cy.visit('/login')
        cy.get('input[id=username]').type('tomsmith')
        cy.get('input[id=password]').type('SuperSecretPassword!')
        cy.get('button[type=submit]').click().wait(500)
        cy.contains('Secure Area').should('be.visible')
        cy.get('a[href="/logout"]').should('exist')
    })
})
    
describe('The user is not authenticated', function() {
    xit('when entering bad credentials on basic auth', function() {
        cy.visit('/basic_auth', {
            headers: {
                authorization: 'Basic ABCDEFG'
            },
            failOnStatusCode: false
        })
        cy.contains('Congratulations! You must have the proper credentials.').should('not.exist')
    })

    it('when entering a bad username on standard login', function() {
        cy.visit('/login')
        cy.get('input[id=username]').type('danmsmith')
        cy.get('input[id=password]').type('SuperSecretPassword!')
        cy.get('button[type=submit]').click().wait(500)
        cy.contains('Secure Area').should('not.exist')
        cy.contains('Login').should('be.visible')
        cy.contains('Your username is invalid!')
    })

    it('when entering a bad password on standard login', function() {
        cy.visit('/login')
        cy.get('input[id=username]').type('tomsmith')
        cy.get('input[id=password]').type('NotSoSuperSecretPassword!')
        cy.get('button[type=submit]').click().wait(500)
        cy.contains('Secure Area').should('not.exist')
        cy.contains('Login').should('be.visible')
        cy.contains('Your password is invalid!')
    })
})
