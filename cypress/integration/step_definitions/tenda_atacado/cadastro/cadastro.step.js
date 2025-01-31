/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {HomePage} from '../../../../pages/tenda_atacado/home.page'
import {CadastroPage} from '../../../../pages/tenda_atacado/cadastro.page'
import DynamicFactory from '../../../../fixtures/factories/dynamic'

Given(`que eu esteja na página de cadastro`, () => {
  HomePage.acessarLogin()
  HomePage.acessarCadastrar()
});

Given(`eu informo dados de novo usuário Pessoa Fisica`, () => {
  const usuario = DynamicFactory.criarUsuario();
  CadastroPage.selecionarPessoaFisica();
  CadastroPage.preencherNome(`${usuario.usuario.nome} ${usuario.usuario.sobrenome}`);
  CadastroPage.preencherCpf(usuario.usuario.cpf);
  CadastroPage.preencherEmail(usuario.usuario.email);
  CadastroPage.preencherTelefone(usuario.usuario.celular);
  CadastroPage.preencherSenha(usuario.usuario.senha);
  CadastroPage.preencherConfirmarSenha(usuario.usuario.senha);
  CadastroPage.clicarBotaoCadastrar();
  CadastroPage.selecionarGeneroM();
  // ToDo : débito técnico - receber código via e-mail
});

When(`eu cadastrar esse novo usuário`, () => {
  // Pendente
});

Then(`eu devo estar logado com novo usuário`, () => {
  // Pendente
});


