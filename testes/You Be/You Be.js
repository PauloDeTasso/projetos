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
status11 = document.getElementById('status11');
status12 = document.getElementById('status12');

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
imagemCidade1.margemNorte = imagemCidade1.posicaoY;
imagemCidade1.margemSul = imagemCidade1.posicaoY + imagemCidade1.height;
imagemCidade1.margemLeste = imagemCidade1.posicaoX + imagemCidade1.width;
imagemCidade1.margemOeste = imagemCidade1.posicaoX;

//contextoTelaCanvasPrincipal.drawImage(imagemCidade1, 0, 0, 1000, 1000, 0, 0, 500, 500);

//

var imagemCidade2 = new Image();
imagemCidade2.src = "../../imagens/texture/2D/cidade2.png"

//


//

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

    this.posicaoXGlobal = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + this.posicaoX;

    this.posicaoYGlobal = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + this.posicaoY;

    //IMAGEM:

    this.imagem = new Image();
    this.imagem.src = "../../imagens/texture/2D/player1.png"

    // CORRENDO DIREITA:

    this.imagemPosInicialXCorrendoD1 = 52;
    this.imagemPosInicialXCorrendoD2 = 34;
    this.imagemPosInicialXCorrendoD3 = 66;
    this.imagemPosInicialXCorrendoD4 = 99;

    this.imagemPosInicialYCorrendoD1 = 39;
    this.imagemPosInicialYCorrendoD2 = 39;
    this.imagemPosInicialYCorrendoD3 = 39;
    this.imagemPosInicialYCorrendoD4 = 39;

    this.imagemCorteLarguraCorrendoD1 = 12;
    this.imagemCorteLarguraCorrendoD2 = 12;
    this.imagemCorteLarguraCorrendoD3 = 12;
    this.imagemCorteLarguraCorrendoD4 = 12;

    this.imagemCorteAlturaCorrendoD1 = 15;
    this.imagemCorteAlturaCorrendoD2 = 15;
    this.imagemCorteAlturaCorrendoD3 = 15;
    this.imagemCorteAlturaCorrendoD4 = 15;

    // CORRENDO ESQUERDA:

    this.imagemPosInicialXCorrendoE1 = 66;
    this.imagemPosInicialXCorrendoE2 = 80;
    this.imagemPosInicialXCorrendoE3 = 32;
    this.imagemPosInicialXCorrendoE4 = 16;

    this.imagemPosInicialYCorrendoE1 = 139;
    this.imagemPosInicialYCorrendoE2 = 139;
    this.imagemPosInicialYCorrendoE3 = 139;
    this.imagemPosInicialYCorrendoE4 = 139;

    this.imagemCorteLarguraCorrendoE1 = 12;
    this.imagemCorteLarguraCorrendoE2 = 12;
    this.imagemCorteLarguraCorrendoE3 = 12;
    this.imagemCorteLarguraCorrendoE4 = 12;

    this.imagemCorteAlturaCorrendoE1 = 15;
    this.imagemCorteAlturaCorrendoE2 = 15;
    this.imagemCorteAlturaCorrendoE3 = 15;
    this.imagemCorteAlturaCorrendoE4 = 15;

    // CORRENDO PARA CIMA:

    this.imagemPosInicialXCorrendoC1 = 52;
    this.imagemPosInicialXCorrendoC2 = 34;
    this.imagemPosInicialXCorrendoC3 = 66;
    this.imagemPosInicialXCorrendoC4 = 99;

    this.imagemPosInicialYCorrendoC1 = 39;
    this.imagemPosInicialYCorrendoC2 = 39;
    this.imagemPosInicialYCorrendoC3 = 39;
    this.imagemPosInicialYCorrendoC4 = 39;

    this.imagemCorteLarguraCorrendoC1 = 12;
    this.imagemCorteLarguraCorrendoC2 = 12;
    this.imagemCorteLarguraCorrendoC3 = 12;
    this.imagemCorteLarguraCorrendoC4 = 12;

    this.imagemCorteAlturaCorrendoC1 = 15;
    this.imagemCorteAlturaCorrendoC2 = 15;
    this.imagemCorteAlturaCorrendoC3 = 15;
    this.imagemCorteAlturaCorrendoC4 = 15;

    // CORRENDO PARA BAIXO:

    this.imagemPosInicialXCorrendoB1 = 66;
    this.imagemPosInicialXCorrendoB2 = 80;
    this.imagemPosInicialXCorrendoB3 = 32;
    this.imagemPosInicialXCorrendoB4 = 16;

    this.imagemPosInicialYCorrendoB1 = 139;
    this.imagemPosInicialYCorrendoB2 = 139;
    this.imagemPosInicialYCorrendoB3 = 139;
    this.imagemPosInicialYCorrendoB4 = 139;

    this.imagemCorteLarguraCorrendoB1 = 12;
    this.imagemCorteLarguraCorrendoB2 = 12;
    this.imagemCorteLarguraCorrendoB3 = 12;
    this.imagemCorteLarguraCorrendoB4 = 12;

    this.imagemCorteAlturaCorrendoB1 = 15;
    this.imagemCorteAlturaCorrendoB2 = 15;
    this.imagemCorteAlturaCorrendoB3 = 15;
    this.imagemCorteAlturaCorrendoB4 = 15;

}

function Civil()
{
    this.largura = 50; //
    this.altura = 50; //     
    this.posicaoXAtual = 740; //
    this.posicaoYAtual = 20; //
    this.posicaoXFixo = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + 740; //
    this.posicaoYFixo = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + 20; //
    this.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + this.posicaoXAtual; //
    this.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + this.posicaoYAtual; //    
    this.velocidade = 3; //
    this.direcaoX = 0; //
    this.direcaoY = 1; //

    this.imagem = new Image();
    this.imagem.src = "../../imagens/texture/2D/pacman3d.png"

    // CORRENDO DIREITA:

    this.imagemPosInicialXCorrendoD1 = 5;
    this.imagemPosInicialXCorrendoD2 = 5;
    this.imagemPosInicialXCorrendoD3 = 5;
    this.imagemPosInicialXCorrendoD4 = 5;

    this.imagemPosInicialYCorrendoD1 = 11;
    this.imagemPosInicialYCorrendoD2 = 61;
    this.imagemPosInicialYCorrendoD3 = 111;
    this.imagemPosInicialYCorrendoD4 = 11;

    this.imagemCorteLarguraCorrendoD1 = 36;
    this.imagemCorteLarguraCorrendoD2 = 36;
    this.imagemCorteLarguraCorrendoD3 = 36;
    this.imagemCorteLarguraCorrendoD4 = 36;

    this.imagemCorteAlturaCorrendoD1 = 37;
    this.imagemCorteAlturaCorrendoD2 = 37;
    this.imagemCorteAlturaCorrendoD3 = 37;
    this.imagemCorteAlturaCorrendoD4 = 37;

    // CORRENDO ESQUERDA:

    this.imagemPosInicialXCorrendoE1 = 6;
    this.imagemPosInicialXCorrendoE2 = 6;
    this.imagemPosInicialXCorrendoE3 = 9;
    this.imagemPosInicialXCorrendoE4 = 6;

    this.imagemPosInicialYCorrendoE1 = 310;
    this.imagemPosInicialYCorrendoE2 = 360;
    this.imagemPosInicialYCorrendoE3 = 410;
    this.imagemPosInicialYCorrendoE4 = 310;

    this.imagemCorteLarguraCorrendoE1 = 36;
    this.imagemCorteLarguraCorrendoE2 = 36;
    this.imagemCorteLarguraCorrendoE3 = 36;
    this.imagemCorteLarguraCorrendoE4 = 36;

    this.imagemCorteAlturaCorrendoE1 = 37;
    this.imagemCorteAlturaCorrendoE2 = 37;
    this.imagemCorteAlturaCorrendoE3 = 37;
    this.imagemCorteAlturaCorrendoE4 = 37;

    // CORRENDO PARA CIMA:

    this.imagemPosInicialXCorrendoC1 = 6;
    this.imagemPosInicialXCorrendoC2 = 6;
    this.imagemPosInicialXCorrendoC3 = 6;
    this.imagemPosInicialXCorrendoC4 = 6;

    this.imagemPosInicialYCorrendoC1 = 460;
    this.imagemPosInicialYCorrendoC2 = 509;
    this.imagemPosInicialYCorrendoC3 = 560;
    this.imagemPosInicialYCorrendoC4 = 460;

    this.imagemCorteLarguraCorrendoC1 = 36;
    this.imagemCorteLarguraCorrendoC2 = 36;
    this.imagemCorteLarguraCorrendoC3 = 36;
    this.imagemCorteLarguraCorrendoC4 = 36;

    this.imagemCorteAlturaCorrendoC1 = 37;
    this.imagemCorteAlturaCorrendoC2 = 37;
    this.imagemCorteAlturaCorrendoC3 = 37;
    this.imagemCorteAlturaCorrendoC4 = 37;

    // CORRENDO PARA BAIXO:

    this.imagemPosInicialXCorrendoB1 = 5;
    this.imagemPosInicialXCorrendoB2 = 5;
    this.imagemPosInicialXCorrendoB3 = 5;
    this.imagemPosInicialXCorrendoB4 = 5;

    this.imagemPosInicialYCorrendoB1 = 160;
    this.imagemPosInicialYCorrendoB2 = 211;
    this.imagemPosInicialYCorrendoB3 = 261;
    this.imagemPosInicialYCorrendoB4 = 160;

    this.imagemCorteLarguraCorrendoB1 = 36;
    this.imagemCorteLarguraCorrendoB2 = 36;
    this.imagemCorteLarguraCorrendoB3 = 36;
    this.imagemCorteLarguraCorrendoB4 = 36;

    this.imagemCorteAlturaCorrendoB1 = 37;
    this.imagemCorteAlturaCorrendoB2 = 37;
    this.imagemCorteAlturaCorrendoB3 = 37;
    this.imagemCorteAlturaCorrendoB4 = 37;
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

// POSIÇÕES ATUAIS DA IMAGEM DO PLAYER 1:

player1.imagemPosInicialX = 19;
player1.imagemPosInicialY = 23;
player1.imagemCorteLargura = 10;
player1.imagemCorteAltura = 15;

// POSIÇÕES ATUAIS DA IMAGEM DO CIVIL 1:

civil1.imagemPosInicialX = 6;
civil1.imagemPosInicialY = 161;
civil1.imagemCorteLargura = 36;
civil1.imagemCorteAltura = 36;

//

var sombraHorizontal = 3;
var sombraVertical = 3;
var incrementoSombra;
var tempoSol = 5000;
var loop;

var imagensTempo = 200;

////SPRITES:

// SPRITE - CORRENDO DIREITA:

function imagensCorrendoDireita(elemento)
{
    //elemento.imagemPosInicialX:

    if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoD1)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoD2; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoD2)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoD3; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoD3)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoD4; }, imagensTempo)
    } else
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoD1; }, imagensTempo)
    }

    //elemento.imagemPosInicialY:

    if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoD1)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoD2; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoD2)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoD3; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoD3)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoD4; }, imagensTempo)
    } else
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoD1; }, imagensTempo)
    }

    //elemento.imagemCorteLargura:

    if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoD1)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoD2;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoD2)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoD3;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoD3)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoD4;
    } else
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoD1;
    }

    //elemento.imagemCorteAltura:

    if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoD1)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoD2;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoD2)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoD3;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoD3)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoD4;
    } else
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoD1;
    }
}

// SPRITE - CORRENDO ESQUERDA:

function imagensCorrendoEsquerda(elemento)
{
    //elemento.imagemPosInicialX:

    if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoE1)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoE2; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoE2)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoE3; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoE3)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoE4; }, imagensTempo)
    } else
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoE1; }, imagensTempo)
    }

    //elemento.imagemPosInicialY:

    if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoE1)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoE2; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoE2)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoE3; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoE3)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoE4; }, imagensTempo)
    } else
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoE1; }, imagensTempo)
    }

    //elemento.imagemCorteLargura:

    if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoE1)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoE2;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoE2)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoE3;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoE3)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoE4;
    } else
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoE1;
    }

    //elemento.imagemCorteAltura:

    if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoE1)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoE2;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoE2)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoE3;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoE3)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoE4;
    } else
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoE1;
    }
}

// SPRITE - CORRENDO PARA CIMA:

function imagensCorrendoParaCima(elemento)
{
    //elemento.imagemPosInicialX:

    if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoC1)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoC2; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoC2)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoC3; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoC3)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoC4; }, imagensTempo)
    } else
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoC1; }, imagensTempo)

    }

    //elemento.imagemPosInicialY:

    if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoC1)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoC2; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoC2)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoC3; }, imagensTempo)

    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoC3)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoC4; }, imagensTempo)

    } else
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoC1; }, imagensTempo)
    }

    //elemento.imagemCorteLargura:

    if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoC1)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoC2;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoC2)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoC3;
    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoC3)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoC4;
    } else
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoC1;
    }

    //elemento.imagemCorteAltura:

    if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoC1)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoC2;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoC2)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoC3;
    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoC3)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoC4;
    } else
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoC1;
    }
}

// SPRITE - CORRENDO PARA BAIXO:

function imagensCorrendoParaBaixo(elemento)
{
    //elemento.imagemPosInicialX:

    if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoB1)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoB2; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoB2)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoB3; }, imagensTempo)

    } else if (elemento.imagemPosInicialX == elemento.imagemPosInicialXCorrendoB3)
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoB4; }, imagensTempo)

    } else
    {
        setTimeout(() => { elemento.imagemPosInicialX = elemento.imagemPosInicialXCorrendoB1; }, imagensTempo)
    }

    //elemento.imagemPosInicialY:

    if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoB1)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoB2; }, imagensTempo)


    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoB2)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoB3; }, imagensTempo)


    } else if (elemento.imagemPosInicialY == elemento.imagemPosInicialYCorrendoB3)
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoB4; }, imagensTempo)


    } else
    {
        setTimeout(() => { elemento.imagemPosInicialY = elemento.imagemPosInicialYCorrendoB1; }, imagensTempo)

    }

    //elemento.imagemCorteLargura:

    if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoB1)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoB2;

    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoB2)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoB3;

    } else if (elemento.imagemCorteLargura == elemento.imagemCorteLarguraCorrendoB3)
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoB4;

    } else
    {
        elemento.imagemCorteLargura = elemento.imagemCorteLarguraCorrendoB1;
    }

    //elemento.imagemCorteAltura:

    if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoB1)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoB2;

    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoB2)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoB3;

    } else if (elemento.imagemCorteAltura == elemento.imagemCorteAlturaCorrendoB3)
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoB4;

    } else
    {
        elemento.imagemCorteAltura = elemento.imagemCorteAlturaCorrendoB1;
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

//
var contagemTestePatrulha = 0;

function patrulhar(elemento)
{
    contagemTestePatrulha++;
    status12.innerHTML = "Patrulhando " + contagemTestePatrulha + " vezes!";
}

function imagemParado(elemento)
{
    switch (elemento)
    {
        case player1:

            elemento.imagemPosInicialX = 19;
            elemento.imagemPosInicialY = 23;
            elemento.imagemCorteLargura = 10;
            elemento.imagemCorteAltura = 15;
            break;

        case civil1:

            elemento.imagemPosInicialX = 6;
            elemento.imagemPosInicialY = 161;
            elemento.imagemCorteLargura = 36;
            elemento.imagemCorteAltura = 36;
            break;

        default:

            break;
    }
}
//

var canvasPrincipalLigado = true;

var loopAlerta = true

var alertaInimigo;

var distanciaInimigo = 200;

var x1 = 17, y1 = 20;

//LUGARES

var quarteirao1 = {}

quarteirao1.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + 20;

quarteirao1.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + 20;

quarteirao1.largura = 100;

quarteirao1.altura = 100;

//

var quarteirao2 = {}

quarteirao2.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + 320;

quarteirao2.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + 17;

quarteirao2.largura = 180;

quarteirao2.altura = 120;

//

var quarteirao3 = {}

quarteirao3.posicaoXAtual = 430;

quarteirao3.posicaoYAtual = 310;

quarteirao3.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + quarteirao3.posicaoXAtual;

quarteirao3.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + quarteirao3.posicaoYAtual;

quarteirao3.largura = 250;

quarteirao3.altura = 100;

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
    //AREAS PROIBIDAS DE MOVIMENTAÇÃO:

    topouQuarteirao1Direita = player1.posicaoX <= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoX + player1.largura >= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoY + player1.altura >= quarteirao3.posicaoY && player1.posicaoY <= quarteirao3.posicaoY + quarteirao3.altura;

    topouQuarteirao1Esquerda = player1.posicaoX + player1.largura >= quarteirao3.posicaoX && player1.posicaoX <= quarteirao3.posicaoX && player1.posicaoY + player1.altura >= quarteirao3.posicaoY && player1.posicaoY <= quarteirao3.posicaoY + quarteirao3.altura;

    topouQuarteirao1EmCima = player1.posicaoX + player1.largura >= quarteirao3.posicaoX && player1.posicaoX <= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoY <= quarteirao3.posicaoY && player1.posicaoY + player1.altura >= quarteirao3.posicaoY;

    topouQuarteirao1EmBaixo = player1.posicaoX + player1.largura >= quarteirao3.posicaoX && player1.posicaoX <= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoY <= quarteirao3.posicaoY + quarteirao3.altura && player1.posicaoY + player1.altura >= quarteirao3.posicaoY + quarteirao3.altura;

    //ATUALIZAR POSICAO PLAYER1:

    player1.posicaoXGlobal = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + player1.posicaoX;
    player1.posicaoYGlobal = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + player1.posicaoY;

    //ATUALIZAR POSICAO CIVIL1:

    civil1.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + civil1.posicaoXAtual;
    civil1.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + civil1.posicaoYAtual;

    //ATUALIZAR POSICAO FIXO CIVIL1:

    civil1.posicaoXFixo = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + 740; //

    civil1.posicaoYFixo = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + 20; //   

    //IMAGEM CIDADE 1 POSICAO FIXA NORTE:

    imagemCidade1.margemNorte = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte;
    imagemCidade1.margemSul = imagemCidade1.posicaoY + imagemCidade1.height - imagemCidade1.posicaoYRecorte;
    imagemCidade1.margemLeste = imagemCidade1.posicaoX + imagemCidade1.width - imagemCidade1.posicaoXRecorte;
    imagemCidade1.margemOeste = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte;

    //ATUALIZAR POSICAO AREA 1:

    quarteirao3.posicaoX = imagemCidade1.posicaoX - imagemCidade1.posicaoXRecorte + quarteirao3.posicaoXAtual;
    quarteirao3.posicaoY = imagemCidade1.posicaoY - imagemCidade1.posicaoYRecorte + quarteirao3.posicaoYAtual;

    //STATUS SISTEMA:

    status1.innerHTML = "civil1.posicaoXFixo: " + (civil1.posicaoXFixo);
    status2.innerHTML = " civil1.posicaoYFixo: " + (civil1.posicaoYFixo);
    status3.innerHTML = " civil1.posicaoX: " + civil1.posicaoX;
    status4.innerHTML = " civil1.posicaoY: " + civil1.posicaoY;
    status5.innerHTML = "player1.posicaoX: " + player1.posicaoX;

    status6.innerHTML = "player1.posicaoY: " + player1.posicaoY;
    status7.innerHTML = "topouQuarteirao1EmCima: " + topouQuarteirao1Direita;
    status8.innerHTML = "topouQuarteirao1EmBaixo: " + topouQuarteirao1Direita;
    status9.innerHTML = "quarteirao3.posicaoX: " + quarteirao3.posicaoX;
    status10.innerHTML = "quarteirao3.posicaoY: " + quarteirao3.posicaoY;
    status11.innerHTML = "quarteirao3.largura: " + quarteirao3.largura;
    status12.innerHTML = "loopAlerta: " + loopAlerta;

    /*
    status1.innerHTML = "quarteirao1.posicaoX + largura: " + (quarteirao1.posicaoX + quarteirao1.largura);
    status2.innerHTML = "quarteirao1.posicaoY + altura: " + (quarteirao1.posicaoY + quarteirao1.altura);
    status3.innerHTML = "player1.posicaoXGlobal " + player1.posicaoXGlobal;
    status4.innerHTML = " player1.posicaoYGlobal " + player1.posicaoYGlobal;
    status5.innerHTML = "player1.posicaoX: " + player1.posicaoX;

    status6.innerHTML = "quarteirao1.posicaoX: " + quarteirao1.posicaoX;
    status7.innerHTML = "quarteirao1.posicaoY: " + quarteirao1.posicaoY;
    status8.innerHTML = "quarteirao1.largura: " + quarteirao1.largura;
    status9.innerHTML = "quarteirao1.altura: " + quarteirao1.altura;
    status10.innerHTML = "player1.posicaoY: " + player1.posicaoY;
*/
    /*
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
*/
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
    /*
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
    */
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
                    //   player1.posicaoY -= player1.velocidade;             

                    if (topouQuarteirao1EmBaixo)
                    {
                        // NÃO FAZ NADA
                    } else
                    {
                        player1.posicaoY -= player1.velocidade;
                    }

                    imagensCorrendoParaCima(player1);

                } else
                {
                    //MOVE MAPA PARA CIMA SE POSICAO Y DA IMAGEM É MAIOR QUE ZERO '0':

                    if (imagemCidade1.posicaoYRecorte <= 0)
                    {
                        imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                    } else
                    {
                        imagemCidade1.posicaoYRecorte -= player1.velocidade;

                        imagensCorrendoParaCima(player1);
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

                    if (topouQuarteirao1EmCima)
                    {
                        // NÃO FAZ NADA
                    } else
                    {
                        player1.posicaoY += player1.velocidade;
                    }

                    imagensCorrendoParaBaixo(player1);

                } else
                {
                    //MOVENDO MAPA PARA BAIXAO - POSICAO Y:

                    if (imagemCidade1.posicaoYRecorte >= imagemCidade1.height - telaCanvasPrincipal.height)
                    {
                        imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                    } else
                    {
                        imagemCidade1.posicaoYRecorte += player1.velocidade;

                        imagensCorrendoParaBaixo(player1);
                    }
                }
            }
        } else
        {
            if (controle1.teclaSetaParaDireitaPressionada == controle1.teclaSetaParaEsquerdaPressionada)
            {
                imagemParado(player1);
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

                    if (topouQuarteirao1Esquerda)
                    {
                        // NÃO FAZ NADA
                    } else
                    {
                        player1.posicaoX += player1.velocidade;
                    }

                    imagensCorrendoDireita(player1);

                } else
                {
                    //ALTERANDO O MAPA POSICAO X:

                    imagensCorrendoDireita(player1);

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

                    if (topouQuarteirao1Direita)
                    {
                        // NÃO FAZ NADA
                    } else
                    {
                        player1.posicaoX -= player1.velocidade;
                    }

                    imagensCorrendoEsquerda(player1);

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

        contextoTelaCanvasPrincipal.drawImage(player1.imagem, player1.imagemPosInicialX, player1.imagemPosInicialY, player1.imagemCorteLargura, player1.imagemCorteAltura, player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        // DESENHA RETANGULO - PLAYER 1       
        contextoTelaCanvasPrincipal.fillRect(player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        //
        contextoTelaCanvasPrincipal.fillStyle = "rgba(255,0,255,0.0)";

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO CIVIL 1:

        contextoTelaCanvasPrincipal.drawImage(civil1.imagem, civil1.imagemPosInicialX, civil1.imagemPosInicialY, civil1.imagemCorteLargura, civil1.imagemCorteAltura, civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);

        // DESENHA RETANGULO - PLAYER 2       
        contextoTelaCanvasPrincipal.fillRect(civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);

        // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 2: 
        //contextoTelaCanvasPrincipal.fill();

        //// DESENHANDO LINHAS:

        // DEFINE A LARGURA DE LINHA:
        contextoTelaCanvasPrincipal.lineWidth = 3;

        //

        contextoTelaCanvasPrincipal.fillStyle = "rgba(200,200,200,1)";

        contextoTelaCanvasPrincipal.fillRect(quarteirao3.posicaoX, quarteirao3.posicaoY, quarteirao3.largura, quarteirao3.altura);

        //

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

        if (loopAlerta)
        {
            // INIMIGO EM ALERTA:

            if (alertaInimigo)
            {
                //SE SAIR DO MAPA PELO NORTE:
                if (civil1.posicaoY < imagemCidade1.margemNorte)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO SUL:
                else if (civil1.posicaoY + civil1.altura > imagemCidade1.margemSul)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO LESTE:
                else if (civil1.posicaoX + civil1.largura > imagemCidade1.margemLeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO OESTE:
                else if (civil1.posicaoX < imagemCidade1.margemOeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                // SE ELEMENTO ESTIVER A DIREITA E ABAIXO DO ALVO:
                else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY > player1.posicaoY)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoEsquerda(civil1);
                }
                // SE ELEMENTO ESTIVER A DIREITA E ACIMA DO ALVO:
                else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY < player1.posicaoY)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);
                }
                // SE ELEMENTO ESTIVER A ESQUERDA E ACIMA DO ALVO:
                else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY < player1.posicaoY)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);
                }
                // SE ELEMENTO ESTIVER A ESQUERDA E ABAIXO DO ALVO:
                else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY > player1.posicaoY)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoDireita(civil1);
                }
                // SE ELEMENTO ESTIVER A DIREITA E Y É IGUAL AO ALVO:
                else if (civil1.posicaoX > player1.posicaoX && civil1.posicaoY == player1.posicaoY)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoEsquerda(civil1);

                }
                // SE ELEMENTO ESTIVER A ESQUERDA E Y É IGUAL AO ALVO:
                else if (civil1.posicaoX < player1.posicaoX && civil1.posicaoY == player1.posicaoY)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoDireita(civil1);
                }
                // SE ELEMENTO ESTIVER ABAIXO E X É IGUAL AO ALVO:
                else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY > player1.posicaoY)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaCima(civil1);
                }
                // SE ELEMENTO ESTIVER ACIMA E X É IGUAL AO ALVO:
                else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY < player1.posicaoY)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);

                } else if (civil1.posicaoX == player1.posicaoX && civil1.posicaoY == player1.posicaoY)
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
                    //NÃO FAZ NADA
                }
                ////SE NAO ESTIVER EM ALERTA:
            } else
            {
                //SE SAIR DO MAPA PELO NORTE:
                if (civil1.posicaoY < imagemCidade1.margemNorte)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO SUL:
                else if (civil1.posicaoY + civil1.altura > imagemCidade1.margemSul)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO LESTE:
                else if (civil1.posicaoX + civil1.largura > imagemCidade1.margemLeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO OESTE:
                else if (civil1.posicaoX < imagemCidade1.margemOeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                // SE ELEMENTO ESTIVER A DIREITA E ABAIXO DO ALVO:
                else if (civil1.posicaoX > civil1.posicaoXFixo && civil1.posicaoY > civil1.posicaoYFixo)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoEsquerda(civil1);
                }
                // SE ELEMENTO ESTIVER A DIREITA E ACIMA DO ALVO:
                else if (civil1.posicaoX > civil1.posicaoXFixo && civil1.posicaoY < civil1.posicaoYFixo)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);
                }
                // SE ELEMENTO ESTIVER A ESQUERDA E ACIMA DO ALVO:
                else if (civil1.posicaoX < civil1.posicaoXFixo && civil1.posicaoY < civil1.posicaoYFixo)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);
                }
                // SE ELEMENTO ESTIVER A ESQUERDA E ABAIXO DO ALVO:
                else if (civil1.posicaoX < civil1.posicaoXFixo && civil1.posicaoY > civil1.posicaoYFixo)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoDireita(civil1);
                }
                // SE ELEMENTO ESTIVER A DIREITA E Y É IGUAL AO ALVO:
                else if (civil1.posicaoX > civil1.posicaoXFixo && civil1.posicaoY == civil1.posicaoYFixo)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoEsquerda(civil1);

                }
                // SE ELEMENTO ESTIVER A ESQUERDA E Y É IGUAL AO ALVO:
                else if (civil1.posicaoX < civil1.posicaoXFixo && civil1.posicaoY == civil1.posicaoYFixo)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = 1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoDireita(civil1);
                }
                // SE ELEMENTO ESTIVER ABAIXO E X É IGUAL AO ALVO:
                else if (civil1.posicaoX == civil1.posicaoXFixo && civil1.posicaoY > civil1.posicaoYFixo)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaCima(civil1);
                }
                // SE ELEMENTO ESTIVER ACIMA E X É IGUAL AO ALVO:
                else if (civil1.posicaoX == civil1.posicaoXFixo && civil1.posicaoY < civil1.posicaoYFixo)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;

                    imagensCorrendoParaBaixo(civil1);

                } else if (civil1.posicaoX == civil1.posicaoXFixo && civil1.posicaoY == civil1.posicaoYFixo)
                {
                    imagemParado(civil1);

                    patrulhar(civil1);

                } else
                {
                    //NÃO FAZ NADA
                }
            }
            /*
                    //TEXTES X:
                    contextoTelaCanvasOeste.fillStyle = "rgba(0,0,0,1)";
                    contextoTelaCanvasOeste.fillStroke = "rgba(0,0,0,1)";
                    contextoTelaCanvasPrincipal.beginPath();
                    contextoTelaCanvasPrincipal.moveTo(player1.posicaoX, player1.posicaoY)
                    contextoTelaCanvasPrincipal.lineTo(player1.posicaoX + 10, player1.posicaoY)
                    contextoTelaCanvasPrincipal.stroke();
                    contextoTelaCanvasPrincipal.fill();
                    contextoTelaCanvasPrincipal.closePath();
            
                    //TEXTES Y:
                    contextoTelaCanvasOeste.fillStyle = "rgba(255,0,0,1)";
                    contextoTelaCanvasOeste.fillStroke = "rgba(255,0,0,1)";
                    contextoTelaCanvasPrincipal.beginPath();
                    contextoTelaCanvasPrincipal.moveTo(player1.posicaoX, player1.posicaoY)
                    contextoTelaCanvasPrincipal.lineTo(player1.posicaoX, player1.posicaoY + 10)
                    contextoTelaCanvasPrincipal.stroke();
                    contextoTelaCanvasPrincipal.fill();
                    contextoTelaCanvasPrincipal.closePath();
            
                    //TEXTES X:
                    contextoTelaCanvasOeste.fillStyle = "rgba(0,0,0,1)";
                    contextoTelaCanvasOeste.fillStroke = "rgba(0,0,0,1)";
                    contextoTelaCanvasPrincipal.beginPath();
                    contextoTelaCanvasPrincipal.moveTo(quarteirao3.posicaoX, quarteirao3.posicaoY)
                    contextoTelaCanvasPrincipal.lineTo(quarteirao3.posicaoX + 10, quarteirao3.posicaoY)
                    contextoTelaCanvasPrincipal.stroke();
                    contextoTelaCanvasPrincipal.fill();
                    contextoTelaCanvasPrincipal.closePath();
            
                    //TEXTES Y:
                    contextoTelaCanvasOeste.fillStyle = "rgba(255,0,0,1)";
                    contextoTelaCanvasOeste.fillStroke = "rgba(255,0,0,1)";
                    contextoTelaCanvasPrincipal.beginPath();
                    contextoTelaCanvasPrincipal.moveTo(quarteirao3.posicaoX, quarteirao3.posicaoY)
                    contextoTelaCanvasPrincipal.lineTo(quarteirao3.posicaoX, quarteirao3.posicaoY + 10)
                    contextoTelaCanvasPrincipal.stroke();
                    contextoTelaCanvasPrincipal.fill();
                    contextoTelaCanvasPrincipal.closePath();
            */
        } else
        {

        }
        loop = requestAnimationFrame(loopDesenho);
    }
    //SE loopAlerta FOR IGUAL A FALSE:

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