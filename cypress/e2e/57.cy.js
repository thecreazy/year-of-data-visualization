describe('57 page video', () => {
  it('passes', () => {
    cy.visit('/day/57');
    cy.wait(5000);
    cy.scrollTo(0, 250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 950, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5000, { duration: 2000 });
    cy.wait(2000);
  });
});
