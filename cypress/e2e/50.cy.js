describe('50 page video', () => {
  it('passes', () => {
    cy.visit('/day/50');
    cy.wait(2500);
    cy.scrollTo(0, 250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2450, { duration: 2000 });
    cy.wait(26000);
    cy.scrollTo(0, 4450, { duration: 2000 });
    cy.wait(2000);
  });
});
