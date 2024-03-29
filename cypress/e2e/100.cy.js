describe('100 page video', () => {
  it('passes', () => {
    cy.visit('/day/100');
    cy.scrollTo(0, 10, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 200, { duration: 2000 });
    cy.wait(2000);
    cy.get('[data-testid="line.Muzychuk, Mariya.interactive"]').trigger(
      'mouseover',
      { force: true }
    );
    cy.wait(1000);
    cy.get('[data-testid="line.Lei, Tingjie.interactive"]').trigger(
      'mouseover',
      { force: true }
    );
    cy.wait(1000);
    cy.get('[data-testid="line.Ju, Wenjun.interactive"]').trigger('mouseover', {
      force: true,
    });
    cy.wait(1000);
    cy.scrollTo(0, 1000, { duration: 2000 });
    cy.wait(2000);
    cy.get('[data-testid="line.Anand, Viswanathan.interactive"]').trigger(
      'mouseover',
      { force: true }
    );
    cy.wait(1000);
    cy.get('[data-testid="line.Caruana, Fabiano.interactive"]').trigger(
      'mouseover',
      { force: true }
    );
    cy.wait(1000);
    cy.get('[data-testid="line.Nepomniachtchi, Ian.interactive"]').trigger(
      'mouseover',
      {
        force: true,
      }
    );
    cy.wait(1000);
    cy.scrollTo(0, 2500, { duration: 2000 });
    cy.wait(2000);
  });
});
