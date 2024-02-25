describe('23 page video', () => {
  it('passes', () => {
    cy.visit('/day/23');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1850, { duration: 4000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
