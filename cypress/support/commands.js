Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    if (email) {
        cy.get('#mail').type(email);
    };
    if (password) {
        cy.get('#pass').type(password);
    };
    cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (title, author, favorite) => {
    cy.contains('Add new').click();
    cy.get('#title').type(title);
    cy.get('#authors').type(author);
    if (favorite) {
        cy.get('#favorite').click();
    };
    cy.contains('Submit').click();
});

Cypress.Commands.add('findBookButton', (title, buttonText) => {
    cy.contains('.card-title', title)
        .parent()
        .parent()
        .within(() => {
            cy.contains(buttonText);
            });
})
