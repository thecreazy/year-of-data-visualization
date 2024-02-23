describe('31 page video', () => {
  it('passes', () => {
    cy.visit('/day/31');
    cy.wait(2000);
    cy.scrollTo(0, 300, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(1000);
  });
});
