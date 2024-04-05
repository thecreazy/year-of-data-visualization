describe('115 page video', () => {
  it('passes', () => {
    cy.visit('/day/115');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4450, { duration: 2000 });
    cy.wait(2000);
  });
});
