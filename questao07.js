


class Emprestimo{
    constructor(pessoa ,livro, data){
        this.pessoa = pessoa;
        this.livro = livro;
        this.data = data;
    }
    
}

class Livro{
    constructor(titulo, quantidade){
        this.titulo = titulo;
        this.quantidade = quantidade;
    }
}

class Pessoa{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

const livro1 = new Livro("O cortiço", 1);
const livro2 = new Livro("O moço loiro", 2);
const livro3 = new Livro("O alienista", 1);
const livro4 = new Livro("Cronicas de Nárnia", 1);
const livro5 = new Livro("Harry Poter e a pedra filosofal", 3);
const livro6 = new Livro("O pequeno príncipe", 1);
const livro7 = new Livro("A ilíada", 1);
const livro8 = new Livro("A arte da guerra", 1);
const livro9 = new Livro("Dom casmurro", 1);
const livro10 = new Livro("O senhpr dos aneis", 3);

const livros = [
    livro1,
    livro2,
    livro3,
    livro4,
    livro5,
    livro6,
    livro7,
    livro8,
    livro9,
    livro10
]

const pessoa1 = new Pessoa("Leonardo", "123.456.789-00");
const pessoa2 = new Pessoa("Fernando", "987.654.321-00");
const pessoa3 = new Pessoa("Julita", "000.111.222-00");
const pessoa4 = new Pessoa("Thiago", "333.444.555-00");
const pessoa5 = new Pessoa("Irene", "666.777.888-99");

const pessoas = [
    pessoa1,
    pessoa2,
    pessoa3,
    pessoa4,
    pessoa5
]

console.log(livros)
console.log(pessoas)
