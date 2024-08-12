const precos_livros = [25, 15, 30, 50, 45, 20];

let atual = 0;
let mais_barato = 0;

for(let atual = 0; atual < precos_livros.length; atual ++){
    if(precos_livros[atual] < precos_livros[mais_barato]){
        mais_barato = atual
    }
}
console.log(`O livro mais barato custa ${precos_livros[mais_barato]}`)