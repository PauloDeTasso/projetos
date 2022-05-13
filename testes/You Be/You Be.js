//

var canvasPrincipalLigado = true;

var loopAlerta = true

var alertaInimigo;

var distanciaInimigo = 200;

var x1 = 17, y1 = 20;

//LUGARES

var quarteirao1 = {}

quarteirao1.posicaoX = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + 20;

quarteirao1.posicaoY = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + 20;

quarteirao1.largura = 100;

quarteirao1.altura = 100;

//

var quarteirao2 = {}

quarteirao2.posicaoX = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + 320;

quarteirao2.posicaoY = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + 17;

quarteirao2.largura = 180;

quarteirao2.altura = 120;4

//

var quarteirao3 = {}

quarteirao3.posicaoXAtual = 430;

quarteirao3.posicaoYAtual = 310;

quarteirao3.posicaoX = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + quarteirao3.posicaoXAtual;

quarteirao3.posicaoY = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + quarteirao3.posicaoYAtual;

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

    topouQuarteirao1EmBaixo = player1.posicaoX + player1.largura >= quarteirao3.posicaoX && player1.posicaoX <= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoY <= quarteirao3.posicaoY + quarteirao3.altura && player1.posicaoY + player1.altura >= quarteirao3.posicaoY + quarteirao3.altura && player1.posicaoY + player1.altura <= quarteirao3.posicaoX + quarteirao3.largura && player1.posicaoY + player1.altura >= quarteirao3.posicaoX;

    //ATUALIZAR POSICAO PLAYER1:

    player1.posicaoXGlobal = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + player1.posicaoX;
    player1.posicaoYGlobal = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + player1.posicaoY;

    //ATUALIZAR POSICAO CIVIL1:

    civil1.posicaoX = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + civil1.posicaoXAtual;
    civil1.posicaoY = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + civil1.posicaoYAtual;

    //ATUALIZAR POSICAO FIXO CIVIL1:

    civil1.posicaoXFixo = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + 740; //

    civil1.posicaoYFixo = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + 20; //   

    //IMAGEM CIDADE 1 POSICAO FIXA NORTE:

    cidade1.imagem.margemNorte = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte;
    cidade1.imagem.margemSul = cidade1.imagem.posicaoY + cidade1.imagem.height - cidade1.imagem.posicaoYRecorte;
    cidade1.imagem.margemLeste = cidade1.imagem.posicaoX + cidade1.imagem.width - cidade1.imagem.posicaoXRecorte;
    cidade1.imagem.margemOeste = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte;

    //ATUALIZAR POSICAO AREA 1:

    quarteirao3.posicaoX = cidade1.imagem.posicaoX - cidade1.imagem.posicaoXRecorte + quarteirao3.posicaoXAtual;
    quarteirao3.posicaoY = cidade1.imagem.posicaoY - cidade1.imagem.posicaoYRecorte + quarteirao3.posicaoYAtual;

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

    //CODIÇÃO INIMIGO EM ALERTA:

    if ((player1.posicaoX - civil1.posicaoX) - (player1.posicaoY - civil1.posicaoY) >= -distanciaInimigo && (player1.posicaoX - civil1.posicaoX) - (player1.posicaoY - civil1.posicaoY) <= distanciaInimigo)
    {
        alertaInimigo = true;

    } else
    {
        alertaInimigo = false;
    }

    // LIMPA A TELA LESTE
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasLeste.clearRect(0, 0, telaCanvasLeste.width, telaCanvasLeste.height);
   
    ///////////////////////////////////
    //CANVAS PRINCIPAL

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
        contextoTelaCanvasPrincipal.drawImage(cidade1.imagem, cidade1.imagem.posicaoXRecorte, cidade1.imagem.posicaoYRecorte, cidade1.imagem.larguraRecorte, cidade1.imagem.alturaRecorte, cidade1.imagem.posicaoX, cidade1.imagem.posicaoY, cidade1.imagem.largura, cidade1.imagem.altura);

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

                    if (cidade1.imagem.posicaoYRecorte <= 0)
                    {
                        cidade1.imagem.posicaoYRecorte = cidade1.imagem.posicaoYRecorte;
                    } else
                    {
                        cidade1.imagem.posicaoYRecorte -= player1.velocidade;

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

                    if (cidade1.imagem.posicaoYRecorte >= cidade1.imagem.height - telaCanvasPrincipal.height)
                    {
                        cidade1.imagem.posicaoYRecorte = cidade1.imagem.posicaoYRecorte;
                    } else
                    {
                        cidade1.imagem.posicaoYRecorte += player1.velocidade;

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

                    if (cidade1.imagem.posicaoXRecorte >= cidade1.imagem.width - telaCanvasPrincipal.width)
                    {
                        cidade1.imagem.posicaoXRecorte = cidade1.imagem.posicaoXRecorte;
                    } else
                    {
                        cidade1.imagem.posicaoXRecorte += player1.velocidade;
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

                    if (cidade1.imagem.posicaoXRecorte <= 0)
                    {
                        cidade1.imagem.posicaoXRecorte = cidade1.imagem.posicaoXRecorte;
                    } else
                    {
                        cidade1.imagem.posicaoXRecorte -= player1.velocidade;
                    }
                }
            }
        } else
        {
            if (controle1.teclaSetaParaCimaPressionada != controle1.teclaSetaParaBaixoPressionada)
            {
              imagemParado(player1);              
            }
        }


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

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO PLAYER 1:

        contextoTelaCanvasPrincipal.drawImage(player1.imagem, player1.imagemPosInicialX, player1.imagemPosInicialY, player1.imagemCorteLargura, player1.imagemCorteAltura, player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        // DESENHA RETANGULO - PLAYER 1       
        contextoTelaCanvasPrincipal.fillRect(player1.posicaoX, player1.posicaoY, player1.largura, player1.altura);

        //
        contextoTelaCanvasPrincipal.fillStyle = "rgba(255,0,255,0.0)";

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO CIVIL 1:

        contextoTelaCanvasPrincipal.drawImage(civil1.imagem, civil1.imagemPosInicialX, civil1.imagemPosInicialY, civil1.imagemCorteLargura, civil1.imagemCorteAltura, civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);
        

        // DESENHA RETANGULO - CIVIL 1       
        contextoTelaCanvasPrincipal.fillRect(civil1.posicaoX, civil1.posicaoY, civil1.largura, civil1.altura);

        // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 2: 
        //contextoTelaCanvasPrincipal.fill();

        //// DESENHANDO LINHAS:

        // DEFINE A LARGURA DE LINHA:
        contextoTelaCanvasPrincipal.lineWidth = 3;

        //

        contextoTelaCanvasPrincipal.fillStyle = "rgba(200,200,200,1)";

        contextoTelaCanvasPrincipal.fillRect(quarteirao3.posicaoX, quarteirao3.posicaoY, quarteirao3.largura, quarteirao3.altura);


        // SE loopAlerta TRUE:
        if (loopAlerta)
        {
            // INIMIGO EM ALERTA:

            if (alertaInimigo)
            {
                //SE SAIR DO MAPA PELO NORTE:
                if (civil1.posicaoY < cidade1.imagem.margemNorte)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO SUL:
                else if (civil1.posicaoY + civil1.altura > cidade1.imagem.margemSul)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO LESTE:
                else if (civil1.posicaoX + civil1.largura > cidade1.imagem.margemLeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO OESTE:
                else if (civil1.posicaoX < cidade1.imagem.margemOeste)
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
                if (civil1.posicaoY < cidade1.imagem.margemNorte)
                {
                    civil1.direcaoY = 1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO SUL:
                else if (civil1.posicaoY + civil1.altura > cidade1.imagem.margemSul)
                {
                    civil1.direcaoY = -1;
                    civil1.direcaoX = 0;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO LESTE:
                else if (civil1.posicaoX + civil1.largura > cidade1.imagem.margemLeste)
                {
                    civil1.direcaoY = 0;
                    civil1.direcaoX = -1;
                    civil1.posicaoXAtual += civil1.direcaoX;
                    civil1.posicaoYAtual += civil1.direcaoY;
                }
                //SE SAIR DO MAPA PELO OESTE:
                else if (civil1.posicaoX < cidade1.imagem.margemOeste)
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

            //SE loopAlerta É FALSE:
        } else
        {
            status12.innerHTML = "loopAlerta Desligado!"
        }
        loop = requestAnimationFrame(loopDesenho);
    }
    //SE canvasPrincipalLigado É FALSE:
    else
    {
        status12.innerHTML = "Canvas Desligado!"
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

/* CANVAS
 /*
 
    // LIMPA A AREA ESPECIFICADA DO DESENHO
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasPrincipal.clearRect(0, 0, telaCanvasPrincipal.width, telaCanvasPrincipal.height);

    // LIMPA A TELA OESTE
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasOeste.clearRect(0, 0, telaCanvasOeste.width, telaCanvasOeste.height);
    
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

        // LINHAS EM CURVA:
        /*
            contextoTelaCanvasPrincipal.beginPath();
            contextoTelaCanvasPrincipal.moveTo(0, 0);
            contextoTelaCanvasPrincipal.quadraticCurveTo(250, 500, 500, 0);
            contextoTelaCanvasPrincipal.stroke();
            contextoTelaCanvasPrincipal.closePath();    
        */

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