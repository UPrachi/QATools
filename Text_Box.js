class Text_Box{
    elements={

        TextBox: ()=> cy.contains("Text Box"),

        //UI
        UI_Text: ()=> cy.get('form[id="userForm"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),

        //Place Holders 
        Full_Name: ()=> cy.get('[id="userName"]'),
        Email: ()=> cy.get('[id="userEmail"]'),
        Current_Address: ()=> cy.get('[id="currentAddress"]'),

        //Functionality
        Permanent_Address: ()=> cy.get('[id="permanentAddress"]'),
        Submit_B: ()=> cy.get('[id="submit"]'),

        //Output
        Output: ()=> cy.get('[id="output"]'),
        Out_Name: ()=> cy.get('p[id="name"].mb-1'),
        Out_Email: ()=> cy.get('p[id="email"].mb-1'),
        Out_CAddress: ()=> cy.get('p[id="currentAddress"].mb-1'),
        Out_PAddress: ()=> cy.get('p[id="permanentAddress"].mb-1'),

    }
}
export default new Text_Box;