describe('116 page video', () => {
  it('passes', () => {
    cy.visit('/day/116');
    cy.wait(3000);
    cy.scrollTo(0, 500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1600, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2300, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4500, { duration: 2000 });
  });
});
