describe('9 page video', () => {
  it('passes', () => {
    cy.visit('/day/9');
    cy.wait(2000);
    cy.scrollTo(0, 150, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1870, { duration: 5000 });
    cy.wait(2000);
    cy.get('[aria-label="select-country"]').type('Spain{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Germany{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('USA{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 6400, { duration: 2000 });
    cy.wait(1000);
  });
});
