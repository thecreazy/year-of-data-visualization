describe('48 page video', () => {
  it('passes', () => {
    cy.visit('/day/48');
    cy.wait(3000);
    cy.scrollTo(0, 800, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3600, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 7200, { duration: 5000 });
    cy.wait(2000);
    cy.scrollTo(0, 10000, { duration: 2000 });
    cy.wait(2000);
  });
});
