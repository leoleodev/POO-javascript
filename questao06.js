
// Criar nova classe Contas, com as seguintes variáveis: Nº da conta, Nome do titular
// e Valor do saldo. Criar os métodos depositar(), sacar(), extrato() exibindo as informações da conta.
// Crie 2 objetos chamados conta1 e conta2, instanciando a classe recém-criada Contas e atribua os devidos valores
// a cada um dos objetos, efetue alguns depósitos e depois realize alguns saques. Por fim, use os método extrato da classe
// Contas para mostrar os valores atualizados de cada um dos objetos.

class Contas{

    constructor(numeroConta, nomeTitular, saldo){
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    
    depositar(valor){
        return this.saldo += valor;
    }
    sacar(valor){
        return this.saldo -= valor;
    }
    extrato(){
        return ` Número da conta: ${this.numeroConta}, Titular: ${this.nomeTitular}, saldo: ${this.saldo} `;
    }

}

const conta1 = new Contas();
const conta2 = new Contas();

conta1.numeroConta = 1001;
conta1.nomeTitular = "Leonardo Silva";
conta1.saldo = 0;

conta1.depositar(1500);
conta1.depositar(10000);

conta1.sacar(550);
conta1.sacar(1650.74);
conta1.sacar(155);
conta1.sacar(145.26);

conta2.numeroConta = 1002;
conta2.nomeTitular = "Iara Arruda";
conta2.saldo = 3000;

conta2.depositar(110);

conta2.sacar(1795.5);

console.log(conta1.extrato())
console.log(conta2.extrato())


