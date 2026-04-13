import loginPage from './pages/loginPage'
import heroesPage from './pages/heroesPage'

describe('Lista de heróis', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser('admin@test.com', 'test123')
  })

  it('Deve exibir 7 heróis na tela', () => {
    heroesPage.getHeroCards().should('have.length', 7)
  })

})


