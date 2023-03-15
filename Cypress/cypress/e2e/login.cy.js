const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
const usuario_invalido = 'admin2'
const senha_invalida = 'invalido'

describe('Login', () => {

  beforeEach(() => {
    
    cy.visit(Cypress.env('url'), {
        
    })
})

  it('Login sucesso', () => {
    cy.login(user, password);
    cy.url().should('include', '/');
  })

  it('Login - usuario incorretos', () => {
    cy.login(usuario_invalido, password)
    cy.Valida_msg_erro('Incorrect username or password.')
    
});

it('Login - senha incorreta', () => {
  cy.login(user, senha_invalida)
  cy.Valida_msg_erro('Incorrect username or password.')
  
});

it('Login - sem senha', () => {
  cy.login(user, '{enter}')
  cy.Valida_msg_erro('"Senha" não pode ficar em branco.')
});

it('Login - sem usuario', () => {
  cy.login('{enter}', password)
  cy.Validaruser_msg_erro('"Login" não pode ficar em branco.')
});

it('Login - sem usuario e senha', () => {
  cy.login('{enter}', '{enter}')
  cy.Validaruser_msg_erro('"Login" não pode ficar em branco.')
  cy.Valida_msg_erro('"Senha" não pode ficar em branco.')
});

})  