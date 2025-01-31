import faker from 'faker'
import { generate as cpfFake } from 'gerador-validador-cpf'

export default class DynamicFactory {

    static criarUsuario(){

        faker.locale = 'pt_BR'
       
        return {
            "usuario": {
                "cpf"           : cpfFake(), //generate({format:true})
                "nome"          : faker.name.firstName(),
                "sobrenome"     : faker.name.lastName(),
                "email"         : faker.internet.email(),
                "senha"         : faker.internet.password(),
                "celular"       : faker.phone.phoneNumber('1199#######')
            } 
        }
    }

    static dadosCartaoDinamicos() {
        const anoAtual = new Date().getFullYear();
        const anoFuturo = anoAtual + 3;
        const anoFormatado = anoFuturo.toString().slice(-2);
    
        const mesVencimento = faker.datatype.number({ min: 1, max: 12 });
        const mesFormatado = mesVencimento < 10 ? `0${mesVencimento}` : `${mesVencimento}`;
    
        return {
            "cartao": {
                "mesVencimento": mesFormatado,
                "anoVencimento": anoFormatado 
            }
        };
    }
}



