const fs = require('fs-extra')

describe('The user is able to download', function() {
    beforeEach(() => {
        fs.emptyDirSync('cypress/downloads')
    })
    
    it('and confirm files are part of file system', function() {
        cy.visit('/download')
        cy.contains('File Downloader').should('be.visible')

        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.contains('data.txt').click()
          })
        cy.readFile('cypress/downloads/data.txt').should('exist')
 
    })
})


/*
cy.contains('icon.png').click()
cy.contains('Drivinglicense.pdf').click()
cy.contains('test_img.jpg').click()
cy.contains('tictactoe.jpg').click()
cy.readFile('.downloads/Drivinglicense.pdf').should(''exist')
cy.readFile('.downloads/test_img.jpg').should('exist')
cy.readFile('.downloads/sample_file.txt').should('exist')
cy.readFile('.downloads/tictactoe.jpg').should('exist')
*/
