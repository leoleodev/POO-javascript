// Crie uma estrutura representando os alunos de um determinado curso. A estrutura
// deve conter a matrícula do aluno, nome, nota da primeira prova, nota da segunda
// prova e nota da terceira prova.
// a) Entre com os dados de 5 alunos.
// b) Encontre o aluno com maior nota da primeira prova informe o nome do aluno.
// c) Encontre o aluno com maior média geral informe o nome do aluno.
// d) Encontre o aluno com menor média geral informe o nome do aluno.
// e) Para cada aluno diga se ele foi aprovado ou reprovado, considerando o valor 6 para
// aprovação

class Aluno{

    constructor(matricula, nome, n1, n2, n3){
        this.matricula = matricula;
        this.nome = nome;
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    }
    media(){
        return (this.n1 + this.n2 + this.n3)/3;
    }
    verificacao(media){
        if(media >= 6){
            return "APROVADO";
        }
        else{
            return "REPROVADO";
        }
    }
}

const aluno1 = new Aluno(100, "leonardo", 2, 7, 8);
const aluno2 = new Aluno(101, "Iara", 9, 10, 10);
const aluno3 = new Aluno(102, "Igor", 7, 7, 8);
const aluno4 = new Aluno(103, "Rodrigo", 9, 9, 7);
const aluno5 = new Aluno(104, "Matheus", 0, 2, 9);

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

let maior = aluno1.n1;
let alunoMaiorN1 = "";

let maiorMedia = aluno1.media();
let alunoMaiorMedia = "";

let menorMedia = aluno1.media();
let alunoMenorMedia = "";

alunos.forEach(function(value,key){

    if(value.n1 >= maior){

        maior = value.n1;
        alunoMaiorN1 = value.nome;

    }
    if(value.media() >= maiorMedia){
        maiorMedia = value.media();
        alunoMaiorMedia = value.nome;
    }
    if(value.media() <= menorMedia){
        menorMedia = value.media();
        alunoMenorMedia = value.nome;
    }

    console.log(`Aluno(a) ${value.nome} está ${value.verificacao(value.media())} com media: ${value.media()}`);

})

console.log(`Aluno(a) ${alunoMaiorN1} tirou a maior nota na primeira prova, sendo ela ${maior}`);
console.log(`Aluno(a) ${alunoMaiorMedia} tem a maior média, sendo ela ${maiorMedia}`);
console.log(`Aluno(a) ${alunoMenorMedia} tem a menor média, sendo ela ${menorMedia}`);