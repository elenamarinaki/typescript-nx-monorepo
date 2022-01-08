describe('next-pokemon', () => {
  beforeEach(() => cy.visit('/'));

  it('searching bulb should return Bulbasaur', () => {
    cy.get('input').first().type('bulb');
    cy.get('li').first().should('have.text', 'Bulbasaur');
    cy.get('body').screenshot();
  });
});
