import BasePage from './BasePage';
import { elements } from "./elements";

class saida {

    visitarPagina(){
        cy.visit(BasePage.URL);
    }

    //---------------Dados para checkout---------------//
    preencherCheckout(){
        cy.get(elements.firstName).type('Gabriella');
        cy.get(elements.lastName).type('Costa');
        cy.get(elements.postalCode).type('24120210');
    }
    
    preencherPrimeiroNome(){
        cy.get(elements.firstName).type('Gabriella');
    }

    preencherUltimoNome(){
        cy.get(elements.lastName).type('Costa');
    }

    preencherPostalCode(){
        cy.get(elements.postalCode).type('24120210');
    }

    //---------------Botões---------------// 
    botaoContinue(){
        cy.get(elements.continue).click();
    }

    botaoFinalizar(){
        cy.get(elements.finish).click();
    }

    botaoBackHome(){
        cy.get(elements.backHome).click();
    }

    //--------------- Asserts ---------------//
    mensagemConfirmacaoCheckout(){
        cy.contains('Checkout: Your Information').should('be.visible');
    }

    mensagemCheckoutOverview(){
        cy.contains('Checkout: Overview').should('be.visible');
    }

    mensagemPayment(){
        cy.contains('Payment Information:').should('be.visible');
    }

    mensagemShipping(){
        cy.contains('Shipping Information:' + 'Free Pony Express Delivery!').should('be.visible');
    }

    mensagemFinal(){
        cy.contains('Thank you for your order!' + 'Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible');
    }

    mensagemErroFirstName(){
        cy.contains('Error: First Name is required').should('be.visible');
    }

    mensagemErroLastName(){
        cy.contains('Error: Last Name is required').should('be.visible');
    }

    mensagemErroPostalCode(){
        cy.contains('Error: Postal Code is required').should('be.visible');
    }
    
}

export default new saida();