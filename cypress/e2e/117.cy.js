describe('117 page video', () => {
  it('passes', () => {
    cy.visit('/day/117');
    cy.scrollTo(0, 10, { duration: 4000 });
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="select-country"]').type('Chad{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Italy{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-country"]').type('Sierra Leone{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 1350, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
  });
});
