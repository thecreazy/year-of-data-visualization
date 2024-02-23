describe('58 page video', () => {
  it('passes', () => {
    cy.visit('/day/58');
    cy.wait(5000);
    cy.scrollTo(0, 250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 950, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3200, { duration: 2000 });
    cy.wait(2000);
  });
});
