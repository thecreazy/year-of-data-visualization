describe('55 page video', () => {
  it('passes', () => {
    cy.visit('/day/55');
    cy.wait(8000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3150, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3950, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5000, { duration: 2000 });
    cy.wait(2000);
  });
});
