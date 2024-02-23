describe('29 page video', () => {
  it('passes', () => {
    cy.visit('/day/29');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
