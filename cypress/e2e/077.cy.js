describe('77 page video', () => {
  it('passes', () => {
    cy.visit('/day/77');
    cy.wait(3000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2250, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4050, { duration: 5000 });
    cy.wait(1000);
    cy.scrollTo(0, 7050, { duration: 5000 });
    cy.wait(1000);
    cy.scrollTo(0, 10050, { duration: 3000 });
    cy.wait(1000);
    cy.scrollTo(0, 13050, { duration: 3000 });
    cy.wait(1000);
  });
});
