describe('52 page video', () => {
  it('passes', () => {
    cy.visit('/day/52');
    cy.wait(1000);
    cy.scrollTo(0, 200, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 650, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1450, { duration: 2000 });
    cy.wait(10000);
    cy.scrollTo(0, 2200, { duration: 2000 });
    cy.get('[aria-label="Select country"]').type('Germany{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Japan{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Venezuela{enter}');
    cy.wait(1500);
    cy.get('[aria-label="Select country"]').type('Spain{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 3100, { duration: 2000 });
    cy.wait(1000);
  });
});
