/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {HomePage} from '../../../../pages/tenda_atacado/home.page'
import {CarrinhoPage} from '../../../../pages/tenda_atacado/carrinho.page'
import {CarrinhoElm} from '../../../../pages/components/tendaatacado.elements'

import StaticFactory from '../../../../fixtures/factories/static'

Given(`que eu esteja na página home`, () => {
	cy.visit('/')
  HomePage.fecharJanelaCampanha()
});

Given(`que eu tenha adicionado dois produtos disponíveis: um produto Tenda e um produto de um seller`, () => {
  HomePage.preencherCep(StaticFactory.cep)
  HomePage.selecionarOpcaoEntrega()
  HomePage.aguardarCarregamento()
  HomePage.aguardarCarregamento()
  HomePage.acessarListaDepartamentos()
  HomePage.acessarMarketplace()
  HomePage.acessarProdutoSeller()
  HomePage.adicionarPrimeiroProdutoAoCarrinho()
  HomePage.acessarMercearia()
  HomePage.acessarArroz()
  HomePage.adicionarPrimeiroProdutoAoCarrinho()
});

When(`eu acesso o carrinho de compras`, () => {
  HomePage.visualizarCarrinho()
});

Then(`ambos os produtos devem estar no carrinho`, () => {
  cy.get(CarrinhoElm.DIV_ITEM_1_CARRINHO).should('be.visible');
  cy.get(CarrinhoElm.DIV_ITEM_2_CARRINHO).should('be.visible');

  cy.get(CarrinhoElm.TXT_QDT_ITENS_CARRINHO)
    .invoke('text')
    .then((text) => {
      const quantity = parseInt(text.trim(), 10);
      expect(quantity).to.equal(2);
    });
});

Given(`que eu tenha acessado o carrinho de compras`, () => {
  HomePage.visualizarCarrinho()
});

When(`eu adiciono uma unidade a cada produto`, () => {
  CarrinhoPage.verificarQuantidadeItens(2)
  cy.get(CarrinhoElm.TXT_VALOR_ITENS)
  .invoke('text')
  .then((valorTexto) => {
    const valorAntigo = CarrinhoPage.converterMoedaParaNumero(valorTexto);
    cy.wrap(valorAntigo).as('valorAntigo');
  });
  CarrinhoPage.adicionarItemProdutoA(1)
  CarrinhoPage.verificarQuantidadeItens(3)
  CarrinhoPage.adicionarItemProdutoB(1)
});

Then(`a quantidade dos produtos devem ser aumentada`, () => {
  cy.get(CarrinhoElm.TXT_QDT_ITENS_CARRINHO, { timeout: Cypress.env('global_timeout') })
    .should('have.text', '4 itens');
});


Then(`o valor total de compra multiplicado`, () => {
  cy.get('@valorAntigo').then((valorAntigo) => {
    cy.get(CarrinhoElm.TXT_VALOR_ITENS)
      .invoke('text')
      .then((valorNovoTexto) => {
        const valorAtual = CarrinhoPage.converterMoedaParaNumero(valorNovoTexto);
        expect(valorAtual).to.equal(valorAntigo * 2);
      });
  });
});

Given(`que eu tenha adicionado uma unidade a cada produto`, () => {
  CarrinhoPage.verificarQuantidadeItens(2)
  CarrinhoPage.adicionarItemProdutoA(1)
  CarrinhoPage.verificarQuantidadeItens(3)
  CarrinhoPage.adicionarItemProdutoB(1)
});

When (`eu removo uma unidade a cada produto`, () => {
  CarrinhoPage.verificarQuantidadeItens(4)
  cy.get(CarrinhoElm.TXT_VALOR_ITENS)
  .invoke('text')
  .then((valorTexto) => {
    const valorAntigo = CarrinhoPage.converterMoedaParaNumero(valorTexto);
    cy.wrap(valorAntigo).as('valorAntigo');
  });
  CarrinhoPage.removerItemProdutoA(1)
  CarrinhoPage.verificarQuantidadeItens(3)
  CarrinhoPage.removerItemProdutoB(1)
});

Then(`os produtos devem voltar a ter apenas uma unidade`, () => {
  cy.get(CarrinhoElm.TXT_QDT_ITENS_CARRINHO, { timeout: Cypress.env('global_timeout') })
    .should('have.text', '2 itens');
});

Then(`o valor total de compra deve ser reajustado para a soma da unidade dos produtos`, () => {
  cy.get('@valorAntigo').then((valorAntigo) => {
    cy.get(CarrinhoElm.TXT_VALOR_ITENS)
      .invoke('text')
      .then((valorNovoTexto) => {
        const valorAtual = CarrinhoPage.converterMoedaParaNumero(valorNovoTexto);
        expect(valorAtual).to.equal(valorAntigo / 2);
      });
  });
});