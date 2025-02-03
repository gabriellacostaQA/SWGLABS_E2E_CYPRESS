import BasePage from './BasePage';
import { elements } from "./elements";

class carrinho {

    visitarPagina(){
        cy.visit(BasePage.URL);
    }

    

    //---------------Botões---------------// 
    botaoCarrinho(){
        cy.get(elements.carrinho).click();
    }

    botaoRemoverJaqueta(){
        cy.get(elements.removeJaqueta).click();
    }

    botaoCheckout(){
        cy.get(elements.checkout).click();
    }

    //--------------- Asserts ---------------//
    tituloConfirmacaoCarrinho(){
        cy.contains('Your Cart').should('be.visible');
    }
    textoDescricaoMochila(){
        cy.contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible');
    } 

    textoBabyBody(){
        cy.contains('Sauce Labs Onesie').should('be.visible');
    } 

    textoLanterna(){
        cy.contains('Sauce Labs Bike Light').should('be.visible');
    } 
    
    textoCasaco(){
        cy.contains('Test.allTheThings() T-Shirt (Red)').should('be.visible');
    } 
    
}

export default new carrinho();