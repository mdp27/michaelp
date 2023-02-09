describe('Confirm page loads without error', function () {
    it('when visiting javascript error page', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_error')
        cy.contains('This page has a JavaScript error in the onload event.')
    })
})