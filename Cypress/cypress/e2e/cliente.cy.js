const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Criar Clientes', () => {

  beforeEach(() => {
    
    cy.visit(Cypress.env('url'), {
    })
    cy.login(user, password);
})

  it('Cadastro cliente sucesso', () => {
    cy.menu_cadastro()
    cy.criar_cliente()
    
  })

})  