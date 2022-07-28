
// 7) Simule um sistema de locação de livros de uma biblioteca, esta tem que
// poder cadastrar novos livros e pessoas que alugam os livros. Esta biblioteca tem
// um numero de exemplares das obras e as pessoas só podem alugar no máximo 2
// livros. Implemente também a funcionalidade de devolução de livros.


class Livro{
    constructor(titulo, quantidade){
        this.titulo = titulo;
        this.quantidade = quantidade;
        this.qtdInicial = quantidade;
    }
    verificacao(qtd){
        if(qtd > 0){
            this.quantidade -= 1;
            return true;
        }else{
            console.log(`Não se econtra nenhum exemplar de ${this.titulo} biblioteca`);
            return false;
        }
    }
    locado(){
        if(this.qtdInicial != this.quantidade){
            return true;
        }else{
            console.log('Devolução inválida');
            return false;
        }
    }
    recebimento(){
        this.quantidade += 1;
    }
}
class Pessoa{
    constructor(nome, cpf, locacoes){
        this.nome = nome;
        this.cpf = cpf;
        this.locacoes = locacoes;
    }
    locacao(loc){        
        if (loc > 0){
            this.locacoes -= 1;
            return true;
        }else{
            console.log(`${this.nome} já alugou os 2 livros permitidos`);
            return false;
        }
    }
    entregaDeLivro(loc){        
        if (loc < 3){
            this.locacoes += 1;
            return true;
        }else{
            console.log(`Entrega de livro inválida`);
            return false;
        }
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

const pessoa1 = new Pessoa("Leonardo", "123.456.789-00", 2);
const pessoa2 = new Pessoa("Fernando", "987.654.321-00", 2);
const pessoa3 = new Pessoa("Julita", "000.111.222-00", 2);
const pessoa4 = new Pessoa("Thiago", "333.444.555-00", 2);
const pessoa5 = new Pessoa("Irene", "666.777.888-99", 2);

const pessoas = [
    pessoa1,
    pessoa2,
    pessoa3,
    pessoa4,
    pessoa5
]

function emprestimo(obra, locador, cpf){

    livros.forEach((livro, key)=>{
        if(livro.titulo === obra && livro.verificacao(livro.quantidade)){        
            pessoas.forEach((pessoa, key)=>{
                if(pessoa.nome === locador && pessoa.cpf === cpf && pessoa.locacao(pessoa.locacoes)) {
                    console.log(`Livro ${livro.titulo} alugado para ${pessoa.nome}`);
                }

            })

        }
    })
}

function devolucao(obra, locador, cpf){

    livros.forEach((livro, key)=>{
        if(livro.titulo === obra && livro.locado()){
            pessoas.forEach((pessoa, key)=>{
                if(pessoa.nome === locador && pessoa.cpf === cpf && pessoa.entregaDeLivro(pessoa.locacoes)){
                    livro.recebimento();
                    console.log(`Entrega do livro ${livro.titulo} por ${pessoa.nome}`);
                }
            })
        }
    })
}

// Exemplo de uso:

emprestimo("Cronicas de Nárnia", "Irene", "666.777.888-99");
emprestimo("O moço loiro", "Irene", "666.777.888-99");
emprestimo("O moço loiro", "Leonardo", "123.456.789-00");

console.log(pessoas)
console.log(livros);

devolucao("Cronicas de Nárnia", "Irene", "666.777.888-99");
devolucao("O moço loiro", "Irene", "666.777.888-99");

console.log(pessoas)
console.log(livros);

