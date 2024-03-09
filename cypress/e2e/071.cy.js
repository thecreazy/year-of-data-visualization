describe('71 page video', () => {
  it('passes', () => {
    cy.visit('/day/71');
    cy.scrollTo(0, 20, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1950, { duration: 4000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
