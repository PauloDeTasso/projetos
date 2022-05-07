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

//BARRAS NECESSIDADES:

var barraFome = document.getElementById('barraFome');

var barraSede = document.getElementById('barraSede');

var barraBanheiro = document.getElementById('barraBanheiro');

var barraHigiene = document.getElementById('barraHigiene');

var barraEnergia = document.getElementById('barraEnergia');

var barraEstresse = document.getElementById('barraEstresse');

var barraSocial = document.getElementById('barraSocial');

var barraSaude = document.getElementById('barraSaude');

//CANVAS:

var telaCanvas = document.getElementById('telaCanvas');
var contexto = telaCanvas.getContext('2d');

//STATUS SAIDAS:

status1 = document.getElementById('status1');
status2 = document.getElementById('status2');
status3 = document.getElementById('status3');
status4 = document.getElementById('status4');
status5 = document.getElementById('status5');

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

status1.innerHTML = "Oi";

status2.innerHTML = "Oi";

status3.innerHTML = "Oi";

status4.innerHTML = localStorage.getObj('sentimentosBons')[0];

status5.innerHTML = localStorage.getObj('sentimentosRuins')[1];

//////////////////// CANVAS:

// FUNÇÕES CONSTRUTORAS

// PLAYER

function Player()
{
    this.largura = 50; //
    this.altura = 50; // 
    this.posicaoX = 0; //
    this.posicaoY = 0; //   
    this.velocidade = 3; //
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
}

var player1 = new Player();

var controle1 = new Controle(87, 83, 68, 65);

var circuloPosicaoX = 350;

var circuloPosicaoY = 100;

var circuloTamanho = 100;

var anguloInicial = (Math.PI / 180) * 0;

var anguloFinal = (Math.PI / 180) * 360;

//O SENTIDO DE DESENHO É APARTIR DO ANGULO FINAL
var sentidoCirculo = true;

var imagemEmBranco = new Image();

imagemEmBranco.src = "../../imagens/texture/2D/emBranco.png";

//VARIAVEIS IMAGENS DE AÇÕES DO PLAYER 1

// CORRENDO DIREITA:

var imagemPlayer1PosInicialXCorrendoD1 = 52;
var imagemPlayer1PosInicialXCorrendoD2 = 34;
var imagemPlayer1PosInicialXCorrendoD3 = 66;
var imagemPlayer1PosInicialXCorrendoD4 = 99;

var imagemPlayer1PosInicialYCorrendoD1 = 39;
var imagemPlayer1PosInicialYCorrendoD2 = 38;
var imagemPlayer1PosInicialYCorrendoD3 = 39;
var imagemPlayer1PosInicialYCorrendoD4 = 39;

var imagemPlayerCorteLarguraCorrendoD1 = 12;
var imagemPlayerCorteLarguraCorrendoD2 = 12;
var imagemPlayerCorteLarguraCorrendoD3 = 12;
var imagemPlayerCorteLarguraCorrendoD4 = 12;

var imagemPlayerCorteAlturaCorrendoD1 = 15;
var imagemPlayerCorteAlturaCorrendoD2 = 15;
var imagemPlayerCorteAlturaCorrendoD3 = 15;
var imagemPlayerCorteAlturaCorrendoD4 = 15;

// CORRENDO ESQUERDA:

var imagemPlayer1PosInicialXCorrendoE1 = 66;
var imagemPlayer1PosInicialXCorrendoE2 = 80;
var imagemPlayer1PosInicialXCorrendoE3 = 32;
var imagemPlayer1PosInicialXCorrendoE4 = 16;

var imagemPlayer1PosInicialYCorrendoE1 = 139;
var imagemPlayer1PosInicialYCorrendoE2 = 139;
var imagemPlayer1PosInicialYCorrendoE3 = 138;
var imagemPlayer1PosInicialYCorrendoE4 = 139;

var imagemPlayerCorteLarguraCorrendoE1 = 9;
var imagemPlayerCorteLarguraCorrendoE2 = 12;
var imagemPlayerCorteLarguraCorrendoE3 = 12;
var imagemPlayerCorteLarguraCorrendoE4 = 12;

var imagemPlayerCorteAlturaCorrendoE1 = 15;
var imagemPlayerCorteAlturaCorrendoE2 = 15;
var imagemPlayerCorteAlturaCorrendoE3 = 15;
var imagemPlayerCorteAlturaCorrendoE4 = 15;

// POSIÇÕES ATUAIS DA IMAGEM DO PLAYER 1:

var imagemPlayer1PosInicialX = 19;
var imagemPlayer1PosInicialY = 23;
var imagemPlayerCorteLargura = 10;
var imagemPlayerCorteAltura = 15;

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

//contexto.drawImage(imagemCidade1, 0, 0, 1000, 1000, 0, 0, 500, 500);

//

var imagemPlayer1 = new Image();
imagemPlayer1.src = "../../imagens/texture/2D/player1.png"

var loop;

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

loopDesenho()

function loopDesenho()
{
    // LIMPA A AREA ESPECIFICADA DO DESENHO
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.clearRect(0, 0, telaCanvas.width, telaCanvas.height);

    // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
    contexto.drawImage(imagemCidade1, imagemCidade1.posicaoXRecorte, imagemCidade1.posicaoYRecorte, imagemCidade1.larguraRecorte, imagemCidade1.alturaRecorte, imagemCidade1.posicaoX, imagemCidade1.posicaoY, imagemCidade1.largura, imagemCidade1.altura);

    //  MOVIMENTAR JOGADOR CIMA / BAIXO ********************************************************************
    // se o usuário precionar para cima
    if (controle1.teclaSetaParaCimaPressionada != controle1.teclaSetaParaBaixoPressionada)
    {
        // se para cima for pressionado
        if (controle1.teclaSetaParaCimaPressionada)
        {
            // se a bola não sair da tela
            if (player1.posicaoY >= 0)
            {
                // muda posição do jogador
                player1.posicaoY -= player1.velocidade;
            } else
            {
                //MOVENDO MAPA POSICAO -Y:

                if (imagemCidade1.posicaoYRecorte <= 0)
                {
                    imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                } else
                {
                    imagemCidade1.posicaoYRecorte -= player1.velocidade;
                }
            }
        }
        else
        // se for para baixo 
        {
            // se a bola não saiu da tela
            if (player1.posicaoY <= (telaCanvas.height - player1.altura))
            {
                // muda posição
                player1.posicaoY += player1.velocidade;
            } else
            {
                //MOVENDO MAPA POSICAO Y:

                if (imagemCidade1.posicaoYRecorte >= imagemCidade1.height - telaCanvas.height)
                {
                    imagemCidade1.posicaoYRecorte = imagemCidade1.posicaoYRecorte;
                } else
                {
                    imagemCidade1.posicaoYRecorte += player1.velocidade;
                }
            }
        }
    } else
    {
        if (controle1.teclaSetaParaDireitaPressionada == controle1.teclaSetaParaEsquerdaPressionada)
        {
            imagemPlayer1PosInicialX = 19;
            imagemPlayer1PosInicialY = 23;
            imagemPlayerCorteLargura = 10;
            imagemPlayerCorteAltura = 15;
        }
    }

    //  MOVIMENTAR JOGADOR ESQUERDA / DIREITA ********************************************************************

    if (controle1.teclaSetaParaDireitaPressionada != controle1.teclaSetaParaEsquerdaPressionada)
    {
        // se para direita for pressionado
        if (controle1.teclaSetaParaDireitaPressionada)
        {
            // se a bola não sair da tela

            status1.innerHTML = imagemCidade1.width;
            status2.innerHTML = imagemCidade1.largura;
            status3.innerHTML = imagemCidade1.posicaoXRecorte;
            status4.innerHTML = imagemCidade1.posicaoX;
            status5.innerHTML = imagemCidade1.height;

            if (player1.posicaoX <= telaCanvas.width - player1.largura)
            {
                player1.posicaoX += player1.velocidade;

                //imagemPlayer1PosInicialX:

                if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD1)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD2;
                } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD2)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD3;
                } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoD3)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD4;
                } else
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoD1;
                }

                //imagemPlayer1PosInicialY:

                if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD1)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD2;
                } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD2)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD3;
                } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoD3)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD4;
                } else
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoD1;
                }

                //imagemPlayerCorteLargura:

                if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoD1)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoD2;
                } else if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoD2)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoD3;
                } else if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoD3)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoD4;
                } else
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoD1;
                }

                //imagemPlayerCorteAltura:

                if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoD1)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoD2;
                } else if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoD2)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoD3;
                } else if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoD3)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoD4;
                } else
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoD1;
                }

            } else
            {
                //ALTERANDO O MAPA POSICAO X:

                if (imagemCidade1.posicaoXRecorte >= imagemCidade1.width - telaCanvas.width)
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
            status1.innerHTML = imagemCidade1.width;
            status2.innerHTML = imagemCidade1.largura;
            status3.innerHTML = imagemCidade1.posicaoXRecorte;
            status4.innerHTML = imagemCidade1.posicaoX;
            status5.innerHTML = imagemCidade1.height;

            // se a bola não saiu da tela
            if (player1.posicaoX >= 0)
            {
                // muda posição
                player1.posicaoX -= player1.velocidade;

                //imagemPlayer1PosInicialX:

                if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE1)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE2;
                } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE2)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE3;
                } else if (imagemPlayer1PosInicialX == imagemPlayer1PosInicialXCorrendoE3)
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE4;
                } else
                {
                    imagemPlayer1PosInicialX = imagemPlayer1PosInicialXCorrendoE1;
                }

                //imagemPlayer1PosInicialY:

                if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE1)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE2;
                } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE2)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE3;
                } else if (imagemPlayer1PosInicialY == imagemPlayer1PosInicialYCorrendoE3)
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE4;
                } else
                {
                    imagemPlayer1PosInicialY = imagemPlayer1PosInicialYCorrendoE1;
                }

                //imagemPlayerCorteLargura:

                if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoE1)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoE2;
                } else if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoE2)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoE3;
                } else if (imagemPlayerCorteLargura == imagemPlayerCorteLarguraCorrendoE3)
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoE4;
                } else
                {
                    imagemPlayerCorteLargura = imagemPlayerCorteLarguraCorrendoE1;
                }

                //imagemPlayerCorteAltura:

                if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoE1)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoE2;
                } else if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoE2)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoE3;
                } else if (imagemPlayerCorteAltura == imagemPlayerCorteAlturaCorrendoE3)
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoE4;
                } else
                {
                    imagemPlayerCorteAltura = imagemPlayerCorteAlturaCorrendoE1;
                }

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
            imagemPlayer1PosInicialX = 19;
            imagemPlayer1PosInicialY = 23;
            imagemPlayerCorteLargura = 10;
            imagemPlayerCorteAltura = 15;
        }
    }

    /*
    // USANDO UMA IMAGEM COMO PREENCHIMENTO DO DESENHO:
    // var estiloImagem = contexto.createPattern(imagem, "no-repeat");
    // "repeat" (ambas direcoes)
    // "repeat-x" (somente na horizontal)
    // "repeat-y" (somente verticais)
    // "no-repeat" (nenhuma direção)

    //USANDO A IMAGEM PARA PREENCHIMENTO DO DESENHO:
    // contexto.fillStyle = estiloImagem;

    // DESENHA A IMAGEM NA POSIÇÃO DESEJADA
    // (URL IMAGEM, POSICAO X, POSICAO Y, LARGURA, ALTURA))
    //contexto.drawImage(imagem, 0, 0, 500, 500);

    // SOBREPOSIÇÃO DO METODO:
    // PODE RECORTAR A IMAGEM 
    // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
    contexto.drawImage(imagem, 50, 0, 50, 50, 150, 50, 50, 50);

    ////DESENHANDO RETANGULOS:

    ////DESENHANDO UM RETANGULO - RETANGULO 1

    // DEFINE A COR DO PREENCHIMENTO 
    contexto.fillStyle = "rgb(000,00,100)";

    // DESENHA RETANGULO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.fillRect(0, 0, 100, 200);

    //FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 1: 
    //contexto.fill();

    // LIMPA A AREA DE DESENHO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.clearRect(10, 10, 40, 40);

    //// RETANGULO 2 - PLAYER 1:

    // USANDO TRANSPARENCIA RGBA COMO PREENCHIMENTO
    contexto.fillStyle = "rgba(000,200,200,0.5)";

    */

    // INSERINDO TEXTOS:
    /*

    // TAMANHO E FONT
    contexto.font = "20px Comic Sans MS";
    
    // ALINHAMENTO
    contexto.textAlign = "center";

    // COR
    contexto.fillStyle = "blue";

    //BORDA
    // (TEXTO, POSIÇÃOX, POSIÇÃOY, TAMANHOMAXIMODOTEXTO*OPCIONAL)
    contexto.strokeText("Paulo de Tasso",10,100,100)
    contexto.strokeText("Paulo de Tasso",10,100)

    //PREENCHIMENTO DO TEXTO
    // (TEXTO, POSIÇÃOX, POSIÇÃOY, TAMANHOMAXIMODOTEXTO*OPCIONAL)
    contexto.fillText("Paulo de Tasso", 250, 20,100);  
    contexto.fillText("Paulo de Tasso", 250, 20);  

    */

    //IMAGENS: 

    //var estiloImagem = contexto.createPattern(imagem, "no-repeat")

    //contexto.fillStyle = estiloImagem;

    // (URL IMAGEM, POSICAORECORTEINICIALX, POSICAORECORTEINICIALY, LARGURADORECORTE, ALTURADORECORTE, POSICAOIMAGEMX, POSICAOIMAGEMY, LARGURAIMAGEM, ALTURAIMAGEM))
    //contexto.drawImage(imagem, 50, 0, 50, 50, 150, 50, 50, 50);

    //DEIXA O FUNDO DOS DESENHOS TRANSPARENTE:
    //var estiloImagem = contexto.createPattern(imagemEmBranco, "repeat")
    //contexto.fillStyle = estiloImagem;

    //DEIXA O FUNDO DOS DESENHOS TRANSPARENTE:
    //  contexto.fillStyle = "rgba(0,0,0,0.0)";

    // SOMBREAMENTO DE ELEMENTOS:
    // COR DA SOMBRA
    contexto.shadowColor = 'rgba(0, 0, 0, 0.5)';
    // BLUR
    contexto.shadowBlur = 10;
    // DESLOCAMENTO DA SOMBRA NA POSIÇÃOX
    contexto.shadowOffsetX = 3;
    // DESLOCAMENTO DA SOMBRA NA POSIÇÃOY
    contexto.shadowOffsetY = 3;

    // LINHAS EM CURVA:
    /*
        contexto.beginPath();
        contexto.moveTo(0, 0);
        contexto.quadraticCurveTo(250, 500, 500, 0);
        contexto.stroke();
        contexto.closePath();    
    */

    //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO PLAYER 1:
    /*
        contexto.drawImage(imagemPlayer1, imagemPlayer1PosInicialX, imagemPlayer1PosInicialY, imagemPlayerCorteLargura, imagemPlayerCorteAltura, player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);
    */
    // DESENHA RETANGULO - PLAYER 1       
    contexto.fillRect(player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

    // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 2: 
    //contexto.fill();

    //// DESENHANDO LINHAS:

    // DEFINE A LARGURA DE LINHA:
    contexto.lineWidth = 3;

    /*
    // DEFINE O ESTILO/COR DA LINHA:
    contexto.strokeStyle = "rgb(200,200,0)";
    
    // COMEÇA MOVENDO O PONTO DE DESENHO DE LINHA NA POSSIÇÃO - (POSICAO X, POSICAO Y)
    contexto.moveTo(300, 300);

    // FINALIZAR O DESENHO DE LINHA NESSA POSIÇÃO - (POSICAO X, POSICAO Y)
    contexto.lineTo(400, 400);

    // DESENHA UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO DESENHADA E FINALIZA A LINHA NAS NOVAS POSIÇÕES PASSADAS 
    contexto.lineTo(400, 450);

    // DESENHA MAIS UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO
    contexto.lineTo(300, 450);

    // FECHA O DESENHO DE LINHA NA MESMA POSIÇÃO DE INICIO
    contexto.lineTo(300, 300);

    // AGORA MOVE O PONTO, A POSIÇÃO DE INICIO DE DESENHO DE LINHA PARA OUTRA POSIÇÃO, SEM SER A ULTIMA POSIÇÃO:
    contexto.moveTo(400, 470);

    // E AGORA FINALIZAR O DESENHO DE LINHA NESSA NOVA POSIÇÃO:
    contexto.lineTo(450, 470);

    // DESENHA UM RETANGULO DE LINHA
    // (USADO MAIS COMO CONTORNO DE PREENCHIMENTOS)
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.strokeRect(150, 150, 100, 100);

    //MOVE A POSIÇÃO DE INICIO DE DESENHO DE LINHA
    contexto.moveTo(350, 100);

    // DESENHA UM CIRCULO:
    // (POSICAO X, POSICAO Y, RAIO, ANGULO INICIAL, ANGULO FINAL, SENTIDO)
    // SENTIDO = TRUE (SENTIDO HORÁRIO / = FALSE (SENTIDO ANTI HORARIO)
    contexto.arc(circuloPosicaoX, circuloPosicaoY, circuloTamanho, anguloInicial, anguloFinal, sentidoCirculo);

    // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE
    contexto.fill();

    //beginPath - INICIA UM NOVO DESENHO
    //contexto.beginPath();

    //closePath - FINALIZA O DESENHO
    //contexto.closePath();

    //DESENHA CIRCULOS POR ANIMAÇÕES - COM POSIÇÕES, TAMANHOS, CORES VARIADAS
    function gerarCirculosAleatorios()
    {
        for (var i = 0; i < 10; i++)
        {
            contexto.beginPath();
            contexto.fillStyle = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ")";
            contexto.arc(Math.random() * 500, Math.random() * 500, Math.random() * circuloTamanho, anguloInicial, anguloFinal, sentidoCirculo);
            contexto.fill();
        }
    }

    //MOVE O PONTO DE DESENHO PARA ESSA POSIÇÃO
    contexto.moveTo(10, 400);

    //CRIA UM ARCO ONDE (POSICÃOX-INICIAL, POSIÇÃOY-INICIAL, POSICÃOX-FINAL, POSIÇÃOY-FINAL, RAIO)
    contexto.arcTo(50, 400, 50, 0, 50);


    // REDENRIZA/ CONTORNA OS DESENHOS FEITOS DE LINHA:
    contexto.stroke();

    // DEFINE OUTRA FORMA DE PREENCHIMENTO, USANDO UMA IMAGEM
    var estiloImagem = contexto.createPattern(imagem, "repeat");

    contexto.fillStyle = estiloImagem;

    // PREENCHE OS DESENHOS FEITOS COM O ULTIMO ESTILO DE COR DEFINIDO
    contexto.fill();
*/
    //

    // DEFINE A VARIAVEL COM A FUNCAO PARECIDA COM SETINTERVAL()
    // A DIFERENÇA ESTA QUE ELE SO CHAMA NOVAMENTE A FUNCAO QUANDO O SISTEMA ESTÁ OCIOSO.
    loop = requestAnimationFrame(loopDesenho);
}

//CONFIGURAÇÕES EVENTOS BOTÕES:

botaoPlay.addEventListener('click', play, false);
botaoStop.addEventListener('click', stop, false);
botaoIrParaEsquerda.addEventListener('click', irParaEsquerda, false);
botaoIrParaDireita.addEventListener('click', irParaDireita, false);
botaoIrParaCima.addEventListener('click', irParaCima, false);
botaoIrParaBaixo.addEventListener('click', irParaBaixo, false);

// TECLAS PRESSIONADAS

//document.addEventListener('keyup', controle1.keyUp, false);
//document.addEventListener('keydown', controle1.keyDown, false);

window.addEventListener('keyup', controle1.keyUp, false);
window.addEventListener('keydown', controle1.keyDown, false);

// FUNÇÕES:

function play(eventoAcionado)
{
    status1.innerHTML = eventoAcionado.screenX;
    status2.innerHTML = eventoAcionado.screenY;
    status3.innerHTML = eventoAcionado.clientX;
    status4.innerHTML = eventoAcionado.clientY;
    status5.innerHTML = eventoAcionado.shiftKey;
}

function stop()
{

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



var corpo = document.getElementById('corpo');

var numero = 0;

function encherBarra()
{
    if (numero == 0)
    {
        numero = 1;
        var barra = document.getElementById('barra');
        var tamanhoBarra = 1;
        var completarBarra = setInterval(preencherBarra, 10);

        function preencherBarra()
        {
            if (tamanhoBarra >= 100)
            {
                clearInterval(completarBarra);
                numero = 0;
            } else
            {
                tamanhoBarra++;
                barra.style.width = tamanhoBarra + "%";
            }
        }
    }
}

function encherBarra2()
{
    var barra2 = document.getElementById('fome');

    if (numero == 0)
    {
        numero = 1;
        var tamanhoBarra = 1;
        var completarBarra2 = setInterval(preencherBarra2, 10);

        function preencherBarra2()
        {
            if (tamanhoBarra >= 100)
            {
                clearInterval(completarBarra2);
                numero = 0;
            } else
            {
                tamanhoBarra++;
                barra2.value = tamanhoBarra;
            }
        }
    }
}

/*

function Pessoa() //UM CONSTRUTOR DO OBJETO PESSOA
{
    this.nome = "";
    this.peso = 0;
    this.vivo = false;
    this.familia = [];
    this.olhos = {};
    this.bateria = function (carga, consumindo)
    {
        this.bateria.carga = carga;
        this.bateria.consumindo = consumindo;
    };
}

function Bola() //UM CONSTRUTOR DO OBJETO BOLA
{
    this.nome = "";
    this.tamanho = 0;
    this.peso = 0;
    this.emMovimento = false;
    this.tipodeEsporte = [];
    this.cor = {};
    this.movimento = function (norte, sul, leste, oeste)
    {
        this.movimento.norte = norte;
        this.movimento.sul = sul;
        this.movimento.leste = leste;
        this.movimento.oeste = oeste;
        direcaoBola();
    };
}

function direcaoBola()
{
    if (this.movimento.norte == true
        && this.movimento.sul == false
        && this.movimento.leste == false
        && this.movimento.oeste == false)
    {
        Bola.posicaoY--;

    } else if (this.movimento.norte == false
        && this.movimento.sul == true
        && this.movimento.leste == false
        && this.movimento.oeste == false)
    {
        Bola.posicaoY++;
    }
}
*/

/*
Pessoa.olhos.corDosOlhos = "";
Pessoa.olhos.tamanhoDosOlhos = 0;
Pessoa.olhos.olhosAbertos = false;
Pessoa.olhos.olhar = function ()
{
    this.olhos.olhosAbertos = true;
    this.bateria.consumindoBateria();
}

Pessoa.bateria.carga = 0;
Pessoa.bateria.consumindo = "";
Pessoa.bateria.consumindoBateria = function ()
{
    this.bateria.carga -= 1;
    this.bateria.consumindo = true;
};

Pessoa.bateria.carregandoBateria = function ()
{
    this.bateria.carga = carga + 0.1;
    this.bateria.consumindo = false;
};

*/

/*

pessoa =
{
    nome: "",
    peso: 0,
    vivo: true,
    familia: [],
    olhos:
    {
        corDosOlhos: "",
        tamanhoDosOlhos: 0,
        olhosAbertos: false,

        olhar: function ()
        {
            pessoa.olhos.olhosAbertos = true;
            pessoa.bateria.consumindoBateria();
        }
    },

    bateria:
    {
        carga: 0,
        consumindo: "",
        consumindoBateria: function ()
        {
            pessoa.bateria.carga -= 1;
            pessoa.bateria.consumindo = true;
        },

        carregandoBateria: function ()
        {
            pessoa.bateria.carga = carga + 0.1;
            pessoa.bateria.consumindo = false;
        }
    }
};
*/

/*
var Pessoa = function (nome, peso, vivo, familia)
{
    this.nome = nome; //String
    this.peso = peso; //Numero
    this.vivo = vivo;   //Bolleano
    this.familia = familia; //Array
    this.olhos =
    {
        corDosOlhos: "", //String
        tamanhoDosOlhos: 0, //Numero
        olhosAbertos: false, //Boleano

        olhar: function () //Função
        {
            this.olhos.olhosAbertos = true; //Boleano
            this.bateria.consumindoBateria(); //Funcão
        }
    };

    this.bateria =
    {
        carga: 0, //Numero
        consumindo: "", //Boleano
        consumindoBateria: function () //Função
        {
            this.bateria.carga -= 1;
            this.bateria.consumindo = true; //Boleano
        },

        carregandoBateria: function ()
        {
            this.bateria.carga = carga + 0.1;
            this.bateria.consumindo = false; //Boleano
        }
    }
}

*/

//var carro = new Object();

//tasso = new Pessoa("Tasso", 80, true, [21]);

//var tasso = Object.create(Pessoa);

//var aline = new Object(Pessoa);
/*
var aline = Object.create(pessoa);
*/

//var sophia = Object.create(Pessoa);

/*

/*
function pessoa()
{
    Pessoa.call(this);
    this.apelido = "Aline Vaqueira";
}
*/

/*
var carro = function ()
{
    this.a = 1;
    this.b = 2;
}

Object.defineProperty(aline, 'bateria',
{
    carga: 84,
    consumindo: false
}
);
*/
/*
titulo1.innerHTML = tasso.nome;

titulo2.innerHTML = tasso.bateria.carga;

titulo3.innerHTML = aline.nome;

titulo4.innerHTML = aline.bateria.carga;

//titulo5.innerHTML = Pessoa;
titulo5.innerHTML = tasso.bateria.consumindo;

document.writeln(aline.bateria.consumindo);

function irmaos(objeto1, objeto2, objetoPai)
{
    var objetoFamilia1 = objeto1 instanceof objetoPai;
    var objetoFamilia2 = objeto2 instanceof objetoPai;

    if (objetoFamilia1 == true && objetoFamilia2 == true)
    {
        var resultado = true;
    } else
    {
        var resultado = false;
    }

    return resultado;
}

/*

titulo1.innerHTML = Object.getPrototypeOf(tasso) === Pessoa; // COMPARA SE O OBJETO É IGUAL AO OUTRO

titulo2.innerHTML = Object.entries(tasso); //EXIBE TODOS OS NOMES DAS PROPRIEDADES E SEUS VALORES SEPARADOS POR VIRGULA

titulo3.innerHTML = Object.getOwnPropertyNames(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo4.innerHTML = Object.keys(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo5.innerHTML = irmaos(tasso, aline, Pessoa);

for (let propriedades in tasso) // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso
{
    document.writeln(propriedades);
}

document.writeln("<br>");

document.writeln(Object.values(tasso)); // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS

document.writeln("<br>");
document.writeln("<br>");
/*
for (propriedades in tasso) // EXIBE OS VALORES DAS PROPRIEDADES, SEPARADOS POR ESPAÇO
{
    if (tasso.hasOwnProperty(propriedades)) // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS
    {
        var valores = tasso[propriedades];
        document.writeln(valores);
    }
}
*/
/*
document.writeln("<br>");

document.writeln(Object.values(tasso));

document.writeln("<br>");
document.writeln("<br>");

for (let propriedades2 in aline)
{
    document.writeln(propriedades2);
}

document.writeln("<br>");

document.writeln(Object.values(aline));

document.writeln("<br>");
document.writeln("<br>");


//titulo3.innerHTML = Object.getOwnPropertyNames(tasso.prototype);

/*

for(let propriedades3 in sophia)
    {
    document.writeln(propriedades3);
    }

document.writeln("<br>");

document.writeln(Object.values(sophia));

function CanvasHtml(IdCanvas, dimensao)
{
    this.canvas = document.getElementById(IdCanvas);
    this.contexto = this.canvas.getContext(dimensao)
}

var canvas1 = new CanvasHtml('canvas', '2d');

function Bola()
{
    this.nome = ""; //NOME
    this.cor = "";
    this.raio = 17; //  bola1.raio
    this.posicaoX = canvas1.canvas.width / 2;
    this.posicaoY = canvas1.canvas.height / 2;
    this.movimentoParaDireita = false; // bola1.movimentoParaDireita
    this.angulo = Math.floor(Math.random() * 21) - 10; // bola1.angulo
    this.tempo = 0; // bola1.tempo
    this.velocidade = 0; // bola1.velocidade
    this.velocidadeEmMemoria = 0; // bola1.velocidadeEmMemoria
}

var bola1 = new Bola();

function Jogador()
{
    this.altura = 90; // usuario1.altura
    this.largura = 30; // usuario1.largura
    this.posicaoX = 0; // usuario1.posicaoX / oponente1.posicaoX
    this.posicaoY = (canvas1.canvas.height - this.altura) / 2; // usuario1.posicaoY / oponente1.posicaoY
    this.velocidade = 17; // usuario1.velocidade / oponente1.velocidade
    this.pontos = 0; //usuario1.pontos / oponente1.pontos
    this.movimentoParaCima = false; // jogadorParaCima/ usuario1.movimentoParaCima
}

var usuario1 = new Jogador();

function Oponente()
{
    this.altura = 90; // usuario1.altura
    this.largura = 30; // usuario1.largura
    this.posicaoX = canvas1.canvas.width - this.largura; // usuario1.posicaoX / oponente1.posicaoX
    this.posicaoY = 0; // usuario1.posicaoY / oponente1.posicaoY
    this.velocidade = 30; // usuario1.velocidade / oponente1.velocidade
    this.pontos = 0; //usuario1.pontos / oponente1.pontos
    this.movimentoParaCima = false; // jogadorParaCima/ usuario1.movimentoParaCima
}

var oponente1 = new Oponente();

var oponente2 = new Oponente();

oponente2.posicaoX = 0;
oponente2.posicaoY = 0;
oponente2.altura = 50;
oponente2.largura = 50;
oponente2.velocidade = 20;

const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e)
{
    //log.innerHTML += e.code;
    //ou
    log.innerHTML += e.keyCode;
}

function Controle(key1, key2, key3, key4)
{
    this.teclaUp = false; // controle1.teclaUp
    this.teclaDown = false;  // controle1.teclaDown

    this.teclaLeft = false; // controle1.teclaParaEsquerdaPressionada
    this.teclaRight = false;  // controle1.teclaParaDireitaPressionada

    this.keyUp = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaUp = false;

        } else if (e.keyCode == key2)
        {
            controle1.teclaDown = false;

        } else if (e.keyCode == key3)
        {
            controle1.teclaLeft = false;

        } else if (e.keyCode == key4)
        {
            controle1.teclaRight = false;
        }
    }

    this.keyDown = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaUp = true;

        } else if (e.keyCode == key2)
        {
            controle1.teclaDown = true;

        } else if (e.keyCode == key3)
        {
            controle1.teclaLeft = true;

        } else if (e.keyCode == key4)
        {
            controle1.teclaRight = true;
        }
    }

}

//////////////////////////

titulo1.innerHTML = "ola";

titulo2.innerHTML = "oi";

titulo3.innerHTML = "oi";

titulo4.innerHTML = "Oi";

titulo5.innerHTML = "Oie";

// JOGO PING PONG

function iniciarJogo()
{
    pingPongStatusLigado = true;

    document.addEventListener('keyup', controle1.keyUp, false);
    document.addEventListener('keydown', controle1.keyDown, false);

    setInterval(loopGame, 30);
}

function loopGame()
{

    if (pingPongStatusLigado)
    {
        //  MOVIMENTAR JOGADOR  -
        //VERTICAL:********************************************************************

        if (controle1.teclaUp != controle1.teclaDown)
        { // se o usuário precionar para cima
            if (controle1.teclaUp)
            { // se para cima for pressionado
                if (usuario1.posicaoY > 0)
                { // se a bola não sair da tela
                    usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
                }
            }
            else
            { // se for para baixo
                if (usuario1.posicaoY < (canvas1.canvas.height - usuario1.altura))
                { // se a bola não saiu da tela
                    usuario1.posicaoY += usuario1.velocidade; // muda posição
                }
            }
        }

        //VERTICAL:

        if (controle1.teclaLeft != controle1.teclaRight)
        { // se o usuário precionar para a esquerda
            if (controle1.teclaLeft)
            { // se para esquerda for pressionado
                if (carro.posicaoX > 0)
                { // se a bola não sair da tela
                    // muda posição do jogador
                    carro.posicaoX -= carro.velocidade;

                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
            else
            { // se for para direita
                if (carro.posicaoX < (canvas1.canvas.width - carro.largura))
                { // se a bola não saiu da tela
                    // muda posição
                    carro.posicaoX += carro.velocidade;

                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
        }

        //HORIZONTAL:

        if (controle1.teclaUp != controle1.teclaDown)
        { // se o usuário precionar para cima
            if (controle1.teclaUp)
            { // se para cima for pressionado
                if (carro.posicaoY > 0)
                { // se a bola não sair da tela
                    // muda posição do jogador
                    carro.posicaoY -= carro.velocidade;
                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
            else
            { // se for para baixo
                if (carro.posicaoY < (canvas1.canvas.height - carro.altura))
                { // se a bola não saiu da tela
                    // muda posição
                    carro.posicaoY += carro.velocidade;
                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
        }

        // OPONENTE ********************************************************************************

        if (oponente1.movimentoParaCima)
        { // caso o oponente estivcer inddo para cima
            oponente1.posicaoY -= oponente1.velocidade;
            if (oponente1.posicaoY <= 0) // se a bola estiver saindo da tela
            {
                oponente1.movimentoParaCima = false;
            }
        }
        else
        { // se o oponente estiver se movendo para baixo
            oponente1.posicaoY += oponente1.velocidade;
            if (oponente1.posicaoY >= canvas1.canvas.height - oponente1.altura)
            { // caso a bola estiver saindo da tela
                oponente1.movimentoParaCima = true;
            }
        }

        //2

        if (oponente2.movimentoParaDireita)
        { // caso o oponente estivcer inddo para direita
            oponente2.posicaoX += oponente2.velocidade;
            if (oponente2.posicaoX >= canvas1.canvas.width - oponente2.largura) // se a bola estiver saindo da tela
            {
                oponente2.movimentoParaDireita = false;
            }
        }
        else
        { // se o oponente estiver se movendo para esquerda
            oponente2.posicaoX -= oponente2.velocidade;
            if (oponente2.posicaoX <= 0)
            { // caso a bola estiver saindo da tela
                oponente2.movimentoParaDireita = true;
            }
        }

        // BOLA **************************************************************************

        if (bola1.tempo <= 0) // caso a bola estiver em jogo, o tempo  e zerado apos marcar ponto, abola ficará invisivel por um tempo
        {
            if ((bola1.posicaoX - bola1.raio) <= (usuario1.posicaoX + usuario1.largura))
            { // caso o jogador encoste na bola no eixo X
                if ((bola1.posicaoY + bola1.raio > usuario1.posicaoY) && (bola1.posicaoY - bola1.raio < usuario1.posicaoY + usuario1.altura))
                { // caso o jogador encoste na bola no eixo Y
                    bola1.movimentoParaDireita = true;

                    if (controle1.teclaDown)
                    { // se o usuário estiver indo para baixo e tocar na bola
                        bola1.angulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                    }
                    else
                    {
                        bola1.angulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                    }
                }
            }
            else
            {
                if ((bola1.posicaoX + bola1.raio) >= oponente1.posicaoX)
                { // se o oponente encostar na bola no eixo X
                    if ((bola1.posicaoY + bola1.raio) > oponente1.posicaoY && (bola1.posicaoY - bola1.raio < oponente1.posicaoY + usuario1.altura))
                    { // se o oponente encostar na bola no eixo Y

                        bola1.movimentoParaDireita = false;
                        if (usuario1.movimentoParaCima)
                        { // caso oponetne estiver indo para cima ao tocar na bola
                            bola1.angulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                        }
                        else
                        { // caso o oponetne estiover info para baico quando tocar na bola
                            bola1.angulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                        }
                    }
                }
            }

            if ((bola1.posicaoY - bola1.raio <= 0) || (bola1.posicaoY + bola1.raio > canvas1.canvas.height))
            { // se a boal estiver indo para cima ou para baixo na tela
                bola1.angulo = bola1.angulo * -1; // multiplicamos por - 1 para inverter a direção da bola no eixo y
            }
            bola1.posicaoY += bola1.angulo; // move bola para cima ou para baixo de acordo com o cauculo acima

            if (bola1.movimentoParaDireita)
            {
                bola1.posicaoX += bola1.velocidade; // move vbola para direita
            }
            else
            {
                bola1.posicaoX -= bola1.velocidade; // move vbola para esquerda
            }
        }

        if ((bola1.posicaoX <= -bola1.raio) || (bola1.posicaoX > canvas1.canvas.width))
        { // se a bola saiu da tela
            if (bola1.tempo >= 50)
            { // se o tempo de deixar a bola invisuivel passou
                if (bola1.posicaoX <= - bola1.raio)
                { // se bola saiu na esquerda
                    oponente1.pontos++;
                }
                else
                { // se bola saiu na direita
                    usuario1.pontos++;
                }

                bola1.posicaoX = canvas1.canvas.width / 2; // coloca bola no centro da tela
                bola1.posicaoY = canvas1.canvas.height / 2; // coloca bola no centro da tela

                bola1.movimentoParaDireita = randomBoolean();
                bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
                bola1.tempo = 0; // zera  o tempo de deixar a bola invisivel e coloca novamente em jogo
            }
            else
            { // caso o tempo de deixar a bola invisivel não acabou
                bola1.tempo++;
            }
        }

        //  DESENHA TODA A TELA ***********************************************************************************
        canvas1.contexto.clearRect(0, 0, canvas1.canvas.width, canvas1.canvas.height); // limpar a tela antes de desenhar

        //  JOGADOR E OPONENTE ***********************************************************************************
        canvas1.contexto.fillRect(usuario1.posicaoX, usuario1.posicaoY, usuario1.largura, usuario1.altura); /// desenha jogador
        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, usuario1.largura, usuario1.altura); /// desenha ioponente

        /////////// TESTES:

        canvas1.contexto.fillRect(carro.posicaoX, carro.posicaoY, carro.largura, carro.altura); /// desenha jogador
        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, carro.largura, carro.altura); /// desenha ioponente

        canvas1.contexto.fillRect(oponente2.posicaoX, oponente2.posicaoY, oponente2.largura, oponente2.altura); /// desenha ioponente

        //////////////////////////////////

        // BOLA ***********************************************************************************

        canvas1.contexto.beginPath(); // modo desenho
        canvas1.contexto.arc(bola1.posicaoX, bola1.posicaoY, bola1.raio, 0, Math.PI * 2, true); // desenha o circulo com coordenadas no centro
        canvas1.contexto.closePath(); // finaliza o caminho/ não obrigatorio
        canvas1.contexto.fill();


        // PLACAR ***********************************************************************************

        var pontosA = usuario1.pontos; // variaveis temporarias para alterar pontiação
        var pontosB = oponente1.pontos;

        if (pontosA < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação
            pontosA = "0" + pontosA;
        }

        if (pontosB < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação
            pontosB = "0" + pontosB;
        }

        canvas1.contexto.font = "38pt Arial"; // tamanho e fonte
        canvas1.contexto.fillStyle = "#c4c4c4";
        canvas1.contexto.fillText(pontosA + "  " + pontosB, (canvas1.canvas.width / 2) - 70, 50); // escrevendo texto no centro da tela no top

        //  LINHA DIVISÓRIA
        canvas1.contexto.beginPath();
        canvas1.contexto.moveTo(canvas1.canvas.width / 2, 0); // arrumar lapis para fazer a escrita da linha
        canvas1.contexto.lineTo(canvas1.canvas.width / 2, canvas1.canvas.height);// faz risco na tela no centro
        canvas1.contexto.strokeStyle = "#c4c4c4";
        canvas1.contexto.stroke();
        canvas1.contexto.closePath();

    } else
    {
        statusPingPong2.innerHTML = "PINGP PONG - OFFLINE!";
        setTimeout("limparStatusPingPong2()", 3000);
    }

}

/**/

// ////////////////////////////////////

/*
function irParaCima()
{
    if (usuario1.posicaoY > 0)
    { // se a bola nçao sair da tela
        usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
        carro.posicaoY -= carro.velocidade;
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (usuario1.posicaoY < (canvas1.canvas.height - usuario1.altura))
    { // se a bola não saiu da tela
        usuario1.posicaoY += usuario1.velocidade; // muda posição
        carro.posicaoY += carro.velocidade;
    }
}

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