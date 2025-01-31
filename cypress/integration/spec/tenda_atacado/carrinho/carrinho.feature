Feature: Adição e Manipulação de Produtos no Carrinho

  Background: Acessar o ambiente de desenvolvimento do Tenda Atacado
    Given que eu esteja na página home

  Scenario: Adicionar produtos ao carrinho
    Given que eu tenha adicionado dois produtos disponíveis: um produto Tenda e um produto de um seller
    When eu acesso o carrinho de compras
    Then ambos os produtos devem estar no carrinho

  Scenario: Adicionar unidades dos itens no carrinho
    Given que eu tenha adicionado dois produtos disponíveis: um produto Tenda e um produto de um seller
    And que eu tenha acessado o carrinho de compras
    When eu adiciono uma unidade a cada produto
    Then a quantidade dos produtos devem ser aumentada
    And o valor total de compra multiplicado

  Scenario: Remover unidades dos itens no carrinho
    Given que eu tenha adicionado dois produtos disponíveis: um produto Tenda e um produto de um seller
    And que eu tenha acessado o carrinho de compras
    And que eu tenha adicionado uma unidade a cada produto
    When eu removo uma unidade a cada produto
    Then os produtos devem voltar a ter apenas uma unidade
    And o valor total de compra deve ser reajustado para a soma da unidade dos produtos