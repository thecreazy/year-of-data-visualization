describe('49 page video', () => {
  it('passes', () => {
    cy.visit('/day/49');
    cy.wait(5000);
    cy.scrollTo(0, 350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1050, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
  });
});
