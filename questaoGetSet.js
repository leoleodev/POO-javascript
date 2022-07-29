
// Utilização de Get e Set
// Herança entre classes

class Person{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = "Não informada";
    }
    get getIdade(){
        return this.idade;
    }
    set setIdade(idade){

        if(idade >= 18){
            this.idade = idade;
            console.log("Maior de idade");
        }else{
            this.idade = idade;
            console.log("Menor de idade");
        }
        
    }
    dados(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    }

}
class PersonExtended extends Person{

    constructor(profissao){
        super("pedro", "padilha")

        this.profissao = profissao;
    }

}

const pessoa1 = new PersonExtended("Leonardo", "José");
pessoa1.setIdade = 17;
pessoa1.profissao = "Jornalista";

console.log(pessoa1.dados());

