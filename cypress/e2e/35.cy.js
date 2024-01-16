describe('35 page video', () => {
  it('passes', () => {
    cy.visit('/day/35');
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3000, { duration: 2000 });
  });
});
