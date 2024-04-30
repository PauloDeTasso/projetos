<!-- Botão para abrir a pesquisa avançada -->
<button id="btnAbrirPesquisaPorTexto">
    <span class="icon-search"></span>
</button>
<!-- Campo de pesquisa (inicialmente oculto) -->
<div id="secaoPesquisaPorTexto">

    <button id="btnAbrirPesquisaAvancada">
        Pesquisa Avançada
    </button>

    <section id="subSecaoPesquisaPorTexto">

        <span id="btnFecharPesquisaPorTexto">x</span>

        <input type="text" id="entradaPesquisaPorTexto" placeholder="Digite sua pesquisa...">

        <button id="btnIrPesquisaPorTexto">
            <span id="iconeIr"></span>
        </button>

    </section>

</div>

<section id="secaoPesquisaAvancada">

    <span id="btnFecharPesquisaAvancada">x</span>

    <h1>Pesquisa Avançada</h1>
    <form action="/produtos/pesquisar" method="GET">
        <!-- Seleção de produto -->
        <label for="selecao">Selecione o tipo da peça:</label>
        <select id="selecao" name="selecao">
            <option value="">TODAS AS PEÇAS</option>
            <?php
            // Lista de produtos obtidos do arquivo telaHeaderTipo1.php
            $produtos = [
                "T-SHIRT",
                "CROPPED",
                "BLUSAS",
                "VESTIDOS",
                "SAIAS",
                "SHORT'S",
                "CALÇAS",
                "CONJUNTOS"
            ];

            // Gerar as opções do menu de seleção de produtos
            foreach ($produtos as $produto) {
                echo "<option value='$produto'>$produto</option>";
            }
            ?>
        </select>

        <!-- Adicione um checkbox para a opção "POR PREÇO" -->

        <section class="sessãoFiltrosCheck">

            <section id="secaoFiltroPreco">

                <!-- Seção de filtro por preço -->
                <input type="checkbox" id="porPrecoCheckbox">
                <label for="porPrecoCheckbox">FILTRAR POR PREÇO</label>

                <section id="filtroPreco">
                    <label for="filtro_preco_maximo" id="label_filtro_preco_maximo">PEÇAS ATÉ NO MÁXIMO?</label>
                    <p>R$ <span id="filtro_preco_maximo_valor">1000</span></p>
                    <input type="range" id="filtro_preco_maximo" name="filtro_preco_maximo" min="0" max="2000" value="1000">
                </section>

            </section>

            <section id="secaoFiltroTamanho">

                <!-- Campo para tamanho -->
                <input type="checkbox" id="porTamanhoCheckbox">
                <label for="porTamanhoCheckbox">FILTRAR POR TAMANHO</label>

                <section id="filtroTamanho">
                    <select id="tamanho" name="tamanho">
                        <option value="">Selecione um tamanho</option>
                        <?php
                        // Tamanhos disponíveis
                        $tamanhos = [
                            "P",
                            "M",
                            "G",
                            "GG"
                        ];
                        // Gerar as opções do menu de seleção de tamanhos
                        foreach ($tamanhos as $tamanho) {
                            $tamanhoMinusculo = strtolower($tamanho);
                            echo "<option value='$tamanhoMinusculo'>$tamanho</option>";
                        }
                        ?>
                    </select>
                </section>
            </section>

            <!-- Seção de filtro por cor -->
            <section id="secaoFiltroCor">
                <input type="checkbox" id="porCorCheckbox">
                <label for="porCorCheckbox">FILTRAR POR COR</label>

                <section id="filtroCor">
                    <select id="corSelect" name="corSelect">
                        <option value="">Selecione uma cor</option>
                        <?php
                        // Cores disponíveis
                        $cores = [
                            "Preto",
                            "Branco",
                            "Vermelho",
                            "Azul",
                            "Verde",
                            "Amarelo",
                            "Roxo",
                            "Rosa",
                            "Laranja",
                            "Cinza",
                            "Marrom",
                            "Bege",
                            "Creme"
                        ];

                        // Gerar as opções do menu de seleção de cores
                        foreach ($cores as $cor) {
                            $corMinusculo = strtolower($cor); // Converter para minúsculas para usar como valor
                            echo "<option value='$corMinusculo'>$cor</option>";
                        }
                        ?>
                    </select>
                </section>
            </section>

            <section id="secaoFiltroPromocao">
                <!-- Checkbox para produtos em promoção -->
                <input type="checkbox" id="porPromocaoCheckbox" name="porPromocaoCheckbox" value="0">
                <label for="porPromocaoCheckbox">FILTRAR EM PROMOÇÃO</label>
            </section>

            <!-- SESSÃO FILTRO POR DISPONIBILIDADE -->
            <div id="secaoFiltroDisponibilidade">
                <input type="checkbox" id="porDisponibilidadeCheckbox">
                <label for="porDisponibilidadeCheckbox">FILTRAR POR DISPONÍVEL</label>
            </div>


            <section class="secaoBotoesFormularioPesquisaAvancada">
                <!-- Botão de limpar campos -->
                <button id="btnLimpar01" type="button" onclick="limparCampos()">Limpar</button>
                <!-- Botão de pesquisa -->
                <button id="btnPesquisar01" type="button" onclick="pesquisaAvancada()">Pesquisar</button>
            </section>

        </section>

    </form>

</section>

<style>
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /********************************************************************/
    /*PESQUISA AVANÇADA*/
    /* Estilos para a seção de Pesquisa Avançada */

    /* Estilo para o botão de abrir a pesquisa avançada */
    #btnAbrirPesquisaPorTexto {
        position: absolute;
        top: 50px;
        right: 80px;
        width: auto;
        height: auto;
        margin-bottom: 10px;
        background-color: rgba(0, 0, 0, 0);
        color: white;
        padding: 5px 10px;
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 20;
    }

    /* Adicione esta classe para o ícone de pesquisa */
    .icon-search {
        display: inline-block;
        width: 25px;
        /* Ajuste o tamanho do ícone conforme necessário */
        height: 25px;
        /* Ajuste o tamanho do ícone conforme necessário */
        background-image: url('http://localhost/api/public/recursos/imagens/icones/pesquisa001.png');
        /* Substitua 'caminho/para/sua/imagem-de-pesquisa.png' pela URL da sua imagem */
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 5px;
        /* Ajuste o espaçamento entre o ícone e o texto conforme necessário */
        vertical-align: middle;
        cursor: pointer;
        transition: width 0.5s ease, height 0.5s ease;
    }

    .icon-search:hover {
        width: 30px;
        height: 30px;
    }

    #secaoPesquisaPorTexto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 20%;
        width: 90%;
        height: auto;
        margin: 0px;
        border: 1px solid rgb(232, 84, 163);
        border-radius: 10px;
        padding: 10px;
        background-color: #ffade4;
        font-size: small;
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s ease-in-out, visibility 1s linear 1s, top 1s ease-in-out;
        z-index: 21;
    }

    #btnFecharPesquisaPorTexto {
        position: absolute;
        top: 3px;
        right: 5px;
        width: auto;
        height: auto;
        padding: 1px 5px 1px 5px;
        border: 2px solid rgba(236, 236, 236, 0.5);
        border-radius: 30px;
        background-color: #ff5050;
        cursor: pointer;
        font-size: x-small;
    }

    #btnFecharPesquisaPorTexto:hover {
        border: 2px solid rgba(255, 255, 255, 1);
    }

    #subSecaoPesquisaPorTexto {
        display: flex;
        flex-direction: row;
        width: 94%;
        height: auto;
        margin: 0px;
        border-radius: 10px;
        padding: 10px;
        background-color: #ffade4;
        font-size: small;
        transition: opacity 1s ease-in-out, visibility 1s linear 1s, top 1s ease-in-out;
        z-index: 999;
    }

    #secaoPesquisaPorTexto input {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 83%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        outline: none;
    }

    #btnIrPesquisaPorTexto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 5px;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
        color: white;
        border: none;
        cursor: pointer;
    }

    #btnAbrirPesquisaAvancada {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        position: relative;
        right: 23px;
        margin: 5px;
        padding: 5px 10px;
        color: white;
        background-color: #ff43a1;
        border: 2px solid rgba(255, 255, 255, .8);
        border-radius: 10px;
        cursor: pointer;
        z-index: 22;
    }

    #btnAbrirPesquisaAvancada:hover {
        background-color: #ff43bf;
        color: #eee;
        border: 2px solid rgba(255, 255, 255, 1);
        transition: background-color 1s, color 1s, border 1s;
    }

    #iconeIr {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 25px;
        height: 25px;
        background-image: url('http://localhost/api/public/recursos/imagens/icones/pesquisa001.png');
        background-size: cover;
        background-repeat: no-repeat;
        vertical-align: middle;
        cursor: pointer;
        z-index: 20;
        opacity: .5;
        transition: opacity .5s ease;
    }

    #iconeIr:hover {
        opacity: 1;
    }

    #secaoPesquisaPorTexto.aberta {
        animation: abrirPesquisaPorTexto 1s forwards ease-in-out;
        display: flex;
    }

    /* Animação para abrir a seção de pesquisa */
    @keyframes abrirPesquisaPorTexto {
        0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(0px);
            /* Move para cima */
        }

        100% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            /* Sem deslocamento vertical */
        }
    }

    #secaoPesquisaPorTexto:not(.aberta) {
        animation: fecharPesquisaPorTexto 1s forwards ease-in-out;
    }

    #secaoPesquisaAvancada {
        /* Mantenha a posição e o layout da seção */
        display: none;
        /* Definido como none inicialmente */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        top: 100px;
        width: 80%;
        height: auto;
        margin: 0px;
        margin-bottom: 10px;
        border: 1px solid rgb(232, 84, 163);
        border-radius: 10px;
        padding: 10px;
        background-color: #ffade4;
        font-size: small;
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s ease-in-out, visibility 1s linear 1s, top 1s ease-in-out;
        color: white;
        border: 2px solid rgba(255, 255, 255, .9);
        border-radius: 10px;
        cursor: pointer;
        z-index: 20;
    }

    #btnFecharPesquisaAvancada {
        position: absolute;
        top: 3px;
        right: 5px;
        width: auto;
        height: auto;
        padding: 1px 5px 1px 5px;
        border: 2px solid rgba(236, 236, 236, 0.5);
        border-radius: 30px;
        background-color: #ff5050;
        cursor: pointer;
        font-size: x-small;
        transition: border .5s ease;
    }

    #btnFecharPesquisaAvancada:hover {
        border: 2px solid rgba(255, 255, 255, 1);
    }

    #secaoPesquisaAvancada.aberta {
        /* Aplicar a animação ao abrir e manter a seção visível */
        animation: abrirPesquisaAvancada 1s forwards ease-in-out;
        display: flex;
    }

    /* Animação para abrir a seção de pesquisa */
    @keyframes abrirPesquisaAvancada {
        0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(0px);
            /* Move para cima */
        }

        100% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            /* Sem deslocamento vertical */
        }
    }

    #secaoPesquisaAvancada:not(.aberta) {
        /* Aplicar a animação ao fechar a seção */
        animation: fecharPesquisaAvancada 1s forwards ease-in-out;
    }

    /* Animação para fechar a seção de pesquisa */
    @keyframes fecharPesquisaAvancada {
        0% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            /* Sem deslocamento vertical */
        }

        100% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(0px);
            /* Move para cima */
        }
    }

    #secaoPesquisaAvancada h1 {
        font-size: x-large;
        margin: 5px;
    }

    #secaoPesquisaAvancada form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #secaoPesquisaAvancada label {
        margin: 5px;
    }

    #secaoPesquisaAvancada select,
    #secaoPesquisaAvancada input {
        margin: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: auto;
    }

    .secaoBotoesFormularioPesquisaAvancada {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        padding: 5px;
        margin-bottom: 5px;
    }

    #btnPesquisar01 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 5px;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: #ff43a1;
        color: white;
        border: none;
        cursor: pointer;
    }

    /* Estilize o botão de reset para torná-lo mais visível e clicável */
    #btnLimpar01 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 5px;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: #ccc;
        color: #333;
        border: none;
        cursor: pointer;
    }

    #btnPesquisar01:hover {
        background-color: #ff3381;
        /* Altera a cor de fundo ao passar o mouse */
        transition: background-color 0.3s;
        /* Adiciona uma transição suave */
    }

    #btnLimpar01:hover {
        background-color: #999;
        /* Altera a cor de fundo ao passar o mouse */
        color: #fff;
        /* Altera a cor do texto ao passar o mouse */
        transition: background-color 0.3s, color 0.3s;
        /* Adiciona uma transição suave */
    }

    /*sessãoFiltrosCheck*/
    .sessãoFiltrosCheck {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, .1);
        /* Altera a cor de fundo ao passar o mouse */
    }

    #selecao {
        text-align: center;
    }

    /********************************************************************/
    /*SESSÃO FILTRO POR PREÇO*/
    /* Estilo para a seção de filtro por preço */
    #secaoFiltroPreco {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        height: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        ;
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    /* Estilo para a seção de filtro por preço */
    #filtroPreco {
        display: none;
        /* Inicialmente oculta */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
        /* Altera a cor de fundo ao passar o mouse */
        transition: display 0.5s ease;
        /* Adiciona uma transição suave */
    }

    /* Estilo para o texto do checkbox */
    label[for="porPrecoCheckbox"] {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-align: center;
        width: 80%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    #porPrecoCheckbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    /********************************************************************/
    /*SESSÃO FILTRO POR TAMANHO*/
    #secaoFiltroTamanho {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        height: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    #filtroTamanho {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
        border: 5px solid rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    /* Estilo para o texto do checkbox */
    label[for="porTamanhoCheckbox"] {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-align: center;
        width: 80%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    #porTamanhoCheckbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    /********************************************************************/
    /*POR CORES*/
    #secaoFiltroCor {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        height: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    #filtroCor {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: auto;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
        border: 5px solid rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    /* Estilo para o texto do checkbox de cor */
    label[for="porCorCheckbox"] {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-align: center;
        width: 80%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    #porCorCheckbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    /********************************************************************/
    /*SESSÃO FILTRO POR PROMOCAO*/
    #secaoFiltroPromocao {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        height: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        ;
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    /* Estilo para o texto do checkbox */
    label[for="porPromocaoCheckbox"] {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-align: center;
        width: 80%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    #porPromocaoCheckbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    /********************************************************************/
    /*POR DISPONIBILIDADE*/
    /* Estilo para a seção de filtro por disponibilidade */
    #secaoFiltroDisponibilidade {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        height: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        ;
        background-color: rgba(0, 0, 0, 0);
        transition: display 0.5s ease;
    }

    /* Estilo para o texto do checkbox de disponibilidade */
    label[for="porDisponibilidadeCheckbox"] {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-align: center;
        width: 80%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    #porDisponibilidadeCheckbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 20%;
        height: auto;
        margin: 0%;
        padding: 0px 0px;
        border-radius: 10px;
        margin-right: 0px;
    }

    /**/

    #secaoPesquisaAvancada label,
    p {
        color: #000000;
        font-weight: 700;
        font-size: small;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
    }
</style>

<script>
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /***********************************************************/
    /**/
    var seletorPesquisaAvancadaPrincipal = document.getElementById("selecao");
    // Obtém o botão e a caixa de pesquisa
    const btnAbrirPesquisaPorTexto = document.getElementById('btnAbrirPesquisaPorTexto');

    const btnAbrirPesquisaAvancada = document.getElementById('btnAbrirPesquisaAvancada');

    const secaoPesquisaPorTexto = document.getElementById('secaoPesquisaPorTexto');

    //const secaoPesquisaAvancada = document.getElementById('secaoPesquisaAvancada');

    const btnFecharPesquisaPorTexto = document.getElementById('btnFecharPesquisaPorTexto');

    const btnFecharPesquisaAvancada = document.getElementById('btnFecharPesquisaAvancada');

    // Adiciona um ouvinte de evento para o botão
    btnAbrirPesquisaPorTexto.addEventListener('click', function() {
        secaoPesquisaPorTexto.classList.toggle('aberta');
        document.getElementById('secaoPesquisaAvancada').classList.remove('aberta');
    });

    // Adiciona um ouvinte de evento para o botão
    btnFecharPesquisaPorTexto.addEventListener('click', function() {
        secaoPesquisaPorTexto.classList.remove('aberta');
    });

    // Adiciona um ouvinte de evento para o botão
    btnFecharPesquisaAvancada.addEventListener('click', function() {
        document.getElementById('secaoPesquisaAvancada').classList.remove('aberta');
    });

    // Adiciona um ouvinte de evento para o botão
    btnAbrirPesquisaAvancada.addEventListener('click', function() {
        document.getElementById('secaoPesquisaAvancada').classList.add('aberta');
        secaoPesquisaPorTexto.classList.remove('aberta');
    });

    // Obtém os elementos de input e o span para exibir o valor
    var filtroPrecoMaximoInput = document.getElementById("filtro_preco_maximo");
    var filtroPrecoMaximoValor = document.getElementById("filtro_preco_maximo_valor");

    // Atualiza o valor exibido ao mover o controle deslizante
    filtroPrecoMaximoInput.addEventListener("input", function() {
        filtroPrecoMaximoValor.innerHTML = filtroPrecoMaximoInput.value;
    });

    /*BOTAO RESET 1*/
    function limparCampos() {
        // Limpa o seletor de tipo de peça, definindo o primeiro item como selecionado
        seletorPesquisaAvancadaPrincipal.selectedIndex = 0;

        // Limpa o campo de filtro de preço, definindo o valor padrão
        document.getElementById("filtro_preco_maximo").value = 1000;
        // Atualiza o valor exibido do filtro de preço
        filtroPrecoMaximoValor.innerHTML = filtro_preco_maximo.value;

        // Desmarca o checkbox de filtro por preço
        document.getElementById('porPrecoCheckbox').checked = false;

        // Desmarca o checkbox de filtro por tamanho
        document.getElementById('porTamanhoCheckbox').checked = false;
        // Esconde a seção de filtro por tamanho
        document.getElementById('filtroTamanho').style.display = 'none';

        // Reseta o seletor de tamanho, selecionando a opção padrão
        document.getElementById('tamanho').selectedIndex = 0;

        // Desmarca todos os checkboxes de filtro por cor
        document.getElementById('corSelect').selectedIndex = 0;
        // Esconde a seção de filtro por cor
        document.getElementById('filtroCor').style.display = 'none';

        // Desmarca o checkbox de filtro por cor
        document.getElementById('porCorCheckbox').checked = false;

        // Desmarca o checkbox de filtro por promoção
        document.getElementById('porPromocaoCheckbox').checked = false;

        // Desmarca o checkbox de filtro por promoção
        document.getElementById('porDisponibilidadeCheckbox').checked = false;
    }

    /*CHECK BOX FILTRO POR PREÇO*/
    // Obtém o checkbox e a seção de filtro por preço
    const porPrecoCheckbox = document.getElementById('porPrecoCheckbox');
    const filtroPreco = document.getElementById('filtroPreco');

    // Adiciona um ouvinte de evento para o checkbox
    porPrecoCheckbox.addEventListener('change', function() {
        // Verifica se o checkbox está marcado
        if (this.checked) {
            // Abre a seção de filtro por preço
            filtroPreco.style.display = 'flex';
        } else {
            // Fecha a seção de filtro por preço
            filtroPreco.style.display = 'none';
        }
    });

    /*CHECK BOX FILTRO POR TAMANHO*/
    // Obtém o checkbox e a seção de filtro por preço
    const porTamanhoCheckbox = document.getElementById('porTamanhoCheckbox');
    const filtroTamanho = document.getElementById('filtroTamanho');

    // Adiciona um ouvinte de evento para o checkbox
    porTamanhoCheckbox.addEventListener('change', function() {
        // Verifica se o checkbox está marcado
        if (this.checked) {
            // Abre a seção de filtro por preço
            filtroTamanho.style.display = 'flex';
        } else {
            // Fecha a seção de filtro por preço
            filtroTamanho.style.display = 'none';
        }
    });

    /*******************************************************************/
    /**/
    /*CHECK BOX FILTRO POR CORES*/
    // Obtém o checkbox e a seção de filtro por cor
    const porCorCheckbox = document.getElementById('porCorCheckbox');
    const filtroCor = document.getElementById('filtroCor');

    // Adiciona um ouvinte de evento para o checkbox de filtro por cor
    porCorCheckbox.addEventListener('change', function() {
        // Verifica se o checkbox está marcado
        if (this.checked) {
            // Abre a seção de filtro por cor
            filtroCor.style.display = 'block';
        } else {
            // Fecha a seção de filtro por cor
            filtroCor.style.display = 'none';
        }
    });


    /**/

    /*NOME DINAMICO PARA SELEÇÃO NA PESQUISA INICIAL*/
    // Adiciona um ouvinte de evento ao elemento select
    seletorPesquisaAvancadaPrincipal.addEventListener("change", function() {
        // Obtém o valor selecionado
        var pecaSelecionada = this.options[this.selectedIndex].value;

        // Atualiza o texto do rótulo substituindo apenas "Peças"
        var label_filtro_preco_maximo = document.getElementById("label_filtro_preco_maximo");
        if (pecaSelecionada == "") {
            label_filtro_preco_maximo.innerText = "PEÇAS ATÉ NO MÁXIMO?"
            selecaoValor = "todas";
        } else {
            label_filtro_preco_maximo.innerText = pecaSelecionada + " ATÉ NO MÁXIMO?"
            selecaoValor = pecaSelecionada;
        }
    });

    /*******************************************************************/
    /*ENVIAR PESQUISA AVANÇADA*/

    // Adiciona um ouvinte de evento para o botão de pesquisa
    function pesquisaAvancada() {
        // Inicializa a string de parâmetros da URL
        let parametros = "";

        var selecaoValor = "";
        var pecaSelecionada = seletorPesquisaAvancadaPrincipal.options[seletorPesquisaAvancadaPrincipal.selectedIndex]
            .value;
        if (pecaSelecionada == "") {
            selecaoValor = "todas";
            parametros += `tipo=${selecaoValor}&`;
        } else {
            selecaoValor = pecaSelecionada;
            parametros += `tipo=${selecaoValor}&`;
        }

        // Verifica se o checkbox de filtro por preço está marcado
        const porPrecoCheckbox = document.getElementById('porPrecoCheckbox');
        if (porPrecoCheckbox.checked) {
            // Adiciona o valor do filtro de preço à string de parâmetros
            const filtroPrecoMaximo = document.getElementById('filtro_preco_maximo').value;
            parametros += `preco=${filtroPrecoMaximo}&`;
        }

        // Verifica se o checkbox de filtro por tamanho está marcado
        const porTamanhoCheckbox = document.getElementById('porTamanhoCheckbox');
        if (porTamanhoCheckbox.checked) {
            // Adiciona o valor do filtro de tamanho à string de parâmetros
            const tamanhoSelecionado = document.getElementById('tamanho').value;
            if (tamanhoSelecionado == "") {
                parametros = parametros;
            } else {
                parametros += `tamanho=${tamanhoSelecionado}&`;
            }
        }

        // Verifica se o checkbox de filtro por cor está marcado
        const porCorCheckbox = document.getElementById('porCorCheckbox');
        if (porCorCheckbox.checked) {
            // Adiciona o valor do filtro de tamanho à string de parâmetros
            const corSelecionada = document.getElementById('corSelect').value;
            if (corSelecionada == "") {
                parametros = parametros;
            } else {
                parametros += `cor=${corSelecionada}&`;
            }
        }

        // Verifica se o checkbox de filtro por disponibilidade está marcado
        const porDisponibilidadeCheckbox = document.getElementById('porDisponibilidadeCheckbox');
        if (porDisponibilidadeCheckbox.checked) {
            // Adiciona o filtro por disponibilidade à string de parâmetros
            parametros += `disponibilidade=1&`;
        }

        // Verifica se o checkbox de filtro por promoção está marcado
        const porPromocaoCheckbox = document.getElementById('porPromocaoCheckbox');
        if (porPromocaoCheckbox.checked) {
            // Adiciona o filtro por promoção à string de parâmetros
            parametros += `promocao=1&`;
        }

        // Remove o último "&" da string de parâmetros, se houver
        parametros = parametros.slice(0, -1);

        // Constrói a URL da requisição GET com base nos parâmetros
        let url = "/produtos/pesquisaavancada/";
        if (parametros !== "") {
            url += `?${parametros}`;
        } else {
            // Se nenhum filtro estiver selecionado, enviar apenas o valor do seletor de produto
            url += parametros;
        }

        // Redireciona para a URL da requisição GET
        window.location.href = url;
    }


    /*******************************************************************/
    /* BOTAO PESQUISAR POR TEXTO */
    document.getElementById("btnIrPesquisaPorTexto").addEventListener("click", function() {
        // Obter o texto digitado no campo de pesquisa
        var entradaPesquisaPorTexto = document.getElementById("entradaPesquisaPorTexto").value;

        // Codificar o texto para que ele seja seguro para URL
        var textoCodificado = encodeURIComponent(entradaPesquisaPorTexto);

        // Redirecionar para a página de pesquisa com o texto como parâmetro de consulta
        window.location.href = "/produtos/pesquisa?textoPesquisado=" + textoCodificado;
    });
</script>