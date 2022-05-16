class Elemento
{
    constructor (nome)
    {
        this.nome = nome;
        this.tipo;
    }
}

class Animal extends Elemento
{
    constructor (cor)
    {
        super("Tasso")
        super.tipo = 10;
        this.cor = cor;
    }
}


///////////////////////////// VARIAVEIS DOS ELEMENTOS HTML:

var corpo = document.getElementById('corpo')

// SECAO LESTE:

var secaoLeste = document.getElementById('secaoLeste');

var secaoLestePropriedades = secaoLeste.getBoundingClientRect();

var secaoLesteLargura = secaoLestePropriedades.width;

var secaoLesteAltura = secaoLestePropriedades.height;

// SECAO OESTE:

var secaoOeste = document.getElementById('secaoOeste');

var secaoOestePropriedades = secaoOeste.getBoundingClientRect();

var secaoOesteLargura = secaoOestePropriedades.width;

var secaoOesteAltura = secaoOestePropriedades.height;

// CANVAS OESTE:

var telaCanvasOeste = document.getElementById('telaCanvasOeste');

telaCanvasOeste.width = secaoOesteLargura;

telaCanvasOeste.height = secaoOesteAltura;

var contextoTelaCanvasOeste = telaCanvasOeste.getContext('2d');

// CANVAS LESTE:

var telaCanvasLeste = document.getElementById('telaCanvasLeste');

telaCanvasLeste.width = secaoLesteLargura;

telaCanvasLeste.height = secaoLesteAltura;

var contextoTelaCanvasLeste = telaCanvasLeste.getContext('2d');

/*

var estiloCss = window.getComputedStyle(secaoTelaPersonagem);

var secaoTelaPersonagemWidthCss = estiloCss.getPropertyValue('width');

var secaoTelaPersonagemHeightCss = estiloCss.getPropertyValue('height');

*/

//BARRAS NECESSIDADES:

var barraFome = document.getElementById('barraFome');

var barraSede = document.getElementById('barraSede');

var barraBanheiro = document.getElementById('barraBanheiro');

var barraHigiene = document.getElementById('barraHigiene');

var barraEnergia = document.getElementById('barraEnergia');

var barraEstresse = document.getElementById('barraEstresse');

var barraSocial = document.getElementById('barraSocial');

var barraSaude = document.getElementById('barraSaude');

//STATUS SAIDAS:

status1 = document.getElementById('status1');
status2 = document.getElementById('status2');
status3 = document.getElementById('status3');
status4 = document.getElementById('status4');
status5 = document.getElementById('status5');
status6 = document.getElementById('status6');
status7 = document.getElementById('status7');
status8 = document.getElementById('status8');
status9 = document.getElementById('status9');
status10 = document.getElementById('status10');
status11 = document.getElementById('status11');
status12 = document.getElementById('status12');

//

//

var botaoComer = document.getElementById('botaoComer');
var botaoBeber = document.getElementById('botaoBeber');
var botaoUsarBanheiro = document.getElementById('botaoUsarBanheiro');
var botaoTomarBanho = document.getElementById('botaoTomarBanho');
var botaoDormir = document.getElementById('botaoDormir');
var botaoRelaxar = document.getElementById('botaoRelaxar');
var botaoConversar = document.getElementById('botaoConversar');
var botaoTomarRemedio = document.getElementById('botaoTomarRemedio');

//

var botaoLigar = document.getElementById('botaoLigar');
var botaoPlay = document.getElementById('botaoPlay');
var botaoStop = document.getElementById('botaoStop');
var botaoIrParaDireita = document.getElementById('botaoIrParaDireita');
var botaoIrParaEsquerda = document.getElementById('botaoIrParaEsquerda');
var botaoIrParaCima = document.getElementById('botaoIrParaCima');
var botaoIrParaBaixo = document.getElementById('botaoIrParaBaixo');
var botaoAcao = document.getElementById('botaoAcao');

/////////////////////////////VARIAVEIS DATA E HORA:

var data = new Date();
var hora = data.getHours();          // 0-23
var min = data.getMinutes();        // 0-59
var seg = data.getSeconds();        // 0-59
var dia = data.getDate();           // 1-31
var mes = getMes();          // 0-11 
var ano = data.getFullYear();       // 4 dígitos

//

//////////////////// METODOS/ FUNÇÕES:

//////// DO SISTEMA:

function getMes()
{
    switch (data.getMonth())
    {
        case 0:
            return 01;
            break;
        case 1:
            return 02;
            break;
        case 2:
            return 03;
            break;
        case 3:
            return 04;
            break;
        case 4:
            return 05;
            break;
        case 5:
            return 06;
            break;
        case 6:
            return 07;
            break;
        case 7:
            return 08;
            break;
        case 8:
            return 09;
            break;
        case 9:
            return 10;
            break;
        case 10:
            return 11;
            break;
        case 11:
            return 12;
            break;
        default:
            return "Erro!";
    }
}

//////////////////// DEFINIÇÃO DE EVENTOS:

//BOTÕES:

botaoComer.addEventListener("click", function () { comer('cochinha') }, false);
botaoBeber.addEventListener("click", function () { beber('agua') }, false);
botaoUsarBanheiro.addEventListener("click", usarBanheiro, false);
botaoTomarBanho.addEventListener("click", tomarBanho, false);
botaoDormir.addEventListener("click", dormir, false);
botaoRelaxar.addEventListener("click", relaxar, false);
botaoConversar.addEventListener("click", conversar, false);
botaoTomarRemedio.addEventListener("click", tomarRemedio, false);

//

//CONFIGURAÇÕES EVENTOS BOTÕES:

var imagemCarregada = false;
var paginaRecarregada = 0;
corpo.addEventListener("load", () => { imagemCarregada = true; paginaRecarregada += 1; }, false);

//

botaoLigar.addEventListener('click', ligar, false);
botaoPlay.addEventListener('click', play, false);
botaoStop.addEventListener('click', stop, false);

//MOVENDO

botaoIrParaEsquerda.addEventListener('mousedown', () => { controle1.mover("paraEsquerda") }, false);
botaoIrParaDireita.addEventListener('mousedown', () => { controle1.mover("paraDireita") }, false);
botaoIrParaCima.addEventListener('mousedown', () => { controle1.mover("paraCima") }, false);
botaoIrParaBaixo.addEventListener('mousedown', () => { controle1.mover("paraBaixo") }, false);
botaoAcao.addEventListener('mousedown', () => { controle1.apertar("letraE") }, false);

//

//

botaoIrParaEsquerda.addEventListener('touchstart', () => { controle1.mover("paraEsquerda") }, false);
botaoIrParaDireita.addEventListener('touchstart', () => { controle1.mover("paraDireita") }, false);
botaoIrParaCima.addEventListener('touchstart', () => { controle1.mover("paraCima") }, false);
botaoIrParaBaixo.addEventListener('touchstart', () => { controle1.mover("paraBaixo") }, false);
botaoAcao.addEventListener('touchstart', () => { controle1.apertar("lertraE") }, false);

// PARANDO

botaoIrParaEsquerda.addEventListener('mouseup', controle1.parar, false);
botaoIrParaDireita.addEventListener('mouseup', controle1.parar, false);
botaoIrParaCima.addEventListener('mouseup', controle1.parar, false);
botaoIrParaBaixo.addEventListener('mouseup', controle1.parar, false);

//

botaoIrParaEsquerda.addEventListener('touchend', controle1.parar, false);
botaoIrParaDireita.addEventListener('touchend', controle1.parar, false);
botaoIrParaCima.addEventListener('touchend', controle1.parar, false);
botaoIrParaBaixo.addEventListener('touchend', controle1.parar, false);
botaoAcao.addEventListener('touchend', controle1.parar, false);

// TECLAS PRESSIONADAS

//document.addEventListener('keyup', controle1.keyUp, false);
//document.addEventListener('keydown', controle1.keyDown, false);

window.addEventListener('keyup', controle1.keyUp, false);
window.addEventListener('keydown', controle1.keyDown, false);

// FUNÇÕES:

function ligar()
{
    if (botaoLigar.innerHTML == "On")
    {
        botaoLigar.innerHTML = "Off"
        canvasPrincipalLigado = false;

    } else
    {
        botaoLigar.innerHTML = "On"
        canvasPrincipalLigado = true;
        loopDesenho()
    }
}

function play()
{
    civil1.alerta();
}

function stop()
{
    loopAlerta = false;
}

function irParaEsquerda()
{
    player1.posicaoX = player1.posicaoX - player1.velocidade;
}

function irParaDireita()
{
    player1.posicaoX = player1.posicaoX + player1.velocidade;
}

function irParaCima()
{
    player1.posicaoY = player1.posicaoY - player1.velocidade;
}

function irParaBaixo()
{
    player1.posicaoY = player1.posicaoY + player1.velocidade;
}