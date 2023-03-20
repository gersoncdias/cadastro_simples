const loginPage = require('./page_elements/login_page')
const loginPg = new loginPage()

const logoutPage = require('./page_elements/logout_page')
const logoutPg = new logoutPage()

const cadastroPage = require('./page_elements/cadastro_page')
const cadastroPg = new cadastroPage()

const painelClientePage = require('./page_elements/painel_cliente_page')
const painelClientePg = new painelClientePage()


import { faker } from '@faker-js/faker';
const username = faker.internet.userName();

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

Cypress.Commands.add('criando_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')

  cy.get(cadastroPg.btn_criar_cliente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Criar Cliente')

  cy.get(cadastroPg.input_nome_cliente)
  .should('exist')
  .should('be.visible')
  .type(username)
  .should('have.value', username);

  cy.get(cadastroPg.select_estado)
  .click()
  .should('exist')
  .should('be.visible')
 
  cy.get(cadastroPg.select_dropdown)
  .contains('Rio de Janeiro - RJ')
  .click()

  cy.get(cadastroPg.select_cidade)
  .click()
  .should('exist')
  .should('be.visible')

  cy.get(cadastroPg.select_dropdown)
  .contains('SÃO GONÇALO - RJ')
  .click()

  cy.get(cadastroPg.btn_modal_criar_cliente)
  .should('exist')
  .should('be.visible')
  .click()

  cy.get(cadastroPg.msg_sucesso)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'REGISTRO CRIADO COM SUCESSO!')

  
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

  cy.get(cadastroPg.modal_criar_cliente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Criar Cliente')
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

Cypress.Commands.add('solicitar_senha', () => {

  cy.get(loginPg.link_esqueci_senha)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Esqueci minha senha.')
  .click()

  cy.get(loginPg.input_txt_reset_email)
  .should('exist')
  .should('be.visible')
  .type('email@teste.com')
  
  cy.get(loginPg.btn_login)
  .should('exist')
  .should('be.visible')
  .click()

  cy.get(loginPg.msg_error_email)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Não existe usuário com esse e-mail.')
})

Cypress.Commands.add('painel_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')

  cy.get(painelClientePg.txt_painel_cliente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')

  cy.get(painelClientePg.grid_painelPpaciente)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'MARIA DAS DORES')
})

Cypress.Commands.add('modal_edita_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')
  
  cy.get(painelClientePg.edita_cliente)
  .should('exist')
  .should('be.visible')
  .click()
 
  cy.get(painelClientePg.txt_modal_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Alterar Cliente')

})

Cypress.Commands.add('Fechar_modal_alterar_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')
  
  cy.get(painelClientePg.edita_cliente)
  .should('exist')
  .should('be.visible')
  .click()
 
  cy.get(painelClientePg.txt_modal_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Alterar Cliente')

  cy.get(painelClientePg.btn_fechar_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Fechar')
  .click()
})

Cypress.Commands.add('edita_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')
  
  cy.get(painelClientePg.edita_cliente)
  .should('exist')
  .should('be.visible')
  .click()
 
  cy.get(painelClientePg.txt_modal_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Alterar Cliente')

  cy.get(painelClientePg.btn_fechar_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Fechar')
  
  cy.get(painelClientePg.btn_alterar_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Alterar')
  .click()

  cy.get(painelClientePg.txt_alterado_sucesso)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'REGISTRO ALTERADO COM SUCESSO!')
})

Cypress.Commands.add('modal_exibir_cliente', () => {

  cy.get(cadastroPg.criar_cliente)
  .click()
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Clientes')
  
  cy.get(painelClientePg.exibir_cliente)
  .should('exist')
  .should('be.visible')
  .click()
 
  cy.get(painelClientePg.txt_modal_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Exibir Cliente')

  cy.get(painelClientePg.txt_modal_dados_pct)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'JORGE DA SILVA')
  .should('contains.text', 'TERESINA - PI')

  cy.get(painelClientePg.btn_fechar_edit)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Fechar')
  .click()

})



