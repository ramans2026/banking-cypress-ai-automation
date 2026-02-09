Cypress.Commands.add('loginAsCustomer', (name) => {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  cy.contains('Customer Login').click();
  cy.get('#userSelect').select(name);
  cy.contains('Login').click();
});
