import {CadastroElm} from '../components/tendaatacado.elements'

export class CadastroPage {

    static selecionarPessoaFisica = () => {
        cy.get(CadastroElm.INPUT_RADIO_PESSOA_FISICA).check();
    }

    static preencherNome = (nome) => {
        cy.get(CadastroElm.INPUT_NOME).type(nome);
    }

    static preencherCpf = (cpf) => {
        cy.get(CadastroElm.INPUT_CPF).type(cpf);
    }

    static preencherEmail = (email) => {
        cy.get(CadastroElm.INPUT_EMAIL).type(email);
    }

    static preencherTelefone = (telefone) => {
        cy.get(CadastroElm.INPUT_TELEFONE).type(telefone);
    }

    static preencherSenha = (senha) => {
        cy.get(CadastroElm.INPUT_SENHA).type(senha);
    }

    static preencherConfirmarSenha = (senha) => {
        cy.get(CadastroElm.INPUT_CONFIRME_SENHA).type(senha);
    }

    static clicarBotaoCadastrar = () => {
        cy.get(CadastroElm.BTN_CADASTRAR).click();
    }

    static selecionarGeneroM = () => {
        cy.get(CadastroElm.INPUT_RADIO_GENERO_M).check();
    }

}