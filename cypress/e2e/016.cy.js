describe('16 page video', () => {
  it('passes', () => {
    cy.visit('/day/16');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo(0, 700, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 1400, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2100, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 2800, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 4450, { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo(0, 6250, { duration: 2000 });
    cy.wait(1000);
  });
});
