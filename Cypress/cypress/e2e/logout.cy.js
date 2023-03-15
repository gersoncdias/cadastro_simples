const user = Cypress.env('user_name')
const password = Cypress.env('user_password')


describe('logout', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url'))
      cy.login(user, password)
    })
  
    it('Logout sucesso', () => {
      cy.logout()
      cy.url().should('include', '/site/login');
      
    })
  })