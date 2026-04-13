class LoginPage {
  selectors = {
    loginButton: 'button:contains("Login")',
    usernameField: '[name="email"]',
    passwordField: '[type="password"]',
    signinButton: 'button:contains("Sign in")'
    
  }

  accessLoginPage() {
    cy.visit('/heroes')
    cy.get(this.selectors.loginButton).eq(0).click()
  }

  loginWithUser(email, password) {
    cy.get(this.selectors.usernameField).type(email)
    cy.get(this.selectors.passwordField).type(password)
    cy.get(this.selectors.signinButton).click()

  }
  submitLogin() {
    cy.get(this.selectors.loginButton).eq(15).click()
  }
}


export default new LoginPage()