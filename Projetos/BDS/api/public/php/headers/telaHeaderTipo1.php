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
                    <li><a href="#" onclick="enviarRequisicao('/inicio')">INICIO</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/produtos?root=menu')">TODOS OS PRODUTOS</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=tshirts')">T-SHIRT</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=cropped')">CROPPED</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=blusas')">BLUSAS</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=vestidos')">VESTIDOS</a></li>
                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=saias')">SAIAS</a>
                        <span class="arrow-icon" onclick="alternarSubitens(event,'subitemsSaias')">▼</span>
                        <ul class="subitemsSaias">
                            <li>
                                <a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=saias&subcategoria=jeans')">JEANS</a>
                            </li>
                            <li>
                                <a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=saias&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>

                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=shorts')">SHORTS</a>
                        <span class="arrow-icon" onclick="alternarSubitens(event,'subitemsShorts')">▼</span>
                        <ul class="subitemsShorts">
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=shorts&subcategoria=jeans')">JEANS</a>
                            </li>
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=shorts&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>

                    <li class="parent-item">
                        <a href="#" onclick="enviarRequisicao('/produtos/?categoria=calcas')">CALÇAS</a>
                        <span class="arrow-icon" onclick="alternarSubitens(event,'subitemsCalcas')">▼</span>
                        <ul class="subitemsCalcas">
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=calcas&subcategoria=jeans')">JEANS</a>
                            </li>
                            <li><a href="#"
                                    onclick="enviarRequisicao('/produtos/?categoria=calcas&subcategoria=tecido')">TECIDO</a>
                            </li>
                        </ul>
                    </li>


                    <li><a href="#" onclick="enviarRequisicao('/produtos/?categoria=conjuntos')">CONJUNTOS</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/minhaconta')">MINHA CONTA</a></li>
                    <li><a href="#" onclick="enviarRequisicao('/sobre')">SOBRE NÓS</a></li>
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

            <style>
            .subitemsSaias,
            .subitemsShorts,
            .subitemsCalcas {
                visibility: hidden;
                opacity: 0;
                max-height: 0;
                overflow: hidden;
                transition: opacity 1s ease, visibility 1s ease, max-height 1s ease;
            }

            .menuLateral .subitemsSaias.show,
            .menuLateral .subitemsShorts.show,
            .menuLateral .subitemsCalcas.show {
                visibility: visible;
                opacity: 1;
                max-height: 500px;
            }

            /* Estilo para o ícone da seta */
            .menuLateral .parent-item .arrow-icon {
                cursor: pointer;
                position: relative;
                top: -10px;
                right: -100px;
                padding: 0px;
                margin: 0px;
            }

            .menuLateral .subitemsSaias li a,
            .menuLateral .subitemsShorts li a,
            .menuLateral .subitemsCalcas li a {
                padding: 10px;
                padding-left: 50px;
                transition: opacity 1s ease;
            }

            .menuLateral ul ul li {
                border: 0px solid black;
            }
            </style>

            <script>
            function alternarSubitens(evento, classeSubitens) {
                const iconeSeta = evento.target; // O ícone da seta é o próprio alvo do evento
                const subitens = document.querySelector('.' + classeSubitens); // Seleciona os subitens correspondentes

                subitens.classList.toggle('show'); // Alternar a classe para exibir ou ocultar os subitens

                // Alternar a direção da seta com base na visibilidade dos subitens
                if (subitens.classList.contains('show')) {
                    iconeSeta.innerHTML = '&#9650;'; // Define a seta para cima quando os subitens estão visíveis
                } else {
                    iconeSeta.innerHTML = '&#9660;'; // Define a seta para baixo quando os subitens estão ocultos
                }
            }
            </script>