describe('42 page video', () => {
  it('passes', () => {
    cy.visit('/day/42');
    cy.wait(4000);
    cy.scrollTo(0, 350, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 750, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1550, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4550, { duration: 2000 });
    cy.wait(2000);
  });
});
