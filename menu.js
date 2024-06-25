document.addEventListener('DOMContentLoaded', () => {
    const botoesPergunta = document.querySelectorAll('.botao_pergunta');
    const perguntasRespondidas = localStorage.getItem('perguntasRespondidas');

    botoesPergunta.forEach(botao => {
        const perguntaId = botao.getAttribute('data-pergunta');
        if (localStorage.getItem(`pergunta_${perguntaId}`) === 'respondida') {
            botao.classList.add('botao_verde');
        }

        botao.addEventListener('click', (event) => {
            const perguntaId = event.target.getAttribute('data-pergunta');
            window.location.href = `pergunta.html?id=${perguntaId}`;
        });
    });

    if (parseInt(perguntasRespondidas) == botoesPergunta.length) {
        window.location.href = 'resultado.html';
    }
});
