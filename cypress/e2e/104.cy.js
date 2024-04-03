describe('104 page video', () => {
  it('passes', () => {
    cy.visit('/day/104');
    cy.wait(5000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5900, { duration: 2000 });
    cy.wait(2000);
  });
});
