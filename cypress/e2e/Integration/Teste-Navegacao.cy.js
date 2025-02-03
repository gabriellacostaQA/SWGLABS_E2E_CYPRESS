import login from '../pages/login';
import inventario from '../pages/inventario';
import carrinho from '../pages/carrinho';
import saida from '../pages/saida';

describe('template spec', () => {
  
  beforeEach(() =>{
    login.visitarPagina();  // A URL será acessada automaticamente via BasePage
  })

  it('Validar que o usuario foi redirecionamento para página de inventário', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.adicionarMochilaCarrinho();
    
  })

  it('Validar detalhes do produto Mochila', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.descricaoProdutoMochila();
    inventario.textoDescricaoMochila();
    
  })

  it('Validar que o produto Mochila está adiconado ao carrinho', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.adicionarMochilaCarrinho()
    carrinho.botaoCarrinho();
    carrinho.tituloConfirmacaoCarrinho();
  })

  it('Validar remoção do produto Jaqueta do carrinho', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.adicionarJaquetaCarrinho()
    carrinho.botaoCarrinho();
    carrinho.tituloConfirmacaoCarrinho();
    carrinho.botaoRemoverJaqueta();
  })

  it('Validar itens listados no carrinho de compras', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.adicionarbabyBodyCarrinho();
    inventario.adicionarLanternaCarrinho();
   // inventario.adicionarCasacoCarrinho();
    carrinho.botaoCarrinho();
    carrinho.tituloConfirmacaoCarrinho();
    carrinho.textoBabyBody();
    carrinho.textoLanterna();
   // carrinho.textoCasaco();
  })

  it('Validar processo inicial de checkout', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.mensagemConfirmacaoInventario();
    inventario.adicionarLanternaCarrinho();
    carrinho.botaoCarrinho();
    carrinho.tituloConfirmacaoCarrinho();
    carrinho.textoLanterna();
    carrinho.botaoCheckout();
  })

  it('Validar preenchimento dos campos do checkout', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.adicionarLanternaCarrinho();
    carrinho.botaoCarrinho();
    carrinho.botaoCheckout();
    saida.preencherCheckout();
  })


  it('Validar a finalização do pedido com informações válidas', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.adicionarLanternaCarrinho();
    carrinho.botaoCarrinho();
    carrinho.botaoCheckout();
    saida.preencherCheckout();
    saida.botaoContinue();
    saida.mensagemPayment();
    saida.mensagemShipping();
    saida.botaoFinalizar();
    saida.mensagemFinal();
    saida.botaoBackHome();
  })

  it('Validar erro ao tentar finalizar o pedido com informações inválidas', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.adicionarLanternaCarrinho();
    carrinho.botaoCarrinho();
    carrinho.botaoCheckout();
    saida.botaoContinue();
    saida.mensagemErroFirstName();
    saida.preencherPrimeiroNome();
    saida.botaoContinue();
    saida.mensagemErroLastName();
    saida.preencherUltimoNome()
    saida.botaoContinue();
    saida.mensagemErroPostalCode();
    saida.preencherPostalCode();
    saida.botaoContinue();  
    
  })

  it('Validar que os produtos estão sendo ordenados por preço crescente', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.selecionarOrdenacao('lohi');
    inventario.validarOrdenacaoCrescente();
    
  })

  it('Validar que os produtos estão sendo ordenados por preço decrescente', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.selecionarOrdenacao('hilo');
    inventario.validarOrdenacaoDecrescente();
  })

  it('Validar que os produtos estão sendo ordenados por nome A-Z', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.selecionarOrdenacao('az');
    inventario.validarOrdenacaoNomeAZ();
  })

  it('Validar que os produtos estão sendo ordenados por nome Z-A', () => {

    login.preencherLoginSucesso();
    login.botaoConfirmar();
    inventario.selecionarOrdenacao('za');
    inventario.validarOrdenacaoNomeZA();
  })

  

})