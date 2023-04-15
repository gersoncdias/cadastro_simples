const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const painelCidades = '/egister/city/index'


describe('Painel Cidades', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('url'), {})
        cy.login(user, password);
    })

    it('Lista Painel Cidades', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
    })

    it('Criar Cidades Com Capital', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
        cy.criando_cidade_com_capital()
    })

    it('Criar Cidades Sem Capital', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
        cy.criando_cidade_sem_capital()
    })

    it('Fechar modal Criar Cidades', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
        cy.fechar_modal_criar_cidade()
    })

    it('Editar Cidade', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
        cy.edita_estado()
    })

    it('Exibir dados Cidade', () => {
        cy.menu_cadastro()
        cy.painel_cidade()
        cy.modal_exibir_Estado()
        cy.url().should('include', painelCidades);
    })

})