// basepage.js
class BasePage {
  URL = 'https://www.saucedemo.com/';

  visitarPagina() {
    cy.visit(this.URL); // Acessa a URL definida na BasePage
  }
}

const basePage = new BasePage(); // Cria uma instância da BasePage

export default basePage; // Exporta a instância
