// LlSTA DE TAREFAS 3 - T1/2026

// 1. Crie um objeto representando um produto com as propriedades: nome, preço, categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as propriedades e seus valores. Em seguida, adicione uma nova propriedade desconto ao objeto e exiba o preço final calculado.

console.log("Exercício 1:");
const produto = {
  nome: "Camiseta",
    preço: 50,
    categoria: "Roupas",
    quantidade: 100
};
for (let chave in produto) {
  console.log(`${chave}: ${produto[chave]}`);
}
produto.desconto = 0.1; // 10% de desconto
const preçoFinal = produto.preço * (1 - produto.desconto);
console.log(`Preço final com desconto: R$${preçoFinal.toFixed(2)}`);


// 2. Crie dois objetos representando personagens de um jogo, cada um com as propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).

console.log("\nExercício 2:");
const personagem1 = {
  nome: "Pikachu",
    vida: 100,
    ataque: 30,
    defesa: 20
};
const personagem2 = {
  nome: "Charmander",
    vida: 80,
    ataque: 40,
    defesa: 10
};
function calcularPoderTotal(personagem) {
  return personagem.vida + personagem.ataque + personagem.defesa;
}
console.log("Personagem 1:");
for (let chave in personagem1) {
  console.log(`${chave}: ${personagem1[chave]}`);
}
console.log("\nPersonagem 2:");
for (let chave in personagem2) {
  console.log(`${chave}: ${personagem2[chave]}`);
}
const poderTotal1 = calcularPoderTotal(personagem1);
const poderTotal2 = calcularPoderTotal(personagem2);
if (poderTotal1 > poderTotal2) {
  console.log(`\n${personagem1.nome} tem maior poder total (${poderTotal1})`);
} else if (poderTotal2 > poderTotal1) {
  console.log(`\n${personagem2.nome} tem maior poder total (${poderTotal2})`);
} else {
  console.log("\nAmbos os personagens têm o mesmo poder total.");
} 


// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de experiência. Use for...in para listar todos os dados. Com base nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.

console.log("\nExercício 3:");
const funcionario = {
  nome: "Mariana",
    cargo: "Desenvolvedora",
    salário: 5000,
    anosExperiência: 4
};
for (let chave in funcionario) {
  console.log(`${chave}: ${funcionario[chave]}`);
}
let bônus;
if (funcionario.anosExperiência <= 2) {
  bônus = funcionario.salário * 0.05;
} else if (funcionario.anosExperiência <= 5) {
  bônus = funcionario.salário * 0.1;
}
    else {
    bônus = funcionario.salário * 0.15;
}
console.log(`Bônus anual: R$${bônus.toFixed(2)}`);


// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para listar o inventário completo. Permita que o usuário informe um item para usar: reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

console.log("\nExercício 4:");
const inventário = {
  espada: 1,
    poção: 5,
    escudo: 2
};
console.log("Inventário completo:");
for (let item in inventário) {
  console.log(`${item}: ${inventário[item]}`);
}
const itemUsar = prompt("Informe um item para usar:");
if (inventário[itemUsar] > 0) {
  inventário[itemUsar]--;
    console.log(`Você usou um(a) ${itemUsar}. Quantidade restante: ${inventário[itemUsar]}`);
} else {
  console.log(`Item ${itemUsar} esgotado!`);
}


// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como alimentação, transporte, lazer e saúde, cada uma com valor planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

console.log("\nExercício 5:");
const orçamento = {
  alimentação: { planejado: 800, gasto: 750 },
    transporte: { planejado: 200, gasto: 250 },
    lazer: { planejado: 300, gasto: 150 },
    saúde: { planejado: 400, gasto: 450 }
};
let saldoGeral = 0; 
for (let categoria in orçamento) {
  const planejado = orçamento[categoria].planejado;
    const gasto = orçamento[categoria].gasto;
    saldoGeral += planejado - gasto;
    if (gasto <= planejado) {
    console.log(`${categoria}: Dentro do orçamento (Gasto: R$${gasto}, Planejado: R$${planejado})`);
} else {
    console.log(`${categoria}: Acima do orçamento (Gasto: R$${gasto}, Planejado: R$${planejado})`);
}
}
console.log(`Saldo geral do mês: R$${saldoGeral.toFixed(2)}`);


// 6. Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para exibir cada música no formato "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no mesmo formato.

console.log("\nExercício 6:");
const músicas = [
  { título: "Shape of You", artista: "Ed Sheeran", duração: 233 },
    { título: "Blinding Lights", artista: "The Weeknd", duração: 200 },
    { título: "Levitating", artista: "Dua Lipa", duração: 203 }
];
console.log("Músicas:");
for (let música of músicas) {
  const minutos = Math.floor(música.duração / 60);
    const segundos = música.duração % 60;
    console.log(`${música.artista} — ${música.título} (${minutos}:${segundos.toString().padStart(2, '0')})`);
}   
let duraçãoTotal = 0;
músicas.forEach(música => {
  duraçãoTotal += música.duração;
});
const minutosTotal = Math.floor(duraçãoTotal / 60);
const segundosTotal = duraçãoTotal % 60;
console.log(`Duração total: ${minutosTotal}:${segundosTotal.toString().padStart(2, '0')}`);


// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use forEach para calcular e exibir separadamente a média dos aprovados e a média dos reprovados.
console.log("\nExercício 7:");
const alunos = [
  { nome: "Pikachu", nota: 85 },
    { nome: "Charmander", nota: 60 },
    { nome: "Caterpie", nota: 45 },
    { nome: "Bulbasaur", nota: 70 },
    { nome: "Squirtle", nota: 55 },
    { nome: "Jigglypuff", nota: 30 }
];
console.log("Classificação dos alunos:");
for (let aluno of alunos) {
  let classificação;
    if (aluno.nota >= 70) {
    classificação = "Aprovado";
}
    else if (aluno.nota >= 50) {
    classificação = "Recuperação";
}
    else {
    classificação = "Reprovado";
}
    console.log(`${aluno.nome}: ${classificação} (Nota: ${aluno.nota})`);
}
let somaAprovados = 0;
let contadorAprovados = 0;
let somaReprovados = 0;
let contadorReprovados = 0;
alunos.forEach(aluno => {
  if (aluno.nota >= 70) {
    somaAprovados += aluno.nota;
    contadorAprovados++;
} else if (aluno.nota < 50) {
    somaReprovados += aluno.nota;
    contadorReprovados++;
}
});
const médiaAprovados = contadorAprovados > 0 ? (somaAprovados / contadorAprovados).toFixed(2) : "N/A";
const médiaReprovados = contadorReprovados > 0 ? (somaReprovados / contadorReprovados).toFixed(2) : "N/A";
console.log(`Média dos aprovados: ${médiaAprovados}`);
console.log(`Média dos reprovados: ${médiaReprovados}`);


// 8. Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.

console.log("\nExercício 8:");
const produtos = [
  { nome: "Camiseta", preço: 50, quantidade: 100 },
    { nome: "Calça", preço: 120, quantidade: 50 },
    { nome: "Tênis", preço: 200, quantidade: 30 }
];
let valorTotalGeral = 0;
console.log("Relatório de estoque:");
produtos.forEach(produto => {
  const valorTotal = produto.preço * produto.quantidade;
    valorTotalGeral += valorTotal;
    console.log(`${produto.nome}: R$${valorTotal.toFixed(2)} (Preço: R$${produto.preço}, Quantidade: ${produto.quantidade})`);
});
console.log(`Valor total geral do estoque: R$${valorTotalGeral.toFixed(2)}`);


// 9. Crie um array de objetos onde cada objeto representa um contato com nome, telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita buscar um contato pelo nome usando for...of e exiba os dados encontrados ou uma mensagem de "não encontrado".

console.log("\nExercício 9:");
const contatos = [
  { nome: "Pikachu", telefone: "1234-5678", email: "pikachu@example.com" },
  { nome: "Charmander", telefone: "2345-6789", email: "charmander@example.com" },
  { nome: "Caterpie", telefone: "3456-7890", email: "caterpie@example.com" }
];
console.log("Contatos:");
contatos.forEach(contato => {
  console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});
const nomeBusca = prompt("Digite o nome do contato para buscar:");
let contatoEncontrado = null;
for (let contato of contatos) {
  if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
    contatoEncontrado = contato;
    break;
  }
}
if (contatoEncontrado) {
  console.log(`Contato encontrado: Nome: ${contatoEncontrado.nome}, Telefone: ${contatoEncontrado.telefone}, Email: ${contatoEncontrado.email}`);
} else {
  console.log("Contato não encontrado.");
}

// 10. Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação.
console.log("\nExercício 10:");
const pilhaNavegador = [];
function visitar(pagina) {
  pilhaNavegador.push(pagina);
  console.log(`Visitando: ${pagina}`);
}
function voltar() {
  if (pilhaNavegador.length > 0) {
    const paginaAnterior = pilhaNavegador.pop();
    console.log(`Voltando de: ${paginaAnterior}`);
  } else {
    console.log("Não há páginas para voltar.");
  }
}
function paginaAtual() {
  if (pilhaNavegador.length > 0) {
    return pilhaNavegador[pilhaNavegador.length - 1];
  } else {
    return "Nenhuma página visitada.";
  }
}
visitar("www.google.com");
console.log(`Página atual: ${paginaAtual()}`);
visitar("www.youtube.com");
console.log(`Página atual: ${paginaAtual()}`);
visitar("www.facebook.com");
console.log(`Página atual: ${paginaAtual()}`);
visitar("www.twitter.com");
console.log(`Página atual: ${paginaAtual()}`);
voltar();
console.log(`Página atual: ${paginaAtual()}`);
voltar();
console.log(`Página atual: ${paginaAtual()}`);



// 11. Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, exibindo o estado da fila a cada operação.
console.log("\nExercício 11:");
const filaClínica = [];
function chegarPaciente(nome) {
  filaClínica.push(nome);
  console.log(`Paciente ${nome} chegou.`);
}
function chamarProximo() {
  if (filaClínica.length > 0) {
    const pacienteAtendido = filaClínica.shift();
    console.log(`Chamando próximo paciente: ${pacienteAtendido}`);
  } else {
    console.log("Não há pacientes na fila.");
  }
}
function exibirFila() {
  if (filaClínica.length > 0) {
    console.log("Fila atual de pacientes:");
    filaClínica.forEach((paciente, index) => {
      console.log(`${index + 1}. ${paciente}`);
    });
  } else {
    console.log("A fila está vazia.");
  }
}
chegarPaciente("Pikachu");
exibirFila();
chegarPaciente("Charmander");
exibirFila();
chegarPaciente("Caterpie");
exibirFila();
chegarPaciente("Bulbasaur");
exibirFila();
chegarPaciente("Squirtle");
exibirFila();
chamarProximo();
exibirFila();
chamarProximo();
exibirFila();
chamarProximo();
exibirFila();


// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a lista antes e depois.

console.log("\nExercício 12:");
class Nó {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}
class ListaLigada {
  constructor() {
    this.cabeça = null;
  }
    adicionar(tarefa) {
    const novoNó = new Nó(tarefa);
    if (!this.cabeça) {
      this.cabeça = novoNó;
    } else {
      let atual = this.cabeça;
        while (atual.proximo) {
        atual = atual.proximo;
    }
        atual.proximo = novoNó;
    }
}
    remover(tarefa) {
    if (!this.cabeça) return;
    if (this.cabeça.valor === tarefa) {
        this.cabeça = this.cabeça.proximo;
        return;
    }
    let atual = this.cabeça;
    while (atual.proximo) {
        if (atual.proximo.valor === tarefa) {
        atual.proximo = atual.proximo.proximo;
        return;
    }
        atual = atual.proximo;
    }   
}    exibir() {
    let atual = this.cabeça;
    console.log("Lista de tarefas:");
    while (atual) {
        console.log(`- ${atual.valor}`);
        atual = atual.proximo;
    }
}
}
const gerenciadorTarefas = new ListaLigada();
gerenciadorTarefas.adicionar("Comprar leite");
gerenciadorTarefas.adicionar("Enviar email");
gerenciadorTarefas.adicionar("Lavar roupa");
gerenciadorTarefas.adicionar("Estudar JavaScript");
console.log("Antes de remover:");
gerenciadorTarefas.exibir();
gerenciadorTarefas.remover("Lavar roupa");
console.log("\nDepois de remover 'Lavar roupa':");
gerenciadorTarefas.exibir();

