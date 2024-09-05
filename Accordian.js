class Accordian{
    elements={
        
        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        Accordian_Button: ()=> cy.get('[id="item-0"]'),

        Collapse_menu: ()=> cy.get('div.card'),
        Expanded_menu: ()=> cy.get('[class="collapse show"]'),









    }


}
export default new Accordian;