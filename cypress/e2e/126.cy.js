describe('126 page video', () => {
  it('passes', () => {
    cy.visit('/day/126');
    cy.wait(3500);
    cy.scrollTo(0, 420, { duration: 2000 });
    cy.wait(2000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.get('.leaflet-control-zoom-in').click();
    cy.wait(1000);
    cy.scrollTo(0, 1200, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1900, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 2650, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 4600, { duration: 2000 });
    cy.wait(2000);
  });
});
