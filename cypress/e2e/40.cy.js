describe('40 page video', () => {
  it('passes', () => {
    cy.visit('/day/40');
    cy.scrollTo(0, 100, { duration: 1000 });
    cy.wait(500);
    cy.scrollTo(0, 200, { duration: 1000 });
    cy.wait(3000);
    cy.scrollTo(0, 950, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1750, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="Select country"]').type('Germany{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Japan{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('United States{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(1000);
  });
});
