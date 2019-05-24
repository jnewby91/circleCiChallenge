describe('My First Test', function(){
    //1.Visits the page
    it('Visits index.html', function(){
        cy.visit('')
    })
    //2.Shows the click button and the content paragraph should not exist
    it('shows Click Me button and the content <p> should not exist', function(){
        cy.get('button')
        cy.get('.content p').should('not.exist'); 
    })
    //3.Click the button
    it('Shows information after the button is clicked', function(){
        cy.get('button').click(); 
        cy.get('.content p').should('exist');  
    })
    //4.Confirm that information is displayed on the page
    it('Does not do much!', function(){
        expect(true).to.equal(true)
    })
})