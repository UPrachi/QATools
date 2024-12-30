class Slider{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        Slider_Button: ()=> cy.contains('Slider').should('have.class','text'),
        
        UI_Slider: ()=> cy.get('[class="range-slider range-slider--primary"]'),
        Slider_TextBox: ()=> cy.get('[id="sliderValue"]'),
        Slider_Tooltip: ()=> cy.get('div[class="range-slider__tooltip__label"]'),




    }


}
export default new Slider;