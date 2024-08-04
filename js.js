document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.querySelector('form');

    // Adiciona um listener para o evento de submit do formulário
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Coleta os dados do formulário
    const formData = new FormData(form);

    // Cria um objeto para enviar os dados no formato JSON
    const data = {};
    formData.forEach((value, key) => {
    data[key] = value;
});

    // Configura a requisição para a API
    fetch('http://192.168.1.9:5000/emac/inscricoes', { // Substitua pelo URL da sua API
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
    // Manipula a resposta da API
    console.log('Sucesso:', data);
    alert('Cadastro realizado com sucesso!');
})
    .catch((error) => {
    console.error('Erro:', error);
    alert('Ocorreu um erro. Por favor, tente novamente.');
});
});
});
