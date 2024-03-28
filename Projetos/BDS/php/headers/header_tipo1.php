<!DOCTYPE html>
<html lang="pt-BR">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Página Inicial</title>
        <link rel="stylesheet" href="<?php echo $urlCssMobile768 ?>" media="screen and (max-width: 768px)" />
        <link rel="stylesheet" href="<?php echo $urlCssPcMin769 ?>" media="screen and (min-width: 769px)" />

    </head>

    <body>
        <!-------------------------MENU LATERAL---------------------------->

        <aside class="menuLateral" id="menuLateral">
            <div class="secaoBotaoPesquisar">
                <input type="search" name="pesquisa" placeholder="Pesquisar..." />
                <button id="btnPesquisar">Ir</button>
            </div>
            <ul>
                <hr />
                <li>
                    <a href="#" onclick="enviarRequisicao('todos')">TODOS OS PRODUTOS</a>
                </li>
                <hr />
                <li><a href="#" onclick="enviarRequisicao('tshirt')">T-SHIRT</a></li>
                <hr />
                <li><a href="#" onclick="enviarRequisicao('cropped')">CROPPED</a></li>
                <hr />
                <li><a href="#" onclick="enviarRequisicao('blusas')">BLUSAS</a></li>
                <hr />
                <li><a href="#" onclick="enviarRequisicao('vestidos')">VESTIDOS</a></li>
                <hr />
                <li class="parent-item">
                    <a href="#">SAIAS:</a>
                    <ul class="subitems">
                        <li><a href="#" onclick="enviarRequisicao('jeans')">JEANS</a></li>
                        <hr />
                        <li><a href="#" onclick="enviarRequisicao('tecido')">TECIDO</a></li>
                    </ul>
                </li>
                <hr />
                <li class="parent-item">
                    <a href="#">SHORT'S:</a>
                    <ul class="subitems">
                        <li><a href="#" onclick="enviarRequisicao('jeans')">JEANS</a></li>
                        <hr />
                        <li><a href="#" onclick="enviarRequisicao('tecido')">TECIDO</a></li>
                    </ul>
                </li>
                <hr />
                <li class="parent-item">
                    <a href="#">CALÇAS:</a>
                    <ul class="subitems">
                        <li><a href="#" onclick="enviarRequisicao('jeans')">JEANS</a></li>
                        <hr />
                        <li><a href="#" onclick="enviarRequisicao('tecido')">TECIDO</a></li>
                    </ul>
                </li>
                <hr />
                <li>
                    <a href="#" onclick="enviarRequisicao('conjuntos')">CONJUNTOS</a>
                </li>
                <hr />
                <li>
                    <a href="#" onclick="enviarRequisicao('minhaconta')">MINHA CONTA</a>
                </li>
                <hr />
                <li>
                    <a href="#" onclick="enviarRequisicao('sobrenos')">SOBRE NÓS</a>
                </li>
                <hr />
            </ul>
        </aside>

        <!----------------------TELA OCULTA PARA CAPTAÇÃO DE CLICK------------------------------->

        <div class="overlay" id="overlay"></div>

        <!------------------------HAMBURGUER, LOGO E CARRINHO---------------------------->

        <section class="cabecalho">
            <section class="secaoHamburguerMenu">
                <div class="hamburguerMenu"></div>
            </section>
            <div class="logoPng001"></div>
            <div class="iconeCarrinho"></div>
            <div class="itensCarrinho">0</div>
        </section>

        <!----------------------------------------------------->