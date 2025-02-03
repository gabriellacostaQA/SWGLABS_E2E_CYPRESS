import login from '../pages/login';
import inventario from '../pages/inventario';

describe('template spec', () => {
  
  beforeEach(() =>{
    login.visitarPagina();  // A URL será acessada automaticamente via BasePage
  })

  it('Validar login com credenciais válidas', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    login.mensagemConfirmacao();

  })

  it('Validar login com usuário bloqueado', () => {

    login.preencherLoginBloqueado();
    login.botaoConfirmar();
    login.mensagemUsuarioBloqueado();

  })

  it('Validar login com credenciais inválidas', () => {

    login.preencherLoginInvalido();
    login.botaoConfirmar();
    login.mensagemUsuarioInvalido();

  })

  it('Validar mensagem de erro ao tentar login sem preencher os campos', () => {

    login.botaoConfirmar();
    login.mensagemPreenchimentoVazio();

  })

  it('Validar logout com sucesso', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.botaoLista();
    inventario.botaoLogout();
    inventario. confirmacaoPaginaInicial();
  })

  it('Validar login após o logout', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.botaoLista();
    inventario.botaoLogout();
    inventario. confirmacaoPaginaInicial();
    login.preencherLoginSucesso();
    login.botaoConfirmar();
    login.mensagemConfirmacao();
  })

  it('Validar login com credenciais válidas em diferentes dispositivos', () => {

    //Teste em Desktop
    cy.viewport(1280, 720); // Simula uma tela de notebook/desktop
    cy.log("Testando em Desktop");
    login.preencherLoginSucesso();
    login.botaoConfirmar();
    login.mensagemConfirmacao();

    //Teste em Tablet
    cy.viewport('ipad-2'); // Simula um iPad (768x1024)
    cy.log("Testando em Tablet");
    login.mensagemConfirmacao(); // Verifica se a página continua visível e ajustada

    //Teste em Celular
    cy.viewport('iphone-x'); // Simula um iPhone X (375x812)
    cy.log("Testando em Celular");
    login.mensagemConfirmacao(); // Valida se a página ainda está correta no mobile

});


})
