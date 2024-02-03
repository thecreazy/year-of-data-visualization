describe('36 page video', () => {
  it('passes', () => {
    cy.visit('/day/36');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2250, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
  });
});
