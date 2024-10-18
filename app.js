import { db } from './index.html';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const installmentsInfo = document.getElementById('pixparcelado');

    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'installments') {
                installmentsInfo.style.display = 'block'; // Mostra a mensagem
            } else {
                installmentsInfo.style.display = 'none'; // Oculta a mensagem
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.getElementById('registrationForm');

    // Adiciona um listener para o evento de submit do formulário
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário

        // Coleta os dados do formulário
        const formData = new FormData(form);

        // Cria um objeto para enviar os dados no formato JSON
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Adiciona os dados ao Firestore
        try {
            await addDoc(collection(db, 'inscricoes'), data);
            console.log('Sucesso: Dados enviados para o Firestore');
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro: ', error);
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
    });
});
