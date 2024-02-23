describe('30 page video', () => {
  it('passes', () => {
    cy.visit('/day/30');
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(1000);
  });
});
