describe('18 page video', () => {
  it('passes', () => {
    cy.visit('/day/18');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 820, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1600, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(1000);
  });
});
