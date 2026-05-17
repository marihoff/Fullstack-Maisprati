// LlSTA DE TAREFAS 1 - T1/2026

// 1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
const prompt = require('prompt-sync')()
let nota = parseFloat(prompt("Digite a nota do aluno (0 a 10): "))
if (nota >= 7) {
    console.log("Aluno Aprovado.")
} else if (nota >= 5) {
    console.log("Aluno em Recuperação.")
} else {
    console.log("Aluno Reprovado.")
}

// 2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))
let anoAtual = new Date().getFullYear()
let idade = anoAtual - anoNascimento
if (idade <= 12) {
    console.log("Você é uma criança.")
} else if (idade <= 17) {
    console.log("Você é um adolescente.")
} else if (idade <= 59) {
    console.log("Você é um adulto.")
} else {
    console.log("Você é um idoso.")
}

// 3. Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o novo salário do funcionário.

let salario = parseFloat(prompt("Digite o salário mensal do funcionário: "))
let percentualAumento = parseFloat(prompt("Digite o percentual de aumento: "))
if (salario < 1500) {
    percentualAumento *= 2
}
let novoSalario = salario + (salario * percentualAumento / 100)
console.log(`O novo salário do funcionário é R$ ${novoSalario.toFixed(2)}.`)

// 4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max().

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "))
let num2 = parseInt(prompt("Digite o segundo número inteiro: "))
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "))
let maior = num1
if (num2 > maior) {
    maior = num2
}

// 5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o valor original, o desconto aplicado e o valor final a pagar.

let valorCompra = parseFloat(prompt("Digite o valor total da compra: "))
let desconto = 0
if (valorCompra >= 100 && valorCompra < 300) {
    desconto = 0.10
} else if (valorCompra >= 300 && valorCompra < 500) {
    desconto = 0.15
} else if (valorCompra >= 500) {
    desconto = 0.20
}

let valorDesconto = valorCompra * desconto
let valorFinal = valorCompra - valorDesconto
console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`)
console.log(`Desconto aplicado: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`)

// 6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque.

let valorSaque = parseInt(prompt("Digite o valor que deseja sacar (múltiplo de 10): "))
if (valorSaque % 10 !== 0) {
    console.log("Valor inválido. O valor deve ser múltiplo de 10.")
} else {
    let cedulas100 = Math.floor(valorSaque / 100)
    let restante = valorSaque % 100
    let cedulas50 = Math.floor(restante / 50)
    restante = restante % 50
    let cedulas20 = Math.floor(restante / 20)
    restante = restante % 20
    let cedulas10 = Math.floor(restante / 10)
    console.log(`Cédulas de R$ 100: ${cedulas100}`)
    console.log(`Cédulas de R$ 50: ${cedulas50}`)
    console.log(`Cédulas de R$ 20: ${cedulas20}`)
    console.log(`Cédulas de R$ 10: ${cedulas10}`)
}

// 7. Faça um programa que funcione como uma calculadora básica. Leia dois números e uma operação desejada (+, -, *, /). Usando switch case, realize a operação correspondente e exiba o resultado. Trate o caso de divisão por zero e de operação inválida.

let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))
let operacao = prompt("Digite a operação desejada (+, -, *, /): ")
switch (operacao) {
    case "+":
        console.log(`Resultado: ${numero1 + numero2}`)
        break
    case "-":
        console.log(`Resultado: ${numero1 - numero2}`)
        break
    case "*":
        console.log(`Resultado: ${numero1 * numero2}`)
        break
    case "/":
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.")
        } else {
            console.log(`Resultado: ${numero1 / numero2}`)
        }
        break
    default:
        console.log("Operação inválida. Por favor, digite +, -, * ou /.")
}

// 8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.

let tamanhoPizza = prompt("Digite o tamanho da pizza (P, M ou G): ").toUpperCase()
let tipoBorda = prompt("Digite o tipo de borda (tradicional ou recheada): ").toLowerCase()
let precoBase
switch (tamanhoPizza) {
    case "P":
        precoBase = 25
        break
    case "M":
        precoBase = 35
        break
    case "G":
        precoBase = 45
        break
    default:
        console.log("Tamanho inválido. Por favor, digite P, M ou G.")
        precoBase = 0
}

let precoBorda = tipoBorda === "recheada" ? 8 : 0
let precoTotal = precoBase + precoBorda
console.log(`O valor total do pedido é R$ ${precoTotal.toFixed(2)}.`)

// 9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e quantos dias ele possui. Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29 caso seja.

let numeroMes = parseInt(prompt("Digite o número do mês (1 a 12): "))
switch (numeroMes) {
    case 1:
        console.log("Janeiro - 31 dias")
        break
    case 2:
        let ano = parseInt(prompt("Digite o ano para verificar se é bissexto: "))
        let diasFevereiro = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? 29 : 28
        console.log(`Fevereiro - ${diasFevereiro} dias`)
        break
    case 3:
        console.log("Março - 31 dias")
        break
    case 4:
        console.log("Abril - 30 dias")
        break
    case 5:
        console.log("Maio - 31 dias")
        break
    case 6:
        console.log("Junho - 30 dias")
        break
    case 7:
        console.log("Julho - 31 dias")
        break
    case 8:
        console.log("Agosto - 31 dias")
        break
    case 9:
        console.log("Setembro - 30 dias")
        break
    case 10:
        console.log("Outubro - 31 dias")
        break
    case 11:
        console.log("Novembro - 30 dias")
        break
    case 12:
        console.log("Dezembro - 31 dias")
        break
    default:
        console.log("Número do mês inválido. Por favor, digite um número entre 1 e 12.")
}

// 10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, usando switch case com intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora = R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

let horasEstacionado = parseInt(prompt("Digite quantas horas o veículo ficou estacionado: "))
let valorCobrado
switch (true) {
    case horasEstacionado <= 1:
        valorCobrado = 8
        break
    case horasEstacionado <= 2:
        valorCobrado = 8 + 6
        break
    case horasEstacionado <= 3:
        valorCobrado = 8 + 6 + 4
        break
    default:
        valorCobrado = 8 + 6 + 4 + ((horasEstacionado - 3) * 2)
}
console.log(`Tempo total: ${horasEstacionado} horas`)
console.log(`Valor cobrado: R$ ${valorCobrado.toFixed(2)}`)

//