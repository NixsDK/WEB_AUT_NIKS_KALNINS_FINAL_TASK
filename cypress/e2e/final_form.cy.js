Cypress.on("uncaught:exception", () => false);

describe('Final Task - DemoQA Practice Form', () => {
  it('fills out and submits the form correctly', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Niks Daniels');
    cy.get('#lastName').type('Kalniņš');
    cy.get('#userEmail').type('niksdaniels.kalnins@va.lv');
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type('2783810219');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();

    // Subject
    cy.get('.subjects-auto-complete__value-container').type('Economics{enter}');

    // Hobbies
    cy.get('#hobbies-checkbox-3').check({ force: true });

    // Upload image
    cy.get('#uploadPicture').selectFile('cypress/files/looneytunesthuglifepng.png');

    // Address
    cy.get('#currentAddress').type('Meldru iela 101');

    // State & City
    cy.get('#state').click().get('#react-select-3-option-0').click(); // NCR
    cy.get('#city').click().get('#react-select-4-option-0').click(); // Delhi

    // Submit
    cy.get('#submit').click();

    // Validate modal
    cy.get('.modal-content').should('contain', 'Niks Daniels');
    cy.get('.modal-content').should('contain', 'Kalniņš');
    cy.get('.modal-content').should('contain', 'niksdaniels.kalnins@va.lv');
    cy.get('.modal-content').should('contain', 'Male');
    cy.get('.modal-content').should('contain', '2783810219');
    cy.get('.modal-content').should('contain', '28 February,1930');
    cy.get('.modal-content').should('contain', 'Economics');
    cy.get('.modal-content').should('contain', 'Music');
    cy.get('.modal-content').should('contain', 'Meldru iela 101');
    cy.get('.modal-content').should('contain', 'NCR Delhi');
  });
});
