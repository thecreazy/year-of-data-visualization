describe('39 page video', () => {
  it('passes', () => {
    cy.visit('/day/39');
    cy.wait(3000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5100, { duration: 2000 });
    cy.wait(2000);
  });
});
