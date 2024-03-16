describe('82 page video', () => {
  it('passes', () => {
    cy.visit('/day/82');
    cy.scrollTo(0, 10, { duration: 4000 });
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="select-country"]').type('Brazil{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Italy{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Romania{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 1350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
  });
});
