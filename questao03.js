// Faça um programa que leia os dados de 10 alunos (Nome, matricula, Media Final),
// armazenando em um vetor. Uma vez lidos os dados, divida estes dados em 2 novos
// vetores, o vetor dos aprovados e o vetor dos reprovados, considerando a média
// mínima para a aprovação como sendo 5.0. Exibir na tela os dados do vetor de
// aprovados, seguido dos dados do vetor de reprovados.

class Aluno {
    constructor(nome, matricula, notaFinal){
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = notaFinal;
    }
}

const aluno1 = new Aluno("Pedro", "1001", 1);
const aluno2 = new Aluno("José", "1002", 2);
const aluno3 = new Aluno("Antônio", "1003", 3);
const aluno4 = new Aluno("Maria", "1004", 4);
const aluno5 = new Aluno("Fernando", "1005", 0);
const aluno6 = new Aluno("Estela", "1006", 5);
const aluno7 = new Aluno("Viviane", "1007", 6);
const aluno8 = new Aluno("João", "1008", 7);
const aluno9 = new Aluno("Leonardo", "1009", 8);
const aluno10 = new Aluno("Iara", "1010", 9);

let turma1 = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9, aluno10];

const turmaAprovados = turma1.filter( aluno => aluno.notaFinal >= 5 );
const turmaReprovados = turma1.filter( aluno => aluno.notaFinal < 5 );

console.log(turmaAprovados);
console.log(turmaReprovados);