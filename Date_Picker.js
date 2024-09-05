class Date_Picker{
    elements={

        Label: ()=> cy.get('h1[class="text-center"]'),
        Widgets_Button: ()=> cy.contains('Widgets'),
        DatePicker_Button: ()=> cy.contains('Date Picker').should('have.class','text'),

        Select_Date: ()=> cy.get('input[id="datePickerMonthYearInput"]'),
        Select_DateTime: ()=> cy.get('input[id="dateAndTimePickerInput"]'),

        //Date picker
        Month: ()=> cy.get('[class="react-datepicker__month-select"]'),
        Year: ()=> cy.get('[class="react-datepicker__year-select"]'),
        Date: ()=>cy.get('.react-datepicker__day--005[aria-label="Choose Saturday, January 5th, 2002"]'),

        //Date & time picker.
        Select_Month: ()=> cy.get('[class="react-datepicker__month-read-view--down-arrow"]'),
        Select_Year: ()=> cy.get('[class="react-datepicker__year-read-view--down-arrow"]'),
        Month_Dropdown: ()=> cy.get('[class="react-datepicker__month-option"]'),
        Year_Dropdown: ()=> cy.get('[class="react-datepicker__year-option"]'),
        PreviousYear_Button: ()=> cy.get('.react-datepicker__navigation--years-previous'),
        Date_Selection: ()=> cy.get('[class="react-datepicker__week"]').find('[aria-label="Choose Saturday, January 5th, 2002"]'),
        Select_Time: ()=> cy.contains('21:30'),


    }



}
export default new Date_Picker;