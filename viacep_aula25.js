export assync function buscarCep(cep) {
    let cepLimpo = cep.replace(/\D/g, '');
    
    if(cepLimpo.length !== 8) {
        throw new Error('CEP inválido. O CEP deve conter 8 dígitos numéricos.');
    }

    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    let data = await resposta.json();
    
    if(dados.erro) {
        throw new Error('CEP não encontrado.');
    }

    return dados;
}