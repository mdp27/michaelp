const fs = require('fs-extra')

describe('The user is able to download', function() {
    beforeEach(() => {
        fs.emptyDirSync('cypress/downloads')
    })
    
    it('and confirm files are part of file system', function() {
        cy.visit('https://the-internet.herokuapp.com/download')
        cy.contains('File Downloader').should('be.visible')
        //cy.contains('sample_file.txt').click()
        cy.readFile("cypress/downloads/sample_file.txt").should('exist')
 
    })
})


/*
cy.readFile('.downloads/Drivinglicense.pdf').should('contain', 'XXX')
cy.readFile('.downloads/test_img.jpg').should('contain', 'XXX')
cy.readFile('.downloads/sample_file.txt').should('contain', 'XXX')
cy.readFile('.downloads/tictactoe.jpg').should('contain', 'XXX')
cy.contains('Drivinglicense.pdf').click()
cy.contains('test_img.jpg').click()
cy.contains('sample_file.txt').click()
cy.contains('tictactoe.jpg').click()
cy.contains('icon.png').click()
cy.readFile('.downloads/icon.png').should('contain', 'XXX')
*/
