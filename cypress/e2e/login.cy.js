describe('Customer Login', () => {
	const url = Cypress.env('BANK_URL') || 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login';

	it('User should login successfully into the banking app', () => {
		// 1. Open banking site
		cy.visit(url);

		// 2. Click Customer Login
		cy.contains('Customer Login').click();

		// 3. Select user (pick the first real option)
		cy.get('select#userSelect, select')
			.first()
			.should('exist')
			.then($select => {
				const $options = $select.find('option').filter((i, el) => Cypress.$(el).val());
				if ($options.length === 0) {
					throw new Error('No selectable users found');
				}
				const firstVisible = Cypress.$($options[0]).text().trim();
				cy.wrap($select).select(firstVisible);
			});

		// 4. Click login
		cy.contains('button', 'Login').click();

		// 5. Verify dashboard — look for a logout button or account overview
		cy.contains('Logout', { timeout: 10000 }).should('be.visible');
		cy.contains('Transactions').should('exist');
	});
});