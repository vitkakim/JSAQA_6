const { email, password } = require("../../user.js");

beforeEach(() => {
    cy.visit('/');
    cy.login(email, password);
    cy.contains(email).should('be.visible');
});


it("Should add book", () => {
    cy.addBook('Властелин Колец 8', 'Дж. Р. Р. Толкин');
    cy.contains('.card-title', 'Властелин Колец 7').should('be.visible');
});

it("Should add book and favorite", () => {
    cy.addBook('Оно 8', 'Стивен Кинг', 'favorite');
    cy.findBookButton('Оно 8', 'Delete from favorite').should('be.visible');
});

it("Should delete from favorite", () => {
    cy.findBookButton('Оно 8', 'Delete from favorite').children().contains('Delete from favorite').click();
    cy.findBookButton('Оно 8', 'Add to favorite').should('be.visible');
});