/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {HomePage} from '../../../../pages/tenda_atacado/home.page'
import {Home} from '../../../../pages/components/tendaatacado.elements'
import StaticFactory from '../../../../fixtures/factories/static'


Given(`que eu esteja na área de login`, () => {
  HomePage.acessarLogin()
});

Given(`eu informo dados de usuário já cadastrado na base`, () => {
  const usuario = StaticFactory.usuarioCadastrado()
  HomePage.informarCpfEmailLogin(usuario.usuario.cpf)
  HomePage.informarSenhaLogin(usuario.usuario.senha)
});

When(`realizar o login`, () => {
  HomePage.efetuarLogin()
});

Then(`eu devo estar logado`, () => {
  cy.get(Home.SPAN_USUARIO_LOGADO, { timeout: 30000 })
    .invoke('text')
    .then((valorNovoTexto) => {
      expect(valorNovoTexto.trim()).to.match(/^olá, /i);
  });
});