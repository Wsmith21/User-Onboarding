describe('App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3003");
    });

    const usernameInput = () => cy.get("input[id=username]");
    const radioInput = () => cy.get("input[type=radio]");
    const agreementInput = () => cy.get("input[id=agreement]");

    it("sanity check to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
    });
it("the proper elements are showing", () => {
usernameInput().should('exist');
radioInput().should('exist');
agreementInput().should('exist');
})


});