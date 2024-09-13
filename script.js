const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A produção norte-americana The Walking Dead (TWD), tem como personagem principal Rick Grimes, o qual possui 3 filhos, qual desses não é seu filho biólogico?",
        alternativas: [
            "Carl Grimes",
            "Judith Grimes"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "No momento de fazer a maquiagem, qual é o produto que serve para selar a pele?",
        alternativas: [
            "Pó compacto/Solto",
            "Bruma Fixadora"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual é o primeiro filo de animais da zoologia na biologia?",
        alternativas: [
            "Cnidários",
            "Poríferos"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "A famosa frase - Penso, logo existo - foi dita por quem?",
        alternativas: [
            "Descartes",
            "Socrátes"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "O que representam os cinco anéis olímpicos?",
        alternativas: [
            "Os símbolos olímpicos: tocha, hino, mascote, lema e medalhas",
            "As partes do mundo unidas pelo Olimpismo"
        ],
        correta: 1 // A segunda alternativa é a correta
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0
//FUNÇÃO MOSTRAR PERGUNTAS

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões para as alternativas
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}
//FUNÇÃO VERIFICAR RESPOSTA

function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPrincipal.style.display = 'none'; // Esconde a caixa de perguntas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Adiciona classe para animação
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove('mostrar');
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostraPergunta();
    });
    caixaResultado.innerHTML = ''; // Limpa conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializa a primeira pergunta
mostraPergunta();
