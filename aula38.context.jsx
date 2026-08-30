// AULA 38 - Contexto + Custom Hook +  Rotas Protegidas

// cria uma pasta dentro de SRC chamada CONTEXT, e dentro dela cria um arquivo chamado AuthContext.jsx

// como terá um cadastro, terá outra pasta dentro de pages para login e outra pasta para painel, dentro das 02 pastas uma terá o arquivo login.jsx e a outra painel.jsx, e dentro do painel.jsx 

// dentro da pasta components, cria um arquivo chamado PrivateRoute.jsx, quem faz a proteção das rotas

// dentro da pasta styles, cria um arquivo chamado forms.css


// dentro do arquivo AuthContext.jsx, escreve seguinte código:

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const salvo = localStorage.getItem("user");
    return salvo ? ( JSON.parse(salvo) ) : ( null );
}

function login(email, password) {
    if(email === -marihoff@gmail.com && password === "123456") {
        const user = { id: 1, name: "Maria Hoff", email: "marihoff@gmail.com" };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return
    }

    throw new Error("Email ou senha inválidos");
}

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

    export function useAuth() {
        const context = useContext(AuthContext);
        if(!context) {
            throw new Error("useAuth deve ser usado dentro do AuthProvider");
        }
        return context;
    }


// dentro do arquivo de login.jsx, escreve seguinte código:

import { useState } from "react";
import {link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

funcion Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function enviarFormulario(e) {
        e.preventDefault();
        try {
            login(email, password);
            navigate("/painel");
        }
            catch (err) {
            setError(err.message);
        }
    }

    return (
        <main className="login">
            <form className="form" onSubmit={enviarFormulario}>
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}

// dentro do arquivo do forms.css, escreve seguinte código:

/* o aviso de erro carregamento
.aviso{
    color: red;
    font-size: 14px;
    margin-top: 10px;
} */

.formulario button {
    width: 100%;
    padding: 10px;
}

.formulario button:hover {
    background-color: #007BFF; 

.rodape-from {
    text-align: center;
    margin-top: 20px;
}

// dentro do arquivo de rota protegida.jsx, escreve seguinte código:

import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useAuth();
    if(!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default PrivateRoute;

// dentro do arquivo painel.jsx, escreve seguinte código:

import { useAuth } from "../../context/AuthContext";

function Painel() {
    const { user, logout } = useAuth();

    return (
        <main className="painel">
            <h1>Bem-vindo, {user.name}!</h1>
            <p>Este é o painel do usuário.</p>
            <button onClick={logout}>Sair</button>
        </main>
    );
}

export default Painel;












