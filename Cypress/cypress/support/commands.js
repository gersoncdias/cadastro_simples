const loginPage = require('./page_elements/login_page')
const loginPg = new loginPage()

const logoutPage = require('./page_elements/logout_page')
const logoutPg = new logoutPage()

const cadastroPage = require('./page_elements/cadastro_page')
const cadastroPg = new cadastroPage()


Cypress.Commands.add('login', (user, password) => {

  const login = () => {
    

    cy.get(loginPg.txt_titulo)
      .should('exist')
      .should('be.visible')
      .should('contains.text', 'Cadastro Simples')

    cy.get(loginPg.campo_login)
      .should('exist')
      .should('be.visible')
      .type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(password, { log: false })

    cy.get(loginPg.btn_login)
      .should('exist')
      .should('be.visible')
      .click()
  }

  login()

})

Cypress.Commands.add('logout', () => {

  cy.get(logoutPg.dropdown_logout)
      .should('exist')
      .should('be.visible')
      .click()
      
  cy.get(logoutPg.txt_titulo)
      .should('exist')
      .should('be.visible')
      .should('contains.text', 'Administrador')

  cy.get(logoutPg.btn_logout)
      .should('exist')
      .should('be.visible')
      .click()
})

Cypress.Commands.add('Valida_msg_erro', (erro) => {

  cy.get(loginPg.msg_error)
  .should('exist')
  .should('be.visible')
  .should('contains.text', erro)
      
})

Cypress.Commands.add('Validaruser_msg_erro', (erro) => {

  cy.get(loginPg.user_msg_erro)
  .should('exist')
  .should('be.visible')
  .should('contains.text', erro)
      
})

Cypress.Commands.add('menu_cadastro', () => {

  cy.get(cadastroPg.menu_cadastro)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Cadastros')
})

Cypress.Commands.add('criar_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')

  cy.get(cadastroPg.btn_criar_cliente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Criar Cliente')
  .click()

})

Cypress.Commands.add('esqueciMinhaSenha', () => {

  cy.get(loginPg.link_esqueci_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Esqueci minha senha.')
    .click()

  cy.get(loginPg.txt_redefinir_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Redefinição de senha')

  cy.get(loginPg.modal_redefinir_senha)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Enviaremos um link ao e-mail cadastrado.')

  cy.get(loginPg.btn_voltar_login)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Voltar para o login.')
    .click()
})
