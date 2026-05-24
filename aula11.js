// Aula 11 - Estruturas de Dados - Listas Encadeadas e Duplamente Encadeadas

// Links importantes:
// https://www.youtube.com/watch?v=m8Ven1eCpbM
// https://www.youtube.com/watch?v=6CVCLVPPqis
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes?authuser=0
// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/?authuser=0


//Listas Encadeadas e Duplamente Encadeadas
// São estruturas de dados que consistem em nós (nodes) onde cada nó contém um valor e um ponteiro para o próximo nó (e no caso da duplamente encadeada, também para o nó anterior). Elas permitem inserções e remoções eficientes em qualquer posição da lista, ao contrário dos arrays que podem exigir realocação de memória. As listas encadeadas são úteis quando a quantidade de dados é desconhecida ou quando se precisa de uma estrutura dinâmica.

// Exemplo de classe para criar objetos do tipo Carro, com propriedades e métodos para exibir informações do carro. Também inclui uma implementação básica de uma lista encadeada com um nó e um método para inserir um valor no início da lista.



// Classe como matriz ou template para criar objetos com as mesmas propriedades e métodos

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }   
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020)
meuCarro.exibirInfo() // Marca: Toyota, Modelo: Corolla, Ano: 2020

console.log(meuCarro.marca) // Toyota
console.log(meuCarro.modelo) // Corolla
console.log(meuCarro.ano) // 2020


//
// class node representa um nó individual da lista encadeada, contendo um valor e um ponteiro para o próximo nó.

class node {
  constructor(valor) {
    this.valor = valor; // dado armazenado no nó
    this.proximo = null; // ponteiro para o próximo nó (inicialmente null)
  }
}

// para armazenar usuarios em uma lista encadeada

class LinkedList {
  constructor() {
    this.head = null; // início da lista (primeiro nó)
    this.length = 0;  // contador de elementos para O(1) no tamanho
  }
}

    // Insere um valor no início da lista — O(1).
    inserirInicio(valor) {
        const novoNo = new node(valor);
        novoNo.proximo = this.head;
        this.head = novoNo;
        this.length++;
    }


