describe('44 page video', () => {
  it('passes', () => {
    cy.visit('/day/44');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5150, { duration: 2000 });
    cy.wait(2000);
  });
});
