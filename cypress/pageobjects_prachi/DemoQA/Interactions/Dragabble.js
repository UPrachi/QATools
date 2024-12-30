class Dragabble{
    elements={
        
        Label: ()=> cy.get('h1[class="text-center"]'),
        Interactions_Button: ()=> cy.contains('Interactions'),
        Dragabble_button: ()=> cy.contains('Dragabble').should('have.class','text'),
 
        Simple_Section: ()=> cy.contains('Simple'),
        Dragabble_element: ()=> cy.get('#dragBox'),
        Dropped_Area: ()=> cy.get('.dragable-container'),

        AxisRestricted_Section: ()=> cy.contains('Axis Restricted'),
        restrictedX: ()=> cy.get('#restrictedX'),
        restrictedY: ()=> cy.get('#restrictedY'),

        ContainerRestricted_Section: ()=> cy.contains('Container Restricted'),
        Box_element: ()=> cy.contains("I'm contained within the box"),
        Container_box: ()=> cy.get('#containmentWrapper'),
        Text_element: ()=> cy.contains("I'm contained within my parent"),
        Container2_box: ()=> cy.get('.draggable.ui-widget-content.m-3'),

        CursorStyle_Section: ()=> cy.contains('Cursor Style'),
        cursorCenter: ()=> cy.get('#cursorCenter'),
        cursorTopLeft: ()=> cy.get('#cursorTopLeft'),
        cursorBottom: ()=> cy.get('#cursorBottom'),







    }

}
export default new Dragabble;