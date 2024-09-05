class Menu{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        Menu_button: ()=> cy.contains('Menu').should('have.class','text'),

        MenuItem_1: ()=> cy.contains('Main Item 1'),
        MenuItem_2: ()=> cy.contains('Main Item 2'),
        MenuItem_3: ()=> cy.contains('Main Item 3'),
        MenuId: ()=> cy.get('[id="nav"]'),

        Sub_Sub_Menu: ()=> cy.contains('SUB SUB LIST »'),




    }



}
export default new Menu;