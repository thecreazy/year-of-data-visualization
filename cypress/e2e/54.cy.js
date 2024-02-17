describe('54 page video', () => {
  it('passes', () => {
    cy.visit('/day/54');
    cy.wait(5000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1050, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5000, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 7000, { duration: 3000 });
    cy.wait(1500);
    cy.scrollTo(0, 9000, { duration: 2000 });
    cy.wait(2000);
  });
});
