describe('26 page video', () => {
  it('passes', () => {
    cy.visit('/day/26');
    cy.wait(3000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1150, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 5500, { duration: 2000 });
    cy.wait(1000);
  });
});
