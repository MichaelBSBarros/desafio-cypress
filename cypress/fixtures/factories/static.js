export default class StaticFactory {
    
    static cep = "13030710";

    static usuarioCadastrado(){       
        return {
            "usuario": {
                "cpf"           : '36279204146',
                "nome"          : 'Davi Alves',
                "email"         : 'reseb43444@andinews.com',
                "senha"         : 'kYdfp9KT@waqBzV',
            } 
        }
    }

    static usuarioComCarrinho(){       
        return {
            "usuario": {
                "cpf"           : '53699219119',
                "nome"          : 'Janaína Xavier',
                "email"         : 'gewoc89926@bmixr.com',
                "senha"         : 'hHwxl7NQ_rrkPaA',
            } 
        }
    }

    static dadosCartaoEstaticos(){       
        return {
            "cartao": {
                "numeroCartao"  : '4000000000000010',
                "parcelas"      : '6x sem juros'
            } 
        }
    }
}



