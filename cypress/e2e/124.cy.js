describe('124 page video', () => {
  it('passes', () => {
    cy.visit('/day/124');
    cy.wait(3000);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1700, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2400, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 5000, { duration: 2000 });
    cy.wait(2000);
  });
});
