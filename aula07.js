// Aula 07 - Revisão Geral + Estruturas de Repetição e Arrays Uni e Bidimensionais

//links
// Variáveis Compostas - Curso JavaScript #15
// https://www.youtube.com/watch?v=XdkW62tkAgU

// Arrays e Estruturas de Repetição em JavaScript
// https://www.dio.me/articles/arrays-e-estruturas-de-repeticao-em-javascript?authuser=0

// Array
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array?authuser=0



// condicionais e operadores

// Neste módulo você vai aprender como o computador toma decisões.
// Toda lógica de programação gira em torno de perguntar do tipo:
// "Se isso acontecer, faça aquilo, caso contrário, faça outra coisa".

// if: é uma estrutura de controle que permite executar um bloco de código apenas se uma condição for verdadeira. Ele é útil para tomar decisões e controlar o fluxo do programa com base em condições específicas.
let meunumero = 5
if(meunumero > 0) {
    console.log("O número é positivo.")
} else if(meunumero < 0) {
    console.log("O número é negativo.")
} else {
    console.log("O número é zero.")
}

// Tecnicamente, estruturas condicionais são chamadas de "controle flow" (fluxo de controle), porque elas controlam o fluxo do programa, ou seja, a ordem em que as instruções são executadas. Elas permitem que o programa tome decisões e execute diferentes blocos de código com base em condições específicas, o que é fundamental para a lógica de programação.


// Aulão - Resumo do conteúdo! Consultar o aula04 de condicionais e de fudamentos

console.log("Olá, mundo!")
// e tem o console warn, que é para mostrar mensagens de aviso, ou seja, ele é usado para alertar o usuário sobre algo que pode ser um problema ou uma situação que requer atenção. Ele é útil para destacar informações importantes ou para indicar que algo não está funcionando como esperado. Por exemplo, se um usuário tentar acessar uma página que não existe, o console.warn pode ser usado para mostrar uma mensagem de aviso informando que a página não foi encontrada.
console.warn('olá mundo')
console.warn('Atenção: algo pode estar errado!')

console.table({ nome: "João", idade: 30, cidade: "São Paulo" }) // é para mostrar os dados em formato de tabela, ou seja, ele é usado para exibir informações de forma organizada e fácil de ler. Ele é útil para visualizar dados em formato tabular, como arrays ou objetos, e pode ser especialmente útil para depuração e análise de dados. Por exemplo, se você tiver um array de objetos representando pessoas, o console.table pode ser usado para mostrar esses objetos em uma tabela, facilitando a visualização das informações.

// log serve como se fosse um registro do passo a passo

// tem os tipos de number, strings, boolean, null, undefined, symbol e bigint

// tem os operadores aritméticos, de comparação, lógicos, de atribuição, ternário e de string

// tem as estruturas de controle, como if, else if, else, switch case, while, do while e for

let mariana
console.log(mariana) // undefined, ou seja, a variável foi declarada, mas não foi inicializada com um valor, então ela tem o valor undefined. Isso significa que a variável existe, mas ainda não tem um valor atribuído a ela. Se tentarmos acessar o valor de mariana antes de atribuir um valor a ela, obteremos undefined como resultado.

// null é um valor que representa a ausência de valor, ou seja, ele é usado para indicar que uma variável não tem um valor válido ou que um objeto não existe. Ele é útil para representar a falta de dados ou para indicar que algo foi intencionalmente deixado em branco. Por exemplo, se você tiver uma variável que representa a idade de uma pessoa e essa pessoa não quiser informar sua idade, você pode atribuir null a essa variável para indicar que a idade não está disponível.

//symbol é um tipo de dado primitivo que representa um valor único e imutável. Ele é usado para criar identificadores únicos para propriedades de objetos, garantindo que essas propriedades não sejam sobrescritas acidentalmente por outras partes do código. Ele é útil para evitar conflitos de nomes e para criar chaves únicas em objetos. Por exemplo, se você tiver um objeto que representa uma pessoa e quiser adicionar uma propriedade que não deve ser sobrescrita por outras partes do código, você pode usar um símbolo como chave para essa propriedade, garantindo que ela seja única e protegida contra alterações indesejadas.

// bigint é um tipo de dado primitivo que representa números inteiros de precisão arbitrária. Ele é usado para lidar com números inteiros muito grandes que excedem o limite do tipo number, que é de 2^53 - 1. Ele é útil para realizar cálculos com números inteiros muito grandes, como em criptografia, ciência de dados ou qualquer situação em que seja necessário lidar com números inteiros além do limite do tipo number. Por exemplo, se você estiver trabalhando com números inteiros muito grandes, como o número de átomos no universo, você pode usar bigint para representar esses números sem perder precisão.

// typof é um operador que retorna uma string indicando o tipo de um valor. Ele é útil para verificar o tipo de uma variável ou expressão em tempo de execução, permitindo que você tome decisões com base no tipo dos dados. Por exemplo, se você tiver uma variável que pode conter diferentes tipos de dados e quiser executar um código específico com base no tipo dessa variável, você pode usar typeof para verificar o tipo e agir de acordo.   

// let padrão para escrever as variaveis

//const para declarar constantes, ou seja, variáveis que não podem ser reatribuídas depois de serem inicializadas. Ele é útil para garantir que um valor permaneça constante ao longo do tempo, evitando alterações acidentais ou intencionais. Por exemplo, se você tiver uma variável que representa a velocidade da luz, que é uma constante física, você pode usar const para declarar essa variável, garantindo que seu valor não seja alterado acidentalmente em algum ponto do código.

// var é uma forma mais antiga de declarar variáveis em JavaScript, e seu uso é desencorajado em favor de let e const. Ele tem um escopo de função, o que significa que uma variável declarada com var é acessível em toda a função em que foi declarada, mesmo antes de sua declaração. Isso pode levar a comportamentos inesperados e bugs difíceis de depurar. Por exemplo, se você declarar uma variável com var dentro de um bloco de código, como um loop ou uma estrutura condicional, essa variável ainda estará acessível fora desse bloco, o que pode causar confusão e erros no código. Por isso, é recomendado usar let ou const para declarar variáveis em JavaScript, pois eles têm um escopo de bloco mais previsível e evitam esses problemas associados ao var.

// let
// const
// var


if(true) {
    let temp = 10
}

console.log(temp) // ReferenceError: temp is not defined, ou seja, a variável temp foi declarada dentro do bloco if usando let, o que significa que ela tem um escopo de bloco. Isso significa que a variável temp só é acessível dentro do bloco if onde foi declarada. Quando tentamos acessar temp fora desse bloco, obtemos um erro de referência (ReferenceError) indicando que temp não está definido, porque ela não existe no escopo global ou em qualquer outro escopo fora do bloco if. Se quisermos acessar temp fora do bloco if, precisaríamos declará-la com var, que tem um escopo de função e seria acessível em todo o escopo da função onde foi declarada. No entanto, como estamos usando let, a variável temp é limitada ao escopo do bloco if e não pode ser acessada fora dele.

if(true) {
    var temp2 = 20
}

//var nao respeita o bloco

console.log(temp2) // 20, ou seja, a variável temp2 foi declarada dentro do bloco if usando var, o que significa que ela tem um escopo de função. Isso significa que a variável temp2 é acessível em todo o escopo da função onde foi declarada, incluindo fora do bloco if. Portanto, quando tentamos acessar temp2 fora do bloco if, obtemos o valor 20, que é o valor atribuído a temp2 dentro do bloco if. Isso ocorre porque var não respeita o escopo de bloco e torna a variável acessível em todo o escopo da função onde foi declarada. Se quisermos limitar o escopo de temp2 ao bloco if, precisaríamos declará-la com let, que tem um escopo de bloco e não seria acessível fora do bloco if. No entanto, como estamos usando var, a variável temp2 é acessível em todo o escopo da função e retorna o valor 20 quando acessada fora do bloco if.

const PROMPT = require('prompt-sync')() // é uma função que permite ler a entrada do usuário no terminal, ou seja, ela é usada para solicitar ao usuário que digite algo e retornar esse valor como uma string. Ela é útil para criar programas interativos que precisam de entrada do usuário, como jogos, calculadoras ou qualquer aplicação que exija interação com o usuário. Por exemplo, se você quiser criar um programa que pergunte o nome do usuário e depois exiba uma mensagem de boas-vindas, você pode usar prompt-sync para ler o nome do usuário e usá-lo na mensagem de boas-vindas.

let valorDigitado
let somaValores = 0

do {
    valorDigitado = parseFloat(PROMPT("Digite um valor (ou 0 para sair): "))
    somaValores += valorDigitado // ou somaValores = somaValores + valorDigitado
}   while (valorDigitado !== 0) // ou valorDigitado != 0, ou seja, o loop do while continuará executando enquanto o valor digitado for diferente de 0. Quando o usuário digitar 0, a condição se tornará falsa e o loop será encerrado, permitindo que o programa continue com a próxima linha de código após o loop. Isso é útil para criar um programa que permita ao usuário digitar vários valores e calcular a soma desses valores até que ele decida encerrar a entrada digitando 0.


// ============================================================
// RESUMO FINAL — O que você aprendeu: De fundamentos
// ============================================================
// console.log()  → exibir mensagens no terminal
// Tipos          → string, number, boolean, null, undefined, symbol, bigint
// Variáveis      → let (mutável), const (imutável), var (evitar)
// Matemática     → + - * / % ** e operadores de atribuição composta
// Incremento     → ++ -- += -= *= /= **= %=
// Coerção        → implícita (automática) e explícita (Number, String, parseInt...)
// Math           → random, floor, ceil, round, trunc, max, min, sqrt, abs, PI, E
// Date           → new Date(), getFullYear(), toLocaleDateString(), Date.now()
// String         → length, at, slice, includes, replace, split, trim, template literals

// ============================================================
// RESUMO FINAL — O que você aprendeu: De condicionais
// ============================================================
// Comparações    → > < >= <= == === != !== (prefira sempre ===)
// Lógicos        → && (E), || (OU), ! (NÃO), avaliação de curto-circuito
// if / else      → decisão com dois caminhos
// else if        → decisão com múltiplos caminhos sequenciais
// Ternário       → condição ? valorA : valorB (único operador de 3 operandos)
// switch         → opções fixas com ===; fall-through intencional com cases agrupados
// ?? (nullish)   → valor padrão seguro: só substitui null ou undefined
// ?.             → optional chaining: acesso seguro a propriedades que podem ser null
// Truthy / Falsy → 6 valores falsy; todo o resto é truthy; use !! ou Boolean() para ver



// No terminal
// npm install prompt-sync
// Node package manager (NPM)

const prompt = require('prompt-sync')() // é uma função que permite ler a entrada do usuário no terminal, ou seja, ela é usada para solicitar ao usuário que digite algo e retornar esse valor como uma string. Ela é útil para criar programas interativos que precisam de entrada do usuário, como jogos, calculadoras ou qualquer aplicação que exija interação com o usuário. Por exemplo, se você quiser criar um programa que pergunte o nome do usuário e depois exiba uma mensagem de boas-vindas, você pode usar prompt-sync para ler o nome do usuário e usá-lo na mensagem de boas-vindas.

// <contador>; <condição>; <incremento>
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/*tabuada*/
let numero = parseInt(prompt("Digite um número para ver a tabuada: "))
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}


let nums = [1, 2, 3, 4, 5]

console.table(nums) // é para mostrar os dados em formato de tabela, ou seja, ele é usado para exibir informações de forma organizada e fácil de ler. Ele é útil para visualizar dados em formato tabular, como arrays ou objetos, e pode ser especialmente útil para depuração e análise de dados. Por exemplo, se você tiver um array de objetos representando pessoas, o console.table pode ser usado para mostrar esses objetos em uma tabela, facilitando a visualização das informações.

console.log(nums)

console.log(numbs[0]) // 1, ou seja, os arrays em JavaScript são indexados a partir do zero, o que significa que o primeiro elemento do array está na posição 0. Portanto, quando acessamos nums[0], estamos acessando o primeiro elemento do array nums, que é o número 1. Se quisermos acessar o segundo elemento do array, usaríamos nums[1], que retornaria o número 2, e assim por diante. Essa indexação a partir do zero é uma convenção comum em muitas linguagens de programação e é importante lembrar disso ao trabalhar com arrays em JavaScript.

let hardware = ["teclado", "mouse", "monitor", "gabinete", "placa de vídeo"]
console.table(hardware)


let arr = [1, "dois", true, null, undefined, { nome: "João" }, [1, 2, 3]]
console.table(arr) // é para mostrar os dados em formato de tabela, ou seja, ele é usado para exibir informações de forma organizada e fácil de ler. Ele é útil para visualizar dados em formato tabular, como arrays ou objetos, e pode ser especialmente útil para depuração e análise de dados. Por exemplo, se você tiver um array de objetos representando pessoas, o console.table pode ser usado para mostrar esses objetos em uma tabela, facilitando a visualização das informações. No caso do array arr, ele contém diferentes tipos de dados, incluindo números, strings, booleanos, null, undefined, objetos e outros arrays. O console.table exibirá esses elementos em uma tabela organizada, permitindo que você visualize facilmente os diferentes tipos de dados presentes no array.
