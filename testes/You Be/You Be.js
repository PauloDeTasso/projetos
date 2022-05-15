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
    limparTela(telaCanvasPrincipal, contextoTelaCanvasPrincipal);

    if (canvasPrincipalLigado)
    {
        //ATUALIZAR POSICAO DA IMAGEM CIDADE 1:
        atualizarPosicao(cidade1);

        //ATUALIZAR POSICAO PLAYER1:
        atualizarPosicao(player1, cidade1);

        //ATUALIZAR POSICAO CIVIL1:
        atualizarPosicao(civil1, cidade1);

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

        //SE PLAYER 1 APROXIMAR DE CIVIL1:
        alertaInimigo(player1, civil1);

        //AUTOMOTIZA CIVIL1:
        elementoEmAlerta(civil1, player1, cidade1);

        //RECARREGADA PAGINA QUANDO OS ELEMENTOS DE BODY CARREGA:
        recarregarPagina();

        //ATUALIZAR STATUS DO SISTEMA:
        statusSistema();

        //DESENHOS TESTES:
        /*
                contextoTelaCanvasPrincipal.fillStyle = "rgba(200,200,200,1)";
        
                contextoTelaCanvasPrincipal.fillRect(quarteirao3.posicaoX, quarteirao3.posicaoY, quarteirao3.largura, quarteirao3.altura);
        */

        //LOOP DESENHO:
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