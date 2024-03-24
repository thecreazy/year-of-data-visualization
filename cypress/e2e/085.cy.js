describe('85 page video', () => {
  it('passes', () => {
    cy.visit('/day/85');
    cy.wait(3000);
    cy.scrollTo(0, 400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1000, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 1700, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 2300, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 5000, { duration: 2000 });
    cy.wait(1000);
  });
});
