describe('73 page video', () => {
  it('passes', () => {
    cy.visit('/day/73');
    cy.wait(3000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3000, { duration: 2000 });
  });
});
