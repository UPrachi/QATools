class Browser_Windows{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'), 
        Button1: ()=> cy.contains('Alerts, Frame & Windows'),
        Buttons2: ()=> cy.contains('Browser Windows').should('have.class','text'),
        New_Tab: ()=> cy.contains('New Tab'),
        New_Window: ()=> cy.contains('New Window'),
        New_Window_Message: ()=> cy.contains('New Window Message'),


    }

}
export default new Browser_Windows;
