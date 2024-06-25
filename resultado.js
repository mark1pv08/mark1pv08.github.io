document.addEventListener('DOMContentLoaded', () => {
    const respostasJogador = JSON.parse(localStorage.getItem('respostasJogador'));
    const resultadoBoxes = document.getElementById('resultado-boxes');

    respostasJogador.forEach((resposta, index) => {
        const resultadoBox = document.createElement('div');
        resultadoBox.classList.add('resultado-box');

        const perguntaTitulo = document.createElement('h2');
        perguntaTitulo.textContent = `Pergunta ${index + 1}:`;
        resultadoBox.appendChild(perguntaTitulo);

        const perguntaTexto = document.createElement('p');
        perguntaTexto.textContent = resposta.pergunta;
        resultadoBox.appendChild(perguntaTexto);

        resposta.opcoes.forEach((opcao, i) => {
            const opcaoTexto = document.createElement('p');
            const letra = String.fromCharCode(97 + i);
            if (letra === resposta.respostaEscolhida) {
                opcaoTexto.style.fontWeight = 'bold';
                opcaoTexto.style.color = letra === resposta.respostaCorreta ? 'green' : 'red';
            }
            opcaoTexto.textContent = `${letra}) ${opcao}`;
            resultadoBox.appendChild(opcaoTexto);
            
            if (letra === resposta.respostaCorreta) {
                opcaoTexto.style.fontWeight = 'bold';
                opcaoTexto.style.color = 'green';
            }
        });

        resultadoBoxes.appendChild(resultadoBox);
    });
    
});
