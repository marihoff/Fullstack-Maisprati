// Aula 04 - Estruturas de Controle: Condicionais - Parte I

//links
// Operadores (Parte1) - Curso JavaScript #07
//https://www.youtube.com/watch?v=hZG9ODUdxHo

//Variáveis e Tipos Primitivos - Curso JavaScript #05
//https://www.youtube.com/watch?v=Vbabsye7mWo

//Condições (Parte 1) - Curso JavaScript #11
//https://www.youtube.com/watch?v=cOdG4eACN2A



// Faça um programa que solicite ao usuario a inserção de dois valores (um de cada vez) e que mostre para eles duas opções: 1- somar ou 2- subtrair

let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: ")) 
let operacao = prompt("Digite 1 para somar ou 2 para subtrair: ")

if (operacao === "1") {
    let resultado = valor1 + valor2
    console.log(`O resultado da soma é: ${resultado}`)
} else if (operacao === "2") {
    let resultado = valor1 - valor2
    console.log(`O resultado da subtração é: ${resultado}`)
}   
else {
    console.log("Operação inválida. Por favor, digite 1 para somar ou 2 para subtrair.")
}   

// Se fosse na versão switch case, ficaria assim:
switch (operacao) {
    case "1":
        let resultadoSoma = valor1 + valor2
        console.log(`O resultado da soma é: ${resultadoSoma}`)
        break
    case "2":
        let resultadoSubtracao = valor1 - valor2
        console.log(`O resultado da subtração é: ${resultadoSubtracao}`)
        break
    default:
        console.log("Operação inválida. Por favor, digite 1 para somar ou 2 para subtrair.")
}

// no terminal digitar: npm install prompt-sync /// seria função de ajuda para guardar informações node modulos 
// para usar o prompt-sync, é necessário importar ele no código
// node seria um padrão para todos usarem igual e não dar conflitos de versões, ou seja, é uma biblioteca que facilita a entrada de dados no terminal, sem precisar usar o navegador.
const prompt = require('prompt-sync')() 

// pergunte a idade de uma pessoa e informe se ela é jovem, adulta ou idosa, considerando as seguintes faixas etárias: jovem (0-17), adulta (18-64) e idosa (65+)
let idade = parseInt(prompt("Digite a idade: "))   
if (idade >= 0 && idade <= 17) {
    console.log("Você é jovem.")
}
else if (idade >= 18 && idade <= 64) {
    console.log("Você é adulta.")
}
else if (idade >= 65) {
    console.log("Você é idosa.")
}   
else {
    console.log("Idade inválida. Por favor, digite um número positivo.")
}

// no google: documentação javascript switch case /// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
