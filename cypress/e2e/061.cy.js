describe('61 page video', () => {
  it('passes', () => {
    cy.visit('/day/61');
    cy.wait(4000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2280, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3000, { duration: 2000 });
  });
});
