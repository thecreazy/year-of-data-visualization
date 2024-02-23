describe('6 page video', () => {
  it('passes', () => {
    cy.visit('/day/6');
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1250, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2650, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2950, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 6400, { duration: 2000 });
    cy.wait(1000);
  });
});
