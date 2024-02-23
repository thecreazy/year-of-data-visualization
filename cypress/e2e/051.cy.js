describe('51 page video', () => {
  it('passes', () => {
    cy.visit('/day/51');
    cy.wait(2500);
    cy.scrollTo(0, 350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 900, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 6200, { duration: 2000 });
    cy.wait(2000);
  });
});
