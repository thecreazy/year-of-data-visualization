describe('95 page video', () => {
  it('passes', () => {
    cy.visit('/day/95');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 2650, { duration: 4000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
