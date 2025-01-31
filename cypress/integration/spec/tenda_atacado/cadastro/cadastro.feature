Feature: Cadastro de Usuário

  Background: Acessar o ambiente de desenvolvimento do Tenda Atacado
    Given que eu esteja na página home

  Scenario: Criar cadastro de usuário PF
    Given que eu esteja na página de cadastro
    And eu informo dados de novo usuário Pessoa Fisica
    When eu cadastrar esse novo usuário
    Then eu devo estar logado com novo usuário