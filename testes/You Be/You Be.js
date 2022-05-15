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

loopDesenho();

function loopDesenho()
{
    // LIMPA A TELA
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contextoTelaCanvasPrincipal.clearRect(0, 0, telaCanvasPrincipal.width, telaCanvasPrincipal.height);

    //ATUALIZAR IMAGEM CIDADE 1:

    atualizarPosicao(cidade1);

    //ATUALIZAR POSICAO PLAYER1:

    atualizarPosicao(player1, cidade1);

    //ATUALIZAR POSICAO CIVIL1:
    atualizarPosicao(civil1, cidade1);

    //ATUALIZAR POSICÕES PROIBIDAS:

    atualizarPosicao();

    //STATUS SISTEMA:

    statusSistema();

    //INIMIGOS EM ALERTA:

    alertaInimigo(player1, civil1);

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

                    if (quarteiraoEmBaixo(quarteirao3, player1))
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

                    if (quarteiraoEmCima(quarteirao3, player1))
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
                //     imagemParado(player1);
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

                    if (quarteiraoEsquerda(quarteirao3, player1))
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

                    if (quarteiraoDireita(quarteirao3, player1))
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
                //    imagemParado(player1);
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

            if (civil1.emAlerta)
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

        if (imagemCarregada)
        {
            if (paginaRecarregada >= 1)
            {

            } else
            {
                document.location.reload(false);
            }
        } else
        {
            // status12.innerHTML = "Aguarde... " + imagemCarregada + " - " + paginaRecarregada;
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