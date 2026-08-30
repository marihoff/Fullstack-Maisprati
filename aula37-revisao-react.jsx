// Revisão react

// vai no terminal - digita npm create vite@latest aula27-revisao-react comando para rodar e criar o projeto, seleciona o react e as variantes seleciona o javascript

// para rodar npm run dev roda o projeto do react, cd e o nome da pasta

// entra na pasta scr e deleta a pasta assets, index.css, e no app jsx pode excluir o que esta dentro do return, apagar os imports abaixo do import from react, e no arquivo do main.jsx apaga o import do index.css

import { useState } from "react";

function App() {
    const nomeDoCurso = "React";
    return (
        <div className="app">
            <h1>Revisão {nomeDoCurso}</h1>
            <p>Esta é uma simples revisão do curso de React.</p>
        </div>
}

export default App;

// jsx mescla o html com o javascript, para colocar o javascript 

// jsx permite sintetizar todo conteudo do html e js

// dentro do src criar uma nova pasta > components (vai permitir reutilizar o codigo) pode ir chamando os componentes que podem se repetir

// dentro dessa pasta, criar um arquivo chamado header.jsx

// dentro desse header, eu posso deixar o projeto pronto e ir chamando ele durante o código, uma forma de reutilizar o código, e para chamar o componente, basta importar ele no app.jsx e colocar dentro do return

function Header() {
    return (
        <header>
            <h1>Revisão React</h1>
            <p>Esta é uma simples revisão do curso de React.</p>
        </header>
    );
}

export default Header;

// esse cabeçalho sempre vai ser o mesmo, então não precisa ficar repetindo ele, e para chamar ele no app.jsx, basta importar ele e colocar dentro do return

// export default Header; exportando o componente para poder ser usado em outros arquivos, por isso precisa colocar no final 

// dentro do app.jsx, coloca para import o header

import { useState } from "react";
import Header from "./components/Header";

function App() {
    const nomeDoCurso = "React";
    return (
        <div className="app">
            <Header />
            <h1>Revisão {nomeDoCurso}</h1>
            <p>Esta é uma simples revisão do curso de React.</p>
        </div>
    );
}

export default App;


// dentro da pasta do components, criar arquivo CardUsuario

function CardUsuario({ nome, idade, profissao }) {
    return (
        <div className="card-usuario">
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default CardUsuario;

// dentro do app.jsx, importar o cardusuario e colocar dentro do return, e passar os parametros para ele

import { useState } from "react";
import Header from "./components/Header";
import CardUsuario from "./components/CardUsuario";













