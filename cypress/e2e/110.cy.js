describe('110 page video', () => {
  it('passes', () => {
    cy.visit('/day/110');
    cy.wait(2000);
    cy.scrollTo(0, 280, { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo(0, 1050, { duration: 2000 });
    cy.wait(2000);
    cy.get('[data-ref="slice:r1:625.428029867892"]').trigger('mouseover', {
      force: true,
    });
    cy.wait(2000);
    cy.get('[data-ref="slice:r1:739.9948832088838"]').trigger('mouseover', {
      force: true,
    });
    cy.wait(2000);
    cy.get('[data-ref="slice:r1:251.20820888378327"]').trigger('mouseover', {
      force: true,
    });
    cy.wait(2000);
    cy.get('[data-ref="slice:r1:106.40246505839556"]').trigger('mouseover', {
      force: true,
    });
    cy.wait(1500);
    cy.scrollTo(0, 5900, { duration: 2000 });
    cy.wait(2000);
  });
});
