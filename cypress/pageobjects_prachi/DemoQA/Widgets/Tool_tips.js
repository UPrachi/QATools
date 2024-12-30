class Tool_tips{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        ToolTip_button: ()=> cy.contains('Tool Tips').should('have.class','text'),

        Button: ()=> cy.contains('Hover me to see'),
        TextBox: ()=> cy.get('[id="toolTipTextField"]'),
        Contrary_Link: ()=> cy.contains('Contrary'),
        Link2: ()=> cy.contains('1.10.32'),
        
        Tooltip_content: ()=> cy.get('[class="tooltip-inner"]'),
        


    }

}
export default new Tool_tips;