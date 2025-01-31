import {PagamentoElm} from '../components/tendaatacado.elements'

export class PagamentoPage {

    static expandirOpcaoBoleto(){
        cy.get(PagamentoElm.BTN_OPCAO_BOLETO).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(PagamentoElm.BTN_OPCAO_BOLETO, { timeout: Cypress.env('global_timeout') }).click();
    }

    static expandirOpcaoCartao(){
        cy.get(PagamentoElm.BTN_OPCAO_CARTAO).should('exist', { timeout: Cypress.env('global_timeout') });
        cy.get(PagamentoElm.BTN_OPCAO_CARTAO, { timeout: Cypress.env('global_timeout') }).click();
    }

    static preencherNumeroCartao(numeroCartao) {
        cy.get(PagamentoElm.INPUT_NUMERO_CARTAO).type(numeroCartao);
    }
      
    static preencherMesVencimento(mesVencimento) {
        cy.get(PagamentoElm.INPUT_MES_VENCIMENTO).click();
        cy.get('.react-select__menu').should('be.visible');
        cy.get('.react-select__menu').contains(mesVencimento).click();
    }
    
    static preencherAnoVencimento(anoVencimento) {
        cy.get(PagamentoElm.INPUT_ANO_VENCIMENTO).click();
        cy.get('.react-select__menu').should('be.visible');
        cy.get('.react-select__menu').contains(anoVencimento).click();
    }
    
    static preencherNomeCartao(nomeCartao) {
        cy.get(PagamentoElm.INPUT_NOME_CARTAO).type(nomeCartao)
    }
    
    static preencherCpfCartao(cpf) {
        cy.get(PagamentoElm.INPUT_CPF_CARTAO).type(cpf)
    }
    
    static selecionarParcelas(parcelas) {
        cy.get(PagamentoElm.INPUT_PARCELAS_CARTAO).click();
        cy.get('.react-select__menu').should('be.visible');
        cy.get('.react-select__menu').contains(parcelas).click();
    }

    static finalizarPagamentoCartao(){
        cy.get(PagamentoElm.BTN_FINALIZAR_PAGAMENTO_CARTAO, { timeout: Cypress.env('global_timeout') })
        .should('exist')
        .contains('Pagar com cartão Tenda')
        .click();
    }

    static finalizarPagamentoBoleto(){
        cy.get(PagamentoElm.BTN_FINALIZAR_PAGAMENTO_BOLETO, { timeout: Cypress.env('global_timeout') })
        .should('exist')
        .contains('Pagar com boleto')
        .click();
    }
    
}

