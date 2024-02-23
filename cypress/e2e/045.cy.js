describe('45 page video', () => {
  it('passes', () => {
    cy.visit('/day/45');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1550, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
  });
});
