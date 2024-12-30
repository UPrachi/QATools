class Progress_Bar{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        ProgressBar_Button: ()=> cy.contains('Progress Bar').should('have.class','text'),

        ProgressBar: ()=> cy.get('div#progressBar.progress'),
        StartStop_Button: ()=> cy.get('#startStopButton'),
        Reset_Button: ()=> cy.get('#resetButton'),




    }



}
export default new Progress_Bar;