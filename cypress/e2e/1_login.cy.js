const { email, wrongEmail, password } = require("../../user.js");

beforeEach(() => {
    cy.visit('/');
});


it("Should open the main page", () => {
    cy.contains('Books list').should('be.visible');
});

it("Should successfully login", () => {
    cy.login(email, password);
    cy.contains(email).should('be.visible');
});

it("Should be wrong login", () => {
    cy.login(wrongEmail, password);
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false')
});

it("Should be without password", () => {
    cy.login(email);
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
});