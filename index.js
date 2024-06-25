document.addEventListener('DOMContentLoaded', () => {
    const botaoJogar = document.querySelector('.botao_jogar');

    botaoJogar.addEventListener('click', () => {
        const perguntas = [0, 1, 2, 3, 4, 5];
        perguntas.sort(() => Math.random() - 0.5);

        localStorage.setItem('ordemPerguntas', JSON.stringify(perguntas));
        localStorage.setItem('perguntasRespondidas', '0');
        localStorage.setItem('respostasCorretas', '[]');
        localStorage.setItem('respostasJogador', '[]');
        
        window.location.href = 'menu.html';
    });
});
