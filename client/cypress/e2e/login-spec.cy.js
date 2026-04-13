import loginPage from './pages/loginPage'

describe('Login', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  it('Deve fazer login com um usuário válido', () => {
    loginPage.loginWithUser('admin@test.com', 'test123')

    cy.url().should('include', '/heroes')
  })

  it('Deve exibir uma mensagem de erro ao fazer login com email inválido', () => {
    loginPage.loginWithUser('usuarioInvalido', 'test123')

    cy.contains('Email is not valid').should('be.visible')
    cy.contains('button', 'Sign in').should('be.visible')
  })

  it('Deve exibir uma mensagem de erro ao fazer login com senha inválida', () => {
    loginPage.loginWithUser('admin@test.com', 'senhaInvalida')

    cy.contains('Invalid email or password').should('be.visible')
    cy.contains('button', 'Sign in').should('be.visible')
  })

  it('Deve exibir mensagens ao tentar logar sem email e sem senha', () => {
    cy.contains('button', 'Sign in').click()

    cy.contains('Email is required').should('be.visible')
    cy.contains('Password is required').should('be.visible')
  })

})