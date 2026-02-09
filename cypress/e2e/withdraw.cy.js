describe('Withdraw Flow', () => {
  it('User should withdraw money successfully', () => {
    cy.loginAsCustomer('Harry Potter');

    // Deposit money first to ensure sufficient balance
    cy.contains('button', 'Deposit').click();
    cy.get('.mainBox').within(() => {
      cy.get('input[type="number"]').clear().type('100');
      cy.get('button[type="submit"]').click();
    });
    cy.wait(1500);

    // Click the Withdraw button
    cy.contains('button', 'Withdrawl').click();
    cy.wait(500);

    // Enter withdrawal amount - use simple .type() approach with clear
    cy.get('.mainBox input[type="number"]').clear().type('10');
    cy.wait(500);
    cy.get('.mainBox button[type="submit"]').click();
    cy.wait(1500);

    // Verify balance decreased (should be 90)
    cy.get('.center strong').eq(1).invoke('text').should('include', '90');
  });
});
