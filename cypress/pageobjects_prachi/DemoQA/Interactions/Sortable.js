class Sortable{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Interactions_Button: ()=> cy.contains('Interactions'),
        Sortable_button: ()=> cy.contains('Sortable').should('have.class','text'),

        List_section: ()=> cy.contains('List'),
        Grid_section: ()=> cy.contains('Grid'),

        List_Options: ()=> cy.get('.tab-content').find('.list-group-item'),
        Grid_Options: ()=> cy.get('.create-grid').find('.list-group-item'),
        

    }

}
export default new Sortable;