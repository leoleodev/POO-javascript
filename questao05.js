// Fazer um programa para simular uma agenda de telefones. Para cada pessoa devem-se
// ter os seguintes dados:
// - Nome
// - E-mail
// - Endereço (contendo campos para Rua, número, complemento, bairro, cep,
// cidade, estado, país).
// - Telefone (contendo campo para DDD e número)
// - Data de aniversário (contendo campo para dia, mês, ano).
// - Observações: Uma linha para alguma observação especial.
// a) Definir a estrutura acima.
// b) Declarar a variável agenda (vetor) com capacidade de agendar até 100
// nomes. 
// c) Definir um bloco de instruções busca por primeiro nome: Imprime os dados
// da pessoa com esse nome (se tiver mais de uma pessoa, imprime para todas).
// d) Definir um bloco de instruções busca por mês de aniversário: Imprime os
// dados de todas as pessoas que fazem aniversario nesse mês.
// e) Definir um bloco de instruções busca por dia e mês de aniversário: Imprime
// os dados de todas as pessoas que fazem aniversario nesse dia e mês.
// f) Definir um bloco de instruções insere pessoa: Insere por ordem alfabética de
// nome.
// g) Definir um bloco de instruções retira pessoa: Retira todos os dados dessa
// pessoa e desloca todos os elementos seguintes do vetor para a posição
// anterior.
// h) Definir um bloco de instruções imprime agenda com as opções:
// o Imprime nome,
// o Telefone e e-mail.
// o Imprime todos os dados.
//  i) O programa deve ter um menu principal oferecendo as opções acima.

class Person{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }
}
class Endereco extends Person{
    constructor(rua, numero, complemento, bairro, cep, cidade, estado, pais){
        super(nome, email)

        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }
}
class Telefone extends Person{
    constructor(ddd, numerotel){
        super(nome, email)

        this.ddd = ddd;
        this.numerotel = numerotel;
    }
}
class Dataniver extends Person{
    constructor(dia, mes, ano){
        super(nome, email)

        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class Obs extends Person{
    constructor(obs){
        super(nome, email)

        this.obs = obs;
    }
}

let agenda = new Array(100);

let pessoa1 = new Person("Leonardo", "llll@.com");
pessoa1.rua = "Av. Brasil";
pessoa1.numero = 123;
pessoa1.complemento = "Próximo a tal";
pessoa1.bairro = "Centro";
pessoa1.cep = 11111111;
pessoa1.cidade = "shiganshina";
pessoa1.estado = "Sina";
pessoa1.pais = "Paradis";
pessoa1.ddd = 00;
pessoa1.numerotel = 00000000000;
pessoa1.dia = 01;
pessoa1.mes = "Janeiro";
pessoa1.ano = 2020;
pessoa1.obs = "Tem paixão por estudar programação";

let pessoa2 = new Person("Joana", "Joana@gmail.com");
pessoa2.mes = "Janeiro";
pessoa2.dia = 13;
pessoa2.numerotel = 20202020

let pessoa3 = new Person("Pedro", "Pedro@gmail.com");
pessoa3.mes = "Maio";
pessoa3.dia = 25;

let pessoa4 = new Person("Maciel", "Maciel@gmail.com");
pessoa4.mes = "janeiro";
pessoa4.dia = 13;

let pessoa5 = new Person("Antônia", "Antônia@gmail.com");
pessoa5.mes = "Novembro";
pessoa5.dia = 22;

let pessoa6 = new Person("Fabricio", "Fabricio@gmail.com");
pessoa6.mes = "Janeiro";
pessoa6.dia = 15;

let pessoa7 = new Person("Rafael", "Rafael@gmail.com");
pessoa7.mes = "Setembro";
pessoa7.dia = 22;

let pessoa8 = new Person("Antônia", "Angela@gmail.com");
pessoa8.mes = "Janeiro";
pessoa8.dia = 15;

let pessoa9 = new Person("Judite", "Judite@gmail.com");
pessoa9.mes = "Julho";
pessoa9.dia = 13;

let pessoa10 = new Person("Cris", "Cris@gmail.com");
pessoa10.mes = "Junio";
pessoa10.dia = 13;

agenda[0] = pessoa1;
agenda[1] = pessoa2;
agenda[2] = pessoa3;
agenda[3] = pessoa4;
agenda[4] = pessoa5;
agenda[5] = pessoa6;
agenda[6] = pessoa7;
agenda[7] = pessoa8;
agenda[8] = pessoa9;
agenda[9] = pessoa10;

// letra c -------------------------------------------------------------

function buscarPrimeiroNome(nameOne){
    
    nameOne = nameOne.toLowerCase(); 

    agenda.forEach(function(value,key){

        value.nome = value.nome.toLowerCase();

        if(value.nome == nameOne){

            console.log(value);

        }
    })
}

// Exemplo de uso da função
// buscarPrimeiroNome("cris")

// letra d -------------------------------------------------------------

function buscarMesAniversario(mesAniver){

    mesAniver = mesAniver.toLowerCase();

    agenda.forEach(function(value,key){

        value.mes = value.mes.toLowerCase();

        if(value.mes == mesAniver){

            console.log(value.nome);

        }
    })
}

// Exemplo de uso da função
// buscarMesAniversario("janeiro")

// letra e -------------------------------------------------------------

function buscaDiaMes(dia, mes){

    mes = mes.toLowerCase();

    agenda.forEach(function(value, key){

        value.mes = value.mes.toLowerCase();

        if(value.dia == dia && value.mes == mes){
            console.log(value);
        }
    })
}

// Exemplo de uso da função
// buscaDiaMes(01, "janeiro")

// letra f -------------------------------------------------------------

function inserepessoa(pessoa){

    for(let i=0; i<agenda.length; i++){
        
        if(agenda[i] == undefined){
            
            agenda[i] = pessoa;            
            break;
        }        
    }

    agenda.sort(function(a,b){

        return (a.nome > b.nome)? 1 :((b.nome > a.nome)? -1 : 0);

    })
}

// Exemplo de uso da função

let pessoa11 = new Person("Guilherme", "gui@gmail.com");
pessoa11.mes = "Novembro";
pessoa11.dia = 22;

let pessoa12 = new Person("Angela", "Angela@gmail.com");
pessoa12.mes = "Novembro";
pessoa12.dia = 22;

inserepessoa(pessoa11);
inserepessoa(pessoa12);


// letra g ------------------------------------------------------------

function retiraPessoa(nameOne){
    
    nameOne = nameOne.toLowerCase(); 

    agenda = agenda.filter( (item) => {

        item.nome = item.nome.toLowerCase();

        return item.nome != nameOne;


    } )
    
}

// Exemplo de uso da função

retiraPessoa("rafael")
retiraPessoa("pedro")



// letra h ------------------------------------------------------------



let option = 1 ;

switch(option){

    case 1:{

        agenda.forEach( (value,key)=>{

            console.log(value.nome);
        } )
        break;
    }
    case 2:{
        
        agenda.forEach( (value,key)=>{

            console.log(`Telefone: ${value.numerotel}, Email: ${value.email}`);
        } )
        break;        
    }
    case 3:{
        
        agenda.forEach( (value,key)=>{

            console.log(value);
        } )
        break;        
    }
    default:{
        console.log("Option invalid")
    }

}