describe('87 page video', () => {
  it('passes', () => {
    cy.visit('/day/87');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2600, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5900, { duration: 2000 });
    cy.wait(2000);
  });
});
