class Upload_Download{
    elements={

        UD_Buttons: ()=> cy.contains('Upload and Download'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Download_B: ()=> cy.contains('Download'),
        Choose_File: ()=> cy.get('[id="uploadFile"]'),
        Result: ()=> cy.get('[id="uploadedFilePath"]'),


    }


}
export default new Upload_Download ;