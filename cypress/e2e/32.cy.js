describe('32 page video', () => {
  it('passes', () => {
    cy.visit('/day/32');
    cy.wait(3000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="Select country"]').type('Spain{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Greece{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Croatia{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(1000);
  });
});
