describe('79 page video', () => {
  it('passes', () => {
    cy.visit('/day/79');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1300, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2900, { duration: 2000 });
    cy.wait(2000);
  });
});
