describe('46 page video', () => {
  it('passes', () => {
    cy.visit('/day/46');
    cy.wait(3000);
    cy.scrollTo(0, 800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1800, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 2800, { duration: 2000 });
    cy.wait(600);
    cy.scrollTo(0, 6800, { duration: 5000 });
    cy.wait(200);
    cy.scrollTo(0, 13800, { duration: 5000 });
    cy.wait(2000);
  });
});
