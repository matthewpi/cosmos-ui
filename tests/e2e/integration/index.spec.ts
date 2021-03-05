/// <reference types="cypress" />

describe('Homepage', () => {
	it('Shows correct text', () => {
		cy.visit('/')

		cy.contains('h1', 'Hello, world!')
	})
});
