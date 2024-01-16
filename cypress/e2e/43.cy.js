describe('43 page video', () => {
  it('passes', () => {
    cy.visit('/day/43');
    cy.wait(6500);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1800, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 5500, { duration: 2500 });
  });
});
