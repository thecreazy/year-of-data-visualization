describe('41 page video', () => {
  it('passes', () => {
    cy.visit('/day/41');
    cy.wait(4000);
    cy.scrollTo(0, 350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1800, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2750, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3550, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5100, { duration: 2000 });
    cy.wait(2000);
  });
});
