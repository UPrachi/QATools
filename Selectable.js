class Selectable{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Interactions_Button: ()=> cy.contains('Interactions'),
        Selectable_Button: ()=> cy.contains('Selectable').should('have.class','text'),

        List_section: ()=> cy.contains('List'),
        Grid_section: ()=> cy.contains('Grid'),

        List_Options: ()=> cy.get('#verticalListContainer').find('.mt-2'),
        Grid_Options: ()=> cy.get('#gridContainer').find('.list-group-item'),

    }

}
export default new Selectable;