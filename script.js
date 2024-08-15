const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas medidas é mais eficaz para prevenir incêndios florestais?",
        alternativas: [
            {
                texto: "A) Desmatamento controlado",
                afirmacao: "incorreto A."
            },
            {
                texto: "B) Criação de faixas de contenção",
                afirmacao: "correto. B"
            }
        ]
    },
    {
        enunciado: "Qual é a melhor maneira de reduzir o risco de incêndios em áreas urbanas?",
        alternativas: [
            {
                texto: "A) Incentivar o uso de fogões a gás",
                afirmacao: "incorreto. A"
            },
            {
                texto: "B) Manter a limpeza de terrenos e remover materiais inflamáveis",
                afirmacao: "correto. B"
            }
        ]  
    },
    {
        enunciado: "Qual prática deve ser adotada para reduzir a propagação de incêndios em áreas agrícolas?",
        alternativas: [
            {
                texto: "A) Uso intensivo de fertilizantes",
                afirmacao: "incorreto. A"
            },
            {
                texto: "B) Implementação de sistemas de irrigação e controle de queimadas",
                afirmacao: "correto. B"
            }
        ]
    },
    {
        enunciado: "Qual é uma forma eficaz de educar a população sobre prevenção de incêndios??",
        alternativas: [
            {
                texto: "A) Realizar campanhas de conscientização e treinamento",
                afirmacao: "correto. A"
            },
            {
                texto: "B) Distribuir produtos inflamáveis gratuitamente",
                afirmacao: "incorreto. B",

            }
        ]
    },
    {
        enunciado: "Qual tecnologia pode ajudar na detecção precoce de incêndios florestais?? ",
        alternativas: [
            {
                texto: "A) Câmeras de vigilância convencionais",
                afirmacao: "INCORRETA A"
            },
            {
                texto: "B) Sensores de calor e drones",
                afirmacao: "CORRETA. B"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";const caixaPrincipal = document.querySelector(".caixa-principal");
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "RESPOSTAS";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();