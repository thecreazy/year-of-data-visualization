describe('118 page video', () => {
  it('passes', () => {
    cy.visit('/day/118');
    cy.scrollTo(0, 200, { duration: 4000 });
    cy.wait(2000);
    cy.scrollTo(0, 800, { duration: 4000 });
    cy.wait(2000);
    cy.scrollTo(0, 1650, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="select-country"]').type('Spain{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Poland{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Ireland{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
  });
});
