
// FUNÇÕES CONSTRUTORAS

// CIDADES:

function Cidade()
{
    this.imagem = new Image();
    this.imagem.src = "../../imagens/texture/2D/cidade1.png"

    this.imagem.posicaoXRecorte = 0;
    this.imagem.posicaoYRecorte = 0;
    this.imagem.larguraRecorte = this.imagem.width;
    this.imagem.alturaRecorte = this.imagem.height;
    this.imagem.posicaoX = 0;
    this.imagem.posicaoY = 0;
    this.imagem.largura = this.imagem.width;
    this.imagem.altura = this.imagem.height;
    this.imagem.margemNorte = this.imagem.posicaoY;
    this.imagem.margemSul = this.imagem.posicaoY + this.imagem.height;
    this.imagem.margemLeste = this.imagem.posicaoX + this.imagem.width;
    this.imagem.margemOeste = this.imagem.posicaoX;
}

// PLAYER

function Player(cidade)
{
    this.largura = 50; //
    this.altura = 50; // 
    this.posicaoX = 0; //
    this.posicaoY = 200; //   
    this.velocidade = 3; //

    this.posicaoXGlobal = cidade.imagem.posicaoX - cidade.imagem.posicaoXRecorte + this.posicaoX;

    this.posicaoYGlobal = cidade.imagem.posicaoY - cidade.imagem.posicaoYRecorte + this.posicaoY;

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

function Civil(cidade)
{
    this.largura = 50; //
    this.altura = 50; //     
    this.posicaoXAtual = 740; //
    this.posicaoYAtual = 400; //
    this.posicaoXFixo = cidade.imagem.posicaoX - cidade.imagem.posicaoXRecorte + 740; //
    this.posicaoYFixo = cidade.imagem.posicaoY - cidade.imagem.posicaoYRecorte + 20; //
    this.posicaoX = cidade.imagem.posicaoX - cidade.imagem.posicaoXRecorte + this.posicaoXAtual; //
    this.posicaoY = cidade.imagem.posicaoY - cidade.imagem.posicaoYRecorte + this.posicaoYAtual; //    
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

var cidade1 = new Cidade();

var player1 = new Player(cidade1);

var civil1 = new Civil(cidade1);

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

//IMAGENS:

var imagemEmBranco = new Image();

imagemEmBranco.src = "../../imagens/texture/2D/emBranco.png";

//

var imagemCidade2 = new Image();
imagemCidade2.src = "../../imagens/texture/2D/cidade2.png"

//

///////////////////////////// ATRIBUIÇÃO DE METODOS DO SISTEMA NATIVO:

Storage.prototype.setObj = function (key, obj)
{
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key)
{
    return JSON.parse(this.getItem(key))
}

///////////////////////////// VARIAVEIS LOCAIS:

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

//

function reiniciar()
{
    player1.posicaoX = 0;
    player1.posicaoY = 200;

    civil1.posicaoXAtual = 740;
    civil1.posicaoYAtual = 200;
}

//

function patrulhar(elemento)
{

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
