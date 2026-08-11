const CHAVE_USUARIOS = 'usuarios';
const CHAVE_SESSAO = 'usuarioLogado';

function lerUsuarios() {
    const json = localStorage.getItem(CHAVE_USUARIOS);
    return json ? JSON.parse(json) : []; //se não tiver usuários, retorna um array vazio
}

export function registrar(usuario) {
    const usuarios = lerUsuarios();
    
    if(usuarios.some(u => u.email === usuario.email)) { //busca informações para ver se existe algum usuário com o mesmo email
        throw new Error('Usuário já cadastrado');
    }

    usuarios.push(usuario);
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));

}

export function autenticar(email, senha) {
    const usuarios = lerUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if(!usuario) {
        throw new Error('Credenciais inválidas');
    }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario));
    return usuario;
}

