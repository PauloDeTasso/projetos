        <!DOCTYPE html>
        <html lang="pt-BR">

        <!--------------------------------------------------------------->

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bella Donna Store</title>
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
                        <a href="#" onclick="enviarRequisicao('/inicio')">INICIO</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/produtos?root=menu')">TODOS OS PRODUTOS</a>
                    </li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=tshirts')">T-SHIRT</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=cropped')">CROPPED</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=blusas')">BLUSAS</a></li>
                    <hr />
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=vestidos')">VESTIDOS</a></li>
                    <hr />
                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=saias')">SAIAS:</a>
                        <ul class="subitems">
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=saias&subcategoria=jeans')">JEANS</a>
                            </li>
                            <hr />
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=saias&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=shorts')">SHORT'S:</a>
                        <ul class="subitems">
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=shorts&subcategoria=jeans')">JEANS</a>
                            </li>
                            <hr />
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=shorts&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=calcas')">CALÇAS:</a>
                        <ul class="subitems">
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=calcas&subcategoria=jeans')">JEANS</a>
                            </li>
                            <hr />
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=calcas&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=conjuntos')">CONJUNTOS</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/minhaconta')">MINHA CONTA</a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" onclick="enviarRequisicao('/sobre')">SOBRE NÓS</a>
                    </li>
                    <hr />
                </ul>
            </aside>

            <!-------------------------TOAST---------------------------->
            <div id=" toast" class="toast">
                <div class="toast-titulo" id="toast-titulo"></div>
                <div class="toast-mensagem" id="toast-mensagem"></div>
                <div class="toast-recomendacao" id="toast-recomendacao"></div>
            </div>


            <!-------------------------PESQUISA---------------------------->
            <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>


            <?php
            require $telaProdutoPesquisaAvancada;
            ?>