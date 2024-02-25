describe('19 page video', () => {
  it('passes', () => {
    cy.visit('/day/19');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 820, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2200, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
