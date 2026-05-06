console.log("Hello, World!");

//console é o terminal, o log é o registro

console.log(20)
console.log(4.5)

console.log(true)
console.log(false)

console.log(null)
console.log(undefined)

//null é a ausência de valor, ou seja, não tem nada
//undefined é quando a variável existe, mas não tem um valor atribuído a ela

console.log(typeof "Hello, World!") //string
console.log(typeof 20) //number
console.log(typeof 4.5) //number
console.log(typeof true) //boolean

let nomwe = "Alice"
console.log(nome) //Alice

let nome = null
console.log(nome) //null

console.log("meu nome é " + nome) //meu nome é null
console.log(`meu nome é ${nome}`) //meu nome é null

const localnascimento = "Brasil"
//const é uma variável constante, ou seja, não pode ser reatribuída
//localnascimento = "Argentina" //isso vai dar um erro, porque localnascimento é uma constante

//operacoes matematicas
let a = 10
let b = 5
console.log(a + b) //15
console.log(a - b) //5
console.log(a * b) //50
console.log(a / b) //2
console.log(a % b) //0


//placar, cada ++ adiciona 01 ao placar, cada -- subtrai 1 do placar
let placar = 0
placar++
console.log(placar) //1
placar--
console.log(placar) //0


//exercicio
// criem duas variaveis, que recebem dois valores numericos e calcule a média entre eles, e mostre o resultado no console

let num1 = 10
let num2 = 20
let media = (num1 + num2) / 2
console.log(media) //15

// gerar numero aleatorio
console.log(Math.random()) //gera um numero aleatorio entre 0 e 1

//datas
const agora = new Date()
console.log(agora.toString()) //mostra a data e hora atual

console.log(agora.getFullYear()) //mostra o ano atual
console.log(agora.getMonth() + 1) //mostra o mês atual (janeiro é 0, fevereiro é 1, etc)
console.log(agora.getDate()) //mostra o dia do mês atual

// manipulação com textos
let frase = "Olá, Mundo!"
console.log(frase.length) //mostra o tamanho da string
console.log(frase.toUpperCase()) //mostra a string em maiúsculas
console.log(frase.toLowerCase()) //mostra a string em minúsculas
console.log(frase.includes("Mundo")) //verifica se a string contém a palavra "Mundo"

//Verificar login e senha, o usuário só entra se estiverem os dois corretos
let usuario = "admin"
let senha = "1234"
if (usuario === "admin" && senha === "1234") {
    console.log("Login bem-sucedido!")
} else {
    console.log("Login falhou. Verifique seu usuário e senha.")
}   


// Exercicio: Verifique se a pessoa pode ou não tirar CNH, critério ter 18 anos

let idade = 20
if (idade >= 18) {
    console.log("Você pode tirar CNH!")
} else {
    console.log("Você não pode tirar CNH.")
}

