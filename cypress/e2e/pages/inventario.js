import BasePage from './BasePage';
import { elements } from "./elements";

class inventario {

    visitarPagina(){
        cy.visit(BasePage.URL);
    }    

    //---------------Botões---------------// 

    descricaoProdutoMochila(){
        cy.get(elements.descricaoMochila).click();
    
    }

    adicionarMochilaCarrinho(){
        cy.get(elements.mochila).click();
    
    }

    adicionarJaquetaCarrinho(){
        cy.get(elements.jaqueta).click();
    
    }

    adicionarLanternaCarrinho(){
        cy.get(elements.lanterna).click();
    
    }

    adicionarCamisetaCarrinho(){
        cy.get(elements.camiseta).click();
    
    }

    adicionarbabyBodyCarrinho(){
        cy.get(elements.babyBody).click();
    
    }

    adicionarCasacoCarrinho(){
        cy.get(elements.casaco).click();
    
    }

    botaoLista(){
        cy.get(elements.lista).click();
    
    }

    botaoLogout(){
        cy.get(elements.logout).click();
    
    }


     //--------------- Ordenação ---------------//
    
     selecionarOrdenacao(opcao) {
        cy.get(elements.ordenacaoProdutos).select(opcao);
    }

    validarOrdenacaoCrescente() {
        cy.get(elements.precosProdutos).then($prices => {
            const extractedPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
            const sortedPrices = [...extractedPrices].sort((a, b) => a - b);
            expect(extractedPrices).to.deep.equal(sortedPrices);
        });
    }

    validarOrdenacaoDecrescente() {
        cy.get(elements.precosProdutos).then($prices => {
            const extractedPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
            const sortedPrices = [...extractedPrices].sort((a, b) => b - a);
            expect(extractedPrices).to.deep.equal(sortedPrices);
        });
    }
    
    validarOrdenacaoNomeAZ() {
        cy.get(elements.nomesProdutos).then($nomes => {
            const extractedNames = [...$nomes].map(el => el.innerText.trim());
            const sortedNames = [...extractedNames].sort(); // Ordenação alfabética padrão
            expect(extractedNames).to.deep.equal(sortedNames);
        });
    }

    validarOrdenacaoNomeZA() {
        cy.get(elements.nomesProdutos).then($nomes => {
            const extractedNames = [...$nomes].map(el => el.innerText.trim());
            const sortedNames = [...extractedNames].sort().reverse(); // Ordenação alfabética reversa
            expect(extractedNames).to.deep.equal(sortedNames);
        });
    }
    
    
    
    //--------------- Asserts ---------------//
    mensagemConfirmacaoInventario(){
        cy.contains('Swag Labs').should('be.visible');
    }

    textoDescricaoMochila(){
        cy.contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible');
    }   
    
    confirmacaoPaginaInicial(){
        cy.get(elements.credenciaisLogin).should('contain.text', 'Accepted usernames are:');
    }
}

export default new inventario();