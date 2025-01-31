Feature: Finalização de Compra com Métodos de Pagamento

  Background: Acessar o ambiente de desenvolvimento do Tenda Atacado
    Given que eu esteja na página home
    And que eu esteja logado com um usuário com carrinho pendente

  Scenario Outline: Finalizar compra com diferentes métodos de pagamento
    When eu finalizo a compra utilizando o método de pagamento "<metodo_pagamento>"
    Then o pedido deve ser gerado com sucesso
    Examples:
      | metodo_pagamento |
      | boleto           |
      | cartão           |