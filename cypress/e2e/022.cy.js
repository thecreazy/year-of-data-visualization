describe('22 page video', () => {
  it('passes', () => {
    cy.visit('/day/22');
    cy.scrollTo(0, 100, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 820, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1550, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(1000);
  });
});
