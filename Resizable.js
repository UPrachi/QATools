class Resizable{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Interactions_Button: ()=> cy.contains('Interactions'),
        Resizable_Button: ()=> cy.contains('Resizable').should('have.class','text'),

        Limited_Area: ()=> cy.get('.constraint-area').find('#resizableBoxWithRestriction'),
        Unlimited_Area: ()=> cy.get('#resizable'),
    }
}
export default new Resizable;