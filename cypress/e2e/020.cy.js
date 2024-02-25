describe('20 page video', () => {
  it('passes', () => {
    cy.visit('/day/20');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 820, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3200, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 4700, { duration: 2000 });
    cy.wait(1000);
  });
});
