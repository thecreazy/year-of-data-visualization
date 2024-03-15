describe('76 page video', () => {
  it('passes', () => {
    cy.visit('/day/76');
    cy.wait(4000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 3000 });
    cy.wait(100);
    cy.scrollTo(0, 2100, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 3200, { duration: 2000 });
    cy.wait(1000);
  });
});
