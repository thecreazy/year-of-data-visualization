describe('75 page video', () => {
  it('passes', () => {
    cy.visit('/day/75');
    cy.wait(3000);
    cy.scrollTo(0, 800, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4800, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 7000, { duration: 5000 });
    cy.wait(2000);
    cy.scrollTo(0, 10000, { duration: 2000 });
    cy.wait(2000);
  });
});
