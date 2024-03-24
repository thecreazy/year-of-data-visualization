describe('89 page video', () => {
  it('passes', () => {
    cy.visit('/day/89');
    cy.scrollTo(0, 10, { duration: 4000 });
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="select-country"]').type('South Africa{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Italy{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Algeria{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Lebanon{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4050, { duration: 2000 });
    cy.wait(1000);
  });
});
