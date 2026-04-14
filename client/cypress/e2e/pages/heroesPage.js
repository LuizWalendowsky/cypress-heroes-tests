class HeroesPage {
  selectors = {
    heroCards: '[data-cy="hero-card"]',
    heroCreate: '[href="/heroes/new"]',
    nameInput: '[data-cy="nameInput"]',
    priceInput: '[data-cy="priceInput"]',
    fansInput: '[data-cy="fansInput"]',
    savesInput: '[data-cy="savesInput"]',
    powersSelect: '[data-cy="powersSelect"]',
    avatarFile: '[data-cy="avatarFile"]'
  }

  getHeroCards() {
    return cy.get(this.selectors.heroCards)
  }

  clickNewHero() {
    cy.get(this.selectors.heroCreate).click()
  }

  createHero(name, price, fans, saves, powers) {
    cy.get(this.selectors.nameInput).type(name)
    cy.get(this.selectors.priceInput).clear().type(price)
    cy.get(this.selectors.fansInput).clear().type(fans)
    cy.get(this.selectors.savesInput).clear().type(saves)

    cy.get(this.selectors.powersSelect).select(powers)

    cy.get(this.selectors.avatarFile)
      .selectFile('cypress/fixtures/avatar.jpg')

    cy.contains('Submit').click()
  }
  clickEmpty() {
    cy.contains('Submit').click()
    cy.contains('Name is required').should('be.visible')
    cy.contains('Price is required').should('be.visible')
    cy.contains('Fans is required').should('be.visible')
    cy.contains('Saves is required').should('be.visible')
    cy.contains('Powers is required').should('be.visible')
  }
}

export default new HeroesPage()