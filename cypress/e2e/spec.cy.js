describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com.mx/'),
    cy.get('[id=twotabsearchtextbox]').type('xbox')
    cy.get('[id=nav-search-submit-button').click()
    cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click()
  })
})