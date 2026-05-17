// Aula 09 - Funções e Objetos

// arquivo functions e objects

// ─────────────────────────────────────────────

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// função de soma
function soma(a, b){
    return a + b                
}

let resultado = soma(10, 20) // 30

console.log(resultado) // 30


//

let frutas = ["maçã", "banana", "laranja"]

function listarFrutas(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

listarFrutas(frutas) // imprime cada fruta do array

// 

const subtrair = function(a, b) {
    return a - b
}

let resultadoSubtracao = subtrair(20, 10) // 10

//

const multiplicar = (a, b) => {
    console.log(a * b)
    console.log("Multiplicação realizada com sucesso!")
}

multiplicar(5, 4) // imprime 20 e a mensagem de sucesso

//
//funcao anonima

setTimeout(function() {
    console.log("Esta mensagem aparece após 2 segundos")
}, 2000)

// ─────────────────────────────────────────────
// 1. OBJETO COMPLEXO (com métodos)
// ─────────────────────────────────────────────
// QUANDO USAR:
//   - Quando precisar representar uma entidade com dados e comportamento
//   - Para organizar código relacionado a um conceito específico
//   - Para criar objetos únicos, sem necessidade de múltiplas instâncias

//

// Exercicio 01 - soma, média, maior e menor de um array
// Escreva uma função para cada operação onde o array será percorrido e calcule:
// A soma de todos os elementos
// A média dos elementos
// O maior elemento
// O menor elemento

let arr = [10, 2, 30, 123, 12]

function soma(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return soma
}

function media(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return soma / lista.length
}

function maior(lista) {
    let maior = lista[0]
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) maior = lista[i]
    }
    return maior    
}

function menor(lista) {
    let menor = lista[0]
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < menor) menor = lista[i]
    }
    return menor    
}

console.log(soma(arr))          // 177
console.log(media(arr))         // 35.4
console.log(maior(arr))         // 123
console.log(menor(arr))         // 2    

///

let serie = {
    nome: "Two and a Half Men",
    genero: "Comédia",
    nrTemporadas: 12,
    status: "Finalizada",
    classificacao: 16,
    nrEpisodios: {
        temp1: 10,
        temp2: 30
    },
    mostrarCaracteristicas: function() {
        return `Série: ${this.nome} | Classificação: ${this.classificacao}`
    }
}

console.log(serie.nome)
console.log(serie.nrEpisodios.temp1)
console.log(serie.mostrarCaracteristicas())

//

let pc = new Computador("Dell", "Inspiron", 16, "i7")
function Computador(marca, modelo, ram, processador) {
    this.marca = marca
    this.modelo = modelo
    this.ram = ram
    this.processador = processador
    this.mostrarInfo = function() {
        return `Computador: ${this.marca} ${this.modelo} | RAM: ${this.ram}GB | Processador: ${this.processador}`
    }   
}
let computador = criarComputador("Dell", "Inspiron", 16, "i7")
function criarComputador(marca, modelo, ram, processador) {
    return new Computador(marca, modelo, ram, processador)
}

//


