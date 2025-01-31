Feature: Login de Usuário

  Background: Acessar o ambiente de desenvolvimento do Tenda Atacado
    Given que eu esteja na página home

  Scenario: Realizar login usuário
    Given que eu esteja na área de login
    And eu informo dados de usuário já cadastrado na base
    When realizar o login
    Then eu devo estar logado