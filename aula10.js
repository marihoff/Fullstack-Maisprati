// Aula 10 - Objetos - Parte II

// analise do arquivo functions.js 

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

console.log(arr.length) // 10

let arr = new Array()
arr.push(2)

// estrutura de repeticao
for (const chave in livro) {
    console.log(chave) // imprime cada chave do objeto "livro"
}

//
let frutas = ["maçã", "banana", "laranja"]
for (const indice in frutas) {
    console.log(indice) // imprime cada índice do array "frutas" (0, 1, 2)
    console.log(frutas[indice]) // imprime cada fruta usando o índice
}

// ─────────────────────────────────────────────

for (const fruta of frutas) {
    console.log(fruta) // imprime cada fruta diretamente (maçã, banana, laranja)
}


//

let livros = [
    { titulo: "O Hobbit", autor: "J. R. R. Tolkien" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis" }
]

for (const livro of livros) {
    console.log(livro.titulo) // imprime o título de cada livro
    console.log(livro.autor) // imprime o autor de cada livro
}

//

const notas = [7, 8.5, 9, 6, 10]
notas.forEach(function(nota) {
    console.log(nota) // imprime cada nota do array "notas"
})

// ─────────────────────────────────────────────

// Criem um objeto carro - usem for in para imprimir cada propriedade no formato: "chave: valor" //
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
}
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`) // imprime "marca: Toyota", "modelo: Corolla", etc.
}

// 

// Criem um array de cidades, imprimam apenas as cidades que começam com a letra 's'. Usando for of //
let cidades = ["São Paulo", "Rio de Janeiro", "Salvador", "Curitiba", "Santos"]
for (const cidade of cidades) {
    if (cidade.toLowerCase().startsWith('s')) {
        console.log(cidade) // imprime "São Paulo", "Salvador", "Santos"
    }
}

//

// Criem um array de números e usem forEach para imprimir apenas os números pares //
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        console.log(numero) // imprime 2, 4, 6, 8, 10
    }
})

// ─────────────────────────────────────────────
