describe('96 page video', () => {
  it('passes', () => {
    cy.visit('/day/96');
    cy.wait(5500);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2600, { duration: 2000 });
    cy.wait(2000);
  });
});
