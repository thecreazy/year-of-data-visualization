describe('122 page video', () => {
  it('passes', () => {
    cy.visit('/day/122');
    cy.wait(2500);
    cy.scrollTo(0, 420, { duration: 2000 });
    cy.wait(2000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1850, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3600, { duration: 2000 });
    cy.wait(2000);
  });
});
