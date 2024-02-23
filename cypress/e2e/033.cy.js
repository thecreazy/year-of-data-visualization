describe('33 page video', () => {
  it('passes', () => {
    cy.visit('/day/33');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(500);
    cy.scrollTo(0, 1550, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5100, { duration: 2000 });
    cy.wait(2000);
  });
});
