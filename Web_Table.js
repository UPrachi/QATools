class Web_Table{
    elements={
       
        Label_WebTable: ()=> cy.get('h1[class="text-center"]'),     
        WebTable: ()=> cy.contains('Web Tables'),
        Add_Button: ()=> cy.contains('Add'),
        Submit_Button: ()=> cy.contains('Submit'),
        Searchbar: ()=> cy.get('input#searchBox'),

        Columns: ()=> cy.get('div[class="rt-resizable-header-content"]'),
        Edit: ()=> cy.get('span[id="edit-record-1"]'),
        Delete: ()=> cy.get('span[id="delete-record-1"]'),
        First: ()=> cy.get('[class="rt-tr -odd"]'),
        Second: ()=> cy.get('[class="rt-tr -even"]'),

        Registration_Form: ()=> cy.get('div[class="modal-content"]'),
        Label_Form: ()=> cy.get('div[class="modal-header"]'),
        Fields_Form:()=> cy.get('label[class="form-label"]'),
        Result_Table: ()=> cy.get('div[class="rt-tbody"]'),
        No_Result: ()=> cy.get('div[class="rt-noData"]'),
        First_Raw: ()=> cy.get('div[class="rt-tr-group"]'),
        Edit_Dialog: ()=> cy.get('[class="mt-2 row"]'),
        First_Name: ()=> cy.get('#firstName'),
        Last_Name: ()=> cy.get('#lastName'),
        Email: ()=> cy.get('#userEmail'),
        age: ()=> cy.get('#age'),
        Salary: ()=> cy.get('#salary'),
        Department: ()=> cy.get('#department'),


        //Sorting
        Header: ()=> cy.get('div[class="rt-th rt-resizable-header -cursor-pointer"]'),
        Pagination: ()=> cy.get('[class="-pageJump"]'),
        close: ()=> cy.contains('Close'),
        Previous: ()=> cy.contains('Previous'),
        Next: ()=> cy.contains('Next'),

    
    }

    Add_User(){
     //Add new data in table.
     const Data = [
        { First_Name: 'John Doe', Last_Name: 'hjk', Age: '90', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hhjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hhjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hhjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hhjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
        { First_Name: 'John Doe', Last_Name: 'hhjk', Age: '50', Email:'xyz@gmail.com' ,Salary:'789' ,Department:'QA' },
       
    ];

    Data.forEach((data, index) => {
        // Fill out the form
        this.elements.First_Name().clear().type(data.First_Name);
        this.elements.Last_Name().clear().type(data.Last_Name);
        this.elements.Email().clear().type(data.Email);
        this.elements.age().clear().type(data.Age);
        this.elements.Salary().clear().type(data.Salary);
        this.elements.Department().clear().type(data.Department);
        this.elements.Submit_Button().click()
        this.elements.Add_Button().click()
})
     //Close the "Registartion form" dialog.
    this.elements.close().click()   

    }
}
export default new Web_Table;