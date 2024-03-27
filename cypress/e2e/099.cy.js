describe('99 page video', () => {
  it('passes', () => {
    cy.visit('/day/99');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 750, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2150, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4050, { duration: 2000 });
    cy.wait(1000);
  });
});
