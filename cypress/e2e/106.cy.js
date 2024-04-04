describe('106 page video', () => {
  it('passes', () => {
    cy.visit('/day/106');
    cy.wait(2500);
    cy.scrollTo(0, 350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4450, { duration: 2000 });
    cy.wait(2000);
  });
});
