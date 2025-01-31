export const Home = {
    BTN_FECHAR_JANELA_CAMP              : '.ButtonClose > .svgIcon',
    BTN_LOGIN                           : '.btn > .IconTextComponent > .IconUser',
    BTN_CRIAR_CONTA                     : 'p > span',
    BTN_LISTA_DEPT                      : 'div.group-grid-home > main > section:nth-child(1) > div.MenuBarComponent > div.grid-menu > div.DepartamentMenuComponent > span',
    SPAN_MARKETPLACE                    : 'main > section > div.MenuBarComponent > div.grid-menu > div.DepartamentMenuComponent > div.MegaMenuComponent > div > div.area-departament > ul > li:nth-child(2) > div > div.list-submenu > a',
    SPAN_PRODUTO_SELLER                 : 'div.area-departament > ul > li:nth-child(2) > div > div.list-submenu > a',
    SPAN_MERCEARIA                      : 'div.area-departament > ul > li:nth-child(3) > a > span',
    SPAN_ARROZ                          : 'div.area-departament > ul > li:nth-child(3) > div.menu-submenu > div.list-submenu > a:nth-child(1)',
    INPUT_CEP                           : '#cep',
    BTN_INPUT_CEP                       : 'div.group-grid-home > div.CartHomeContainer > div > div.AlertInfoCepComponent > div.input-group > div > button',
    BTN_FECHAR_JANELA_CEP               : '.PickupDeliveryContainer > .svgIcon', // BUG 01 - AO FECHAR JANELA, A APLICAÇÃO RETORNA PARA PAGINA INICIAL E REABRE A JANELA
    DIV_INFORMACAO_CEP                  : 'div.group-grid-home > div.CartHomeContainer > div > div.CartListComponent > span',
    DIV_LOADING_SPINNER                 : '.loading-spinner > :nth-child(4)',
    BTN_CLIQUE_RETIRE                   : ':nth-child(1) > .card-content > .card-information-component',
    BTN_DELIVERY                        : ':nth-child(2) > .card-content > .card-information-component',
    BTN_ADC_CARRINHO_PRIMEIRO_PRODUTO   : 'div:nth-child(1) > a > div.menu-actions-icons > div.ButtonBuyComponent > #buttonbuy-sku-',
    BTN_VER_CARRINHO                    : '.cartblock-bottom > [data-cy=btn-]',
    INP_EMAIL_LOGIN                     : '#login',
    INP_SENHA_LOGIN                     : '#password',
    BTN_EFETUAR_LOGIN                   : '.row_action_login > [data-cy=btn-]',
    SPAN_USUARIO_LOGADO                 : '#userTopArea > button > span'
}

export const CadastroElm = {
    INPUT_RADIO_PESSOA_FISICA           : '#registryType > label:nth-child(1) > #registryType',
    INPUT_NOME                          : '#nome',
    INPUT_CPF                           : '#cpf',
    INPUT_EMAIL                         : '#email',
    INPUT_TELEFONE                      : '#cellphone',
    INPUT_SENHA                         : '#password',
    INPUT_CONFIRME_SENHA                : '#password2',
    BTN_CADASTRAR                       : 'main > div > div.CheckoutDataUserContainer > div.ShortRegisterContainer > form > div.btn-create-account > button',
    INPUT_RADIO_GENERO_M                : '#gender > label:nth-child(2) > #gender',
    INPUT_DIA_NASC                      : '#day',
    INPUT_MONTH_NASC                    : '#month',
    INPUT_YEAR_NASC                     : '#year'
}

export const CarrinhoElm = {
    DIV_ITEM_1_CARRINHO                 : '.col-9 > :nth-child(2)',
    DIV_ITEM_2_CARRINHO                 : '.col-9 > :nth-child(3)',
    TXT_QDT_ITENS_CARRINHO              : 'span:nth-child(2) > p',
    BTN_ADC_QTD_ITEM_1                  : 'main > div.CartContainer > div > div.col-9 > div:nth-child(2) > div > div.row > div > div > div.menu-actions-icons > div > span.btn-action',
    BTN_ADC_QTD_ITEM_2                  : 'main > div.CartContainer > div > div.col-9 > div:nth-child(3) > div > div.row > div > div > div.menu-actions-icons > div > span.btn-action',
    TXT_VALOR_ITENS                     : 'main > div.CartContainer > div > div.col-3 > div.cart-action-resume > div.box-group.order-resume > span.mini-ber-cart.total > strong:nth-child(2)',
    IMPUT_ITEM_1_CARRINHO               : '#quantity-item-menu-000000000000952303-UN',
    IMPUT_ITEM_2_CARRINHO               : '#quantity-item-menu-01022024-0001',
    BTN_REMOVER_QTD_ITEM_1              : 'main > div.CartContainer > div > div.col-9 > div:nth-child(2) > div > div.row > div > div > div.menu-actions-icons > div > span.btn-action-decrement',
    BTN_REMOVER_QTD_ITEM_2              : 'main > div.CartContainer > div > div.col-9 > div:nth-child(3) > div > div.row > div > div > div.menu-actions-icons > div > span.btn-action-decrement',
    BTN_CONTINUAR                       : 'main > div.CartContainer > div > div.col-3 > div.cart-action-resume > div.box-group.order-resume > div.resume-buttons > a',
    BTN_FINALIZAR_COMPRA                : 'main > div.package-separation-container > div.cart-resume-wrapper > div > div.package-resume > div > div.resume-buttons > button',
}

export const PagamentoElm = {
    BTN_OPCAO_BOLETO                    : '#nav-tab > div:nth-child(6)',
    BTN_OPCAO_CARTAO                    : '#nav-tab > div:nth-child(1)',
    BTN_CONFIRMAR_BOTLETO               : '#nav-billet-tab > div > div > button',
    INPUT_NUMERO_CARTAO                 : '#number',
    INPUT_MES_VENCIMENTO                : '#month > .react-select__control > .react-select__value-container',
    INPUT_ANO_VENCIMENTO                : '#year > .react-select__control > .react-select__value-container',
    INPUT_NOME_CARTAO                   : '#name',
    INPUT_CPF_CARTAO                    : '#cpf',
    INPUT_PARCELAS_CARTAO               : '#installments > .react-select__control > .react-select__value-container',
    BTN_FINALIZAR_PAGAMENTO_CARTAO      : 'div > form > .btn',
    BTN_FINALIZAR_PAGAMENTO_BOLETO      : '#nav-tab > div > div > div > button',
    DIV_ESCOLHA_FORMA_PAGAMENTO         : 'main > div > div > div > div.area-left > div'
}
