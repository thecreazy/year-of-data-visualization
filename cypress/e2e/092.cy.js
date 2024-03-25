describe('92 page video', () => {
  it('passes', () => {
    cy.visit('/day/92');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5900, { duration: 2000 });
    cy.wait(2000);
  });
});
