import Base from '../_base.page'
import {Home} from '../components/tendaatacado.elements'

export class HomePage extends Base {
    
    static fecharJanelaCampanha() {
        cy.get(Home.BTN_FECHAR_JANELA_CAMP).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_FECHAR_JANELA_CAMP).click();
    }

    static acessarListaDepartamentos() {
        cy.get(Home.BTN_LISTA_DEPT).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_LISTA_DEPT).click({ force: true });
    }

    static acessarMarketplace() {
        cy.get(Home.SPAN_MARKETPLACE).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.SPAN_MARKETPLACE).click({ force: true });
    }

    static acessarProdutoSeller() {
        cy.get(Home.SPAN_PRODUTO_SELLER).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.SPAN_PRODUTO_SELLER).click({ force: true });
    }

    static preencherCep(cep) {
        cy.get(Home.INPUT_CEP).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.INPUT_CEP).type(cep);
        cy.get(Home.BTN_INPUT_CEP).click({ force: true });
    }

    static selecionarOpcaoEntrega() {
        cy.get(Home.BTN_DELIVERY).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_DELIVERY, { timeout: Cypress.env('global_timeout') })
            .should('be.visible')
            .click();
    }

    static aguardarCarregamento(spinnerSelector = Home.DIV_LOADING_SPINNER) {
        cy.get('body').then(($body) => {
          if ($body.find(spinnerSelector).length > 0) {
            cy.log('loader encontrado. aguardando desaparecer...');
            cy.get(spinnerSelector, { timeout: Cypress.env('global_timeout') })
          } else {
            cy.log('loader nao encontrado! seguindo...');
          }
        });
      }
      
      
    static adicionarPrimeiroProdutoAoCarrinho() {
        cy.get(Home.BTN_ADC_CARRINHO_PRIMEIRO_PRODUTO).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_ADC_CARRINHO_PRIMEIRO_PRODUTO).click({ force: true });
    }

    static acessarMercearia() {
        cy.get(Home.SPAN_MERCEARIA).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.SPAN_MERCEARIA).click({ force: true });
    }

    static acessarArroz() {
        cy.get(Home.SPAN_ARROZ).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.SPAN_ARROZ).click({ force: true });
    }

    static visualizarCarrinho() {
        cy.get(Home.BTN_VER_CARRINHO).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_VER_CARRINHO).click({ force: true });
    }

    static acessarLogin() {
        cy.get(Home.BTN_LOGIN).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_LOGIN).click();
    }

    static acessarCadastrar() {
        cy.get(Home.BTN_CRIAR_CONTA).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(Home.BTN_CRIAR_CONTA).click();
    }

    static informarCpfEmailLogin = (valor) => {
        cy.get(Home.INP_EMAIL_LOGIN).type(valor);
    }

    static informarSenhaLogin = (senha) => {
        cy.get(Home.INP_SENHA_LOGIN).type(senha);
    }

    static efetuarLogin() {
        cy.get(Home.BTN_EFETUAR_LOGIN).click();
    }

}