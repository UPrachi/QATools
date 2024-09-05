class Droppable{
    elements={
        
        Label: ()=> cy.get('h1[class="text-center"]'),
        Interactions_Button: ()=> cy.contains('Interactions'),
        Droppable_Button: ()=> cy.contains('Droppable').should('have.class','text'),

        Simple_section: ()=> cy.contains('Simple'),
        Draggable_element: ()=> cy.get('#draggable'),

        Droppable_element: ()=> cy.get('[id="droppable"]'),

        Accept_section: ()=> cy.contains('Accept'),
        Acceptable_element: ()=> cy.get('#acceptable'),
        Notacceptable_element: ()=> cy.get('#notAcceptable'),

        PreventPropogation_section: ()=> cy.contains('Prevent Propogation'),
        OuterGreedy_area: ()=> cy.get('#greedyDropBox'),
        InnerGreedy_area: ()=> cy.get('#greedyDropBoxInner'),
        NotgreedyOuter_area: ()=> cy.get('#notGreedyDropBox'),
        NotGreedyInner_area: ()=> cy.get('#notGreedyInnerDropBox'),
        Dropped_element: ()=> cy.get('#dragBox'),

        RevertDraggable_section: ()=> cy.contains('Revert Draggable'),
        Revertable_element: ()=> cy.get('#revertable'),
        Nonrevertable_element: ()=> cy.get('#notRevertable'),


    }
}
export default new Droppable;