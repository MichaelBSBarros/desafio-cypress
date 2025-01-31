/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {HomePage} from '../../../../pages/tenda_atacado/home.page'
import {CarrinhoPage} from '../../../../pages/tenda_atacado/carrinho.page'
import {PagamentoPage} from '../../../../pages/tenda_atacado/pagamento.page'
import {PagamentoElm} from '../../../../pages/components/tendaatacado.elements'
import {Home} from '../../../../pages/components/tendaatacado.elements'
import StaticFactory from '../../../../fixtures/factories/static'
import DynamicFactory from '../../../../fixtures/factories/dynamic'

Given('que eu esteja logado com um usuário com carrinho pendente', () => {
    const usuario = StaticFactory.usuarioComCarrinho()
    HomePage.acessarLogin()
    HomePage.informarCpfEmailLogin(usuario.usuario.cpf)
    HomePage.informarSenhaLogin(usuario.usuario.senha)
    HomePage.efetuarLogin()
    cy.get(Home.SPAN_USUARIO_LOGADO)
      .invoke('text')
      .then((valorNovoTexto) => {
        expect(valorNovoTexto.trim()).to.match(/^olá, /i);
    });
    HomePage.visualizarCarrinho()
});

When('eu finalizo a compra utilizando o método de pagamento "boleto"', () => {
  CarrinhoPage.seguirParaPagamento()
  PagamentoPage.expandirOpcaoBoleto()
  PagamentoPage.finalizarPagamentoBoleto()
});

When('eu finalizo a compra utilizando o método de pagamento "cartão"', () => {
  const dadosDinamicos = DynamicFactory.dadosCartaoDinamicos();
  const dadosEstaticos = StaticFactory.dadosCartaoEstaticos();
  const usuario = StaticFactory.usuarioComCarrinho()
  CarrinhoPage.seguirParaPagamento()
  PagamentoPage.expandirOpcaoCartao()
  PagamentoPage.preencherNumeroCartao(dadosEstaticos.cartao.numeroCartao)
  PagamentoPage.preencherMesVencimento(dadosDinamicos.cartao.mesVencimento)
  PagamentoPage.preencherAnoVencimento(dadosDinamicos.cartao.anoVencimento)
  PagamentoPage.preencherNomeCartao(usuario.usuario.nome)
  PagamentoPage.preencherCpfCartao(usuario.usuario.cpf)
  PagamentoPage.selecionarParcelas(dadosEstaticos.cartao.parcelas)
  PagamentoPage.finalizarPagamentoCartao()
});

Then('o pedido deve ser gerado com sucesso', () => {
  cy.get(PagamentoElm.DIV_ESCOLHA_FORMA_PAGAMENTO).should('not.exist'); // BUG 03 - Tentativa de compra via cartão ou boleto retorna erro
})