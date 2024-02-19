describe('63 page video', () => {
  it('passes', () => {
    cy.visit('/day/63');
    cy.wait(3000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1300, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5700, { duration: 2000 });
    cy.wait(2000);
  });
});
