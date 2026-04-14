import loginPage from './pages/loginPage'
import heroesPage from './pages/heroesPage'

describe('Lista de heróis', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser('admin@test.com', 'test123')
  })

  it('Deve exibir heróis na tela', () => {
    heroesPage.getHeroCards().should('have.length.greaterThan', 0)
  })

  it('Deve criar novo herói', () => {
    heroesPage.clickNewHero()
    heroesPage.createHero('New Hero', '17', '25', '50', 'Super Strength')
    cy.contains('New Hero').should('be.visible')

  })
  it('Permite criar heróis duplicados', () => {

    const heroName = 'Hero Duplicado'

    heroesPage.clickNewHero()
    heroesPage.createHero(heroName, '10', '20', '30', ['Super Strength'])

    heroesPage.clickNewHero()
    heroesPage.createHero(heroName, '10', '20', '30', ['Super Strength'])

    cy.get('[data-cy="hero-card"]')
      .filter(`:contains("${heroName}")`)
      .should('have.length', 1)

  })

  it('Permite criar herói com campos em branco', () => {
    const heroName = `Hero ${Date.now()}`
    heroesPage.clickNewHero()
    heroesPage.clickEmpty()


  })
})
