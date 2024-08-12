const livros = require("./lista_livros")

let atual = 0;
let mais_barato = 0;

for(let atual = 0; atual < livros.length; atual ++){
    if(livros[atual].preco < livros[mais_barato].preco){
        mais_barato = atual
    }
}
console.log(`O livro mais barato custa ${livros[mais_barato].preco} e o título é ${livros[mais_barato].preco}`)