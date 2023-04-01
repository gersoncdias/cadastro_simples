// import {
//   faker
// } from '@faker-js/faker';
// const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`

// const painelEstadosPage = require('./page_elements/painel_estado_page')
// const painelEstadosPg = new painelEstadosPage()



// Cypress.Commands.add('menu_cadastro', () => {

//   cy.get(cadastroPg.menu_cadastro)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Cadastros')
// })

// Cypress.Commands.add('criando_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(cadastroPg.btn_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Cliente')

//   cy.get(cadastroPg.input_nome_cliente)
//     .should('exist')
//     .should('be.visible')
//     .type(nomeCompleto)
//     .should('have.value', nomeCompleto);

//   cy.get(cadastroPg.select_estado)
//     .click()
//     .should('exist')
//     .should('be.visible')

//   cy.get(cadastroPg.select_dropdown)
//     .contains('Rio de Janeiro - RJ')
//     .click()

//   cy.get(cadastroPg.select_cidade)
//     .click()
//     .should('exist')
//     .should('be.visible')

//   cy.get(cadastroPg.select_dropdown)
//     .contains('SÃO GONÇALO - RJ')
//     .click()

//   cy.get(cadastroPg.btn_modal_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   //****Corrigir******/
//   // cy.get(cadastroPg.msg_sucesso)
//   //   .should('exist')
//   //   .should('be.visible')
//   //   .should('contains.text', 'REGISTRO CRIADO COM SUCESSO!')
// })

// Cypress.Commands.add('criando_cliente_fixo', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(cadastroPg.btn_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Cliente')

//   cy.get(cadastroPg.input_nome_cliente)
//     .should('exist')
//     .should('be.visible')
//     .type('PEDRO AUGUSTO')
//     .should('have.value', 'PEDRO AUGUSTO');

//   cy.get(cadastroPg.select_estado)
//     .click()
//     .should('exist')
//     .should('be.visible')

//   cy.get(cadastroPg.select_dropdown)
//     .contains('Rio de Janeiro - RJ')
//     .click()

//   cy.get(cadastroPg.select_cidade)
//     .click()
//     .should('exist')
//     .should('be.visible')

//   cy.get(cadastroPg.select_dropdown)
//     .contains('SÃO GONÇALO - RJ')
//     .click()

//   cy.get(cadastroPg.btn_modal_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()
// })


// Cypress.Commands.add('criar_estado', () => {

//   cy.get(cadastroPg.criar_estado)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Estados')

//   cy.get(cadastroPg.btn_criar_estado)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Estados')
//     .click()

//   cy.get(cadastroPg.modal_criar_estado)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Estados')
// })

// Cypress.Commands.add('criar_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(cadastroPg.btn_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Cliente')
//     .click()

//   cy.get(cadastroPg.modal_criar_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Criar Cliente')
// })



// Cypress.Commands.add('painel_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.txt_painel_cliente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.grid_painelPpaciente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'MARIA DAS DORES')
// })

// Cypress.Commands.add('modal_edita_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.edita_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.txt_modal_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Alterar Cliente')
// })

// Cypress.Commands.add('Fechar_modal_alterar_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.edita_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.txt_modal_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Alterar Cliente')

//   cy.get(painelClientePg.btn_fechar_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Fechar')
//     .click()
// })

// Cypress.Commands.add('edita_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.edita_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.txt_modal_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Alterar Cliente')

//   cy.get(painelClientePg.btn_fechar_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Fechar')

//   cy.get(painelClientePg.btn_alterar_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Alterar')
//     .click()

//   cy.get(painelClientePg.txt_alterado_sucesso)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'REGISTRO ALTERADO COM SUCESSO!')
// })

// Cypress.Commands.add('modal_exibir_cliente', () => {

//   cy.get(cadastroPg.criar_cliente)
//     .click()
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Clientes')

//   cy.get(painelClientePg.exibir_cliente)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.txt_modal_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Exibir Cliente')

//   cy.get(painelClientePg.txt_modal_dados_pct)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'JORGE DA SILVA')
//     .should('contains.text', 'TERESINA - PI')

//   cy.get(painelClientePg.btn_fechar_edit)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Fechar')
//     .click()
// })

// Cypress.Commands.add('excluir_cliente', () => {

//   cy.get(painelClientePg.grid_painelPpaciente)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'MARIA DAS DORES')

//   cy.get(painelClientePg.modal_delete)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.modal_confirma_deletar)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Deseja realmente deletar o(s) registro(s) ?')

//   cy.get(painelClientePg.btn_confirmar_acao)
//     .should('exist')
//     .should('be.visible')
//     .click()

//   cy.get(painelClientePg.txt_alterado_sucesso)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'REGISTRO DELETADO COM SUCESSO!')
// })