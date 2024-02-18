describe('60 page video', () => {
  it('passes', () => {
    cy.visit('/day/60');
    cy.wait(5000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1150, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3550, { duration: 2000 });
    cy.wait(4000);
    cy.scrollTo(0, 4350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 6050, { duration: 2000 });
    cy.wait(2000);
  });
});
