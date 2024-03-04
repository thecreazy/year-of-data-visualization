describe('69 page video', () => {
  it('passes', () => {
    cy.visit('/day/69');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(2000);
  });
});
