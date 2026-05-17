//Aula 05 - Estruturas de Controle: Condicionais - Parte II

//links
// Operador de coalescência nula
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing?authuser=0

// package-lock.json
//https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json?authuser=0

//O que é NPM? Introdução básica ao Node Package Manager
//https://www.hostinger.com/br/tutoriais/o-que-e-npm?authuser=0

//What Are Node Modules and How Do You Use Them?
//https://www.freecodecamp.org/news/what-are-node-modules/?authuser=0

//Difference between package.json and package-lock.json files
//https://www.geeksforgeeks.org/node-js/difference-between-package-json-and-package-lock-json-files/

//switch
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch?authuser=0


// fazer contagem, exemplo de 1 até 10 automático

let meunumero = 0

while(meunumero <10) {
    console.log(meunumero = meunumero + 1) // ou meunumero += 1
}

// fazer contagem de 10 até 0 automático

let meunumero2 = 10
while(meunumero2 > 0) {
    console.log(meunumero2 = meunumero2 - 1) // ou meunumero2 -= 1
}


//somar os numeros de 1 até 10
let soma = 0
let contador = 1
while(contador <= 10) {
    soma += contador // ou soma = soma + contador
    contador++
}
console.log(`A soma dos números de 1 a 10 é: ${soma}`)


//solicitar ao usuário um número e mostrar a tabuada desse número
const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite um número para ver a tabuada: "))
let contadorTabuada = 1
while(contadorTabuada <= 10) {
    let resultadoTabuada = numero * contadorTabuada
    console.log(`${numero} x ${contadorTabuada} = ${resultadoTabuada}`)
    contadorTabuada++
}


///

// do while: é executado uma vez sempre, mesmo que a condição seja falsa, ou seja, ele executa o bloco de código antes de verificar a condição. Ele é útil quando queremos garantir que o código seja executado pelo menos uma vez, independentemente da condição.
// solicitar ao usuário um número e mostrar a tabuada desse número, mas usando do while

let numero2
do {
    numero2 = parseInt(prompt("Digite um número para ver a tabuada: "))
} while (isNaN(numero2))

let contadorTabuada2 = 1
do {
    let resultadoTabuada2 = numero2 * contadorTabuada2
    console.log(`${numero2} x ${contadorTabuada2} = ${resultadoTabuada2}`)
    contadorTabuada2++
} while (contadorTabuada2 <= 10)


    // Solcite ao usuário que digite um valor, quando ele digitar 0, some todos os valores digitados por ele
let valorDigitado
let somaValores = 0
do {
    valorDigitado = parseFloat(prompt("Digite um valor (digite 0 para finalizar): "))
    if (valorDigitado !== 0) {
        somaValores += valorDigitado
    }
} while (valorDigitado !== 0)
console.log(`A soma dos valores digitados é: ${somaValores}`)


