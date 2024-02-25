describe('24 page video', () => {
  it('passes', () => {
    cy.visit('/day/24');
    cy.scrollTo(0, 100, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 720, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1250, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
