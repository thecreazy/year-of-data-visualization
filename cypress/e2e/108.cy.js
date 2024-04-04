describe('108 page video', () => {
  it('passes', () => {
    cy.visit('/day/108');
    cy.wait(4500);
    cy.scrollTo(0, 450, { duration: 2000 });
    cy.wait(2000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2000, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 3500, { duration: 2000 });
    cy.wait(2000);
  });
});
