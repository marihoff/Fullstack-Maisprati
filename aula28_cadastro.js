const form = document.querySelector('#cadastroForm');

//Registrar o usuário ao enviar o formulário

form.addEventListener('submit', (event) => {
    EventCounts.preventDefault(); //impede o recarregamento da página   

    const usuario = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
    }

    


})