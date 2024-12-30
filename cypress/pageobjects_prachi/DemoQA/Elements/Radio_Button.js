
class Radio_Button{
    elements={
        
        Radio: ()=> cy.contains("Radio Button"),
        Label: ()=> cy.get('h1[class="text-center"]'),
        //UI
        UI_Label: ()=> cy.get('[class="text-center"]'),
        UI_Radio: ()=> cy.get('div[class="custom-control custom-radio custom-control-inline"]'),
        UI_No: ()=> cy.get('div[class="custom-control disabled custom-radio custom-control-inline"]'),

        //Functionality
        Yes_Radio: ()=> cy.contains("Yes"),   
        Impressive_Radio: ()=> cy.contains("Impressive"),
        No_Radio: ()=> cy.get('[id="noRadio"]'),

        //Result
        Result: ()=> cy.get('span[class="text-success"]'),
    }
}
export default new Radio_Button;