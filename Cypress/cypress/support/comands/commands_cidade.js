import {
    faker
} from '@faker-js/faker';
const code_estado = `${faker.address.stateAbbr()}`
const nome_cidade = `${faker.address.city()}`

const painelCidadesPage = require('../page_elements/painel_cidade_page')
const painelCidadesPg = new painelCidadesPage()

const cadastroPage = require('../page_elements/cadastro_page')
const cadastroPg = new cadastroPage()


Cypress.Commands.add('menu_cadastro', () => {

    cy.get(cadastroPg.menu_cadastro)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cadastros')
})

Cypress.Commands.add('painel_cidade', () => {

    cy.get(painelCidadesPg.criar_cidade)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cidade')

    cy.get(painelCidadesPg.btn_criar_cidade)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Cidade')

    cy.get(painelCidadesPg.txt_painel_cidade)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cidade')

    cy.get(painelCidadesPg.grid_painel_cidade)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Rio de Janeiro')
})

Cypress.Commands.add('criando_cidade_com_capital', () => {

    cy.get(painelCidadesPg.criar_cidade)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cidade')

    cy.get(painelCidadesPg.btn_criar_cidade)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Cidade')
        .click()

    cy.get(painelCidadesPg.input_nome_cidade)
        .should('exist')
        .should('be.visible')
        .type(nome_cidade)
        .should('have.value', nome_cidade);

    cy.get(painelCidadesPg.btn_modal_criar_cidade)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(painelCidadesPg.select_cidade)
        .click()
        .should('exist')
        .should('be.visible')

    cy.get(cadastroPg.select_dropdown)
        .contains('Rio de Janeiro - RJ')
        .click()

    cy.get(painelCidadesPg.check_box)
        .click()

    cy.get(painelCidadesPg.btn_criar)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar')
        .click()

    cy.get(cadastroPg.msg_sucesso)
        .should('exist')
        .should('be.visible')
})

Cypress.Commands.add('criando_cidade_sem_capital', () => {

    cy.get(painelCidadesPg.criar_cidade)
        .click()
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Cidade')

    cy.get(painelCidadesPg.btn_criar_cidade)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar Cidade')
        .click()

    cy.get(painelCidadesPg.input_nome_cidade)
        .should('exist')
        .should('be.visible')
        .type(nome_cidade)
        .should('have.value', nome_cidade);

    cy.get(painelCidadesPg.btn_modal_criar_cidade)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(painelCidadesPg.select_cidade)
        .click()
        .should('exist')
        .should('be.visible')

    cy.get(cadastroPg.select_dropdown)
        .contains('Rio de Janeiro - RJ')
        .click()

    cy.get(painelCidadesPg.btn_criar)
        .should('exist')
        .should('be.visible')
        .should('contains.text', 'Criar')
        .click()

    cy.get(cadastroPg.msg_sucesso)
        .should('exist')
        .should('be.visible')
})