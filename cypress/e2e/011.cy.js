describe('11 page video', () => {
  it('passes', () => {
    cy.visit('/day/11');
    cy.scrollTo(0, 20);
    cy.wait(3000);
    cy.scrollTo(0, 400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2300, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4100, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 6100, { duration: 5000 });
    cy.wait(1000);
    cy.scrollTo(0, 7500, { duration: 3000 });
  });
});
