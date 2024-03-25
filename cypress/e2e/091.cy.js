describe('91 page video', () => {
  it('passes', () => {
    cy.visit('/day/91');
    cy.scrollTo(0, 10, { duration: 4000 });
    cy.scrollTo(0, 200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1950, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4050, { duration: 2000 });
    cy.wait(1000);
  });
});
