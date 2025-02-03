import BasePage from './BasePage';
import { elements } from "./elements";

class login {

    visitarPagina(){
        cy.visit(BasePage.URL);
    }

    //---------------Dados login---------------//  
    preencherLoginSucesso(){
        cy.get(elements.username).type('standard_user');
        cy.get(elements.password).type('secret_sauce');
    }

    preencherLoginBloqueado(){
        cy.get(elements.username).type('locked_out_user');
        cy.get(elements.password).type('secret_sauce');
    }

    preencherLoginInvalido(){
        cy.get(elements.username).type('Usuario_Invalido');
        cy.get(elements.password).type('Senha_Invalida');
    }

    //---------------Botões---------------// 
    botaoConfirmar(){
        cy.get('#login-button').click();
    }

    //--------------- Mensagens de Confirmação---------------//
    mensagemConfirmacao(){
        cy.contains('Products').should('be.visible');
    }

    mensagemUsuarioBloqueado(){
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    }

    mensagemUsuarioInvalido(){
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    }

    mensagemPreenchimentoVazio(){
        cy.contains('Epic sadface: Username is required').should('be.visible');
    }
    
}

export default new login();