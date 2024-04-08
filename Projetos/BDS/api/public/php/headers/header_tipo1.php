        <!DOCTYPE html>
        <html lang="pt-BR">

        <!--------------------------------------------------------------->

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Página Inicial</title>
            <link rel="stylesheet" href="<?php echo $urlCssMobile768 ?>" media="screen and (max-width: 768px)" />
            <link rel="stylesheet" href="<?php echo $urlCssPcMin768 ?>" media="screen and (min-width: 768px)" />
            <link rel="icon" href="<?php echo $favIcon ?>" type="image/x-icon">
            <link rel="shortcut icon" href="<?php echo $favIcon ?>" type="image/x-icon">

        </head>

        <body>
            <!-------------------------HEADER---------------------------->

            <!-----------------------LOGIN / CADASTRO------------------------------>
            <header id="loginCadastro">

                <div id="naoLogado">
                    <a href="login.html" class="links">entrar</a>
                    <span class="divisor">|</span>
                    <a href="cadastro.html" class="links">cadastre-se</a>
                </div>
            </header>


            <!----------------------TELA OCULTA PARA CAPTAÇÃO DE CLICK------------------------------->

            <div class="overlay" id="overlay"></div>

            <!----------------------MENU_HAMBUGUER - LOGO - CARRINHO ------------------------------->
            <section class="cabecalho">
                <section class="secaoHamburguerMenu">
                    <div class="hamburguerMenu"></div>
                </section>
                <div class="logoPng001"></div>
                <div class="iconeCarrinho"></div>
                <div class="itensCarrinho">0</div>
            </section>

            <!-------------------------MENU LATERAL---------------------------->
            <aside class="menuLateral" id="menuLateral">
                <div class="secaoBotaoPesquisar">
                    <input type="search" name="pesquisa" id="campoPesquisa" placeholder="Pesquisar..." />
                    <button id="btnPesquisar">Ir</button>
                </div>

                <ul>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/home')">HOME</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/produtos')">TODOS OS PRODUTOS</a>
                    </li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/1')">T-SHIRT</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/2')">CROPPED</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/blusas')">BLUSAS</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/vestidos')">VESTIDOS</a></li>
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
                        <a href="api/public/php/mains/todos_os_produtos.php">SOBRE NÓS</a>
                    </li>
                    <hr />
                </ul>
            </aside>