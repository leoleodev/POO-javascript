// Faça um programa que gerencie o estoque de um mercado e:
//  a) Crie e leia um vetor de 5 produtos, com os dados: código (inteiro), nome (máximo
// 15 letras), preço e quantidade.
//  b) Leia um pedido, composto por um código de produto e a quantidade. Localize este
// código no vetor e, se houver quantidade suficiente para atender ao pedido
// integralmente, atualize o estoque e informe o usuário. Repita este processo até ler um
// código igual a zero.
//  Se por algum motivo não for possível atender ao pedido, mostre uma mensagem
// informando qual erro ocorreu.


class Produto{
    constructor(codigo, nome, preco, quantidade){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    verificar_estq(qtd){

        if(this.quantidade >= qtd && qtd > 0){
            this.quantidade -= qtd;
            return true;
        }
        else{
            console.log(`Não há esta quantidade em estoque`);
            return false;
        }

    }
}

const produto1 = new Produto(10, "Martelo", 19.99, 15);
const produto2 = new Produto(11, "Alicate", 15.99, 20);
const produto3 = new Produto(12, "Marreta", 29.99, 5);
const produto4 = new Produto(13, "Luva", 9.99, 32);
const produto5 = new Produto(14, "Lampada", 11.99, 19);

let produtos = [produto1, produto2, produto3, produto4, produto5];

function pedido(idcod, qtd){

    produtos.forEach(function(value,key){

        if(idcod == value.codigo){
            
            if(value.verificar_estq(qtd) == true){
                console.log(`Produto: ${value.nome}, Quantidade: ${qtd}, valor unit: ${value.preco}, valor a pagar ${(value.preco)*qtd} A quantidade atual é: ${value.quantidade}`);
            }
        }
    })
}

var idcod = 14;
var qtd = 19;

let n=0;

do{

    if(idcod != 0){
        pedido(idcod, qtd);
        n=0;
    }else{
        console.log("Programa finalizado");
        n=1;
    }

}while(n=0);