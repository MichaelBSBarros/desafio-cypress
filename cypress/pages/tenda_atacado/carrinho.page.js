import {CarrinhoElm} from '../components/tendaatacado.elements'

export class CarrinhoPage {

    static adicionarItemProdutoA(qtd) {
        qtd = qtd + 1;
        const incrementaProdutoAte = () => {
            cy.get(CarrinhoElm.IMPUT_ITEM_1_CARRINHO)
            .invoke('val')
            .then((valor) => {
                if (Number(valor) < qtd) {
                cy.get(CarrinhoElm.BTN_ADC_QTD_ITEM_1)
                    .should('exist', { timeout: Cypress.env('global_timeout') })
                    .click();
                incrementaProdutoAte();
                }
            });
        };
        
        incrementaProdutoAte();
        cy.get(CarrinhoElm.IMPUT_ITEM_1_CARRINHO).should('have.value', String(qtd));
    }
    
    static adicionarItemProdutoB(qtd) {
        qtd = qtd + 1;
        const incrementaProdutoAte = () => {
            cy.get(CarrinhoElm.IMPUT_ITEM_2_CARRINHO)
            .invoke('val')
            .then((valor) => {
                if (Number(valor) < qtd) {
                cy.get(CarrinhoElm.BTN_ADC_QTD_ITEM_2)
                    .should('exist', { timeout: Cypress.env('global_timeout') })
                    .click();
                incrementaProdutoAte();
                }
            });
        };
        
        incrementaProdutoAte();
        cy.get(CarrinhoElm.IMPUT_ITEM_2_CARRINHO).should('have.value', String(qtd));
    }            

    static removerItemProdutoA(qtd) { 
        const decrementaProdutoAte = () => {
            cy.get(CarrinhoElm.IMPUT_ITEM_1_CARRINHO)
                .invoke('val')
                .then((valor) => {
                    if (Number(valor) > qtd) {
                        cy.get(CarrinhoElm.BTN_REMOVER_QTD_ITEM_1)
                            .should('exist', { timeout: Cypress.env('global_timeout') })
                            .click();
                        decrementaProdutoAte();
                    }
                });
        };
    
        decrementaProdutoAte();
        cy.get(CarrinhoElm.IMPUT_ITEM_1_CARRINHO).should('have.value', String(qtd));
    }
    
    static removerItemProdutoB(qtd) {
        const decrementaProdutoAte = () => {
            cy.get(CarrinhoElm.IMPUT_ITEM_2_CARRINHO)
                .invoke('val')
                .then((valor) => {
                    if (Number(valor) > qtd) {
                        cy.get(CarrinhoElm.BTN_REMOVER_QTD_ITEM_2)
                            .should('exist', { timeout: Cypress.env('global_timeout') })
                            .click();
                        decrementaProdutoAte();
                    }
                });
        };
    
        decrementaProdutoAte();
        cy.get(CarrinhoElm.IMPUT_ITEM_2_CARRINHO).should('have.value', String(qtd));
    }
    

    static verificarQuantidadeItens(cantidadEsperada) {
        const textoEsperado = cantidadEsperada < 2 ? 'item' : 'itens';
        cy.get(CarrinhoElm.TXT_QDT_ITENS_CARRINHO, { timeout: Cypress.env('global_timeout') })
            .should('have.text', `${cantidadEsperada} ${textoEsperado}`);
    }    

    static converterMoedaParaNumero(valorMoeda) {
        return parseFloat(
          valorMoeda
            .replace('R$', '')
            .replace(/\./g, '')
            .replace(',', '.')
            .trim()
        );
    }

    static seguirParaPagamento(){
        cy.get(CarrinhoElm.BTN_CONTINUAR, { timeout: Cypress.env('global_timeout') })
        .should('exist')
        .contains('Continuar')
        .click();

        cy.get(CarrinhoElm.BTN_FINALIZAR_COMPRA, { timeout: Cypress.env('global_timeout') })
        .should('exist')
        .contains('Finalizar compra')
        .click();
    }
    
}

