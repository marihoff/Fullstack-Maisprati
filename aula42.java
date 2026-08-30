// Aula 42 - Introdução à Linguagem de Programação Java e Configuração do Ambiente 

// Orientação a objetos, orientado a classes e objetos

// Write Once, Run Anywhere: Roda em qualquer lugar, independente do sistema operacional

// Garbage Collector: Gerenciador de memória, responsável por liberar a memória ocupada por objetos que não são mais utilizados

// Como funciona? 

// 1. O programador cria objetos e os utiliza
// 2. Quando o programador não precisa mais de um objeto, ele deixa de referenciá-lo
// 3. O Garbage Collector identifica os objetos que não são mais referenciados e os remove da memória

// Linguagem compilada = gera um binário

// Tem um compilador que transforma o código fonte em bytecode, que é interpretado pela JVM (Java Virtual Machine)

// A JVM é responsável por interpretar o bytecode e executar o programa

// JDK é o Java Development Kit, que contém o compilador, a JVM e outras ferramentas necessárias para desenvolver em Java

// Java Runtime Environment (JRE) é o ambiente de execução do Java, que contém a JVM e as bibliotecas necessárias para executar programas Java

// Java virtual machine (JVM) é a máquina virtual que interpreta o bytecode e executa o programa

// Ferramentas
// Javac
// jar
// javadoc
// jdb


// Download :
// Oracle Java SE Development Kit 8u202
// jdk.java.net

//Dentro do arquivo do JavaBasico.iml

public Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        for (int i = 0; i < 10; i++) {
            System.out.println("Número: " + i);
        }
    }
}

// 02 comandos para simplificar 
//psvm = public static void main(String[] args) {}
//sout = System.out.println();

// duas familias, tipos primitivos e por referência
// primitivos: são 08 byte, short, int, float = guardam valores 
// referência: guardam endereço de objeto: Strings, Array = guardam endereço de um objeto

// ex:
// byte = 8 bits
// short = 16 bits
// int = 32bits
// long = 64 bits
// float = 32 bits
// double = 64 bits
// char = 16 bits
// boolean = true, false

byte idade = 35;
short ano = 2026;
int populacao = 200000;
float altura = 1.75f; // float sempre tem f no final
boolean certo = true; 



