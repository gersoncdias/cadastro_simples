import {
    faker
} from '@faker-js/faker';
const code_estado = `${faker.address.stateAbbr()}`
const nome_estado = `${faker.address.city()}`

const painelEstadosPage = require('../page_elements/painel_estados_page.js')
const painelEstadosPg = new painelEstadosPage()

const cadastroPage = require('../page_elements/cadastro_page')
const cadastroPg = new cadastroPage()



Cypress.Commands.add('menu_cadastro', () => {

    cy.get(cadastroPg.menu_cadastro)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cadastros')
})

Cypress.Commands.add('painel_estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.btn_criar_estados)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Estado')

    cy.get(painelEstadosPg.txt_painel_estados)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.grid_painel_estado)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Rio de Janeiro')
})

Cypress.Commands.add('modal_edita_estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.edita_estado)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(painelEstadosPg.txt_modal_edit)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Alterar Estado')
})

Cypress.Commands.add('edita_estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.edita_estado)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(painelEstadosPg.txt_modal_edit)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Alterar Estado')

    cy.get(painelEstadosPg.btn_fechar_edit)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Fechar')

    cy.get(painelEstadosPg.btn_modal_alterar)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Alterar')
        .click()

    cy.get(painelEstadosPg.txt_alterado_sucesso)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'REGISTRO ALTERADO COM SUCESSO!')
})

Cypress.Commands.add('criando_estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.btn_criar_estados)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Estado')
        .click()

    cy.get(painelEstadosPg.input_nome_estado)
        .should('exist')
        .should('be.visible')
        .type(nome_estado)
        .should('have.value', nome_estado);

    cy.get(painelEstadosPg.input_cod_estado)
        .should('exist')
        .should('be.visible')
        .type(code_estado)
        .should('have.value', code_estado);

    cy.get(painelEstadosPg.btn_modal_criar_estado)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(cadastroPg.msg_sucesso)
        .should('exist')
        .should('be.visible')
})

Cypress.Commands.add('fechar_modal_criar_estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')

    cy.get(painelEstadosPg.btn_criar_estados)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Estado')
        .click()

    cy.get(painelEstadosPg.btn_fechar_estado_criar)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Fechar')
        .click()
})

Cypress.Commands.add('modal_exibir_Estado', () => {

    cy.get(painelEstadosPg.criar_estado)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Estados')


    cy.get(painelEstadosPg.exibir_estado)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(painelEstadosPg.txt_exibir_estado)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Exibir Estado')

    cy.get(painelEstadosPg.txt_modal_dados_estado)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Acre')
        .should('contains.text', 'AC')

    cy.get(painelEstadosPg.btn_fechar_estado_criar)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Fechar')
        .click()
})