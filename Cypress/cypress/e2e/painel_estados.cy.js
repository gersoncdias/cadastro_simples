const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const painelEstado = '/register/state/index'
describe('Painel Estados', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('url'), {})
        cy.login(user, password);
    })

    it('Lista Painel Estados', () => {
        cy.menu_cadastro()
        cy.painel_estado()
    })

    it('Criar Estados', () => {
        cy.menu_cadastro()
        cy.painel_estado()
        cy.criando_estado()
    })

    it('Fechar modal Criar Estado', () => {
        cy.menu_cadastro()
        cy.painel_estado()
        cy.fechar_modal_criar_estado()
    })

    it('Editar Estados', () => {
        cy.menu_cadastro()
        cy.painel_estado()
        cy.edita_estado()
    })

    it('Exibir dados Estado', () => {
        cy.menu_cadastro()
        cy.painel_estado()
        cy.modal_exibir_Estado()
        cy.url().should('include', painelEstado);
    })

})