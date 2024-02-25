describe('25 page video', () => {
  it('passes', () => {
    cy.visit('/day/25');
    cy.scrollTo(0, 40, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 850, { duration: 4000 });
    cy.wait(2000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
