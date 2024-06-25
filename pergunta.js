document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            pergunta: "Quem é conhecido como o pai da Biologia moderna?",
            opcoes: [
                "Isaac Newton",
                "Charles Darwin",
                "Albert Einstein",
                "Gregor Mendel"
            ],
            resposta: "b"
        },
        {
            pergunta: "A teoria da biogênese afirma que:",
            opcoes: [
                "A vida pode surgir de matéria inanimada.",
                "A vida é eterna e nunca teve um começo.",
                "A vida só pode surgir de vida preexistente.",
                "A vida se originou fora do planeta Terra."
            ],
            resposta: "c"
        },
        {
            pergunta: "O que é um exemplo de relação de parasitismo?",
            opcoes: [
                "Um cão e um carrapato",
                "Um peixe limpador e um tubarão",
                "Um fungo micorrízico e uma planta",
                "Uma orquídea crescendo em uma árvore"
            ],
            resposta: "a"
        },
        {
            pergunta: "Qual organela é responsável pela produção de energia na célula?",
            opcoes: [
                "Núcleo",
                "Mitocôndria",
                "Ribossomo",
                "Lisossomo"
            ],
            resposta: "b"
        },
        {
            pergunta: "Qual tipo de transporte de membrana requer energia da célula?",
            opcoes: [
                "Exocitose",
                "Endocitose",
                "Difusão facilitada",
                "Transporte ativo"
            ],
            resposta: "d"
        },
        {
            pergunta: "Qual é o principal componente orgânico da membrana plasmática?",
            opcoes: [
                "Lipídios",
                "Proteínas",
                "Carboidratos",
                "Ácidos nucleicos"
            ],
            resposta: "a"
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const perguntaId = urlParams.get('id');
    const perguntaAtual = perguntas[perguntaId];

    const perguntaTexto = document.querySelector('.pergunta_texto');
    const opcoes = document.querySelectorAll('.opcao');
    const feedback = document.querySelector('.feedback');
    const botaoVoltar = document.querySelector('.botao_voltar');

    perguntaTexto.textContent = perguntaAtual.pergunta;
    opcoes.forEach((botao, index) => {
        botao.textContent = `${String.fromCharCode(97 + index)}) ${perguntaAtual.opcoes[index]}`;
        botao.disabled = false;
    });

    feedback.textContent = '';

    opcoes.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const respostaEscolhida = event.target.getAttribute('data-resposta');
            botao.disabled = true;
            if (respostaEscolhida === perguntaAtual.resposta) {
                feedback.textContent = 'Correto!';
                feedback.style.color = 'green';

                let respostasCorretas = JSON.parse(localStorage.getItem('respostasCorretas'));
                respostasCorretas.push(perguntaId);
                localStorage.setItem('respostasCorretas', JSON.stringify(respostasCorretas));
            } else {
                feedback.textContent = 'Errado!';
                feedback.style.color = 'red';
            }

            // Salvar resposta do jogador
            let respostasJogador = JSON.parse(localStorage.getItem('respostasJogador'));
            respostasJogador.push({
                pergunta: perguntaAtual.pergunta,
                respostaCorreta: perguntaAtual.resposta,
                respostaEscolhida: respostaEscolhida,
                opcoes: perguntaAtual.opcoes
            });
            localStorage.setItem('respostasJogador', JSON.stringify(respostasJogador));

            localStorage.setItem(`pergunta_${perguntaId}`, 'respondida');
            let perguntasRespondidas = parseInt(localStorage.getItem('perguntasRespondidas')) + 1;
            localStorage.setItem('perguntasRespondidas', perguntasRespondidas.toString());

            if (perguntasRespondidas == perguntas.length) {
                setTimeout(() => {
                    window.location.href = 'resultado.html';
                }, 1500);
            }else{
                setTimeout(() => {
                    window.location.href = 'menu.html';
                }, 1500);
            }  
        });
    });

    botaoVoltar.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
});
