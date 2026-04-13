import loginPage from './pages/loginPage'

describe('Controle de permissão de UI', () => {

  it('Admin deve ver botão de criar herói', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser('admin@test.com', 'test123')

    cy.get('[href="/heroes/new"]').should('be.visible')
  })

  it('Usuário comum não deve ver botão de criar herói', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser('test@test.com', 'test123')

    cy.get('[href="/heroes/new"]').should('not.exist')
  })

})