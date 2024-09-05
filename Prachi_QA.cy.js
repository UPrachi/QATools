import TestSite from "../../pageobjects_prachi/TestSite";
import Text_Box from "../../pageobjects_prachi/DemoQA/Elements/Text_Box";
import Check_Box from "../../pageobjects_prachi/DemoQA/Elements/Check_Box";
import Radio_Button from "../../pageobjects_prachi/DemoQA/Elements/Radio_Button";
import Web_Table from "../../pageobjects_prachi/DemoQA/Elements/Web_Table";
import Buttons from "../../pageobjects_prachi/DemoQA/Elements/Buttons";
import Broken_Links_Images from "../../pageobjects_prachi/DemoQA/Elements/Broken_Links_Images";
import Links from "../../pageobjects_prachi/DemoQA/Elements/Links";
import Upload_Download from "../../pageobjects_prachi/DemoQA/Elements/Upload_Download";
import Dynamic_Property from "../../pageobjects_prachi/DemoQA/Elements/Dynamic_Property";
import Form from "../../pageobjects_prachi/DemoQA/Forms/Form";
import Browser_Windows from "../../pageobjects_prachi/DemoQA/Alerts, Frame & Windows/Browser_Windows";
import Alerts from "../../pageobjects_prachi/DemoQA/Alerts, Frame & Windows/Alerts";
import Frames from "../../pageobjects_prachi/DemoQA/Alerts, Frame & Windows/Frames";
import Nested_Frames from "../../pageobjects_prachi/DemoQA/Alerts, Frame & Windows/Nested_Frames";
import Modal_Dialog from "../../pageobjects_prachi/DemoQA/Alerts, Frame & Windows/Modal_Dialog";
import Accordian from "../../pageobjects_prachi/DemoQA/Widgets/Accordian";
import Auto_Complete from "../../pageobjects_prachi/DemoQA/Widgets/Auto_Complete";
import Date_Picker from "../../pageobjects_prachi/DemoQA/Widgets/Date_Picker";
import Slider from "../../pageobjects_prachi/DemoQA/Widgets/Slider";
import Progress_Bar from "../../pageobjects_prachi/DemoQA/Widgets/Progress_Bar";
import Tabs from "../../pageobjects_prachi/DemoQA/Widgets/Tabs";
import Tool_tips from "../../pageobjects_prachi/DemoQA/Widgets/Tool_tips";
import Menu from "../../pageobjects_prachi/DemoQA/Widgets/Menu";
import SelectMenu from "../../pageobjects_prachi/DemoQA/Widgets/SelectMenu";
import Sortable from "../../pageobjects_prachi/DemoQA/Interactions/Sortable";
import Selectable from "../../pageobjects_prachi/DemoQA/Interactions/Selectable";
import Resizable from "../../pageobjects_prachi/DemoQA/Interactions/Resizable";
import Droppable from "../../pageobjects_prachi/DemoQA/Interactions/Droppable";
import Dragabble from "../../pageobjects_prachi/DemoQA/Interactions/Dragabble";
import Login from "../../pageobjects_prachi/DemoQA/Bookstore_Application/Login";
import 'cypress-drag-drop';


//function to block add
function ignore_ad() {
    cy.intercept('GET', 'https://oajs.openx.net/**', (req) => {
        // Return a response object with status 500 to indicate the request was blocked
        req.reply({
            status: 500,
            body: 'Blocked by Cypress',
            headers: {
                'x-cypress-blocked': 'true'
            }
        });
    });
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Element --> Text Box:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Text box" section.
        Text_Box.elements.TextBox().click()

    })

    it('T1-UI check of "Text Box" section.', () => {

        // To verify the label of "Text Box" section.
        Text_Box.elements.Label().should('be.contain','Text Box')

        //Assert that textboxes are visible.
        Text_Box.elements.UI_Text().should('contain', 'Full Name').and('contain', 'Email').and('contain', 'Current Address').and('contain', 'Permanent Address').and('contain', 'Submit');

    })

    it('T2-To verify Placeholders of each field.', () => {

        //Assert placeholders of respective fields.
        Text_Box.elements.Full_Name().should('have.attr', 'placeholder', 'Full Name')
        Text_Box.elements.Email().should('have.attr', 'placeholder', 'name@example.com')
        Text_Box.elements.Current_Address().should('have.attr', 'placeholder', 'Current Address')
    })


    it('T3-To verify all textboxes are editable.', () => {

        // Click on "Full Name" textbox.
        Text_Box.elements.Full_Name().click();

        // Assert that the cursor is visible in the Full Name.
        Text_Box.elements.Full_Name().should('have.focus');

        // Click on "Email" textbox.
        Text_Box.elements.Email().click();

        // Assert that the cursor is visible in the Email.
        Text_Box.elements.Email().should('have.focus');

        // Click on "Current_Address" textbox.
        Text_Box.elements.Current_Address().click();

        // Assert that the cursor is visible in the Current_Address.
        Text_Box.elements.Current_Address().should('have.focus');

        // Click on "Permanent_Address" textbox.
        Text_Box.elements.Permanent_Address().click();

        // Assert that the cursor is visible in the Permanent_Address.
        Text_Box.elements.Permanent_Address().should('have.focus');

        //Assert that "Submit" button is clickable.
        Text_Box.elements.Submit_B().should('be.enabled')
    })

    it('T4-To verify the result of submitted data.', () => {

        //Enter "Full Name".
        Text_Box.elements.Full_Name().type('Prachi')

        //Enter "Email".
        Text_Box.elements.Email().type('prachi.u@sgligis.com')

        //Enter "Current Address".
        Text_Box.elements.Current_Address().type('Thaltej,Ahmedabad')

        //Enter "permanent address".
        Text_Box.elements.Permanent_Address().type('Ahmedabad')

        //Submit the form.
        Text_Box.elements.Submit_B().click()

        //Assert that Output get generated.
        Text_Box.elements.Output().should('be.visible')

        //Assert that entered details are visible in "Output" section.
        Text_Box.elements.Out_Name().should('contain', "Prachi")
        Text_Box.elements.Out_Email().should('contain', "prachi.u@sgligis.com")
        Text_Box.elements.Out_CAddress().should('contain', "Thaltej,Ahmedabad")
        Text_Box.elements.Out_PAddress().should('contain', "Ahmedabad")

    })

})

///////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Check Box:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Checkbox" screen.
        Check_Box.elements.Checkbox().click()
    })

    it('T1-UI check of "Check Box" section.', () => {

        //To verify the label of "Check Box" section.
        Check_Box.elements.Label().should('be.contain','Check Box')

        //Buttons. 
        Check_Box.elements.Toggle().should('be.visible')
        Check_Box.elements.expand_all().should('be.visible')
        Check_Box.elements.Collapse_all().should('be.visible')

    })

    it('T2-To verify that all buttons are working.', () => {

        //To verify "Toggle" is working.
        Check_Box.elements.Toggle().should('be.enabled')

        //To verify "Expand all" button is working.
        Check_Box.elements.expand_all().should('be.enabled')

        //To verify "Collapse all" button is working.
        Check_Box.elements.Collapse_all().should('be.enabled')

    })

    it('T3-To verify that all checkboxes got checked.', () => {

        //Expand all tree elements.
        Check_Box.elements.expand_all().click()

        //Check all tree elements.
        Check_Box.elements.Check_All().eq(0).click()

        //Assert that all checkboxes got checked.
        Check_Box.elements.Uncheck_All().should('be.visible')

        //Uncheck all checkboxes.
        Check_Box.elements.Uncheck_All().eq(0).click()

        //Assert that all checkboxes got unchecked.
        Check_Box.elements.Check_All().should('be.visible')
    })

    it('T4 - To verify the result of each checked checkbox.', () => {

        //Expand all tree elements.
        Check_Box.elements.expand_all().click();

        //Loop through each checkbox.
        Check_Box.elements.Each_CheckBox().each(($checkbox, index) => {

            //Click on the checkbox.
            cy.wrap($checkbox).click({ force: true }).should('be.checked');

            //Get the label text associated with the checkbox.
            cy.get('label').eq(index).invoke('text').then(label => {
                const normalizedLabelText = label.toLowerCase().replace(/\s/g, '').replace('.doc', '');

                //Get the output text and normalize it.
                cy.get('div#result').invoke('text').then(outputText => {
                    const normalizedOutputText = outputText.toLowerCase().replace(':', ' ');

                    //Assert that the normalized label text matches the normalized output text.
                    expect(normalizedOutputText).to.contain(normalizedLabelText);
                })
            })

            // Uncheck the checkbox for the next iteration.
            cy.wrap($checkbox).click({ force: true });
        })

    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Radio Button:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Radio Button" screen.
        Radio_Button.elements.Radio().click()
    })

    it('T1-UI check of "Radio Button" section.', () => {

        //To verify the label of "Radio button" section.
        Radio_Button.elements.Label().should('be.contain','Radio Button')

        //Assert that "Radio button" section should contain label "Radio Button".
        Radio_Button.elements.UI_Label().should('be.contain', 'Radio Button')

        //Assert that "Radio button" section should contain button "Yes".
        Radio_Button.elements.UI_Radio().should('contain', 'Yes')

        //Assert that "Radio button" section should contain button "Impressive".
        Radio_Button.elements.UI_Radio().should('contain', 'Impressive')

        //Assert that "Radio button" section should contain button "No".
        Radio_Button.elements.UI_No().should('contain', 'No')

    })

    it('T2-To verify that given radio buttons are clickable.', () => {

        //To verify that "Yes" radio button is clickable.
        Radio_Button.elements.UI_Radio().should('have.not.attr', 'disabled')
        //Select "Yes" option.
        Radio_Button.elements.Yes_Radio().click()

        //Assert that "Yes" should be visible in output.
        Radio_Button.elements.Result().should('be.contain', 'Yes')

        //To verify that "Impressive" radio button is clickable.
        Radio_Button.elements.UI_Radio().should('not.have.attr', 'disabled')

        //Select "Impressive" option.
        Radio_Button.elements.Impressive_Radio().click()

        //Assert that "Impressive" should be visible in output.
        Radio_Button.elements.Result().should('be.contain', 'Impressive')

        //To verify that "No" radio button is clickable.
        Radio_Button.elements.No_Radio().should('be.disabled');

        //Select "No" option.
        Radio_Button.elements.No_Radio().click({ force: true })

    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Web Tables:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Web Table" screen.
        Web_Table.elements.WebTable().click()
    })

    it('T1-UI check of "Web Table" section.', () => {

        //To verify the label of "Web table" section.
        Web_Table.elements.Label_WebTable().should('be.contain', 'Web Tables')

        //Assert that "Add" button should given.
        Web_Table.elements.Add_Button().should('be.visible')

        //Assert that "Searchbar" should given.
        Web_Table.elements.Searchbar().should('be.visible')

        //Assert that respective "Columns" should be displayed in table.
        Web_Table.elements.Columns().should('contain', 'First Name').and('contain', 'Last Name').and('contain', 'Age').and('contain', 'Email').and('contain', 'Salary').and('contain', 'Department').and('contain', 'Action');

        //Assert that actions buttons should given.
        Web_Table.elements.Edit().should('have.attr', 'title', 'Edit')
        Web_Table.elements.Delete().should('have.attr', 'title', 'Delete');

    })
    it('T2-UI check of "Registration Form" dialog.', () => {

        //Click on "Add" button.
        Web_Table.elements.Add_Button().click()

        //Assert that "Registration Form" dialog should open.
        Web_Table.elements.Registration_Form().should('be.visible')

        //To verify that form should contains the Label "Registration Form".
        Web_Table.elements.Label_Form().should('be.contain', 'Registration Form')

        //To verify that "Registration Form" dialog should contain respective fields.
        Web_Table.elements.Fields_Form().should('contain', 'First Name').and('contain', 'Last Name').and('contain', 'Age').and('contain', 'Email').and('contain', 'Salary').and('contain', 'Department');

        //To verify that "Submit" buttons is given in "Registration Form" dialog.
        Web_Table.elements.Submit_Button().should('be.visible')

    })

    it('T3-To verify "Add new" registration form functionality.', () => {

        //Count initial rows.
        Web_Table.elements.Result_Table().its('length').as('initialRowCount');

        //Click on "Add" button.
        Web_Table.elements.Add_Button().click()

        //Enter the data "Registration Form".
        const Data = [
            { First_Name: 'Prachi', Last_Name: 'Upadhyay', Age: '22', Email: 'prachi.u@sgligis.com', Salary: '1', Department: 'QA' },

        ];

        Data.forEach((data, index) => {

            // Fill out the form.
            Web_Table.elements.First_Name().clear().type(data.First_Name);
            Web_Table.elements.Last_Name().clear().type(data.Last_Name);
            Web_Table.elements.Email().clear().type(data.Email);
            Web_Table.elements.age().clear().type(data.Age);
            Web_Table.elements.Salary().clear().type(data.Salary);
            Web_Table.elements.Department().clear().type(data.Department);
        })

        Web_Table.elements.Submit_Button().click()

        //Assert that submitted form should added to the table.
        cy.get('@initialRowCount').then(initialRowCount => {

            // Assert each submitted data in result table.   
            Web_Table.elements.Result_Table().should('contain', 'Prachi').and('contain', 'Upadhyay').and('contain', 'prachi.u@sgligis.com').and('contain', '22').and('contain', '1').and('contain', 'QA');
        })
    })

    it('T4-To verify "Search" functionality', () => {

        //Click on searchbar.
        Web_Table.elements.Searchbar().click()

        // Store the search data in variable.
        const search_data = 'XYz';

        //Type the search data in searchbar.
        Web_Table.elements.Searchbar().type(search_data);

        cy.wait(3000);
        Web_Table.elements.Result_Table().eq(0).invoke('text').then((text) => {

            if (text.trim() == '') {
                cy.log('Table body is empty');
                Web_Table.elements.No_Result().should('contain', 'No rows found');

                //Iterate over each row
            } else {
                Web_Table.elements.Result_Table().each((row) => {

                    //Invoke text present inside each row
                    cy.wrap(row).invoke('text').then((text) => {

                        //text.trim() === '' is used to check if the text content of the row is empty after removing any leading or trailing whitespace characters.
                        if (text.includes(search_data) || text.trim() === '') {

                            //Valid result found
                            cy.log('Valid search result or blank row')
                        } else {

                            //Fail test if the condition is not met
                            cy.fail('Invalid search results');
                        }
                    })
                })
            }
        })
    })

    it('T5-To verify "Edit" functionality.', () => {

        //Click on "Edit" button.
        Web_Table.elements.Edit().click()

        //Assert that registration form should open with respective existing data.

        //Get the data from selected row.
        Web_Table.elements.First_Raw().eq(0).then($row => {

            //Extract the data from each column for 1st row.
            const columns = $row.find('td:eq(0)').text();

            //Compare column data with respective field.
            Web_Table.elements.Edit_Dialog().should('have.value', columns);

            //Enter the "Registration Form".
            const Data = [
                { First_Name: 'John Doe', Last_Name: 'hjk', Age: '90', Email: 'xyz@gmail.com', Salary: '789', Department: 'QA' },

            ];

            Data.forEach((data, index) => {
                // Fill out the form.
                Web_Table.elements.First_Name().clear().type(data.First_Name);
                Web_Table.elements.Last_Name().clear().type(data.Last_Name);
                Web_Table.elements.Email().clear().type(data.Email);
                Web_Table.elements.age().clear().type(data.Age);
                Web_Table.elements.Salary().clear().type(data.Salary);
                Web_Table.elements.Department().clear().type(data.Department);
            })

            Web_Table.elements.Submit_Button().click()

            //Assert that edited data should be visible in respective row.
            Web_Table.elements.Edit_Dialog().should('have.value', columns);

        })

    })


    it('T6-To verify "Delete" functionality.', () => {

        let row1;

        // Get the second row of the table and store it in a variable
        Web_Table.elements.Second().eq(0).then($row => {
            row1 = $row;  
        });

        //Click on "Delete" button.      
        Web_Table.elements.Delete().click()

        let row0;

        // Get the first row of the table and store it in a variable.
        Web_Table.elements.First().eq(0).then($row => {
            row0 = $row;
        });

        if (expect(row0).to.equal(row1)) {
            cy.log('Test case pass!');
        }
        else {
            cy.log('Test case fail!');
        }

    })


    it('T7-To verify the "sorting" functionality.', () => {

        //Sort the column.
        Web_Table.elements.Header().each(($col, index) => {

            // Click on the column header to sort in ascending order
            cy.wrap($col).click();

            Cypress.Commands.add('assertTableSortedAsc', (columnIndex) => {

                // Assert that the table is sorted correctly in ascending order
                assertTableSortedAsc(index);

                Cypress.Commands.add('assertTableSortedAsc', (columnIndex) => {
                    cy.get('tbody tr td:nth-child(' + (columnIndex + 1) + ')').invoke('text').then(columnValues => {
                        for (let i = 0; i < columnValues.length - 1; i++) {
                            expect(columnValues[i]).to.be.lessThanOrEqual(columnValues[i + 1]);
                        }
                    });
                });
            })
        })
    })

    it('T8-To verify the pagination functionality', () => {

        //Open Registration form dialog.
        Web_Table.elements.Add_Button().click()

        //Add new users to the registration form.
        Web_Table.Add_User();

        //Click on "Pagination" field.
        Web_Table.elements.Pagination().click()
        cy.wait(7000)

        //Enter page number.
        Web_Table.elements.Pagination().type('2{enter}');
        cy.wait(5000)

        //Click on "Previous" button.
        Web_Table.elements.Previous().click()

        //Click on "Next" button.
        Web_Table.elements.Next().click()

    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements -->  Buttons:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Buttons" screen.
        Buttons.elements.Button().click()
    })

    it('T1-UI check of "Buttons" section.', () => {

        //Assert the Label of "Buttons" section.
        Buttons.elements.Buttons_Label().should('be.visible')

        //Assert that respective 3 buttons should be visible.
        Buttons.elements.Button1().should('be.visible')
        Buttons.elements.Button2().should('be.visible')
        Buttons.elements.Button3().eq(2).should('be.visible')
    })

    it('T2-To verify "Double click" on button.', () => {

        //Double click on button.
        Buttons.elements.Button1().dblclick()

        //Assert the output of double click.
        Buttons.elements.Result1().should('be.visible')
        Buttons.elements.Result1().should('be.contain', 'You have done a double click')

    })

    it('T3-To verify "Right click" on button.', () => {

        //Right click on button.
        Buttons.elements.Button2().rightclick()

        //Assert the output of right click.
        Buttons.elements.Result2().should('be.visible')
        Buttons.elements.Result2().should('be.contain', 'You have done a right click')

    })

    it('T4-To verify "Right click" on button.', () => {

        //Click on button.
        Buttons.elements.Button3().eq(2).click()

        //Assert the output of dynamic click.
        Buttons.elements.Result3().should('be.visible')
        Buttons.elements.Result3().should('be.contain', 'You have done a dynamic click')

    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Links:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Lnks" screen.
        Links.elements.Link().click()

    })

    it('T1-UI check of "Links" section.', () => {

        //Assert the Label of "Links" section.
        Links.elements.Link().should('be.visible')

        //Assert that two sections shouold be displayed.
        Links.elements.Section1().should('be.visible')
        Links.elements.Section2().should('be.visible')

        //Assert that following links should be given.
        Links.elements.Home().should('be.visible')
        Links.elements.Dynamic().should('be.visible')

        Links.elements.Created().should('be.visible')
        Links.elements.No_Content().should('be.visible')
        Links.elements.Moved().should('be.visible')
        Links.elements.Bad_Request().should('be.visible')
        Links.elements.Unauthorized().should('be.visible')
        Links.elements.Forbidden().should('be.visible')
        Links.elements.Not_Found().should('be.visible')

    })

    it('T2-To verify that "Home" link is clickable.', () => {

        //Link should be enable.
        Links.elements.Home().should('be.visible').should('not.have.attr', 'disabled');

    })

    it('T3-To verify the "Home" link.', () => {

        //Home link should be redirected to the new tab.
        Links.elements.Home().invoke('removeAttr', 'target').click();
        cy.window().then(Compare => {
            expect(Compare.location.href).to.not.equal('https://demoqa.com/links');
        });
    })

    // it('T4-To verify that "Dynamic" link is clickable.', ()=> {
    //     Links.elements.Dynamic().should('be.visible').should('not.have.attr', 'disabled');
    // })

    it('T5-To verify the "Dynamic" link.', () => {

        //Dynamic link should be redirected to the new tab.
        Links.elements.Dynamic().invoke('removeAttr', 'target').click();
        cy.window().then(Compare => {
            expect(Compare.location.href).to.not.equal('https://demoqa.com/links');
        });
    })

    it('T6-To verify api call for "Created" link.-201', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_Created');

        //Click on link.
        Links.elements.Created().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_Created', { timeout: 10000 }).then((Assert_Created) => {
            expect(Assert_Created.response.statusCode).to.equal(201);
            expect(Assert_Created.response.statusMessage).to.equal('Created');
            expect(Assert_Created.request.method).to.equal('GET');
        });

    })

    it('T7-To verify api call for "No content" link.-204', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_noContent');

        //Click on link.
        Links.elements.No_Content().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_noContent', { timeout: 10000 }).then((Assert_NoContent) => {
            expect(Assert_NoContent.response.statusCode).to.equal(204);
            expect(Assert_NoContent.response.statusMessage).to.equal('No Content');
            expect(Assert_NoContent.request.method).to.equal('GET');
        });

    })


    it('T8-To verify api call for "Moved" link.-301', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_Moved');

        //Click on link.
        Links.elements.Moved().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_Moved', { timeout: 10000 }).then((Assert_Moved) => {
            expect(Assert_Moved.response.statusCode).to.equal(301);
            expect(Assert_Moved.response.statusMessage).to.equal('Moved Permanently');
            expect(Assert_Moved.request.method).to.equal('GET');
        });

    })

    it('T9-To verify api call for "Bad request" link.-400 ', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_BadRequest');

        //Click on link.
        Links.elements.Bad_Request().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_BadRequest', { timeout: 10000 }).then((Assert_BadRequest) => {
            expect(Assert_BadRequest.response.statusCode).to.equal(400);
            expect(Assert_BadRequest.response.statusMessage).to.equal('Bad Request');
            expect(Assert_BadRequest.request.method).to.equal('GET');
        });
    })

    it('T10-To verify api call for "Unauthorized" link.-401 ', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_Unauthorized');

        //Click on link.
        Links.elements.Unauthorized().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_Unauthorized', { timeout: 10000 }).then((Assert_Unauthorized) => {
            expect(Assert_Unauthorized.response.statusCode).to.equal(401);
            expect(Assert_Unauthorized.response.statusMessage).to.equal('Unauthorized');
            expect(Assert_Unauthorized.request.method).to.equal('GET');
        });
    })

    it('T11-To verify api call for "Forbidden" link.-403', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_Forbidden');

        //Click on link.
        Links.elements.Forbidden().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_Forbidden', { timeout: 10000 }).then((Assert_Forbidden) => {
            expect(Assert_Forbidden.response.statusCode).to.equal(403);
            expect(Assert_Forbidden.response.statusMessage).to.equal('Forbidden');
            expect(Assert_Forbidden.request.method).to.equal('GET');
        });
    })

    it('T12-To verify api call for "Not Found" link.-404', () => {

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/*',
            hostname: 'demoqa.com',
        }).as('Details_NotFound');

        //Click on link.
        Links.elements.Not_Found().click();

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Details_NotFound', { timeout: 10000 }).then((Assert_NotFound) => {
            expect(Assert_NotFound.response.statusCode).to.equal(404);
            expect(Assert_NotFound.response.statusMessage).to.equal('Not Found');
            expect(Assert_NotFound.request.method).to.equal('GET');
        });

    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Broken_Links_Images:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Broken Link-Images" screen.
        Broken_Links_Images.elements.Broken_B().click()

    })

    it('T1-UI check of "Broken Link-Images" section.', () => {

        //Assert the Label of "Broken Link-Images" section.
        Broken_Links_Images.elements.Label().should('be.contain','Broken Links - Images')

        //Assert that given elements are visible.
        Broken_Links_Images.elements.Section1().should('be.visible')
        Broken_Links_Images.elements.Section2().should('be.visible')
        Broken_Links_Images.elements.Section3().should('be.visible')
        Broken_Links_Images.elements.Section4().should('be.visible')

    })

    // it('T2-To verify that given Valid image is visible.', () => {
    //     cy.wait(5000);
    //     Broken_Links_Images.elements.Valid_Image().should('be.visible');
    //     Broken_Links_Images.elements.Valid_Image().should('have.attr', 'height').and('be.gt', 0);
    //     Broken_Links_Images.elements.Valid_Image().should('have.attr', 'width').and('be.gt', 0);
    // })

    it('T3-"To verify that given image is broken.', () => {

        Broken_Links_Images.elements.Broken_Image().should('not.have.attr', 'width');
        Broken_Links_Images.elements.Broken_Image().should('not.have.attr', 'height');
    })


})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Upload & Download:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Upload & Download" screen.
        Upload_Download.elements.UD_Buttons().click()
    })

    it('T1-UI check of "Upload & Download" section.', () => {

        //Chek the lable of given "Upload & Download" section.
        Upload_Download.elements.Label().should('be.contain','Upload and Download')

        //Assert that "Download" should be visible.
        Upload_Download.elements.Download_B().should('be.visible')

        //Assert that "Choose File" button should be visible.
        Upload_Download.elements.Choose_File().should('be.visible')

        //Assert that "Upload" button is clickable.
        Upload_Download.elements.Download_B().should('not.have.attr', 'disabled')

        //Assert that "Choose File" button is clickable.
        Upload_Download.elements.Choose_File().should('not.have.attr', 'disabled')

    })

    it('T2-To verify the "Download" functionality.', () => {

        //Click on "Download" button.
        Upload_Download.elements.Download_B().click()

    })

    it('T3-To verify the "Upload" functionality.', () => {

        //Click on "Download" button.
        Upload_Download.elements.Choose_File().click()

        // Verify that the file has been attached.
        Upload_Download.elements.Choose_File().selectFile('C:/Users/prachi.u/Documents/commands.txt')

        //Assert that the uploaded file should be visible in result.
        Upload_Download.elements.Result().should('be.contain', 'commands.txt')

    })

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Elements --> Dynamic Properties:', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Uynamic Property" screen.
        Dynamic_Property.elements.DP_Button().click()
    })

    it('T1-To verify that button should be disable during first 5 seconds.', () => {

        //To verify the label of "Dynamic roperties" section.
        Dynamic_Property.elements.Label().should('be.contain','Dynamic Properties')

        //To verify that button should get disable within 5 seconds.
        Dynamic_Property.elements.Disable().should('be.disabled')

    })

    it('T2-To verify that "Colour change" button should not contain coloured text within 5 second.', () => {

        //Assert that button should not ne coloured.
        Dynamic_Property.elements.Color_Change().should('have.class', 'mt-4 btn btn-primary')

    })

    it('T3-To verify "Dynamic Property" secion after 5 seconds.', () => {

        //Class within 5 seconds.
        Dynamic_Property.elements.Color_Change().should('have.class', 'mt-4 btn btn-primary')
        cy.wait(5000)

        //after 5 seconds coloured text should be visible.
        Dynamic_Property.elements.Color_Change().should('have.class', 'mt-4 text-danger btn btn-primary')

        //After 5 seconds "Visible after 5 seconds" button should be visible.
        Dynamic_Property.elements.Visible().should('be.visible')

    })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Forms --> Practice form', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Practice Forms" screen.
        Form.elements.Form_Button().click()
        Form.elements.Practice_Form().click()
    })

    it('T1-UI check of "Practice Form" section.', () => {

        //To verify the lable of "Practice Fom" section.
        Form.elements.Label().should('be.contain','Practice Form')

        //To verify the "Textboxes" of the form.
        Form.elements.Last_Name().should('be.visible')
        Form.elements.First_Name().should('be.visible')
        Form.elements.Email().should('be.visible')
        Form.elements.Mo_Number().should('be.visible')
        Form.elements.Subjects().should('be.visible')
        Form.elements.Address().should('be.visible')

        //Radio Buttons
        Form.elements.Gender().should('be.visible')

        //Checkboxes
        Form.elements.Hobbies().should('be.visible')

        //Dropdowns
        Form.elements.DOB().should('be.visible')
        Form.elements.State().should('be.visible')
        Form.elements.City().should('be.visible')

        //Buttons
        Form.elements.Picture().should('be.visible')
        Form.elements.Submit().should('be.visible')
    })

    it('T2-To verify the student registration functionality.', () => {

        //Enter First name.
        Form.elements.First_Name().type("Prachi");

        //Enter Last name.
        Form.elements.Last_Name().type("Upadhyay");

        //Enter Email.
        Form.elements.Email().type("upadhyayprachi213@gmail.com")

        //Select Gender.
        Form.elements.Gender().click()

        //Enter Mobile Number.
        Form.elements.Mo_Number().type("0987654321")

        //Select Date of birth.
        Form.elements.DOB().click()
        Form.elements.Previous_Month().click()
        Form.elements.Month().select('January')
        Form.elements.Year().select('2002')
        Form.elements.Date().click()

        //Enter Subjects.
        Form.elements.Subjects().type('English{enter}').type('Hindi{enter}')

        //Select hobbies.
        Form.elements.Hobbies().click()

        //Select Picture.
        Form.elements.Picture().click()
        Form.elements.Picture().selectFile('C:/Users/prachi.u/Documents/commands.txt')

        //Enter current address.
        Form.elements.Address().type('Ahmedabad')

        //Select state.
        Form.elements.State().type('rajasthan{enter}')
        Form.elements.City().type('jaipur{enter}')

        //Submit the form.
        Form.elements.Submit().click()


        //Assert that submitted form should be displayed.
        Form.elements.Result().should('be.visible')

        //Store data into the variable.
        const fname = 'Prachi';
        const lname = 'Upadhyay';
        const email = 'upadhyayprachi213@gmail.com';
        const mobile_no = '0987654321';
        const year = '2002';
        const month = 'January';
        const day = '05';
        const subject = ['English', 'Hindi'];
        const hobbies = ['Sports'];
        const address = 'Ahmedabad';
        const State = 'Rajasthan';
        const city = 'Jaipur';


        cy.get('[class="modal-body"]').within(() => {
            cy.contains('tr', 'Student Name').find('td').eq(1).should('contain', fname + ' ' + lname);
            cy.contains('tr', 'Student Email').find('td').eq(1).should('contain', email);
            cy.contains('tr', 'Gender').find('td').eq(1).should('contain', 'Female');
            cy.contains('tr', 'Mobile').find('td').eq(1).should('contain', mobile_no);
            cy.contains('tr', 'Date of Birth').find('td').eq(1).should('contain', day + ' ' + month + ',' + year);
            cy.contains('tr', 'Subjects').find('td').eq(1).should('contain', subject[0]).and('contain', subject[1]);
            cy.contains('tr', 'Hobbies').find('td').eq(1).should('contain', hobbies[0]);
            cy.contains('tr', 'Picture').find('td').eq(1).should('be.visible');
            cy.contains('tr', 'Address').find('td').eq(1).should('contain', address);
            cy.contains('tr', 'State and City').find('td').eq(1).should('contain', State + ' ' + city);
        })

        //Close the submiting form 
        Form.elements.Close_Result().click()

    })

    it('T3-To verify validation message for invalid input in "Email" text box.', () => {

        //Enter First name.
        Form.elements.First_Name().type("Prachi");

        //Enter Last name.
        Form.elements.Last_Name().type("Upadhyay");

        //Enter Email.
        Form.elements.Email().type("upadhyayprachi213@gmailcom")

        //Select Gender.
        Form.elements.Gender().click()

        //Enter Mobile Number.
        Form.elements.Mo_Number().type("0987654321")

        //Select Date of birth.
        Form.elements.DOB().click()
        Form.elements.Previous_Month().click()
        Form.elements.Month().select('January')
        Form.elements.Year().select('2002')
        Form.elements.Date().click()

        //Enter Subjects.
        Form.elements.Subjects().type('English{enter}').type('Hindi{enter}')

        //Select hobbies.
        Form.elements.Hobbies().click()

        //Select Picture.
        Form.elements.Picture().click()
        Form.elements.Picture().selectFile('C:/Users/prachi.u/Documents/commands.txt')

        //Enter current address.
        Form.elements.Address().type('Ahmedabad')

        //Select state.
        Form.elements.State().type('rajasthan{enter}')
        Form.elements.City().type('jaipur{enter}')

        //Submit the form.
        Form.elements.Submit().click()

        //Assert for invalid input in email.
        Form.elements.Email().should('have.css', 'color', 'rgb(73, 80, 87)')
    })

    it('T4-To verify validation message for blank input in "Student Registration Form".', () => {

        //Submit the form.
        Form.elements.Submit().click()

        //Assert for blank inputs.
        Form.elements.First_Name().should('have.css', 'color', 'rgb(73, 80, 87)')
        Form.elements.Last_Name().should('have.css', 'color', 'rgb(73, 80, 87)')
        Form.elements.Gender().should('have.css', 'color', 'rgb(220, 53, 69)')
        Form.elements.Mo_Number().should('have.css', 'color', 'rgb(73, 80, 87)')
    })

    it('T5-To verify validation message for invalid input in "Mo.Number" text box.', () => {

        //Enter First name.
        Form.elements.First_Name().type("Prachi");

        //Enter Last name.
        Form.elements.Last_Name().type("Upadhyay");

        //Enter Email.
        Form.elements.Email().type("upadhyayprachi213@gmailcom")

        //Select Gender.
        Form.elements.Gender().click()

        //Enter Mobile Number.
        Form.elements.Mo_Number().type("0987")

        //Select Date of birth.
        Form.elements.DOB().click()
        Form.elements.Previous_Month().click()
        Form.elements.Month().select('January')
        Form.elements.Year().select('2002')
        Form.elements.Date().click()

        //Enter Subjects.
        Form.elements.Subjects().type('English{enter}').type('Hindi{enter}')

        //Select hobbies.
        Form.elements.Hobbies().click()

        //Select Picture.
        Form.elements.Picture().click()
        Form.elements.Picture().selectFile('C:/Users/prachi.u/Documents/commands.txt')

        //Enter current address.
        Form.elements.Address().type('Ahmedabad')

        //Select state.
        Form.elements.State().type('rajasthan{enter}')
        Form.elements.City().type('jaipur{enter}')

        //Submit the form.
        Form.elements.Submit().click()

        //Assert for invalid input in email.
        Form.elements.Mo_Number().should('have.css', 'color', 'rgb(73, 80, 87)')
    })

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Alerts, Frame & Windows --> Browser Windows', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Browser Windows" screen.
        Browser_Windows.elements.Button1().click()
        Browser_Windows.elements.Buttons2().click()
    })

    it('T1-UI check of "Browser Windows" section.', () => {

        //To verify the label of "Browser windows" section.
        Browser_Windows.elements.Label().should('be.contain','Browser Windows')

        //To verify that 3 buttons are given.
        Browser_Windows.elements.New_Tab().should('be.visible')
        Browser_Windows.elements.New_Window().should('be.visible')
        Browser_Windows.elements.New_Window_Message().should('be.visible')

        //To verify that given buttons are clickable.
        Browser_Windows.elements.New_Tab().should('not.have.attr', 'disabled')
        Browser_Windows.elements.New_Window().should('not.have.attr', 'disabled')
        Browser_Windows.elements.New_Window_Message().should('not.have.attr', 'disabled')

    })

    it('T2-To verify the "New Tab" button.', () => {

        //To verify that button is clickable.
        Browser_Windows.elements.New_Tab().should('not.have.attr', 'disabled')

        cy.window().then(win => {
            // Stub the window.open method to track its usage
            cy.stub(win, 'open').as('windowOpen');
        });
        // Click on New Tab button
        Browser_Windows.elements.New_Tab().click();

        // Assert that window.confirm method is called
        cy.get('@windowOpen').should('be.called');

        // Assert that the window.open method has been called once
        cy.get('@windowOpen').then(stub => {
            // If window.open is not called, throw an error
            if (!stub.called) {
                cy.log('Button did not open a new tab.')
            }
        })
    })

    it('T3-To verify the "New Window" button.', () => {

        //To verify that button is clickable.
        Browser_Windows.elements.New_Window().should('not.have.attr', 'disabled')

        cy.window().then(win => {
            // Stub the window.open method to track its usage
            cy.stub(win, 'open').as('windowOpen');
        });

        // Click on New Tab button
        Browser_Windows.elements.New_Window().click();

        // Assert that window.confirm method is called
        cy.get('@windowOpen').should('be.called');

        // Assert that the window.open method has been called once
        cy.get('@windowOpen').then(stub => {
            // If window.open is not called, throw an error
            if (!stub.called) {
                cy.log('Button did not open a new window .')
            }
        })
    })

    it('T4-To verify the "New Window Message" button.', () => {

        //To verify that button is clickable.
        Browser_Windows.elements.New_Window_Message().should('not.have.attr', 'disabled')

        cy.window().then(win => {
            // Stub the window.open method to track its usage
            cy.stub(win, 'open').as('windowOpen');
        });

        // Click on New Tab button
        Browser_Windows.elements.New_Window_Message().click();

        // Assert that window.confirm method is called
        cy.get('@windowOpen').should('be.called');

        // Assert that the window.open method has been called once
        cy.get('@windowOpen').then(stub => {
            // If window.open is not called, throw an error
            if (!stub.called) {
                cy.log('New window message is not displayed.')
            }
        })
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Alerts, Frame & Windows --> Alerts', () => {

    beforeEach(() => {

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Alerts" screen.
        Alerts.elements.Button1().click()
        Alerts.elements.Alert_Button().eq(1).click()
    })

        it('T1-UI check of "Alerts" section.', () => {
    
            //To verify the label of "Web table" section.
            Alerts.elements.Label().should('be.contain','Alerts')
    
            //To verify that 4 buttons are given.
            Alerts.elements.Get_Alert().should('be.visible')
            Alerts.elements.Alert_After_5Sec().should('be.visible')
            Alerts.elements.Confirm_Box().should('be.visible')
            Alerts.elements.Prompt_Box().should('be.visible')
    
            //To verify that given buttons are clickable.
            Alerts.elements.Get_Alert().should('not.have.attr', 'disabled')
            Alerts.elements.Alert_After_5Sec().should('not.have.attr', 'disabled')
            Alerts.elements.Confirm_Box().should('not.have.attr', 'disabled')
            Alerts.elements.Prompt_Box().should('not.have.attr', 'disabled')
    
        })
    
        it('T2-To verify that alert message get displayed.', () => {
    
            // Intercept window.alert
            cy.window().then(win => {
                cy.stub(win, 'alert').as('windowAlert');
            });
    
            // Click the button that triggers an alert
            Alerts.elements.Get_Alert().click();
    
            // Assert that window.confirm method is called
            cy.get('@windowAlert').should('be.called');
    
            // Check if window.alert method is called
            cy.get('@windowAlert').then(stub => {
                // If window.open is not called, throw an error
                if (!stub.called) {
                    cy.log('Alert message is not displayed.')
                }
            })
        })
    
        it('T3-To verify that alert message will apear after 5 seconds.', () => {
    
            // Intercept window.alert
            cy.window().then(win => {
                cy.stub(win, 'alert').as('windowAlert');
            });
    
            // Click the button that triggers an alert
            Alerts.elements.Alert_After_5Sec().click();
    
            cy.wait(5000)
    
            // Assert that window.confirm method is called
            cy.get('@windowAlert').should('be.called');
    
            // Check if window.alert method is called
            cy.get('@windowAlert').then(stub => {
                // If window.alert is not called, throw an error
                if (!stub.called) {
                    cy.log('Still alert message is not displayed.')
                }
            })
    
        })
    
    it('T4-To verify the "OK" button.', () => {

        //Intercept window.alert
        cy.window().then(win => {
            cy.stub(win, 'confirm').returns(true).as('windowConfirm');
        });

        //Click the button that triggers an alert
        Alerts.elements.Confirm_Box().click();

        // Assert that window.confirm method is called
        cy.get('@windowConfirm').should('be.called');

        // Assert the result after confirmation
        Alerts.elements.Result().should('contain', 'You selected Ok')


    })

    it('T5-To verify the "Cancel" button.', () => {

        //Intercept window.alert
        cy.window().then(win => {
            cy.stub(win, 'confirm').returns(false).as('windowConfirm');
        });

        //Click the button that triggers an alert
        Alerts.elements.Confirm_Box().click();

        // Assert that window.confirm method is called
        cy.get('@windowConfirm').should('be.called');

        // Assert the result after confirmation
        Alerts.elements.Result().should('contain', 'You selected Cancel')


    })

    it('T6-To verify that Prompt box will displayed.', () => {

        //Intercept window.alert
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('Prachi').as('windowPrompt');
        });

        //Click the button that triggers an alert
        Alerts.elements.Prompt_Box().click();

        // Assert that window.confirm method is called
        cy.get('@windowPrompt').should('be.called');

        // Assert the result after confirmation
        Alerts.elements.Prompt_Result().should('contain', 'You entered Prachi')

    })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Alerts, Frame & Windows --> Frames', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Frames" screen.
        Frames.elements.Parent_Button().click()
        Frames.elements.Frame_Button().click()
    })

    it('T1-UI check of "Text" given in "Frames" section.', () => {

        //To verify the label of "Web table" section.
        Frames.elements.Label().should('be.contain','Frames')

        //To verify that text should be displayed on "Frames" section.
        Frames.elements.Body_Text().should('be.visible')

    })

    it('T2-UI check of "Sample Page" displayed in "Frames" section.', () => {
       
        //To verify that sample page should be displayed.
        Frames.elements.LargeFrame_Size().should('have.attr', 'width', '500px').and('have.attr', 'height', '350px');

        cy.wait(2000)
        //To verify that sample page should contain respective text.
        Frames.elements.LargeFrame_Size().should('exist');
        Frames.elements.Large_Frame().should('have.text', 'This is a sample page')
    })


    it('T3-UI check of "Sample Page" displayed in smaller size in "Frames" section.', () => {

        //To verify that sample page should be displayed in samller size.
        Frames.elements.SmallFrame_Size().should('have.attr', 'width', '100px').and('have.attr', 'height', '100px');

        cy.wait(2000)
        //To verify that "Sample page" should contain following text.
        Frames.elements.Small_Frame().should('exist');
        Frames.elements.Small_Frame().should('have.text', 'This is a sample page');
    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Alerts, Frame & Windows --> Nested_Frames', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Nested Frames" screen.
        Nested_Frames.elements.Parent_Button().click()
        Nested_Frames.elements.NestedFrame_Button().click()
    })

    it('T1-UI check of "Text" given in "Nested Frames" section.', () => {

        //To verify the label of "Web table" section.
        Nested_Frames.elements.Label().should('be.contain','Nested Frames')

        //To verify that text should be displayed on "Nested Frames" section.
        Nested_Frames.elements.Body_Text().should('be.visible')

    });

    it('T2-UI check of "Parent" frame given in "Nested Frames" section.', () => {

        //To verify that "Parent" frame contains the "Parent frame" text.
        Nested_Frames.elements.Parent_Frame().should('exist');
        Nested_Frames.elements.Parent_Frame().should('contain', 'Parent frame');

    })

    it('T3-UI check of "Child" frame given in "Nested Frames" section.', () => {

        // Assert that child frame is present inside the body of the parent frame
        cy.iframe('[id="frame1"]').find('iframe[srcdoc="<p>Child Iframe</p>"]').should('exist').then((cframe) => {

            cy.wait(2000)
            // Assert that the body of the child frame contains a Document
            cy.wrap(cframe).should('have.prop', 'contentDocument').and('exist').then((Doc_Content) => {

                // Assert on the content inside the Document
                cy.wrap(Doc_Content).find('body').should('contain.text', 'Child Iframe');
            })
        })

    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Alerts, Frame & Windows --> Model Dialog.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Modal Dialog" screen.
        Modal_Dialog.elements.Parent_Button().click()
        Modal_Dialog.elements.ModalDialog_Button().click()
    })

    it('T1-UI check of "Modal Dialog" section.', () => {

        //To verify the label of "Modal dialog" section.
        Modal_Dialog.elements.Label().should('be.contain','Modal Dialogs')

        //To verify that respective buttons should be displayed in "Modal Dialog" section.
        Modal_Dialog.elements.SmallModal_Button().should('be.visible')
        Modal_Dialog.elements.LargeModal_Button().should('be.visible')

        //To verify that respective buttons are clickable.
        Modal_Dialog.elements.SmallModal_Button().should('not.have.attr', 'disable')
        Modal_Dialog.elements.LargeModal_Button().should('not.have.attr', 'disable')

    })

    it('T2-UI check of "Small modal" Dialog section.', () => {

        //Click on "Small Modal" button.
        Modal_Dialog.elements.SmallModal_Button().click()

        //To assert the "Small Modal" dialog.
        Modal_Dialog.elements.SmallModal_Dialog().should('be.visible')

        //To assert the content of "Small modal" dialog.
        Modal_Dialog.elements.SmallModal_Dialog().should('be.contain','This is a small modal. It has very less content')

    })

    it('T3-To verify the close "Small modal" dialog functionality.', () => {

        //Click on "Small modal"  button.
        Modal_Dialog.elements.SmallModal_Button().click()

        //Click on "Cancel" button.
        Modal_Dialog.elements.Close_SmalllModal().click()

    })

    it('T4-UI check of "Large modal" Dialog section.', () => {

        //Click on "Large Modal" button.
        Modal_Dialog.elements.LargeModal_Button().click()

        //To assert the "Large Modal" dialog.
        Modal_Dialog.elements.LargeModal_Dialog().should('be.visible')

        //To assert the content of "Large modal" dialog.
        Modal_Dialog.elements.LargeModal_Dialog().should('be.contain','Large Modal')

    })

    it('T5-To verify the close "Large modal" dialog functionality.', () => {

        //Click on "Large modal"  button.
        Modal_Dialog.elements.LargeModal_Button().click()

        //Click on "Cancel" button.
        Modal_Dialog.elements.Close_LargeModal().click()

    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Accordian.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Accordian" screen.
        Accordian.elements.Widgets_Button().click()
        Accordian.elements.Accordian_Button().eq(3).click()
    })  

    it('T1-UI check of "Accordian" section.', () => {

        //To verify label of "Accordian" section.
        Accordian.elements.Label().should('be.contain','Accordian')

        //"Accordian" should contain 3 collapse menu.
        Accordian.elements.Collapse_menu().eq(0).should('be.visible').and('be.contain','What is Lorem Ipsum?')
        Accordian.elements.Collapse_menu().eq(1).should('be.visible').and('be.contain','Where does it come from?')
        Accordian.elements.Collapse_menu().eq(2).should('be.visible').and('be.contain','Why do we use it?')
    })

    it('T2-To verify expand collapsed menu1 functionality.', () => {

        //Expand collaps respective accordian.
        Accordian.elements.Collapse_menu().eq(0).click()

        //Assert that collapse menu should expanded.
        Accordian.elements.Expanded_menu().should('be.visible')

        //Assert that remaining 2 should be closed.
        Accordian.elements.Collapse_menu().eq(1).should('be.visible')
        Accordian.elements.Collapse_menu().eq(2).should('be.visible')
      
    })

    it('T3-To verify expand collapsed menu2 functionality.', () => {

        //Expand collaps respective accordian.
        Accordian.elements.Collapse_menu().eq(1).click()

        //Assert that collapse menu should expanded.
        Accordian.elements.Expanded_menu().should('be.visible')

        //Assert that remaining 2 should be closed.
        Accordian.elements.Collapse_menu().eq(0).should('be.visible')
        Accordian.elements.Collapse_menu().eq(2).should('be.visible')
      
    })

    it('T4-To verify expand collapsed menu3 functionality.', () => {

        //Expand collaps respective accordian.
        Accordian.elements.Collapse_menu().eq(2).click()

        //Assert that collapse menu should expanded.
        Accordian.elements.Expanded_menu().should('be.visible')

        //Assert that remaining 2 should be closed.
        Accordian.elements.Collapse_menu().eq(0).should('be.visible')
        Accordian.elements.Collapse_menu().eq(1).should('be.visible')
      
    })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Auto Complete.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Auto complete" screen.
        Auto_Complete.elements.Widgets_Button().click()
        Auto_Complete.elements.Auto_Complete_Button().click()
    })

    it('T1-UI check of "Auto complete" section.', () => {

        //To verify label of "Auto Complete" section.
        Auto_Complete.elements.Label().should('be.contain', 'Auto Complete')

        //"Accordian" should contain 2 Text boxes.
        Auto_Complete.elements.Textbox_1().should('be.visible')
        Auto_Complete.elements.Textbox_2().should('be.visible')
    })

    it('T2-To verify auto complete functionality for textbox-1.', () => {

        //Enter coloyr name.
        Auto_Complete.elements.Textbox_1().type('Yell{enter}')
        Auto_Complete.elements.Textbox_1().type('Bla{downarrow}{enter}')

        // To aassert that entered name should be auto completed in textbox.
        Auto_Complete.elements.Results().eq(0).should('have.text', 'Yellow')
        Auto_Complete.elements.Results().eq(1).should('have.text', 'Black')
        Auto_Complete.elements.Remove_Icon().should('be.visible')


    })

    it('T3-To assert that suggestions for auto complete are valid.', () => {

        //Enter colour name in "Type multiple color names" textbox.
        Auto_Complete.elements.Textbox_1().type('Bl')

        //To assert that suggestions for auto completions are valid.
        //Get the result menu to compare it with searched data.
        Auto_Complete.elements.Menu().invoke('text').then(result => {
            const Menutext = result.toLowerCase();

            //Get the searched data &convert it into lower case.
            Auto_Complete.elements.Textbox_1().invoke('text').then(SearchedData => {
                const Searches = SearchedData.toLowerCase();

                //Assert that the normalized label text matches the normalized output text.
                expect(Searches).to.contain(Menutext);
            })
        })

    })

    it('T4-To verify remove color name functionality for textbox-1.', () => {

        //Remove entered colour name.
        Auto_Complete.elements.Textbox_1().type('Re{enter}')
        Auto_Complete.elements.Results().eq(0).should('have.text', 'Red')
        Auto_Complete.elements.Remove_Icon().click()

        //To assert that element is removed.
        Auto_Complete.elements.Results().should('not.exist')
    })

    it('T5-To verify enter single colour name functionality for textbox-2.', () => {

        //Enter colour name.
        Auto_Complete.elements.Textbox_2().type('Re{enter}')

        //To assert that entered name should be visible in textbox.
        Auto_Complete.elements.Textbox_2().should('be.contain', 'Red')

        //Enter another colour name.
        Auto_Complete.elements.Textbox_2().type('bla{enter}')

        //Assert that previous name should be removed.
        Auto_Complete.elements.Textbox_2().should('not.be.contain','Red')
    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Date picker.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Date picker" screen.
        Date_Picker.elements.Widgets_Button().click()
        Date_Picker.elements.DatePicker_Button().click()
    })

    it('T1-UI check of "Date picker" section.', () => {

        //To verify label of "Date picker" section.
        Date_Picker.elements.Label().should('be.contain', 'Date Picker')

        //"Date picker" should contain 2 date pickers.
        Date_Picker.elements.Select_Date().should('be.visible')
        Date_Picker.elements.Select_DateTime().should('be.visible')
    })

    it('T2-To verify "Date picker" functionality.', () => {

        //Select the date.
        Date_Picker.elements.Select_Date().click()
        Date_Picker.elements.Month().select('January')
        Date_Picker.elements.Year().select('2002')
        Date_Picker.elements.Date().click()

        //To assert that selected date should visible in "Select date" textbox.
        Date_Picker.elements.Select_Date().should('have.have.attr', 'value', '01/05/2002');

    })

    it('T3-To verify "Date & time" picker functionality.', () => {

        Date_Picker.elements.Select_DateTime().click()

        //Select Month.
        Date_Picker.elements.Select_Month().click()
        Date_Picker.elements.Month_Dropdown().eq(0).click()

        //Select Year.
        Date_Picker.elements.Select_Year().click()

        const currentYear = 2029;
        const targetYear = 2002;
        const difference = currentYear - targetYear;

        for (let i = 0; i < difference; i++) {
            Date_Picker.elements.PreviousYear_Button().click();
            
        }
        Date_Picker.elements.Year_Dropdown().eq(1).click();

        //Select date.
        Date_Picker.elements.Date_Selection().click()

        cy.wait(4000)

        //Select the time.
        Date_Picker.elements.Select_Time().scrollIntoView().click()
    
        //To assert that selected date ^ time should be visible in "Date And Time" text box.
        Date_Picker.elements.Select_DateTime().should('have.attr', 'value', 'January 5, 2002 9:30 PM')

    })
})
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Slider.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Slider" screen.
        Slider.elements.Widgets_Button().click()
        Slider.elements.Slider_Button().click()
    })

    it('T1-UI check of "Slider" section.', () => {

        //To verify label of "Slider" section.
        Slider.elements.Label().should('be.contain', 'Slider')

        //"Slider" section should contain following elements.
        Slider.elements.Slider_TextBox().should('be.visible')
        Slider.elements.UI_Slider().should('be.visible')
    })

    it('T2-To verify slider functionality.', () => {

        //Drag the slider.
         Slider.elements.UI_Slider().invoke('val',60).trigger('change')  

         Slider.elements.UI_Slider().invoke('val').then((Slider_value)=> {

            expect(Slider_value).to.equal('60')
         })
         
        //Enter value in textbox.
        Slider.elements.Slider_TextBox().click().clear().invoke('val', 60).trigger('change');

    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Progress bar.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Progress bar" screen.
        Progress_Bar.elements.Widgets_Button().click()
        Progress_Bar.elements.ProgressBar_Button().click()
    })

    it('T1-UI check of "Progress bar" section.', () => {

        //To verify label of "Progress bar" section.
        Progress_Bar.elements.Label().should('be.contain', 'Progress Bar')

        //"Progress bar" section should contain following elements.
        Progress_Bar.elements.ProgressBar().should('be.visible')
        Progress_Bar.elements.StartStop_Button().should('be.visible')

    })

    it('T2-To verify the Progress bar functionality.', () => {

        //To verify label of "Progress bar" section.
        Progress_Bar.elements.StartStop_Button().click()

        //To verify that start button should get changed into "Stop" button.
        Progress_Bar.elements.StartStop_Button().should('have.text', 'Stop')

        //Wait for few seconds.
        cy.wait(3000)

        //Click on stop button.
        Progress_Bar.elements.StartStop_Button().click()

        //Progress bar should not have value 0%.
        Progress_Bar.elements.ProgressBar().should('not.have.text', '0%')
    })

    it('T3-To verify that stop button get changed in "Reset" button after getting 100% value.', () => {

        //To verify label of "Progress bar" section.
        Progress_Bar.elements.StartStop_Button().click()

        //Wait for few seconds until progress bar reaches to the 100% value.
        cy.wait(9000)

        //To verify that start button should get changed into "Stop" button.
        Progress_Bar.elements.Reset_Button().should('be.visible')
    })

})
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Tabs.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Tabs" screen.
        Tabs.elements.Widgets_Button().click()
        Tabs.elements.Tabs_button().click()
    })

    it('T1-UI check of "Tabs" section.', () => {

        //To verify label of "Tabs" section.
        Progress_Bar.elements.Label().should('be.contain', 'Tabs')

        //"Tabs" section should contain following elements in tab list.
        Tabs.elements.What_tab().should('be.visible').and('have.attr', 'href')
        Tabs.elements.Use_tab().should('be.visible').and('have.attr', 'href')
        Tabs.elements.Origin_tab().should('be.visible').and('have.attr', 'href')
        Tabs.elements.More_tab().should('be.visible').and('have.attr', 'href')

    })

    it('T2-To verify "what" tab.', () => {

        //Click on "What" tab.
        Tabs.elements.What_tab().click()

        //Assert that remaining tab should be closed.
        Tabs.elements.Origin_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.Use_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.More_tab().should('have.attr', 'aria-selected', 'false')

        //To verify that valid content is visible.
        Tabs.elements.What_Content().should('be.visible')

    })

    it('T3-To verify "Origin" tab.', () => {

        //Click on "Origin" tab.
        Tabs.elements.Origin_tab().click()

        //Assert that remaining tab should be closed.
        Tabs.elements.What_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.Use_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.More_tab().should('have.attr', 'aria-selected', 'false')

        //To verify that valid content is visible.
        Tabs.elements.Origin_Content().should('be.visible')

    })

    it('T4-To verify "Use" tab.', () => {

        //Click on "Use" tab.
        Tabs.elements.Use_tab().click()

        //Assert that remaining tab should be closed.
        Tabs.elements.What_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.Origin_tab().should('have.attr', 'aria-selected', 'false')
        Tabs.elements.More_tab().should('have.attr', 'aria-selected', 'false')

        //To verify that valid content is visible.
        Tabs.elements.Use_Content().should('be.visible')

    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Tool tips.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Tool Tip" screen.
        Tool_tips.elements.Widgets_Button().click()
        Tool_tips.elements.ToolTip_button().click()
    })

    it('T1-UI check of "Tool tips" section.', () => {

        //To verify label of "Tabs" section.
        Tool_tips.elements.Label().should('be.contain','Tool Tips')

        //"Tool tips" section should contain following elements .
        Tool_tips.elements.Button().should('be.visible')
        Tool_tips.elements.TextBox().should('be.visible')
        Tool_tips.elements.Contrary_Link().should('be.visible')
        Tool_tips.elements.Link2().should('be.visible')
    })

    it('T2-To verify that button gets the tooltip after hoveres the mouse on button.', () => {

        //Hover the mouse on given button.
        Tool_tips.elements.Button().trigger('mouseover')

        //To verify that tooltip should visible after hovering the mouse on respective button.
        Tool_tips.elements.Button().should('have.attr','aria-describedby')

        //To verify the content of tooltip.
        Tool_tips.elements.Tooltip_content().should('have.text','You hovered over the Button')

    })

    it('T3-To verify that button gets the tooltip after hoveres the mouse on textbox.', () => {

        //Hover the mouse on given textbox.
        Tool_tips.elements.TextBox().trigger('mouseover')

        //To verify that tooltip should visible after hovering the mouse on respective button.
        Tool_tips.elements.TextBox().should('have.attr','aria-describedby')

        //To verify the content of tooltip.
        Tool_tips.elements.Tooltip_content().should('have.text','You hovered over the text field')

    })

    it('T4-To verify that button gets the tooltip after hoveres the mouse on link.', () => {

        //Hover the mouse on given link.
        Tool_tips.elements.Contrary_Link().trigger('mouseover')

        //To verify that tooltip should visible after hovering the mouse on respective link.
        Tool_tips.elements.Contrary_Link().should('have.attr','aria-describedby')

        //To verify the content of tooltip.
        Tool_tips.elements.Tooltip_content().should('have.text','You hovered over the Contrary')

    })

    it('T5-To verify that button gets the tooltip after hoveres the mouse on link2.', () => {

        //Hover the mouse on link2.
        Tool_tips.elements.Link2().trigger('mouseover')

        //To verify that tooltip should visible after hovering the mouse on respective link.
        Tool_tips.elements.Link2().should('have.attr','aria-describedby')

        //To verify the content of tooltip.
        Tool_tips.elements.Tooltip_content().should('have.text','You hovered over the 1.10.32')
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Menu.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Menu" screen.
        Menu.elements.Widgets_Button().click()
        Menu.elements.Menu_button().click()
    })

    it('T1-UI check of "Menu" section.', () => {

        //To verify label of "Menu" section.
        Menu.elements.Label().should('be.contain', 'Menu')

        //"Menu" section should contain following elements .
        Menu.elements.MenuItem_1().should('be.visible')
        Menu.elements.MenuItem_2().should('be.visible')
        Menu.elements.MenuItem_3().should('be.visible')
    })

    it('T2-To verify "Sub item" exists under "Main Item 2"', () => {

        Menu.elements.MenuId() // Select the menu element with specific identifier 
            .contains('Main Item 2') // Find the <a> element containing the text "Main Item 2"
            .parent() // Move up to the parent <li> element
            .contains('Sub Item') // Locate the <a> element containing the text "Sub Item"
            .should('exist'); // Assert that "Sub Item" exists
    })

    it('T3-To verify "Sub Sub Item 1 & 2" exists under "Main Item 2" > "SUB SUB LIST »"', () => {

        Menu.elements.MenuId()
            .contains('Main Item 2')
            .parent()
            .contains('SUB SUB LIST »')
            .parent()
            .contains('Sub Sub Item 1')
            .should('exist')
    })

    it('T4-To verify "Sub Sub Item 2" exists under "Main Item 2" > "SUB SUB LIST »"', () => {

        Menu.elements.MenuId()
            .contains('Main Item 2')
            .parent()
            .contains('SUB SUB LIST »')
            .parent()
            .contains('Sub Sub Item 2')
            .should('exist');


    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Widgets --> Select menu.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Select Menu" screen.
        SelectMenu.elements.Widgets_Button().click()
        SelectMenu.elements.SelectMenu_button().click()
    })

    it('T1-UI check of "Select Menu" section.', () => {

        //To verify label of " Select Menu" section.
        SelectMenu.elements.Label().should('be.contain', 'Select Menu')

        //"Select Menu" section should contain following elements .
        SelectMenu.elements.Select_Value().should('be.visible')
        SelectMenu.elements.Select_One().should('be.visible')
        SelectMenu.elements.Select_Menu().should('be.visible')
        SelectMenu.elements.MultiSelect_Dropdown().should('be.visible')
        SelectMenu.elements.StandardMulti_Select().should('be.visible')

    })

    it('T2-To verify "Select value" from dropdown functionality.', () => {

        //Click on "Select value" drop down.
        SelectMenu.elements.Select_Value().click()

        //Select option from given drop down.
        SelectMenu.elements.Select_Dropdown().contains('Group 2, option 1').click();

        //Assert that selected option should be visible in "Select value" drop down.
        SelectMenu.elements.Select_Value().should('be.contain', 'Group 2, option 1')
    })

    it('T3-To verify "Select One" from dropdown functionality.', () => {

        //Click on "Select One" drop down.
        SelectMenu.elements.Select_One().click()

        //Select option from given drop down.
        SelectMenu.elements.Select_Dropdown().contains('Mrs.').click();

        //Assert that selected option should be visible in "Select One" drop down.
        SelectMenu.elements.Select_One().should('be.contain', 'Mrs.')
    })

    it('T4-To verify "Select Menu" dropdown functionality.', () => {

        //Select option from given drop down.
        SelectMenu.elements.Select_Menu().select('Black');

        //Assert that selected option should be visible in "Select Menu" drop down.
        SelectMenu.elements.Select_Menu().should('be.contain', 'Black')
    })

    it('T5-To verify "Multi select" options from dropdown functionality.', () => {

        //Click on "Multi select" drop down.
        SelectMenu.elements.MultiSelect_Dropdown().eq(2).click()

        //Select option from given drop down.
        SelectMenu.elements.Select_Dropdown().contains('Green').click();
        SelectMenu.elements.Select_Dropdown().contains('Red').click();

        //Assert that selected option should be visible in "Select One" drop down.
        SelectMenu.elements.MultiSelect_Dropdown().eq(2).should('have.text', 'GreenRed')
    })

    it('T6-To verify "Multi select" functionality for no results found.' , () => {

        //Enter random text.
        SelectMenu.elements.MultiSelect_Dropdown().eq(2).type('XYZ')

        //Assert that drop down should contain validation message.
        SelectMenu.elements.Select_Dropdown().should('have.text','No options')
    })

    it('T7-To verify remove entered values from "Multi select" dropdown functionality.', () => {

        //Click on "Multi select" drop down.
        SelectMenu.elements.MultiSelect_Dropdown().eq(2).click()

        //Select option from given drop down.
        SelectMenu.elements.Select_Dropdown().contains('Green').click();
        SelectMenu.elements.Select_Dropdown().contains('Red').click();

        //Click on "Remove(X)" icon.
        SelectMenu.elements.MultiSelect_Dropdown().find('.css-19bqh2r').eq(0).click()
    })

    it('T8-To verify "Standard multi select" functionality.' , () => {

        //Enter random text.

        SelectMenu.elements.StandardMulti_Select().select(['Saab','Audi','Opel','Volvo'])
    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Interactions --> Sortable.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');


        //Open "Sortable" screen.
        Sortable.elements.Interactions_Button().click()
        Sortable.elements.Sortable_button().click()
    })

    it('T1-UI check of "Sortable" section.', () => {

        //To verify label of " Sortable" section.
        Sortable.elements.Label().should('be.contain', 'Sortable')

        //"Sortable" section should contain following elements.
        Sortable.elements.List_section().should('be.visible')
        Sortable.elements.Grid_section().should('be.visible')

    })

    it('T2-To verify sort functionality in "List" section.', () => {

        //Move down the 1st option at the 3rd position.
        Sortable.elements.List_Options().eq(0).trigger('mousedown').trigger('mousemove', { force: true })
        Sortable.elements.List_Options().eq(2).trigger('mousemove', { force: true }).trigger('mouseup');

        //Assert that movable option is placed at the valid position.
        Sortable.elements.List_Options().eq(2).should('contain', 'One')
    })

    it('T3-To verify sort functionality in "Grid" section.', () => {

        //Open the grid section.
        Sortable.elements.Grid_section().click()

        //Move the 2nd grid at 4th position.
        Sortable.elements.Grid_Options().eq(2).trigger('mousedown', { which: 1 })
        Sortable.elements.Grid_Options().eq(5).trigger('mousemove').trigger('mouseup');

    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Interactions --> Selectable.', () => {

    beforeEach(() => {

        ignore_ad();
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Selectable" screen.
        Selectable.elements.Interactions_Button().click()
        Selectable.elements.Selectable_Button().click()
    })

    it('T1-UI check of "Selectable" section.', () => {

        //To verify label of " Selectable" section.
        Selectable.elements.Label().should('be.contain', 'Selectable')

        //"Selectable" section should contain following elements.
        Selectable.elements.List_section().should('be.visible')
        Selectable.elements.Grid_section().should('be.visible')
    })

    it('T2-To verify select multiple options from "List" section.', () => {

        //Assert that all List items is visible.
        Selectable.elements.List_Options().should('be.visible')

        //Select multiple options.
        Selectable.elements.List_Options().each(($ListItems, index) => {
            if (index !== 0 && index !== 2) {
                cy.wrap($ListItems).click();
                cy.wrap($ListItems).should('have.css', 'background-color', 'rgb(0, 123, 255)')
            }
        })
    })

    it('T3-To verify select multiple options from "Grid" section.', () => {

        //Open "Grid" section.
        Selectable.elements.Grid_section().click()

        //Assert that all grid items is visible.
        Selectable.elements.Grid_Options().should('be.visible')

        //Select multiple options.
        Selectable.elements.Grid_Options().each(($GridItems, index) => {
            if (index !== 5 && index !== 6) {
                cy.wrap($GridItems).click();
                cy.wrap($GridItems).should('have.css', 'background-color', 'rgb(0, 123, 255)')
            }
        })

    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Interactions --> Resizable.', () => {

    beforeEach(() => {

        ignore_ad();
        //Set screen size
        cy.viewport(1920, 1080);
        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Resizable" screen.
        Resizable.elements.Interactions_Button().click()
        Resizable.elements.Resizable_Button().click()
    })

    it('T1-UI check of "Resizable" section.', () => {

        //To verify label of " Resizable" section.
        Resizable.elements.Label().should('be.contain', 'Resizable')

        //"Resizable" section should contain following elements.
        Resizable.elements.Limited_Area().should('be.visible')
        Resizable.elements.Unlimited_Area().should('be.visible')
    })

    it('T2-To verify the Resize functionality for limited area.', () => {

         //Resize the area to it's max size.
         Resizable.elements.Limited_Area().find('.react-resizable-handle').trigger('mousedown').trigger('mousemove',{ clientX: 0 , clientY: 0 }).trigger('mouseup'); 
        
         //Assert that square should resize to it's minimum size.
         Resizable.elements.Limited_Area().should('have.css','width', '150px')
         Resizable.elements.Limited_Area().should('have.css','height', '150px')

        
        //Resize the area to it's max size.
        Resizable.elements.Limited_Area().find('.react-resizable-handle').trigger('mousedown').trigger('mousemove',{ clientX: 9999 , clientY: 9999 }).trigger('mouseup'); 

        //Assert that square should resize to it's maximum size.
        Resizable.elements.Limited_Area().should('have.css','width', '500px')
        Resizable.elements.Limited_Area().should('have.css','height', '300px')
        

    })

    it('T3-To verify the Resize functionality for unlimited area.', () => {

        //Resize the area to it's max size.
        Resizable.elements.Unlimited_Area().find('.react-resizable-handle').trigger('mousedown').trigger('mousemove',{ clientX: 0 , clientY: 0 }).trigger('mouseup'); 
       
        //Assert that square should resize to it's minimum size.
        Resizable.elements.Unlimited_Area().should('have.css','width', '20px')
        Resizable.elements.Unlimited_Area().should('have.css','height', '20px')

       
       //Resize the area to it's max size.
       Resizable.elements.Unlimited_Area().find('.react-resizable-handle').trigger('mousedown').trigger('mousemove',{ clientX: 9999 , clientY: 9999 }).trigger('mouseup'); 

       cy.wait(3000)
       //Assert that square should resize to it's maximum size.
       Resizable.elements.Unlimited_Area().should('have.css','width', '9510px')
       Resizable.elements.Unlimited_Area().should('have.css','height', '9447px')
       
   })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Interactions --> Droppable.', () => {

    beforeEach(() => {

        ignore_ad();
        //Set screen size
        cy.viewport(1920, 1080);

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Droppable" screen.
        Droppable.elements.Interactions_Button().click()
        Droppable.elements.Droppable_Button().click()
    })

    it('T1-UI check of "Droppable" section.', () => {

        //To verify label of " Droppable" section.
        Droppable.elements.Label().should('be.contain', 'Droppable')

        //"Droppable" section should contain following elements.
        Droppable.elements.Simple_section().should('be.visible')
        Droppable.elements.Accept_section().should('be.visible')
        Droppable.elements.PreventPropogation_section().should('be.visible')
        Droppable.elements.RevertDraggable_section().should('be.visible')
    })


    it('T2-To verify the simple drop functionality', () => {

        //Drag the element & drop it at dropped area.
        Droppable.elements.Draggable_element().trigger('mousedown', { which: 1 })
        Droppable.elements.Droppable_element().eq(0).trigger('mousemove').trigger('mouseup', { force: true })

        //Assert that dropped area should contain "Dropped!" text.
        Droppable.elements.Droppable_element().eq(0).should('contain', 'Dropped!')

        //Assert that dropped area should get highlighted.
        Droppable.elements.Droppable_element().eq(0).should('have.css', 'background-color', 'rgb(70, 130, 180)')
    })

    it('T3-To verify the not acceptable drop functionality', () => {

        //Open "Accept" section.
        Droppable.elements.Accept_section().click()

        //Drag the not acceptable element & drop it at dropped area.
        Droppable.elements.Notacceptable_element().trigger('mousedown', { which: 1 })
        Droppable.elements.Droppable_element().eq(1).trigger('mousemove', { clientX: 125, clientY: 125, force: true }).trigger('mouseup', { force: true })

        //Assert that dropped area should not get highlighted.
        Droppable.elements.Droppable_element().eq(1).should('not.have.css', 'background-color', 'rgb(70, 130, 180)')
    })

    it('T4-To verify the acceptable drop functionality', () => {

        //Open "Accept" section.
        Droppable.elements.Accept_section().click()

        //Drag the acceptable element & drop it at dropped area.
        Droppable.elements.Acceptable_element().trigger('mousedown', { which: 1 })
        Droppable.elements.Droppable_element().eq(1).trigger('mousemove', { clientX: 125, clientY: 125, force: true }).trigger('mouseup', { force: true })

        //Assert that dropped area should get highlighted.
        Droppable.elements.Droppable_element().eq(1).should('have.css', 'background-color', 'rgb(70, 130, 180)')
    })

    it('T5-To verify the greedy drop functionality', () => {

        //Open "Prevent propogation" section.
        Droppable.elements.PreventPropogation_section().click()
        cy.wait(2000)

        //Drag the element & drop it in not greedy area.
        Droppable.elements.Dropped_element().trigger('mousedown', { which: 1 })
        Droppable.elements.NotGreedyInner_area().trigger('mousemove', { clientX: 125, clientY: 125, force: true }).trigger('mouseup', { force: true })

        //Assert that dropped area should get highlighted.  
        Droppable.elements.NotgreedyOuter_area().should('have.css', 'background-color', 'rgb(70, 130, 180)')

    })

    it('T6-To verify the not greedy drop functionality', () => {

        //Open "Prevent propogation" section.
        Droppable.elements.PreventPropogation_section().click()
        cy.wait(2000)

        //Drag the element & drop it at greedy area.
        Droppable.elements.Dropped_element().trigger('mousedown', { which: 1 })
        Droppable.elements.InnerGreedy_area().trigger('mousemove', { clientX: 125, clientY: 125, force: true }).trigger('mouseup', { force: true })

        //Assert that dropped inner area should get highlighted.
        Droppable.elements.InnerGreedy_area().should('have.css', 'background-color', 'rgb(70, 130, 180)')
        //Assert that dropped outer area should not get highlighted.
        Droppable.elements.OuterGreedy_area().should('not.have.css', 'background-color', 'rgb(70, 130, 180)')

        //Assert that dropped area should contain "Dropped!" text.
        Droppable.elements.InnerGreedy_area().should('contain', 'Dropped!')
        //Assert that dropped outer area should not contain "Dropped!" text.
        Droppable.elements.OuterGreedy_area().should('not.contain', 'Inner droppable (greedy)!')

    })

    it('T7-To verify the revert drop functionality', () => {

        //Open "Revert draggable" section.
        Droppable.elements.RevertDraggable_section().click()
        cy.wait(1000)
        Droppable.elements.Revertable_element().then(revertedele => {

            //Store the initial position of revertable element.
            const InitialPOsition = revertedele.position();

            //Drag and drop revertable element into dropped area.
            Droppable.elements.Revertable_element().trigger('mousedown', { which: 1 })
            Droppable.elements.Droppable_element().eq(2).trigger('mousemove').trigger('mouseup', { force: true })

            cy.wait(2000)
            //Assert that dropped area should get highlighted.
            Droppable.elements.Droppable_element().eq(2).should('have.text', 'Dropped!')
            Droppable.elements.Droppable_element().eq(2).should('have.css', 'background-color', 'rgb(70, 130, 180)');

            //Assert that the reverted element should revert back to its initial position
            Droppable.elements.Revertable_element().then(revertedele => {
                const AfterDrop = revertedele.position();
                expect(AfterDrop).to.deep.equal(InitialPOsition);
            });
        })
    })

    it('T8-To verify the not revert drop functionality', () => {

        //Open "Revert draggable" section.
        Droppable.elements.RevertDraggable_section().click()
        cy.wait(1000)
        Droppable.elements.Nonrevertable_element().then(notrevertedele => {

            //Store the initial position of not revertable element.
            const InitialPOsition = notrevertedele.position();

            //Drag and drop not revertable element into dropped area.
            Droppable.elements.Nonrevertable_element().trigger('mousedown', { which: 1 })
            Droppable.elements.Droppable_element().eq(2).trigger('mousemove').trigger('mouseup', { force: true })

            cy.wait(2000)
            //Assert that dropped area should get highlighted.
            Droppable.elements.Droppable_element().eq(2).should('have.text', 'Dropped!')
            Droppable.elements.Droppable_element().eq(2).should('have.css', 'background-color', 'rgb(70, 130, 180)');

            //Assert that the reverted element should revert back to its initial position
            Droppable.elements.Revertable_element().then(revertedele => {
                const AfterDrop = revertedele.position();
                expect(AfterDrop).to.not.deep.equal(InitialPOsition);
            });
        })

    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Interactions --> Draggable.', () => {

    beforeEach(() => {

        ignore_ad();
        //Set screen size
        cy.viewport(1920, 1080);

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Open "Dragabble" screen.
        Dragabble.elements.Interactions_Button().click()
        Dragabble.elements.Dragabble_button().click()
    })

        it('T1-UI check of "Dragabble" section.', () => {
    
            //To verify label of " Dragabble" section.
            Dragabble.elements.Label().should('be.contain', 'Dragabble')
    
            //"Dragabble" section should contain following elements.
            Dragabble.elements.Simple_Section().should('be.visible')
            Dragabble.elements.AxisRestricted_Section().should('be.visible')
            Dragabble.elements.ContainerRestricted_Section().should('be.visible')
            Dragabble.elements.CursorStyle_Section().should('be.visible')
        })
    
    
        it('T2-To verify simple drag functionality.', () => {
    
            cy.wait(2000);
            Dragabble.elements.Dragabble_element().then(element => {
    
                //Store the initial position of Dragabble element.
                const InitialPOsition = element.position();
                const MoveLeft = 200;
                const Movetop = 250;
    
                //Drag the dragabble element.
                cy.wait(2000);
    
                Dragabble.elements.Dragabble_element().move({ deltaX: MoveLeft, deltaY: Movetop })
    
                //Assert that the dropped position should not have same position as initial position.
                Dragabble.elements.Dragabble_element().then(element => {
                    const AfterDrop = element.position();
    
                    //Assert that droppable element is dropped at exact position.
                    expect(AfterDrop.top).to.deep.equal(InitialPOsition.top + Movetop);
                    expect(AfterDrop.left).to.deep.equal(InitialPOsition.left + MoveLeft);
                })
            });
        })
    
        it('T3-To verify move element on only X axis only.', () => {
    
            //Open "Axis restricted" section.
            Dragabble.elements.AxisRestricted_Section().click()
            cy.wait(2000);
            Dragabble.elements.restrictedX().then(element => {
    
                //Store the initial position of Dragabble element.
                const InitialPOsition = element.position();
                cy.log('Initial:', InitialPOsition);
                const MoveLeft = 200;
                const Movetop = 250;
    
                //Drag the dragabble element.
                cy.wait(2000);
    
                Dragabble.elements.restrictedX().move({ deltaX: MoveLeft, deltaY: Movetop })
    
                //Assert that the dropped position should not have same position as initial position.
                Dragabble.elements.restrictedX().then(element => {
    
                    const AfterDrop = element.position();
    
                    //Assert that droppable element should dropped at X axis only.
                    expect(AfterDrop.top).to.deep.equal(InitialPOsition.top);
                    expect(AfterDrop.left).to.deep.equal(InitialPOsition.left + MoveLeft);
                })
            });
        })
    
        it('T4-To verify move element on only Y axis only.', () => {
    
            //Open "Axis restricted" section.
            Dragabble.elements.AxisRestricted_Section().click()
            cy.wait(2000);
            Dragabble.elements.restrictedY().then(element => {
    
                //Store the initial position of Dragabble element.
                const InitialPOsition = element.position();
                cy.log('Initial:', InitialPOsition);
                const MoveLeft = 200;
                const Movetop = 250;
    
                //Drag the dragabble element.
                cy.wait(2000);
    
                Dragabble.elements.restrictedY().move({ deltaX: MoveLeft, deltaY: Movetop })
    
                //Assert that the dropped position should not have same position as initial position.
                Dragabble.elements.restrictedY().then(element => {
    
                    const AfterDrop = element.position();
    
                    //Assert that droppable element should dropped at Y axis only.
                    expect(AfterDrop.top).to.deep.equal(InitialPOsition.top + Movetop);
                    expect(AfterDrop.left).to.deep.equal(InitialPOsition.left);
                })
            });
        })
   

    it('T5-To verify box can only move inside specific container.', () => {

        //Open "container restricted" section.
        Dragabble.elements.ContainerRestricted_Section().click()
        cy.wait(2000);

        //Drag the dragabble element.
        cy.wait(2000);

        Dragabble.elements.Container_box().then(container => {

            // Get the container boundaries
            const containerBoundingRect = container[0].getBoundingClientRect()
            cy.log('Container Boundries are:', containerBoundingRect)


            // Get the box element
            Dragabble.elements.Box_element().then(box => {
                const MoveLeft = 1100;
                const Movetop = 2300;

                // Get the initial box position
                const initialBoxPosition = box[0].getBoundingClientRect()
                cy.log('Initial position of box is:', initialBoxPosition)


                Dragabble.elements.Box_element().move({ deltaX: MoveLeft, deltaY: Movetop })


                Dragabble.elements.Box_element().then(box => {
                    // Get the updated box position after movement
                    const updatedBoxPosition = box[0].getBoundingClientRect()

                    cy.log('updated position of box is:', updatedBoxPosition)
                    // Check if the updated box position is within the container boundaries
                    expect(updatedBoxPosition.left).to.be.at.least(containerBoundingRect.left)
                    expect(updatedBoxPosition.right).to.be.at.most(containerBoundingRect.right)
                    expect(updatedBoxPosition.top).to.be.at.least(containerBoundingRect.top)
                    expect(updatedBoxPosition.bottom).to.be.at.most(containerBoundingRect.bottom)
                })
            })
        })
    })

    it('T6-To verify text can only move inside container.', () => {

        //Open "container restricted" section.
        Dragabble.elements.ContainerRestricted_Section().click()
        cy.wait(2000);


        //Drag the dragabble element.
        cy.wait(2000);

        Dragabble.elements.Container2_box().then(container => {

            // Get the container boundaries
            const containerBoundingRect = container[0].getBoundingClientRect()
            cy.log('Container Boundries are:', containerBoundingRect)


            // Get the text element
            Dragabble.elements.Text_element().then(text => {
                const MoveLeft = 1100;
                const Movetop = 2300;

                // Get the initial text position
                const initialTextPosition = text[0].getBoundingClientRect()
                cy.log('Initial position of box is:', initialTextPosition)


                Dragabble.elements.Text_element().move({ deltaX: MoveLeft, deltaY: Movetop })

                cy.wait(1000)

                Dragabble.elements.Text_element().then(Text => {
                    // Get the updated text position after movement
                    const updatedTextPosition = Text[0].getBoundingClientRect()

                    cy.log('updated position of text is:', updatedTextPosition)
                    // Check if the updated text position is within the container boundaries
                    expect(updatedTextPosition.left).to.be.at.least(containerBoundingRect.left)
                    expect(updatedTextPosition.right).to.be.at.most(containerBoundingRect.right)
                    expect(updatedTextPosition.top).to.be.at.least(containerBoundingRect.top)
                    expect(updatedTextPosition.bottom).to.be.at.most(containerBoundingRect.bottom)
                })
            })
        })
    })

    it('T7-To verify cursors after dragging the box.', () => {

        //Open "Cursor style" section.
        Dragabble.elements.CursorStyle_Section().click()

        cy.get('#cursorCenter').trigger('mousedown', { which: 1 }).then(() => {
            // Start dragging the element.
            cy.get('body').trigger('mousemove', { clientX: 700, clientY: 300 });




            // Listen for mousemove events while dragging the "cursorCenter" element.
            cy.get('body').trigger('mousemove').then(event => {
                const cursorPosition = { x: event.clientX, y: event.clientY };
                cy.log('Cursor position while moving "cursorCenter":', cursorPosition);
                Dragabble.elements.cursorCenter().then($element => {
                    const cursorStyle = $element.css('cursor');
                    // Log the cursor style
                    cy.log('Cursor style:', cursorStyle);
                })
            });
        })

        // cy.get('#cursorTopLeft').trigger('mousedown', { which: 1 }).then(() => {
        //     // Start dragging the element.
        //     cy.get('body').trigger('mousemove', { clientX: 700, clientY: 300 });

        // // Listen for mousemove events while dragging the "cursorCenter" element.
        // cy.get('body').trigger('mousemove').then(event => {
        //     const cursorPosition = { x: event.clientX, y: event.clientY };
        //     cy.log('Cursor position while moving "cursorTopLeft":', cursorPosition);
        //     Dragabble.elements.cursorTopLeft().then($element => {
        //         const cursorStyle = $element.css('cursor');
        //         // Log the cursor style
        //         cy.log('Cursor style:', cursorStyle);
        //     })
    })
    // const hasClientX = event.clientX !== undefined;
    // const hasClientY = event.clientY !== undefined;

    // // Assert that both clientX and clientY properties are defined.


    // const elementPosition = { x: 700, y: 300 }; // Adjust with actual element position
    // cy.log('Cursor position while moving "cursorCenter":', cursorPosition);
    // cy.log('Element position while moving "cursorCenter":', elementPosition);
    // cy.get('#cursorCenter').then(element => {
    //     const rect = element[0].getBoundingClientRect();
    //     const elementCenterX = rect.left + rect.width / 2;
    //     const elementCenterY = rect.top + rect.height / 2;
    //     expect(cursorPosition.x).to.equal(elementCenterX);
    //     expect(cursorPosition.y).to.equal(elementCenterY);
    // })
})

describe('Book store application.', () => {

    beforeEach(() => {

        ignore_ad();
        //Set screen size
        cy.viewport(1920, 1080);

        //Enter  the URL in addressbar and press enter key.
        cy.visit('https://demoqa.com/');

        //Click on "Elements" button.  
        TestSite.elements.Elements_B().click()

        //Open "Book store application" sections.
        Login.elements.BookStoreApplication_Button().click()
        
    })

    it('T1-To verify UI of "Login" section.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Verify the label of login section.
        Login.elements.Label().should('contain', 'Login')

        //"Login" section should contain following elements.
        //Welcome message.
        Login.elements.Welcome_Message().should('be.contain', 'Welcome,Login in Book Store')

        //Following fields should be visible.
        //Text boxes:
        Login.elements.Username_Textbox().should('be.visible')
        Login.elements.Password_Textbox().should('be.visible')
        //Buttons:
        Login.elements.login_Button().should('be.visible')
        Login.elements.New_User_Button().should('be.visible')

    })

    it('T2-To verify UI of register page.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New User" button.
        Login.elements.New_User_Button().click()

        //Following elements should visible.
        //Text boxes:
        Login.elements.FirstName().should('be.visible')
        Login.elements.LastName().should('be.visible')
        Login.elements.UserName().should('be.visible')
        Login.elements.Password().should('be.visible')
    })

    it('T3-To verify the register new user functionality.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        //Enter the data in respective fields.
        Login.elements.FirstName().type('xfbgn ')
        Login.elements.LastName().type('fgnghmj')
        Login.elements.UserName().type('fgsrhgn, ')
        Login.elements.Password().type('Abc@1234')

        //Perform captha.
        cy.log('Please complete the CAPTCHA challenge manually and then continue the test.');

        cy.pause();
        // cy.wait(20000)
        //Verify pop up message.
        cy.window().then(win => {
            cy.stub(win, 'alert').as('windowAlert');
        });
        // Click the button that triggers an alert
        Login.elements.Register().click({ force: true });

        // Assert that window.confirm method is called
        cy.get('@windowAlert').should('be.called');
        cy.get('@windowAlert').should('be.calledWith', 'User Register Successfully.');
        // cy.get('@windowConfirm').should('be.called');

    })

    it('T4-To verify validation message for blank input in "Register" page.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        // Click on "Register" button.
        Login.elements.Register().click();

        //To verify validation message for all blank fields.
        Login.elements.FirstName().should('have.css','border-color','rgb(220, 53, 69)')
        Login.elements.LastName().should('have.css','border-color','rgb(220, 53, 69)')
        Login.elements.UserName().should('have.css','border-color','rgb(220, 53, 69)')
        Login.elements.Password().should('have.css','border-color','rgb(220, 53, 69)')
    })

    it('T5-To verify validation message for invalid input in "Password" field.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        // Click on "Register" button.
        Login.elements.Register().click();

        //Enter the data in respective fields.
        Login.elements.FirstName().type('xfbgn ')
        Login.elements.LastName().type('fgnghmj')
        Login.elements.UserName().type('fgsrhgn, ')
        Login.elements.Password().type('bc@1234')

        cy.pause();
        //Click on "Register" button.
        Login.elements.Register().click()

        //Assert the validation message.
        Login.elements.Password_validation().should('be.visible')
    })

    it('T6-To verify validation message & api call for already existing username.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        cy.intercept({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            hostname: 'demoqa.com',
        }).as('User_Exist');

        // Click on "Register" button.
        Login.elements.Register().click();

        //Enter the data in respective fields.
        Login.elements.FirstName().type('Prachi ')
        Login.elements.LastName().type('fgnghmj')
        Login.elements.UserName().type('Prachi')
        Login.elements.Password().type('Abc@1234')

        cy.pause();
        //Click on "Register" button.
        Login.elements.Register().click()

        //Wait for the intercepted request and perform assertions.
        cy.wait('@User_Exist', { timeout: 10000 }).then((Assert_Created) => {
            expect(Assert_Created.response.statusCode).to.equal(406 );
            expect(Assert_Created.response.statusMessage).to.equal('Not Acceptable');
            expect(Assert_Created.request.method).to.equal('POST');
        });

        //Assert the validation message.
        Login.elements.Password_validation().should('be.visible')
    })

    it('T7-To verify validation message for not registered username.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Enter the data in respective fields.
        Login.elements.Username_Textbox().type('hjkdf ')
        Login.elements.Password_Textbox().type('Abc@1234')

        //Click on "Login" button.
        Login.elements.login_Button().click()

        //Assert the validation message.
        Login.elements.UserNotExist_Validation().should('be.visible')

    })

    it('T8-To verify api call for invalid input in "Password" field.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            hostname: 'demoqa.com',
        }).as('Invalid_Password');

        // Click on "Register" button.
        Login.elements.Register().click();

        //Enter the data in respective fields.
        Login.elements.FirstName().type('xfbgn ')
        Login.elements.LastName().type('fgnghmj')
        Login.elements.UserName().type('fgsrhgn, ')
        Login.elements.Password().type('bc@1234')

        cy.pause();
        //Click on "Register" button.
        Login.elements.Register().click()

        //Wait for the intercepted request and perform assertions.
        cy.wait('@Invalid_Password', { timeout: 10000 }).then((Assert_Created) => {
            expect(Assert_Created.response.statusCode).to.equal(400 );
            expect(Assert_Created.response.statusMessage).to.equal('Bad Request');
            expect(Assert_Created.request.method).to.equal('POST');
        });

        //Assert the validation message.
        Login.elements.Password_validation().should('be.visible')

    })

    it('T9-To verify api call for  successful registration.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Click on "New user" button.
        Login.elements.New_User_Button().click()

        //Used to intercept URL requests made.
        cy.intercept({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            hostname: 'demoqa.com',
        }).as('New_User');

        //Enter the data in respective fields.
        Login.elements.FirstName().type('XYZER ')
        Login.elements.LastName().type('SFDBGV')
        Login.elements.UserName().type('DVGBYH ')
        Login.elements.Password().type('Afhb@1234')

        //Perform captha.
        cy.log('Please complete the CAPTCHA challenge manually and then continue the test.');

        cy.pause();
         Login.elements.Register().click()
        //Wait for the intercepted request and perform assertions.
        cy.wait('@New_User', { timeout: 10000 }).then((Assert_Created) => {
            expect(Assert_Created.response.statusCode).to.equal(201);
            expect(Assert_Created.response.statusMessage).to.equal('Created');
            expect(Assert_Created.request.method).to.equal('POST');
        });
    })
 
    it('T10-To verify login functionality.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Enter the data in respective fields.
        const UserName='Prachi';
        const Password='Abc@1234';
        Login.elements.UserName().type(UserName)
        Login.elements.Password().type(Password)

        //Click on "Login" button.
        Login.elements.login_Button().click()

        //Assert that "Profile" page should open with registered username.
        Login.elements.Profile_Page().should('be.visible').and('be.contain',UserName)

    })

    it('T11-To verify UI of "Profile" page.', () => {

        //Open login section.
        Login.elements.LoginSection_Button().click()

        //Enter the data in respective fields.
        const UserName='Prachi';
        const Password='Abc@1234';
        Login.elements.UserName().type(UserName)
        Login.elements.Password().type(Password)

        //Click on "Login" button.
        Login.elements.login_Button().click()

        //Assert that "Profile" page should open with registered username.
        Login.elements.Profile_Page().should('be.visible').and('be.contain',UserName)

        //Following elements should be visible.
        //Text Boxes:
        Login.elements.Searchbar().should('be.visible')
        Login.elements.Pagination().should('be.visible')

        //Drop downs:
        Login.elements.No_of_entries().should('be.visible')

        //Buttons:
        Login.elements.LogOut_Button().should('be.visible')
        Login.elements.GoTo_BookStore().should('be.visible')
        Login.elements.Delete_Account().should('be.visible')
        Login.elements.Delete_All_Books().should('be.visible')
    })

    it('T12-To verify UI of "Book Store" page.', () => {

        //Open "Book store" page.
        Login.elements.BookStore_Button().click()

        //TextBoxes:
        Login.elements.Bookstore_Searchbar().should('be.visible')
        Login.elements.Bookstore_Pagination().should('be.visible')

        //Buttons: 
        Login.elements.Bookstore_LogIn().should('be.visible')

        //Following Headers should be visible.
        Login.elements.Column_Image().should('be.visible')
        Login.elements.Column_Title().should('be.visible')
        Login.elements.Column_Author().should('be.visible')
        Login.elements.Column_Publisher().should('be.visible')

    })
})






































