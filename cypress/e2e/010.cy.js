describe('10 page video', () => {
  it('passes', () => {
    cy.visit('/day/10');
    cy.wait(2000);
    cy.scrollTo(0, 230, { duration: 2000 });
    cy.wait(2000);
    cy.get('[aria-label="select-year"]').type('2021{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-year"]').type('2020{enter}');
    cy.wait(1500);
    cy.get('[aria-label="select-year"]').type('2019{enter}');
    cy.wait(1500);
    cy.scrollTo(0, 1300, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1600, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
  });
});
