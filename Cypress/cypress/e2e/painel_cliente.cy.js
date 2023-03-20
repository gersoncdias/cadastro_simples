const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const painelCliente = '/register/customer/index'

describe('Painel Cliente', () => {

  beforeEach(() => {
    
    cy.visit(Cypress.env('url'), {
    })
    cy.login(user, password);
})

  it('Lista Painel Cliente', () => {
    cy.menu_cadastro()
    cy.painel_cliente()
  })


  it('Criar Cliente', () => {
    cy.menu_cadastro()
    cy.criar_cliente()
    cy.criando_cliente()
  })

  it('Fechar modal editar Cliente', () => {
    cy.menu_cadastro()
    cy.Fechar_modal_alterar_cliente()
    cy.url().should('include', painelCliente);
  })

  it('Confirma alteração Cliente', () => {
    cy.menu_cadastro()
    cy.edita_cliente()
    cy.url().should('include', painelCliente);
  })

  it('Exibir dados Cliente', () => {
    cy.menu_cadastro()
    cy.painel_cliente()
    cy.modal_exibir_cliente()
    cy.url().should('include', painelCliente);
  })
})  
