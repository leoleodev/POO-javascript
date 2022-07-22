// 1) Construa uma estrutura aluno com nome, número de matrícula e curso. 
// Obtenha informações de 5 alunos, armazene em vetor essa estrutura e
// imprima os dados na tela.

class Aluno{

    constructor(nome,matricula,curso){
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }
}

const aluno1 = new Aluno("leonardo", 1,"Ciência da Computação");
const aluno2 = new Aluno("Iara", 2,"Design");
const aluno3 = new Aluno("Igor", 3,"Engenharia da Computação");
const aluno4 = new Aluno("Rodrigo", 4,"Educação física");
const aluno5 = new Aluno("Matheus", 5,"Radiologia");

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

const newAlunos = alunos.map( (aluno, index) => 
    `${index+1} - Aluno: ${aluno.nome}, Matrícula: ${aluno.matricula} e Curso: ${aluno.curso}` )

console.log(newAlunos);