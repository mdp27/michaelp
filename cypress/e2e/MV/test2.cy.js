describe('Confirm all images display', function() {
    it('on the broken images page', function() {
        cy.visit('/broken_images')
        cy.get('img').each(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            expect($img[0].naturalHeight).to.be.greaterThan(0)
        })
    })
})
