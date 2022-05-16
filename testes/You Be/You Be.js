//

civil2.posicaoXAtual = 0;
civil2.posicaoYAtual = 0;

civil2.posicaoXMorada = 0;
civil2.posicaoYMorada = 0;

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
    //LIMPA TELA CANVAS PRINCIPAL:
    limparTela(telaCanvasPrincipal, contextoTelaCanvasPrincipal);

    if (canvasPrincipalLigado)
    {
        //ATUALIZAR POSICAO DA IMAGEM CIDADE 1:
        atualizarPosicao(cidade1);

        //ATUALIZAR POSICAO PLAYER1:
        atualizarPosicao(player1, cidade1);

        //ATUALIZAR POSICAO CIVIL1:
        atualizarPosicao(civil1, cidade1);

        //ATUALIZAR POSICAO CIVIL2:
        atualizarPosicao(civil2, cidade1);

        //ATUALIZAR POSICÕES PROIBIDAS:
        atualizarPosicao();

        //DESENHA CIDADE;
        desenharCidade(contextoTelaCanvasPrincipal, cidade1);

        //ATUALIZAR AS SOMBRAS:
        atualizarSombras();

        //DEFINE OS CONTROLES DE MOVIMENTO DO PLAYER1:
        movimentosPlayer();

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO PLAYER 1:
        desenharImagensElemento(contextoTelaCanvasPrincipal, player1);

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO CIVIL 1:
        desenharImagensElemento(contextoTelaCanvasPrincipal, civil1);

        //DEFINE AS IMAGENS EM SPRITE DO ELEMENTO CIVIL 2:
        desenharImagensElemento(contextoTelaCanvasPrincipal, civil2);

        //SE PLAYER 1 APROXIMAR DE CIVIL1:
        alertaInimigo(player1, civil1);

        //SE PLAYER 1 APROXIMAR DE CIVIL2:
        alertaInimigo(player1, civil2);

        //AUTOMATIZA CIVIL1:
        elementoEmAlerta(civil1, player1);

        //AUTOMATIZA CIVIL2:
        elementoEmAlerta(civil2, player1);

        // PONTOS DE INTERAÇÃO:
        atualizarInteracoes();

        //ATUALIZAR STATUS DO SISTEMA:
        statusSistema();

        /*
        contextoTelaCanvasPrincipal.beginPath();
 
        contextoTelaCanvasPrincipal.fillStyle = "rgba(0,0,0,1)";
 
        contextoTelaCanvasPrincipal.lineWidth = 10;
        
                contextoTelaCanvasPrincipal.moveTo(quarteirao3.posicaoX + 50, (quarteirao3.posicaoY + quarteirao3.altura));
        
                contextoTelaCanvasPrincipal.lineTo((quarteirao3.posicaoX + 100), (quarteirao3.posicaoY + quarteirao3.altura));
        
                contextoTelaCanvasPrincipal.lineTo((quarteirao3.posicaoX + 100), (quarteirao3.posicaoY + quarteirao3.altura + 50));
        
                contextoTelaCanvasPrincipal.lineTo((quarteirao3.posicaoX + 50), (quarteirao3.posicaoY + quarteirao3.altura + 50));
      
        contextoTelaCanvasPrincipal.fillRect((quarteirao3.posicaoX + 50), (quarteirao3.posicaoY + quarteirao3.altura), 50, 50);
 
        contextoTelaCanvasPrincipal.stroke();
 
        contextoTelaCanvasPrincipal.fill();
 
        contextoTelaCanvasPrincipal.closePath();
        /*
 
        //DESENHOS TESTES:
        /*
                contextoTelaCanvasPrincipal.fillStyle = "rgba(200,200,200,1)";
        
                contextoTelaCanvasPrincipal.fillRect(quarteirao3.posicaoX, quarteirao3.posicaoY, quarteirao3.largura, quarteirao3.altura);
        */

        //LOOP DESENHO:
        loop = requestAnimationFrame(loopDesenho);
        // loop = setInterval(loopDesenho, 0);
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