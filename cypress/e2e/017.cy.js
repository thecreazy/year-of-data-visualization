describe('17 page video', () => {
  it('passes', () => {
    cy.visit('/day/17');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1070, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2600, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
