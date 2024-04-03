describe('112 page video', () => {
  it('passes', () => {
    cy.visit('/day/112');
    cy.scrollTo(0, 20);
    cy.wait(3000);
    cy.scrollTo(0, 800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2200, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3600, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4100, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 7900, { duration: 4000 });
  });
});
