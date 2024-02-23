describe('34 page video', () => {
  it('passes', () => {
    cy.visit('/day/34');
    cy.wait(3000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="Select country"]').type('Ireland{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('France{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Poland{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(1000);
  });
});
