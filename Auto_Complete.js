class Auto_Complete{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Auto_Complete_Button: ()=> cy.contains('Auto Complete').should('have.class','text'),
        Widgets_Button: ()=> cy.contains('Widgets'),

        Textbox_1: ()=> cy.get('[id="autoCompleteMultipleContainer"]'),
        Textbox_2: ()=> cy.get('[id="autoCompleteSingleContainer"]'),
        Results: ()=> cy.get('div[class="css-12jo7m5 auto-complete__multi-value__label"]'),
        Remove_Icon: ()=> cy.get('[class="css-xb97g8 auto-complete__multi-value__remove"]'),
        Menu: ()=> cy.get('.auto-complete__menu'),




    }



}
export default new Auto_Complete;