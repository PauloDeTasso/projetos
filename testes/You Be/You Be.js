///////////////////////////// ATRIBUIÇÃO DE METODOS DO SISTEMA NATIVO:

Storage.prototype.setObj = function (key, obj)
{
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key)
{
    return JSON.parse(this.getItem(key))
}

///////////////////////////// VARIAVEIS DOS ELEMENTOS HTML:

// SECAO TELA PERSONAGEM:

var secaoTelaPersonagem = document.getElementById('secaoTelaPersonagem');

var secaoTelaPersonagemPropriedades = secaoTelaPersonagem.getBoundingClientRect();

var secaoTelaPersonagemLargura = secaoTelaPersonagemPropriedades.width;

var secaoTelaPersonagemAltura = secaoTelaPersonagemPropriedades.height;

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

//

/*

var estiloCss = window.getComputedStyle(secaoTelaPersonagem);

var secaoTelaPersonagemWidthCss = estiloCss.getPropertyValue('width');

var secaoTelaPersonagemHeightCss = estiloCss.getPropertyValue('height');

*/

//CANVAS TELA PRINCIPAL:

var telaCanvasPrincipal = document.getElementById('telaCanvasPrincipal');

var contextoTelaCanvasPrincipal = telaCanvasPrincipal.getContext('2d');

telaCanvasPrincipal.width = secaoTelaPersonagemLargura;

telaCanvasPrincipal.height = secaoTelaPersonagemAltura;


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

///////////////////////////// VARIAVEIS LOCAIS:

// NECESSIDADES:

if (localStorage.primeiroAcesso == undefined)
{
    localStorage.fomeStatus = new Number();
    localStorage.sedeStatus = new Number();
    localStorage.banheiroStatus = new Number();
    localStorage.higieneStatus = new Number();
    localStorage.energiaStatus = new Number();
    localStorage.estresseStatus = new Number();
    localStorage.socialStatus = new Number();
    localStorage.saudeStatus = new Number();

    localStorage.primeiroAcesso = "Definido";
} else
{
    localStorage.primeiroAcesso = "Definido";
}

// SENTIMENTOS - EMOÇÃO:

var sentimentosBons = ['FELICIDADE', 'ALEGRIA', 'GRATIDÃO', 'ESPERANÇA', 'ANIMAÇÃO', 'EUFORIA', 'PAIXÃO', 'AUTOESTIMA ALTA', 'ADMIRAÇÃO', 'ADORAÇÃO', 'ALIVIO', 'EXCITAÇÃO', 'DESEJO', 'CURIOSIDADE', 'SURPRESA', 'ESPIRITUAL', 'SATIFAÇÃO', 'CALMA', 'CORAGEM', 'AMOR', 'CONFIANÇA', 'FORÇA', 'SAÚDAVEL', 'PAZ', 'CARIDADE', 'COMPREENSÃO', 'ENTUSIASMO', 'ORGULHO', 'PROSPERIDADE'];

var sentimentosRuins = ['LUTO', 'INGRATIDÃO', 'DEPRESSÃO', 'RAIVA', 'DESCONFIANÇA', 'MEDO', 'CIUMES', 'AUTOESTIMA BAIXA', 'APAVORAÇÃO', 'FRAQUEZA', 'INQUIETAÇÃO', 'FÚRIA', 'NEUROZE', 'DOR', 'LOUCURA', 'DESESPERO', 'ÓDIO', 'ARREPENDIMENTO', 'ANSIEDADE', 'CONFUSÃO', 'ESPANTO', 'INVEJA', 'HORROR', 'NOJO', 'TÉDIO', 'VIGANÇA', 'TRISTEZA', 'DECEPÇÃO', 'CARENCIA'];

localStorage.setObj('sentimentosBons', sentimentosBons);

localStorage.setObj('sentimentosRuins', sentimentosRuins);

// ITENS:

localStorage.dinheiro;
localStorage.celular;
localStorage.relogio;
localStorage.computador;

// DADOS:

localStorage.nome;
localStorage.generoSexo;
localStorage.idade;
localStorage.vivo;

// REGISTROS:

localStorage.dataAtual;
localStorage.horaAtual;
localStorage.dataCriação;
localStorage.horaCriação;
localStorage.primeiraAcao;
localStorage.ultimaAcao;
localStorage.acaoMaisUsada;
localStorage.acaoMenosUsada;
localStorage.sentimentoMaisUsado;
localStorage.sentimentoMenosUsado;
localStorage.alimentoMaisUsado;
localStorage.alimentoMenosUsado;

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

//////// DE AÇÃO:

//// AÇÕES DO SISTEMA:


//// AÇÕES DO PERSONAGEM:

// COMER:

function comer(comida)
{

    if (comida == "cochinha")
    {
        localStorage.fomeStatus = localStorage.fomeStatus - 30;
        if (localStorage.fomeStatus <= 0)
        {
            localStorage.fomeStatus = 0;
            barraFome.value = localStorage.fomeStatus;
        } else
        {
            barraFome.value = localStorage.fomeStatus;
        }
    } else
    {
        localStorage.fomeStatus = localStorage.fomeStatus - 10;
        barraFome.value = localStorage.fomeStatus;
    }
}

// BEBER:

function beber(bebida)
{

    if (bebida == "agua")
    {
        localStorage.sedeStatus = localStorage.sedeStatus - 30;
        if (localStorage.sedeStatus <= 0)
        {
            localStorage.sedeStatus = 0;
        } else
        {
            barraSede.value = localStorage.sedeStatus;
        }
    } else
    {
        localStorage.sedeStatus = localStorage.sedeStatus - 10;
        barraSede.value = localStorage.sedeStatus
    }
}

// USAR BANHEIRO:

function usarBanheiro()
{
    localStorage.banheiroStatus = localStorage.banheiroStatus - 30;

    if (localStorage.banheiroStatus <= 0)
    {
        localStorage.banheiroStatus = 0;
        barraBanheiro.value = localStorage.banheiroStatus;
    } else
    {
        barraBanheiro.value = localStorage.banheiroStatus;
    }
}

// TOMAR BANHO:

function tomarBanho()
{
    localStorage.higieneStatus = localStorage.higieneStatus - 30;

    if (localStorage.higieneStatus <= 0)
    {
        localStorage.higieneStatus = 0;
        barraHigiene.value = localStorage.higieneStatus;
    } else
    {
        barraHigiene.value = localStorage.higieneStatus;
    }
}

// DORMIR:

function dormir()
{
    localStorage.energiaStatus = localStorage.energiaStatus - 30;

    if (localStorage.energiaStatus <= 0)
    {
        localStorage.energiaStatus = 0;
        barraEnergia.value = localStorage.energiaStatus;
    } else
    {
        barraEnergia.value = localStorage.energiaStatus;
    }
}

// RELAXAR:

function relaxar()
{
    localStorage.estresseStatus = localStorage.estresseStatus - 30;

    if (localStorage.estresseStatus <= 0)
    {
        localStorage.estresseStatus = 0;
        barraEstresse.value = localStorage.estresseStatus;
    } else
    {
        barraEstresse.value = localStorage.estresseStatus;
    }
}

// CONVERSAR:

function conversar()
{
    localStorage.socialStatus = localStorage.socialStatus - 30;

    if (localStorage.socialStatus <= 0)
    {
        localStorage.socialStatus = 0;
        barraSocial.value = localStorage.socialStatus;
    } else
    {
        barraSocial.value = localStorage.socialStatus;
    }
}

// TOMAR REMEDIO:

function tomarRemedio()
{
    localStorage.saudeStatus = localStorage.saudeStatus - 30;

    if (localStorage.saudeStatus <= 0)
    {
        localStorage.saudeStatus = 0;
        barraSaude.value = localStorage.saudeStatus;
    } else
    {
        barraSaude.value = localStorage.saudeStatus;
    }
}

//////// DE REAÇÃO/ EVENTOS:

////  REAÇÕES DAS NECESSIDADES:

// FOME:

setTimeout(fome, 1000);

function fome()
{

    localStorage.fomeStatus = parseInt(localStorage.fomeStatus) + 1;

    if (localStorage.fomeStatus >= 100)
    {
        localStorage.fomeStatus = 100;
        barraFome.value = localStorage.fomeStatus;
    } else
    {
        barraFome.value = localStorage.fomeStatus;

    }

    setTimeout(fome, 1000);
}

// SEDE:

setTimeout(sede, 1000);

function sede()
{
    localStorage.sedeStatus = parseInt(localStorage.sedeStatus) + 1;

    if (localStorage.sedeStatus >= 100)
    {
        localStorage.sedeStatus = 100;
        barraSede.value = localStorage.sedeStatus;
    } else
    {
        barraSede.value = localStorage.sedeStatus;
    }

    setTimeout(sede, 1000);
}

// USAR BANHEIRO:

setTimeout(banheiro, 1000);

function banheiro()
{
    localStorage.banheiroStatus = parseInt(localStorage.banheiroStatus) + 1;

    if (localStorage.banheiroStatus >= 100)
    {
        localStorage.banheiroStatus = 100;
        barraBanheiro.value = localStorage.banheiroStatus;
    } else
    {
        barraBanheiro.value = localStorage.banheiroStatus;
    }

    setTimeout(banheiro, 1000);
}

// TOMAR BANHO:

setTimeout(higiene, 1000);

function higiene()
{
    localStorage.higieneStatus = parseInt(localStorage.higieneStatus) + 1;

    if (localStorage.higieneStatus >= 100)
    {
        localStorage.higieneStatus = 100;
        barraHigiene.value = localStorage.higieneStatus;
    } else
    {
        barraHigiene.value = localStorage.higieneStatus;
    }

    setTimeout(higiene, 1000);
}

// ENERGIA:

setTimeout(energia, 1000);

function energia()
{
    localStorage.energiaStatus = parseInt(localStorage.energiaStatus) + 1;

    if (localStorage.energiaStatus >= 100)
    {
        localStorage.energiaStatus = 100;
        barraEnergia.value = localStorage.energiaStatus;
    } else
    {
        barraEnergia.value = localStorage.energiaStatus;
    }

    setTimeout(energia, 1000);
}

// ESTRESSE:

setTimeout(estresse, 1000);

function estresse()
{
    localStorage.estresseStatus = parseInt(localStorage.estresseStatus) + 1;

    if (localStorage.estresseStatus >= 100)
    {
        localStorage.estresseStatus = 100;
        barraEstresse.value = localStorage.estresseStatus;
    } else
    {
        barraEstresse.value = localStorage.estresseStatus;
    }

    setTimeout(estresse, 1000);
}

// SOCIAL:

setTimeout(social, 1000);

function social()
{
    localStorage.socialStatus = parseInt(localStorage.socialStatus) + 1;

    if (localStorage.socialStatus >= 100)
    {
        localStorage.socialStatus = 100;
        barraSocial.value = localStorage.socialStatus;
    } else
    {
        barraSocial.value = localStorage.socialStatus;
    }

    setTimeout(social, 1000);
}

// SAUDE:

setTimeout(saude, 1000);

function saude()
{
    localStorage.saudeStatus = parseInt(localStorage.saudeStatus) + 1;

    if (localStorage.saudeStatus >= 100)
    {
        localStorage.saudeStatus = 100;
        barraSaude.value = localStorage.saudeStatus;
    } else
    {
        barraSaude.value = localStorage.saudeStatus;
    }

    setTimeout(saude, 1000);
}

//// REAÇÕES DE ATIVIDADES/ LOCAIS:



//// REAÇÕES DA HISTORIA:



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

//////////////////// SAIDAS:

/*
status1.innerHTML = "...";

status2.innerHTML = "...";

status3.innerHTML = "...";

status4.innerHTML = localStorage.getObj('sentimentosBons')[0];

status5.innerHTML = localStorage.getObj('sentimentosRuins')[10];
*/

//IMAGENS:

var imagemEmBranco = new Image();

imagemEmBranco.src = "../../imagens/texture/2D/emBranco.png";

//

var imagemCidade1 = new Image();
imagemCidade1.src = "../../imagens/texture/2D/cidade1.png"

imagemCidade1.posicaoXRecorte = 0;
imagemCidade1.posicaoYRecorte = 0;
imagemCidade1.larguraRecorte = imagemCidade1.width;
imagemCidade1.alturaRecorte = imagemCidade1.height;
imagemCidade1.posicaoX = 0;
imagemCidade1.posicaoY = 0;
imagemCidade1.largura = imagemCidade1.width;
imagemCidade1.altura = imagemCidade1.height;

//contextoTelaCanvasPrincipal.drawImage(imagemCidade1, 0, 0, 1000, 1000, 0, 0, 500, 500);

//

var imagemCidade2 = new Image();
imagemCidade2.src = "../../imagens/texture/2D/cidade2.png"

//

var imagemPlayer1 = new Image();
imagemPlayer1.src = "../../imagens/texture/2D/player1.png"

//

var imagemCivil1 = new Image();
imagemCivil1.src = "../../imagens/texture/2D/pacman3d.png"


//////////////////// CANVAS:

// FUNÇÕES CONSTRUTORAS

// PLAYER

function Player()
{
    this.largura = 50; //
    this.altura = 50; // 
    this.posicaoX = 0; //
    this.posicaoY = 200; //   
    this.velocidade = 3; //
}

function Civil()
{
    this.largura = 50; //
    this.altura = 50; // 
    this.posicaoXAtual = 740; //
    this.posicaoYAtual = 200; // /*
    this.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + this.posicaoXAtual; //
    this.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + this.posicaoYAtual; //    
    this.velocidade = 3; //
    this.direcaoX = 0; //
    this.direcaoY = 1; //
}

// CONTROLE

function Controle(key1, key2, key3, key4)
{
    this.teclaSetaParaCimaPressionada = false;
    this.teclaSetaParaBaixoPressionada = false;

    this.teclaSetaParaDireitaPressionada = false;
    this.teclaSetaParaEsquerdaPressionada = false;

    this.keyUp = function (eventoAcionado)
    {
        if (eventoAcionado.keyCode == key1)
        {
            controle1.teclaSetaParaCimaPressionada = false;

        } else if (eventoAcionado.keyCode == key2)
        {
            controle1.teclaSetaParaBaixoPressionada = false;
        } else if (eventoAcionado.keyCode == key3)
        {
            controle1.teclaSetaParaDireitaPressionada = false;

        } else if (eventoAcionado.keyCode == key4)
        {
            controle1.teclaSetaParaEsquerdaPressionada = false;
        }
    }

    this.keyDown = function (eventoAcionado)
    {
        if (eventoAcionado.keyCode == key1)
        {
            controle1.teclaSetaParaCimaPressionada = true;

        } else if (eventoAcionado.keyCode == key2)
        {
            controle1.teclaSetaParaBaixoPressionada = true;
        } else if (eventoAcionado.keyCode == key3)
        {
            controle1.teclaSetaParaDireitaPressionada = true;

        } else if (eventoAcionado.keyCode == key4)
        {
            controle1.teclaSetaParaEsquerdaPressionada = true;
        }
    }

    this.mover = function (direcao)
    {
        switch (direcao) 
        {
            case "paraCima":
                controle1.teclaSetaParaCimaPressionada = true;
                break;

            case "paraBaixo":
                controle1.teclaSetaParaBaixoPressionada = true;
                break;

            case "paraDireita":
                controle1.teclaSetaParaDireitaPressionada = true;
                break;

            case "paraEsquerda":
                controle1.teclaSetaParaEsquerdaPressionada = true;
                break;

            default:
                controle1.teclaSetaParaCimaPressionada = false;
                controle1.teclaSetaParaBaixoPressionada = false;
                controle1.teclaSetaParaDireitaPressionada = false;
                controle1.teclaSetaParaEsquerdaPressionada = false;
                break;
        }
    }

    this.parar = function ()
    {
        controle1.teclaSetaParaCimaPressionada = false;
        controle1.teclaSetaParaBaixoPressionada = false;
        controle1.teclaSetaParaDireitaPressionada = false;
        controle1.teclaSetaParaEsquerdaPressionada = false;
    }
}

var player1 = new Player();

var civil1 = new Civil();

var controle1 = new Controle(87, 83, 68, 65);

var circuloPosicaoX = 350;

var circuloPosicaoY = 100;

var circuloTamanho = 100;

var anguloInicial = (Math.PI / 180) * 0;

var anguloFinal = (Math.PI / 180) * 360;

//O SENTIDO DE DESENHO É APARTIR DO ANGULO FINAL
var sentidoCirculo = true;

//VARIAVEIS IMAGENS DE AÇÕES:

////PLAYER 1:

// CORRENDO DIREITA:

var imagemPlayer1PosInicialXCorrendoD1 = 52;
var imagemPlayer1PosInicialXCorrendoD2 = 34;
var imagemPlayer1PosInicialXCorrendoD3 = 66;
var imagemPlayer1PosInicialXCorrendoD4 = 99;

var imagemPlayer1PosInicialYCorrendoD1 = 39;
var imagemPlayer1PosInicialYCorrendoD2 = 39;
var imagemPlayer1PosInicialYCorrendoD3 = 39;
var imagemPlayer1PosInicialYCorrendoD4 = 39;

var imagemPlayer1CorteLarguraCorrendoD1 = 12;
var imagemPlayer1CorteLarguraCorrendoD2 = 12;
var imagemPlayer1CorteLarguraCorrendoD3 = 12;
var imagemPlayer1CorteLarguraCorrendoD4 = 12;

var imagemPlayer1CorteAlturaCorrendoD1 = 15;
var imagemPlayer1CorteAlturaCorrendoD2 = 15;
var imagemPlayer1CorteAlturaCorrendoD3 = 15;
var imagemPlayer1CorteAlturaCorrendoD4 = 15;

// CORRENDO ESQUERDA:

var imagemPlayer1PosInicialXCorrendoE1 = 66;
var imagemPlayer1PosInicialXCorrendoE2 = 80;
var imagemPlayer1PosInicialXCorrendoE3 = 32;
var imagemPlayer1PosInicialXCorrendoE4 = 16;

var imagemPlayer1PosInicialYCorrendoE1 = 139;
var imagemPlayer1PosInicialYCorrendoE2 = 139;
var imagemPlayer1PosInicialYCorrendoE3 = 139;
var imagemPlayer1PosInicialYCorrendoE4 = 139;

var imagemPlayer1CorteLarguraCorrendoE1 = 12;
var imagemPlayer1CorteLarguraCorrendoE2 = 12;
var imagemPlayer1CorteLarguraCorrendoE3 = 12;
var imagemPlayer1CorteLarguraCorrendoE4 = 12;

var imagemPlayer1CorteAlturaCorrendoE1 = 15;
var imagemPlayer1CorteAlturaCorrendoE2 = 15;
var imagemPlayer1CorteAlturaCorrendoE3 = 15;
var imagemPlayer1CorteAlturaCorrendoE4 = 15;

// CORRENDO PARA CIMA:

var imagemPlayer1PosInicialXCorrendoC1 = 52;
var imagemPlayer1PosInicialXCorrendoC2 = 34;
var imagemPlayer1PosInicialXCorrendoC3 = 66;
var imagemPlayer1PosInicialXCorrendoC4 = 99;

var imagemPlayer1PosInicialYCorrendoC1 = 39;
var imagemPlayer1PosInicialYCorrendoC2 = 39;
var imagemPlayer1PosInicialYCorrendoC3 = 39;
var imagemPlayer1PosInicialYCorrendoC4 = 39;

var imagemPlayer1CorteLarguraCorrendoC1 = 12;
var imagemPlayer1CorteLarguraCorrendoC2 = 12;
var imagemPlayer1CorteLarguraCorrendoC3 = 12;
var imagemPlayer1CorteLarguraCorrendoC4 = 12;

var imagemPlayer1CorteAlturaCorrendoC1 = 15;
var imagemPlayer1CorteAlturaCorrendoC2 = 15;
var imagemPlayer1CorteAlturaCorrendoC3 = 15;
var imagemPlayer1CorteAlturaCorrendoC4 = 15;

// CORRENDO PARA BAIXO:

var imagemPlayer1PosInicialXCorrendoB1 = 66;
var imagemPlayer1PosInicialXCorrendoB2 = 80;
var imagemPlayer1PosInicialXCorrendoB3 = 32;
var imagemPlayer1PosInicialXCorrendoB4 = 16;

var imagemPlayer1PosInicialYCorrendoB1 = 139;
var imagemPlayer1PosInicialYCorrendoB2 = 139;
var imagemPlayer1PosInicialYCorrendoB3 = 139;
var imagemPlayer1PosInicialYCorrendoB4 = 139;

var imagemPlayer1CorteLarguraCorrendoB1 = 12;
var imagemPlayer1CorteLarguraCorrendoB2 = 12;
var imagemPlayer1CorteLarguraCorrendoB3 = 12;
var imagemPlayer1CorteLarguraCorrendoB4 = 12;

var imagemPlayer1CorteAlturaCorrendoB1 = 15;
var imagemPlayer1CorteAlturaCorrendoB2 = 15;
var imagemPlayer1CorteAlturaCorrendoB3 = 15;
var imagemPlayer1CorteAlturaCorrendoB4 = 15;

////CIVIL 1:

// CORRENDO DIREITA:

var imagemCivil1PosInicialXCorrendoD1 = 5;
var imagemCivil1PosInicialXCorrendoD2 = 5;
var imagemCivil1PosInicialXCorrendoD3 = 5;
var imagemCivil1PosInicialXCorrendoD4 = 5;

var imagemCivil1PosInicialYCorrendoD1 = 11;
var imagemCivil1PosInicialYCorrendoD2 = 61;
var imagemCivil1PosInicialYCorrendoD3 = 111;
var imagemCivil1PosInicialYCorrendoD4 = 11;

var imagemCivil1CorteLarguraCorrendoD1 = 36;
var imagemCivil1CorteLarguraCorrendoD2 = 36;
var imagemCivil1CorteLarguraCorrendoD3 = 36;
var imagemCivil1CorteLarguraCorrendoD4 = 36;

var imagemCivil1CorteAlturaCorrendoD1 = 37;
var imagemCivil1CorteAlturaCorrendoD2 = 37;
var imagemCivil1CorteAlturaCorrendoD3 = 37;
var imagemCivil1CorteAlturaCorrendoD4 = 37;

// CORRENDO ESQUERDA:

var imagemCivil1PosInicialXCorrendoE1 = 6;
var imagemCivil1PosInicialXCorrendoE2 = 6;
var imagemCivil1PosInicialXCorrendoE3 = 9;
var imagemCivil1PosInicialXCorrendoE4 = 6;

var imagemCivil1PosInicialYCorrendoE1 = 310;
var imagemCivil1PosInicialYCorrendoE2 = 360;
var imagemCivil1PosInicialYCorrendoE3 = 410;
var imagemCivil1PosInicialYCorrendoE4 = 310;

var imagemCivil1CorteLarguraCorrendoE1 = 36;
var imagemCivil1CorteLarguraCorrendoE2 = 36;
var imagemCivil1CorteLarguraCorrendoE3 = 36;
var imagemCivil1CorteLarguraCorrendoE4 = 36;

var imagemCivil1CorteAlturaCorrendoE1 = 37;
var imagemCivil1CorteAlturaCorrendoE2 = 37;
var imagemCivil1CorteAlturaCorrendoE3 = 37;
var imagemCivil1CorteAlturaCorrendoE4 = 37;

// CORRENDO PARA CIMA:

var imagemCivil1PosInicialXCorrendoC1 = 6;
var imagemCivil1PosInicialXCorrendoC2 = 6;
var imagemCivil1PosInicialXCorrendoC3 = 6;
var imagemCivil1PosInicialXCorrendoC4 = 6;

var imagemCivil1PosInicialYCorrendoC1 = 460;
var imagemCivil1PosInicialYCorrendoC2 = 509;
var imagemCivil1PosInicialYCorrendoC3 = 560;
var imagemCivil1PosInicialYCorrendoC4 = 460;

var imagemCivil1CorteLarguraCorrendoC1 = 36;
var imagemCivil1CorteLarguraCorrendoC2 = 36;
var imagemCivil1CorteLarguraCorrendoC3 = 36;
var imagemCivil1CorteLarguraCorrendoC4 = 36;

var imagemCivil1CorteAlturaCorrendoC1 = 37;
var imagemCivil1CorteAlturaCorrendoC2 = 37;
var imagemCivil1CorteAlturaCorrendoC3 = 37;
var imagemCivil1CorteAlturaCorrendoC4 = 37;

// CORRENDO PARA BAIXO:

var imagemCivil1PosInicialXCorrendoB1 = 5;
var imagemCivil1PosInicialXCorrendoB2 = 5;
var imagemCivil1PosInicialXCorrendoB3 = 5;
var imagemCivil1PosInicialXCorrendoB4 = 5;

var imagemCivil1PosInicialYCorrendoB1 = 160;
var imagemCivil1PosInicialYCorrendoB2 = 211;
var imagemCivil1PosInicialYCorrendoB3 = 261;
var imagemCivil1PosInicialYCorrendoB4 = 160;

var imagemCivil1CorteLarguraCorrendoB1 = 36;
var imagemCivil1CorteLarguraCorrendoB2 = 36;
var imagemCivil1CorteLarguraCorrendoB3 = 36;
var imagemCivil1CorteLarguraCorrendoB4 = 36;

var imagemCivil1CorteAlturaCorrendoB1 = 37;
var imagemCivil1CorteAlturaCorrendoB2 = 37;
var imagemCivil1CorteAlturaCorrendoB3 = 37;
var imagemCivil1CorteAlturaCorrendoB4 = 37;

// POSIÇÕES ATUAIS DA IMAGEM DO PLAYER 1:

var imagemPlayer1PosInicialX = 19;
var imagemPlayer1PosInicialY = 23;
var imagemPlayer1CorteLargura = 10;
var imagemPlayer1CorteAltura = 15;

// POSIÇÕES ATUAIS DA IMAGEM DO CIVIL 1:

var imagemCivil1PosInicialX = 6;
var imagemCivil1PosInicialY = 161;
var imagemCivil1CorteLargura = 36;
var imagemCivil1CorteAltura = 36;

//

var sombraHorizontal = 3;
var sombraVertical = 3;
var incrementoSombra;
var tempoSol = 5000;
var loop;

var imagensTempo = 200;

////PLAYER 1:

// SPRITE - CORRENDO DIREITA:

function imagensCorrendoDireitaPlayer1()
{
    //imagemPlayer1PosInicialX:

    if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD1)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD2)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD3)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD4; }, imagensTempo)
    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD1; }, imagensTempo)
    }

    //imagemPlayer1PosInicialY:

    if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD1)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD2)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD3)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD4; }, imagensTempo)
    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD1; }, imagensTempo)
    }

    //imagemPlayer1CorteLargura:

    if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoD1)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoD2;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoD2)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoD3;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoD3)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoD4;
    } else
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoD1;
    }

    //imagemPlayer1CorteAltura:

    if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoD1)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoD2;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoD2)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoD3;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoD3)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoD4;
    } else
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoD1;
    }
}

// SPRITE - CORRENDO ESQUERDA:

function imagensCorrendoEsquerdaPlayer1()
{
    //imagemPlayer1PosInicialX:

    if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE1)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE2)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE3)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE4; }, imagensTempo)
    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE1; }, imagensTempo)
    }

    //imagemPlayer1PosInicialY:

    if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE1)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE2)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE3)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE4; }, imagensTempo)
    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE1; }, imagensTempo)
    }

    //imagemPlayer1CorteLargura:

    if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoE1)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoE2;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoE2)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoE3;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoE3)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoE4;
    } else
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoE1;
    }

    //imagemPlayer1CorteAltura:

    if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoE1)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoE2;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoE2)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoE3;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoE3)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoE4;
    } else
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoE1;
    }
}

// SPRITE - CORRENDO PARA CIMA:

function imagensCorrendoParaCimaPlayer1()
{
    //imagemPlayer1PosInicialX:

    if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoC1)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoC2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoC2)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoC3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoC3)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoC4; }, imagensTempo)
    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoC1; }, imagensTempo)

    }

    //imagemPlayer1PosInicialY:

    if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoC1)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoC2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoC2)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoC3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoC3)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoC4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoC1; }, imagensTempo)
    }

    //imagemPlayer1CorteLargura:

    if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoC1)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoC2;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoC2)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoC3;
    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoC3)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoC4;
    } else
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoC1;
    }

    //imagemPlayer1CorteAltura:

    if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoC1)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoC2;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoC2)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoC3;
    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoC3)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoC4;
    } else
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoC1;
    }
}

// SPRITE - CORRENDO PARA BAIXO:

function imagensCorrendoParaBaixoPlayer1()
{
    //imagemPlayer1PosInicialX:

    if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoB1)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoB2; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoB2)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoB3; }, imagensTempo)

    } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoB3)
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoB4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoB1; }, imagensTempo)
    }

    //imagemPlayer1PosInicialY:

    if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoB1)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoB2; }, imagensTempo)


    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoB2)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoB3; }, imagensTempo)


    } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoB3)
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoB4; }, imagensTempo)


    } else
    {
        setTimeout(() => { imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoB1; }, imagensTempo)

    }

    //imagemPlayer1CorteLargura:

    if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoB1)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoB2;

    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoB2)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoB3;

    } else if (imagemPlayer1CorteLargura == imagemPlayer1CorteLarguraCorrendoB3)
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoB4;

    } else
    {
        imagemPlayer1CorteLargura = imagemPlayer1CorteLarguraCorrendoB1;
    }

    //imagemPlayer1CorteAltura:

    if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoB1)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoB2;

    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoB2)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoB3;

    } else if (imagemPlayer1CorteAltura == imagemPlayer1CorteAlturaCorrendoB3)
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoB4;

    } else
    {
        imagemPlayer1CorteAltura = imagemPlayer1CorteAlturaCorrendoB1;
    }
}

////CIVIL 1:

// SPRITE - CORRENDO DIREITA:

function imagensCorrendoDireitaCivil1()
{
    //imagemCivil1PosInicialX:

    if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoD1)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoD2; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoD2)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoD3; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoD3)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoD4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoD1; }, imagensTempo)
    }

    //imagemCivil1PosInicialY:

    if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoD1)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoD2; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoD2)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoD3; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoD3)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoD4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoD1; }, imagensTempo)
    }

    //imagemCivil1CorteLargura:

    if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoD1)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoD2;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoD2)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoD3;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoD3)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoD4;
    } else
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoD1;
    }

    //imagemCivil1CorteAltura:

    if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoD1)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoD2;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoD2)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoD3;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoD3)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoD4;
    } else
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoD1;
    }
}

// SPRITE - CORRENDO ESQUERDA:

function imagensCorrendoEsquerdaCivil1()
{
    //imagemCivil1PosInicialX:

    if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoE1)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoE2; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoE2)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoE3; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoE3)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoE4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoE1; }, imagensTempo)

    }

    //imagemCivil1PosInicialY:

    if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoE1)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoE2; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoE2)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoE3; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoE3)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoE4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoE1; }, imagensTempo)
    }

    //imagemCivil1CorteLargura:

    if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoE1)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoE2;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoE2)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoE3;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoE3)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoE4;
    } else
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoE1;
    }

    //imagemCivil1CorteAltura:

    if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoE1)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoE2;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoE2)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoE3;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoE3)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoE4;
    } else
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoE1;
    }
}

// SPRITE - CORRENDO PARA CIMA:

function imagensCorrendoParaCimaCivil1()
{
    //imagemCivil1PosInicialX:

    if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoC1)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoC2; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoC2)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoC3; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoC3)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoC4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoC1; }, imagensTempo)

    }

    //imagemCivil1PosInicialY:

    if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoC1)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoC2; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoC2)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoC3; }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoC3)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoC4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoC1; }, imagensTempo)
    }

    //imagemCivil1CorteLargura:

    if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoC1)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoC2;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoC2)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoC3;
    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoC3)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoC4;
    } else
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoC1;
    }

    //imagemCivil1CorteAltura:

    if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoC1)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoC2;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoC2)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoC3;
    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoC3)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoC4;
    } else
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoC1;
    }
}

// SPRITE - CORRENDO PARA BAIXO:

function imagensCorrendoParaBaixoCivil1()
{
    //imagemCivil1PosInicialX:

    if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoB1)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoB2; }, imagensTempo)

    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoB2)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoB3; }, imagensTempo)


    } else if (imagemCivil1PosInicialX == imagemCivil1PosInicialXCorrendoB3)
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoB4; }, imagensTempo)


    } else
    {
        setTimeout(() => { imagemCivil1PosInicialX = imagemCivil1PosInicialXCorrendoB1; }, imagensTempo)

    }

    //imagemCivil1PosInicialY:

    if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoB1)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoB2; }, imagensTempo)


    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoB2)
    {
        setTimeout(() =>
        {
            imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoB3;
        }, imagensTempo)

    } else if (imagemCivil1PosInicialY == imagemCivil1PosInicialYCorrendoB3)
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoB4; }, imagensTempo)

    } else
    {
        setTimeout(() => { imagemCivil1PosInicialY = imagemCivil1PosInicialYCorrendoB1; }, imagensTempo)
    }

    //imagemCivil1CorteLargura:

    if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoB1)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoB2;

    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoB2)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoB3;

    } else if (imagemCivil1CorteLargura == imagemCivil1CorteLarguraCorrendoB3)
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoB4;

    } else
    {
        imagemCivil1CorteLargura = imagemCivil1CorteLarguraCorrendoB1;
    }

    //imagemCivil1CorteAltura:

    if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoB1)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoB2;

    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoB2)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoB3;

    } else if (imagemCivil1CorteAltura == imagemCivil1CorteAlturaCorrendoB3)
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoB4;

    } else
    {
        imagemCivil1CorteAltura = imagemCivil1CorteAlturaCorrendoB1;
    }
}

//

function reiniciar()
{
    player1.posicaoX = 0;
    player1.posicaoY = 200;

    civil1.posicaoXAtual = 740;
    civil1.posicaoYAtual = 200;
}

var canvasPrincipalLigado = true;

var alertaInimigo;

var distanciaInimigo = 200;

var x1 = 17, y1 = 20;

//

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

var objetoTeste = {};

loopDesenho();

function loopDesenho()
{
    //ATUALIZAR POSICAO CIVIL1:

    civil1.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + civil1.posicaoXAtual;
    civil1.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + civil1.posicaoYAtual;

    //STATUS SISTEMA:

    status1.innerHTML = "civil1.posicaoX: " + civil1.posicaoX;
    status2.innerHTML = "civil1.posicaoY: " + civil1.posicaoY;
    status3.innerHTML = "civil1.posicaoXAtual " + civil1.posicaoXAtual;
    status4.innerHTML = "civil1.posicaoYAtual " + civil1.posicaoYAtual;
    status5.innerHTML = "player1.posicaoX: " + player1.posicaoX;

    status6.innerHTML = "imagemCidade1.posicaoX: " + imagemCidade1.posicaoX;
    status7.innerHTML = "imagemCidade1.posicaoY: " + imagemCidade1.posicaoY;
    status8.innerHTML = "imagemCidade1.posicaoXRecorte: " + imagemCidade1.posicaoXRecorte;
    status9.innerHTML = "imagemCidade1.posicaoYRecorte: " + imagemCidade1.posicaoYRecorte;
    status10.innerHTML = "player1.posicaoY: " + player1.posicaoY;

    //CODIÇÃO INIMIGO EM ALERTA:

    if ((player1.posicaoX - civil1.posicaoX) - (player1.posicaoY - civil1.posicaoY) >= -distanciaInimigo && (player1.posicaoX - civil1.posicaoX) - (player1.posicaoY - civil1.posicaoY) <= distanciaInimigo)
    {
        alertaInimigo = true;

    } else
    {
        alertaInimigo = false;
    }

    // LIMPA A AREA ESPECIFICADA DO DESENHO
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasPrincipal.clearRect(0, 0, telaCanvasPrincipal.width, telaCanvasPrincipal.height);

    // LIMPA A TELA OESTE
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasOeste.clearRect(0, 0, telaCanvasOeste.width, telaCanvasOeste.height);

    // LIMPA A TELA LESTE
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasLeste.clearRect(0, 0, telaCanvasLeste.width, telaCanvasLeste.height);

    //CANVAS OESTE:

    contextoTelaCanvasOeste.beginPath();

    contextoTelaCanvasOeste.fillStyle = "rgba(0,0,0,1)";
    contextoTelaCanvasOeste.moveTo(10, 10);

    contextoTelaCanvasOeste.lineTo(10, telaCanvasOeste.height - 10)

    contextoTelaCanvasOeste.lineTo(telaCanvasOeste.width - 10, telaCanvasOeste.height - 10)

    contextoTelaCanvasOeste.lineTo(telaCanvasOeste.width - 10, 10)

    contextoTelaCanvasOeste.stroke();
    contextoTelaCanvasOeste.fill();

    contextoTelaCanvasOeste.closePath();

    contextoTelaCanvasOeste.fillStyle = "rgba(0,255,255,1";

    if (y1 >= telaCanvasOeste.height - 20)
    {
        direcaoX = -1;

    } else if (y1 <= 20)
    {
        direcaoX = 1;

    } else
    {
        direcaoX = direcaoX;
    }

    y1 += direcaoX;

    contextoTelaCanvasOeste.fillRect(x1, y1, telaCanvasOeste.width / 2, 50);


    //CANVAS LESTE:

    contextoTelaCanvasLeste.beginPath();

    contextoTelaCanvasLeste.fillStyle = "rgba(0,0,0,1)";
    contextoTelaCanvasLeste.moveTo(10, 10);

    contextoTelaCanvasLeste.lineTo(10, telaCanvasLeste.height - 10)

    contextoTelaCanvasLeste.lineTo(telaCanvasLeste.width - 10, telaCanvasLeste.height - 10)

    contextoTelaCanvasLeste.lineTo(telaCanvasLeste.width - 10, 10)

    contextoTelaCanvasLeste.stroke();
    contextoTelaCanvasLeste.fill();

    contextoTelaCanvasLeste.closePath();

    contextoTelaCanvasLeste.fillStyle = "rgba(0,255,255,1)";

    if (y1 >= telaCanvasLeste.height - 20)
    {
        direcaoX = -1;

    } else if (y1 <= 20)
    {
        direcaoX = 1;

    } else
    {
        direcaoX = direcaoX;
    }

    y1 += direcaoX;

    contextoTelaCanvasLeste.fillRect(x1, y1, telaCanvasLeste.width / 2, 50);

    ///////////////////////////////////
    //CANVAS PRINCIPAL
    //////////////////////////////////

    if (canvasPrincipalLigado)
    {
        // SOMBRA HORINZONTAL:

        switch (incrementoSombra)
        {
            case 0.01:
                sombraHorizontal += incrementoSombra;

                if (sombraHorizontal >= 20)
                {
                    incrementoSombra = -0.01;
                }
                break;
            case -0.01:
                sombraHorizontal += incrementoSombra;

                if (sombraHorizontal <= -20)
                {
                    incrementoSombra = 0.01;
                }
                break;

            default:
                incrementoSombra = 0.01;
                break;
        }

        // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
        contextoTelaCanvasPrincipal.drawImage(imagemCidade1, imagemCidade1.posicaoXRecorte, imagemCidade1.posicaoYRecorte, imagemCidade1.larguraRecorte, imagemCidade1.alturaRecorte, imagemCidade1.posicaoX, imagemCidade1.posicaoY, imagemCidade1.largura, imagemCidade1.altura);

        //  MOVIMENTAR JOGADOR CIMA / BAIXO ********************************************************************
        // SE PRESSIONOU UMA TECLA
        if (controle1.teclaSetaParaCimaPressionada != controle1.teclaSetaParaBaixoPressionada)
        {
            // TECLA PARA CIMA
            if (controle1.teclaSetaParaCimaPressionada)
            {
                // SE A POSICAO Y É MAIOR QUE ZERO '0'
                if (player1.posicaoY >= 0)
                {
                    // MOVE PARA CIMA
                    player1.posicaoY -= player1.velocidade;

                    imagensCorrendoParaCimaPlayer1();

                } else
                {
                    //MOVE MAPA PARA CIMA SE POSICAO Y DA IMAGEM É MAIOR QUE ZERO '0':

                    if (imagemCidade1.posicaoYRecorte <= 0)
                    {
                        imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                    } else
                    {
                        imagemCidade1.posicaoYRecorte -= player1.velocidade;

                        imagensCorrendoParaCimaPlayer1();
                    }
                }
            }
            else
            // SE TECLA PARA BAIXO PRESSIONADA:
            {
                // SE O PLAYER NAO ULTRAPASSA A TELA DO CANVAS:
                if (player1.posicaoY <= (telaCanvasPrincipal.height - player1.altura))
                {
                    // MOVE PARA BAIXO
                    player1.posicaoY += player1.velocidade;

                    imagensCorrendoParaBaixoPlayer1();

                } else
                {
                    //MOVENDO MAPA PARA BAIXAO - POSICAO Y:

                    if (imagemCidade1.posicaoYRecorte >= imagemCidade1.height - telaCanvasPrincipal.height)
                    {
                        imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                    } else
                    {
                        imagemCidade1.posicaoYRecorte += player1.velocidade;

                        imagensCorrendoParaBaixoPlayer1();
                    }
                }
            }
        } else
        {
            if (controle1.teclaSetaParaDireitaPressionada == controle1.teclaSetaParaEsquerdaPressionada)
            {
                /*
                imagemPlayer1PosInicialX = 19;
                imagemPlayer1PosInicialY = 23;
                imagemPlayer1CorteLargura = 10;
                imagemPlayer1CorteAltura = 15;
            */
            }
        }

        //  MOVIMENTAR JOGADOR ESQUERDA / DIREITA ********************************************************************

        if (controle1.teclaSetaParaDireitaPressionada != controle1.teclaSetaParaEsquerdaPressionada)
        {
            // TECLA PARA DIREITA PRESSIONADA
            if (controle1.teclaSetaParaDireitaPressionada)
            {
                // SE O PLAYER NAO SAIR DA TELA DO CANVAS

                if (player1.posicaoX <= telaCanvasPrincipal.width - player1.largura)
                {
                    player1.posicaoX += player1.velocidade;

                    imagensCorrendoDireitaPlayer1();

                } else
                {
                    //ALTERANDO O MAPA POSICAO X:

                    imagensCorrendoDireitaPlayer1();

                    if (imagemCidade1.posicaoXRecorte >= imagemCidade1.width - telaCanvasPrincipal.width)
                    {
                        imagemCidade1.posicaoXRecorte = imagemCidade1.posicaoXRecorte;
                    } else
                    {
                        imagemCidade1.posicaoXRecorte += player1.velocidade;
                    }
                }

            } else
            // se for para esquerda
            {
                // se a bola não saiu da tela
                if (player1.posicaoX >= 0)
                {
                    // muda posição
                    player1.posicaoX -= player1.velocidade;

                    imagensCorrendoEsquerdaPlayer1();

                } else
                {
                    //MOVENDO MAPA POSICAO -X:

                    if (imagemCidade1.posicaoXRecorte <= 0)
                    {
                        imagemCidade1.posicaoXRecorte = imagemCidade1.posicaoXRecorte;
                    } else
                    {
                        imagemCidade1.posicaoXRecorte -= player1.velocidade;
                    }
                }
            }
        } else
        {
            if (controle1.teclaSetaParaCimaPressionada != controle1.teclaSetaParaBaixoPressionada)
            {
                /*
                imagemPlayer1PosInicialX = 19;
                imagemPlayer1PosInicialY = 23;
                imagemPlayer1CorteLargura = 10;
                imagemPlayer1CorteAltura = 15;
                */
            }
        }

        /*
        // USANDO UMA IMAGEM COMO PREENCHIMENTO DO DESENHO:
        // var estiloImagem = contextoTelaCanvasPrincipal.createPattern(imagem, "no-repeat");
        // "repeat" (ambas direcoes)
        // "repeat-x" (somente na horizontal)
        // "repeat-y" (somente verticais)
        // "no-repeat" (nenhuma direção)
     
        //USANDO A IMAGEM PARA PREENCHIMENTO DO DESENHO:
        // contextoTelaCanvasPrincipal.fillStyle = estiloImagem;
     
        // DESENHA A IMAGEM NA POSIÇÃO DESEJADA
        // (URL IMAGEM, POSICAO X, POSICAO Y, LARGURA, ALTURA))
        //contextoTelaCanvasPrincipal.drawImage(imagem, 0, 0, 500, 500);
     
        // SOBREPOSIÇÃO DO METODO:
        // PODE RECORTAR A IMAGEM 
        // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
        contextoTelaCanvasPrincipal.drawImage(imagem, 50, 0, 50, 50, 150, 50, 50, 50);
     
        ////DESENHANDO RETANGULOS:
     
        ////DESENHANDO UM RETANGULO - RETANGULO 1
     
        // DEFINE A COR DO PREENCHIMENTO 
        contextoTelaCanvasPrincipal.fillStyle = "rgb(000,00,100)";
     
        // DESENHA RETANGULO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
        contextoTelaCanvasPrincipal.fillRect(0, 0, 100, 200);
     
        //FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 1: 
        //contextoTelaCanvasPrincipal.fill();
     
        // LIMPA A AREA DE DESENHO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
        contextoTelaCanvasPrincipal.clearRect(10, 10, 40, 40);
     
        //// RETANGULO 2 - PLAYER 1:
     
        // USANDO TRANSPARENCIA RGBA COMO PREENCHIMENTO
        contextoTelaCanvasPrincipal.fillStyle = "rgba(000,200,200,0.5)";
     
        */

        // INSERINDO TEXTOS:
        /*
     
        // TAMANHO E FONT
        contextoTelaCanvasPrincipal.font = "20px Comic Sans MS";
        
        // ALINHAMENTO
        contextoTelaCanvasPrincipal.textAlign = "center";
     
        // COR
        contextoTelaCanvasPrincipal.fillStyle = "blue";
     
        //BORDA
        // (TEXTO, POSIÇÃOX, POSIÇÃOY, TAMANHOMAXIMODOTEXTO*OPCIONAL)
        contextoTelaCanvasPrincipal.strokeText("Paulo de Tasso",10,100,100)
        contextoTelaCanvasPrincipal.strokeText("Paulo de Tasso",10,100)
     
        //PREENCHIMENTO DO TEXTO
        // (TEXTO, POSIÇÃOX, POSIÇÃOY, TAMANHOMAXIMODOTEXTO*OPCIONAL)
        contextoTelaCanvasPrincipal.fillText("Paulo de Tasso", 250, 20,100);  
        contextoTelaCanvasPrincipal.fillText("Paulo de Tasso", 250, 20);  
     
        */

        //IMAGENS: 

        //var estiloImagem = contextoTelaCanvasPrincipal.createPattern(imagem, "no-repeat")

        //contextoTelaCanvasPrincipal.fillStyle = estiloImagem;

        // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
        //contextoTelaCanvasPrincipal.drawImage(imagem, 50, 0, 50, 50, 150, 50, 50, 50);

        //DEIXA O FUNDO DOS DESENHOS TRANSPARENTE:
        //var estiloImagem = contextoTelaCanvasPrincipal.createPattern(imagemEmBranco, "repeat")
        //contextoTelaCanvasPrincipal.fillStyle = estiloImagem;

        //DEIXA O FUNDO DOS DESENHOS TRANSPARENTE:
        contextoTelaCanvasPrincipal.fillStyle = "rgba(0,0,0,0.0)";

        // SOMBREAMENTO DE ELEMENTOS:
        // COR DA SOMBRA
        contextoTelaCanvasPrincipal.shadowColor = 'rgba(0, 0, 0, 0.5)';
        // BLUR
        contextoTelaCanvasPrincipal.shadowBlur = 10;
        // DESLOCAMENTO DA SOMBRA NA POSIÇÃOX
        contextoTelaCanvasPrincipal.shadowOffsetX = sombraHorizontal;
        // DESLOCAMENTO DA SOMBRA NA POSIÇÃOY
        contextoTelaCanvasPrincipal.shadowOffsetY = sombraVertical;

        // LINHAS EM CURVA:
        /*
            contextoTelaCanvasPrincipal.beginPath();
            contextoTelaCanvasPrincipal.moveTo(0, 0);
            contextoTelaCanvasPrincipal.quadraticCurveTo(250, 500, 500, 0);
            contextoTelaCanvasPrincipal.stroke();
            contextoTelaCanvasPrincipal.closePath();    
        */

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO PLAYER 1:

        contextoTelaCanvasPrincipal.drawImage(imagemPlayer1, imagemPlayer1PosInicialX, imagemPlayer1PosInicialY, imagemPlayer1CorteLargura, imagemPlayer1CorteAltura, player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        // DESENHA RETANGULO - PLAYER 1       
        contextoTelaCanvasPrincipal.fillRect(player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        //
        contextoTelaCanvasPrincipal.fillStyle = "rgba(255,0,255,0.0)";

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO CIVIL 1:

        contextoTelaCanvasPrincipal.drawImage(imagemCivil1, imagemCivil1PosInicialX, imagemCivil1PosInicialY, imagemCivil1CorteLargura, imagemCivil1CorteAltura, civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);

        // DESENHA RETANGULO - PLAYER 2       
        contextoTelaCanvasPrincipal.fillRect(civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);

        // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 2: 
        //contextoTelaCanvasPrincipal.fill();

        //// DESENHANDO LINHAS:

        // DEFINE A LARGURA DE LINHA:
        contextoTelaCanvasPrincipal.lineWidth = 3;

        /*
        // DEFINE O ESTILO/COR DA LINHA:
        contextoTelaCanvasPrincipal.strokeStyle = "rgb(200,200,0)";
        
        // COMEÇA MOVENDO O PONTO DE DESENHO DE LINHA NA POSSIÇÃO - (POSICAO X, POSICAO Y)
        contextoTelaCanvasPrincipal.moveTo(300, 300);
     
        // FINALIZAR O DESENHO DE LINHA NESSA POSIÇÃO - (POSICAO X, POSICAO Y)
        contextoTelaCanvasPrincipal.lineTo(400, 400);
     
        // DESENHA UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO DESENHADA E FINALIZA A LINHA NAS NOVAS POSIÇÕES PASSADAS 
        contextoTelaCanvasPrincipal.lineTo(400, 450);
     
        // DESENHA MAIS UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO
        contextoTelaCanvasPrincipal.lineTo(300, 450);
     
        // FECHA O DESENHO DE LINHA NA MESMA POSIÇÃO DE INICIO
        contextoTelaCanvasPrincipal.lineTo(300, 300);
     
        // AGORA MOVE O PONTO, A POSIÇÃO DE INICIO DE DESENHO DE LINHA PARA OUTRA POSIÇÃO, SEM SER A ULTIMA POSIÇÃO:
        contextoTelaCanvasPrincipal.moveTo(400, 470);
     
        // E AGORA FINALIZAR O DESENHO DE LINHA NESSA NOVA POSIÇÃO:
        contextoTelaCanvasPrincipal.lineTo(450, 470);
     
        // DESENHA UM RETANGULO DE LINHA
        // (USADO MAIS COMO CONTORNO DE PREENCHIMENTOS)
        // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
        contextoTelaCanvasPrincipal.strokeRect(150, 150, 100, 100);
     
        //MOVE A POSIÇÃO DE INICIO DE DESENHO DE LINHA
        contextoTelaCanvasPrincipal.moveTo(350, 100);
     
        // DESENHA UM CIRCULO:
        // (POSICAO X, POSICAO Y, RAIO, ANGULO INICIAL, ANGULO FINAL, SENTIDO)
        // SENTIDO = TRUE (SENTIDO HORÁRIO / = FALSE (SENTIDO ANTI HORARIO)
        contextoTelaCanvasPrincipal.arc(circuloPosicaoX, circuloPosicaoY, circuloTamanho, anguloInicial, anguloFinal, sentidoCirculo);
     
        // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE
        contextoTelaCanvasPrincipal.fill();
     
        //beginPath - INICIA UM NOVO DESENHO
        //contextoTelaCanvasPrincipal.beginPath();
     
        //closePath - FINALIZA O DESENHO
        //contextoTelaCanvasPrincipal.closePath();
     
        //DESENHA CIRCULOS POR ANIMAÇÕES - COM POSIÇÕES, TAMANHOS, CORES VARIADAS
        function gerarCirculosAleatorios()
        {
            for (var i = 0; i < 10; i++)
            {
                contextoTelaCanvasPrincipal.beginPath();
                contextoTelaCanvasPrincipal.fillStyle = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ")";
                contextoTelaCanvasPrincipal.arc(Math.random() * 500, Math.random() * 500, Math.random() * circuloTamanho, anguloInicial, anguloFinal, sentidoCirculo);
                contextoTelaCanvasPrincipal.fill();
            }
        }
     
        //MOVE O PONTO DE DESENHO PARA ESSA POSIÇÃO
        contextoTelaCanvasPrincipal.moveTo(10, 400);
     
        //CRIA UM ARCO ONDE (POSICÃOX-INICIAL, POSIÇÃOY-INICIAL, POSICÃOX-FINAL, POSIÇÃOY-FINAL, RAIO)
        contextoTelaCanvasPrincipal.arcTo(50, 400, 50, 0, 50);
     
     
        // REDENRIZA/ CONTORNA OS DESENHOS FEITOS DE LINHA:
        contextoTelaCanvasPrincipal.stroke();
     
        // DEFINE OUTRA FORMA DE PREENCHIMENTO, USANDO UMA IMAGEM
        var estiloImagem = contextoTelaCanvasPrincipal.createPattern(imagem, "repeat");
     
        contextoTelaCanvasPrincipal.fillStyle = estiloImagem;
     
        // PREENCHE OS DESENHOS FEITOS COM O ULTIMO ESTILO DE COR DEFINIDO
        contextoTelaCanvasPrincipal.fill();
    */
        //

        // DEFINE A VARIAVEL COM A FUNCAO PARECIDA COM SETINTERVAL()
        // A DIFERENÇA ESTA QUE ELE SO CHAMA NOVAMENTE A FUNCAO QUANDO O SISTEMA ESTÁ OCIOSO.

        // INIMIGO EM ALERTA:

        if (alertaInimigo)
        {
            if (civil1.posicaoY >= imagemCidade1.height - civil1.altura)
            {
                civil1.direcaoY = -1;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaBaixoCivil1();

            } else if (civil1.posicaoY <= imagemCidade1.posicaoY)
            {
                civil1.direcaoY = 1;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaCimaCivil1();

            } else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY > player1.posicaoY)
            {
                civil1.direcaoY = -1;
                civil1.direcaoX = -1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoEsquerdaCivil1();

            } else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY < player1.posicaoY)
            {
                civil1.direcaoY = 1;
                civil1.direcaoX = -1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaBaixoCivil1();

            } else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY < player1.posicaoY)
            {
                civil1.direcaoY = 1;
                civil1.direcaoX = 1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaBaixoCivil1();

            } else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY > player1.posicaoY)
            {
                civil1.direcaoY = -1;
                civil1.direcaoX = 1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoDireitaCivil1();

            } else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY == player1.posicaoY)
            {
                civil1.direcaoY = 0;
                civil1.direcaoX = -1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoEsquerdaCivil1();

            } else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY == player1.posicaoY)
            {
                civil1.direcaoY = 0;
                civil1.direcaoX = 1;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoDireitaCivil1();

            } else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY > player1.posicaoY)
            {
                civil1.direcaoY = -1;
                civil1.direcaoX = 0;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaCimaCivil1();

            } else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY < player1.posicaoY)
            {
                civil1.direcaoY = 1;
                civil1.direcaoX = 0;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                imagensCorrendoParaBaixoCivil1();

            } else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY || civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY + 1 || civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY - 1 || civil1.posicaoX == player1.posicaoX + 1 && civil1.posicaoY == player1.posicaoY || civil1.posicaoX == player1.posicaoX - 1 && civil1.posicaoY == player1.posicaoY || civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY + 2 || civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY - 2 || civil1.posicaoX == player1.posicaoX + 2 && civil1.posicaoY == player1.posicaoY || civil1.posicaoX == player1.posicaoX - 2 && civil1.posicaoY == player1.posicaoY)
            {
                civil1.direcaoY = 0;
                civil1.direcaoX = 0;
                civil1.posicaoXAtual += civil1.direcaoX;
                civil1.posicaoYAtual += civil1.direcaoY;

                alert("Você Perdeu " + localStorage.nome + "!!! Tente Outra Vez!");
                var confirma = confirm("Você aceita que perdeu pra mim? kkkkkkk")

                if (confirma)
                {
                    alert("Oxen... Cade " + localStorage.nome + " que nunca perde? kkk")
                } else
                {
                    alert(localStorage.nome + ", nunca aceita que perdeu!!! kkkkkkkk")
                }

                reiniciar();

            } else
            {
                civil1.posicaoYAtual += civil1.direcaoY;
            }
        } else
        {
            imagemCivil1PosInicialX = 6;
            imagemCivil1PosInicialY = 161;
            imagemCivil1CorteLargura = 36;
            imagemCivil1CorteAltura = 36;
        }

        loop = requestAnimationFrame(loopDesenho);
    }
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//CONFIGURAÇÕES EVENTOS BOTÕES:

botaoLigar.addEventListener('click', ligar, false);
botaoPlay.addEventListener('click', play, false);
botaoStop.addEventListener('click', stop, false);

//MOVENDO

botaoIrParaEsquerda.addEventListener('mousedown', () => { controle1.mover("paraEsquerda") }, false);
botaoIrParaDireita.addEventListener('mousedown', () => { controle1.mover("paraDireita") }, false);
botaoIrParaCima.addEventListener('mousedown', () => { controle1.mover("paraCima") }, false);
botaoIrParaBaixo.addEventListener('mousedown', () => { controle1.mover("paraBaixo") }, false);

//

botaoIrParaEsquerda.addEventListener('touchstart', () => { controle1.mover("paraEsquerda") }, false);
botaoIrParaDireita.addEventListener('touchstart', () => { controle1.mover("paraDireita") }, false);
botaoIrParaCima.addEventListener('touchstart', () => { controle1.mover("paraCima") }, false);
botaoIrParaBaixo.addEventListener('touchstart', () => { controle1.mover("paraBaixo") }, false);

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
    alertaInimigo = false;
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

// INICIO

//DEFININDO NOME USUARIO:

if (localStorage.nome == "null" || localStorage.nome == null || localStorage.nome == "undefined" || localStorage.nome == undefined || localStorage.nome == "Sem Nome")
{
    var nomePrompt = prompt("Qual seu nome?");

    localStorage.setItem("nome", nomePrompt);

    if (localStorage.nome == "null" || localStorage.nome == "Sem nome")
    {
        localStorage.setItem("nome", "Sem Nome");
    } else
    {
        localStorage.setItem("nome", nomePrompt);
    }
}

//

/*
    function irParaCima()
    {
        if (player1.posicaoY > 0)
        { // se a bola nçao sair da tela
            player1.posicaoY -= player1.velocidade; // muda posição do jogador
        }
    }

    function irParaBaixo()
    {
        // se for para baixo
        if (player1.posicaoY < (canvas1.canvas.height - player1.altura))
        { // se a bola não saiu da tela
            player1.posicaoY += player1.velocidade; // muda posição
        }
    }
*/

//

//////////////////// RASCUNHOS:

/*

// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Hoje é ' + str_data + ' às ' + str_hora);

//////////////////////


var secaoPingPong = document.getElementById('secaoCanvas');

function abrirSecaoPingPong()
{
    var style = window.getComputedStyle(secaoPingPong);
    var top = style.getPropertyValue('display');

    if (top == "none")    
    {
        secaoPingPong.style.display = 'flex';
    } else
    {
        secaoPingPong.style.display = 'none';
    }
}
*/