describe('72 page video', () => {
  it('passes', () => {
    cy.visit('/day/72');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2600, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 6100, { duration: 2000 });
    cy.wait(2000);
  });
});
