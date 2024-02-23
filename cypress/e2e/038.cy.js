describe('38 page video', () => {
  it('passes', () => {
    cy.visit('/day/38');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 750, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2150, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
  });
});
