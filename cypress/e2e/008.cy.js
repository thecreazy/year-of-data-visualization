describe('8 page video', () => {
  it('passes', () => {
    cy.visit('/day/8');
    cy.scrollTo(0, 150, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 850, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1650, { duration: 2000 });
    cy.wait(1000);
    cy.get('[aria-label="select-year"]').type('2022{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-year"]').type('2021{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 2350, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2950, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 6400, { duration: 2000 });
    cy.wait(1000);
  });
});
