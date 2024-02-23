describe('5 page video', () => {
  it('passes', () => {
    cy.visit('/day/5');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1250, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
