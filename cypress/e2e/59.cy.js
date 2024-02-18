describe('59 page video', () => {
  it('passes', () => {
    cy.visit('/day/59');
    cy.wait(4000);
    cy.scrollTo(0, 550, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1150, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
  });
});
