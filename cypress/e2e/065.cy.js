describe('65 page video', () => {
  it('passes', () => {
    cy.visit('/day/65');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2900, { duration: 2000 });
    cy.wait(2000);
  });
});
