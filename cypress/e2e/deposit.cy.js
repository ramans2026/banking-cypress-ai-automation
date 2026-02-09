describe('Deposit Flow', () => {
  it('User should deposit money successfully', () => {
    cy.loginAsCustomer('Harry Potter');

    // Click the Deposit tab/button
    cy.contains('button', 'Deposit').click();

    // Enter amount (clear first to avoid issues)
    cy.get('input[type="number"]').clear().type('100');

    // Confirm deposit by clicking the form submit button
    cy.get('button[type="submit"]').click();

    // Verify success message using the specific message element
    cy.get('span.error', { timeout: 10000 }).should('be.visible').and('contain.text', 'Deposit Successful');
  });
});
