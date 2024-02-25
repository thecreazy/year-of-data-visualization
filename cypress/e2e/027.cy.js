describe('27 page video', () => {
  it('passes', () => {
    cy.visit('/day/27');
    cy.wait(6500);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1050, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4050, { duration: 5000 });
    cy.wait(1000);
    cy.scrollTo(0, 7050, { duration: 2000 });
    cy.wait(1000);
  });
});
