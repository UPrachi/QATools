class Check_Box{
    elements={
        
        UI_Check: ()=> cy.get('div[id="tree-node"]'),

        //UI
        Toggle: ()=> cy.get('button[title="Toggle"]'),
        Collapse_all: ()=> cy.get('button[title="Collapse all"]'),
        expand_all  : () => cy.get('[class="rct-option rct-option-expand-all"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),

        //Functionality
        Check_All : ()=> cy.get('span[class="rct-checkbox"]'),
        Uncheck_All: ()=> cy.get('svg[class="rct-icon rct-icon-check"]'),
        Each_CheckBox: ()=> cy.get('input[type="checkbox"]'),
        Checkbox: ()=> cy.contains('Check Box'),
        
    }
}
export default new Check_Box;