🛒 Automação de Testes com Cypress e Azure DevOps
Este projeto implementa testes automatizados para um e-commerce utilizando Cypress com Page Object Model (POM). Além disso, conta com integração contínua via Azure DevOps (CI/CD) para execução eficiente e contínua dos testes.

📌 Funcionalidades Testadas

✅ Login (credenciais válidas, inválidas e usuário bloqueado)

✅ Fluxo de Compra (adicionar/remover produtos, checkout e finalização de pedido)

✅ Ordenação de Produtos (por preço e nome)

✅ Logout e Reautenticação

✅ Testes Responsivos (desktop, tablet e mobile)

🛠️ Tecnologias Utilizadas

Cypress 🟢 (Framework de testes end-to-end)

JavaScript (Linguagem principal dos testes)

Azure DevOps 🚀 (Integração e Deploy Contínuo - CI/CD)

Page Object Model (POM) (Organização estruturada dos testes)

📂 Estrutura do Projeto
📁 cypress
 ├── 📁 fixtures        # Dados de teste
 ├── 📁 integration     # Testes automatizados
 │    ├── Teste-login.cy.js      # Testes de login
 │    ├── Teste-Navegacao.cy.js  # Testes de navegação
 ├── 📁 pages          # Page Objects
 │    ├── BasePage.js  # Classe base para páginas
 │    ├── carrinho.js  # Página do carrinho
 │    ├── elements.js  # Mapeamento de elementos
 │    ├── inventario.js # Página de inventário
 │    ├── login.js     # Página de login
 │    ├── saída.js     # Página de checkout/saída
 ├── 📁 plugins         # Plugins do Cypress
 ├── 📁 support         # Comandos customizados e configurações globais
 ├── cypress.json       # Configurações do Cypress

🚀 Como Executar os Testes

Clone o repositório: git clone [https://github.com/seu-repositorio.git](https://github.com/gabriellacostaQA/SWGLABS_E2E_CYPRESS)
cd nome-do-projeto

Instale as dependências: npm install

Execute os testes no modo interativo: npx cypress open

Execute os testes no modo headless: npx cypress run

🔄 Integração com Azure DevOps

Este projeto conta com CI/CD no Azure DevOps, garantindo execução automática dos testes a cada push. O pipeline está configurado para rodar os testes e gerar relatórios automaticamente.

