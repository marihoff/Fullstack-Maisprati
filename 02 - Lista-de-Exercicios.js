// LlSTA DE TAREFAS 2 - T1/2026

// 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto a resposta for "sim".

let resposta = "sim";

while (resposta.toLowerCase() === "sim") {
    let numero = Number(prompt("Digite um número para ver a tabuada:"));

    console.log(`\nTabuada do ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    resposta = prompt("\nDeseja ver outra tabuada? (sim/não)");
}

console.log("Programa encerrado.");


// 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
let numero = Number(prompt("Digite um número inteiro positivo:"));

if (numero === 0) {
    console.log("O número 0 possui 1 dígito.");
} else {
    let contador = 0;
    let numeroTemp = Math.abs(numero); // para lidar com números negativos
    while (numeroTemp > 0) {
        contador++;
        numeroTemp = Math.floor(numeroTemp / 10);
    }
    console.log(`O número ${numero} possui ${contador} dígitos.`);
}

// 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...
let termos = Number(prompt("Quantos termos da sequência de Fibonacci deseja ver?"));

let a = 1, b = 1;
console.log("Sequência de Fibonacci:");
for (let i = 1; i <= termos; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}

// 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as tentativas.
const senhaFixa = "12345";
let tentativas = 0;
let senhaDigitada;
do {
    senhaDigitada = prompt("Digite a senha:");
    tentativas++;
    if (senhaDigitada === senhaFixa) {
        console.log("Senha correta! Acesso concedido.");
        break;
    } else {
        console.log("Senha incorreta. Tente novamente.");
    }
} while (tentativas < 3);

if (tentativas === 3 && senhaDigitada !== senhaFixa) {
    console.log("Número de tentativas esgotado. Acesso negado.");
}

// 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços aninhados (for dentro de for). Exiba também a quantidade total de primos encontrados.
let N = Number(prompt("Digite um número inteiro N para encontrar os primos entre 2 e N:"));
let primos = [];
for (let i = 2; i <= N; i++) {
    let ehPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        primos.push(i);
    }
}
console.log(`Números primos entre 2 e ${N}: ${primos.join(", ")}`);
console.log(`Quantidade total de primos encontrados: ${primos.length}`);


// 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média da turma, o nome do aluno com maior nota e o nome do aluno com menor nota. Não use funções prontas como Math.max().
let alunos = [];
for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    let nota = Number(prompt(`Digite a nota do aluno ${nome}:`));
    alunos.push({ nome, nota });
}
let somaNotas = 0;
let alunoMaiorNota = alunos[0];
let alunoMenorNota = alunos[0];
for (let aluno of alunos) {
    somaNotas += aluno.nota;
    if (aluno.nota > alunoMaiorNota.nota) {
        alunoMaiorNota = aluno;
    }
    if (aluno.nota < alunoMenorNota.nota) {
        alunoMenorNota = aluno;
    }
}
let mediaTurma = somaNotas / alunos.length;
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);
console.log(`Aluno com maior nota: ${alunoMaiorNota.nome} (${alunoMaiorNota.nota})`);
console.log(`Aluno com menor nota: ${alunoMenorNota.nome} (${alunoMenorNota.nota})`);


// 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar.
let produtos = [];
while (true) {
    let nomeProduto = prompt("Digite o nome do produto (ou 'sair' para finalizar):");
    if (nomeProduto.toLowerCase() === "sair") {
        break;
    }
    let precoProduto = Number(prompt(`Digite o preço do produto ${nomeProduto}:`));
    produtos.push({ nome: nomeProduto, preco: precoProduto });
}
console.log("Itens no carrinho:");
let subtotal = 0;
for (let produto of produtos) {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
    subtotal += produto.preco;
}
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
if (produtos.length > 3) {
    let desconto = subtotal * 0.10;
    subtotal -= desconto;
    console.log(`Desconto de 10% aplicado: R$ ${desconto.toFixed(2)}`);
}
console.log(`Total a pagar: R$ ${subtotal.toFixed(2)}`);


// 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de trás para frente com um laço for, monte a palavra invertida. Exiba a palavra original, a invertida e informe se ela é um palíndromo.
let palavra = prompt("Digite uma palavra:");
let caracteres = palavra.split("");
let palavraInvertida = "";
for (let i = caracteres.length - 1; i >= 0; i--) {
    palavraInvertida += caracteres[i];
}
console.log(`Palavra original: ${palavra}`);
console.log(`Palavra invertida: ${palavraInvertida}`);
if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    console.log("A palavra é um palíndromo.");
}


//9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while, peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e quantas tentativas foram necessárias.
let numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativas = [];
let palpite;
do {
    palpite = Number(prompt("Tente adivinhar o número entre 1 e 100:"));
    tentativas.push(palpite);
    if (palpite < numeroSorteado) { 
        console.log("O número é maior. Tente novamente.");
    } else if (palpite > numeroSorteado) {
        console.log("O número é menor. Tente novamente.");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas.length} tentativas.`);
        console.log("Histórico de tentativas:", tentativas.join(", "));
    }
} while (palpite !== numeroSorteado);


//10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados. Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve o melhor desempenho.
let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = Number(prompt(`Digite a nota do aluno ${i + 1}, nota ${j + 1}:`));
    }   
}

let medias = [];
let somaGeral = 0;
let melhorAluno = 0;
for (let i = 0; i < matriz.length; i++) {
    let somaAluno = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        somaAluno += matriz[i][j];
    }
    let mediaAluno = somaAluno / matriz[i].length;
    medias.push(mediaAluno);
    somaGeral += somaAluno;
    if (mediaAluno > medias[melhorAluno]) {
        melhorAluno = i;
    }
}
let mediaGeral = somaGeral / (matriz.length * matriz[0].length);
console.log(`Média de cada aluno: ${medias.map(m => m.toFixed(2)).join(", ")}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
console.log(`O melhor desempenho foi do aluno ${melhorAluno + 1} com média ${medias[melhorAluno].toFixed(2)}`);
