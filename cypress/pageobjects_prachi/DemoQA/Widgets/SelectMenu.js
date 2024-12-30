class SelectMenu{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        SelectMenu_button: ()=> cy.contains('Select Menu').should('have.class','text'),

        Select_Value: ()=> cy.get('#withOptGroup'),
        Select_One: ()=> cy.get('#selectOne'),
        Select_Menu: ()=> cy.get('#oldSelectMenu'),
        MultiSelect_Dropdown: ()=> cy.get('.css-1hwfws3'),  
        StandardMulti_Select: ()=> cy.get('#cars'),

        //Select Value
        Select_Dropdown: ()=> cy.get('[class=" css-26l3qy-menu"]'),
        Remove_Icon: ()=> cy.get('.css-19bqh2r'),







    }


}
export default new SelectMenu;