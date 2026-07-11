import {buscarCep} from './cadastro_aula25.js'

let form = document.getElementById('formulario');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    let cepInput = document.getElementById('cep');
    let cep = cepInput.value;

    try {
        let dados = await buscarCep(cep);
        console.log(dados);
    }
    catch (error) {
        console.error(error.message);
    }
});
