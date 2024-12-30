class Buttons{
    elements={

        Button: ()=> cy.contains("Buttons"),

        //UI
        Buttons_Label: ()=> cy.get('[class="text-center"]'),
        Button1: ()=> cy.get('button[id="doubleClickBtn"]'),
        Button2: ()=> cy.get('button[id="rightClickBtn"]'),
        Button3: ()=> cy.get('button[class="btn btn-primary"]'),

        //Assertion
        Result1: ()=> cy.get('p[id="doubleClickMessage"]'),
        Result2: ()=> cy.get('p[id="rightClickMessage"]'),
        Result3: ()=> cy.get('p[id="dynamicClickMessage"]'),



    }
}
export default new Buttons;