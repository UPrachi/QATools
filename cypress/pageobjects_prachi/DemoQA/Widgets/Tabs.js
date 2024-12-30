class Tabs{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        Tabs_button: ()=> cy.contains('Tabs').should('have.class','text'),

        What_tab: ()=> cy.contains('What'),
        Origin_tab: ()=> cy.contains('Origin'),
        Use_tab: ()=> cy.contains('Use'),
        More_tab: ()=> cy.contains('More'),
        What_Content: ()=> cy.get('[id="demo-tabpane-what"]'),
        Origin_Content: ()=> cy.get('[id="demo-tabpane-origin"]'),
        Use_Content: ()=> cy.get('[id="demo-tabpane-use"]')

        

    }

}
export default new Tabs;