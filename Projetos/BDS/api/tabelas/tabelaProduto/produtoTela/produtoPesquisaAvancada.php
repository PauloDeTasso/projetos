<!-- Botão para abrir a pesquisa avançada -->
<button id="btnAbrirPesquisa01">
    <span class="icon-search"></span>
</button>

<section id="secaoPesquisa01">
    <h1>Pesquisar</h1>
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
            foreach ($produtos as $produto)
            {
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
                    <input type="range" id="filtro_preco_maximo" name="filtro_preco_maximo" min="0" max="2000"
                        value="1000">
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
                        foreach ($tamanhos as $tamanho)
                        {
                            echo "<option value='$tamanho'>$tamanho</option>";
                        }
                        ?>
                    </select>
                </section>

            </section>

        </section>

        <!-- Botão de pesquisa -->
        <button id="btnPesquisar01" type="button" onclick="pesquisaAvancada()">Pesquisar</button>
        <!-- Botão de limpar campos -->
        <button id="btnLimpar01" type="button" onclick="limparCampos()">Limpar</button>

    </form>

</section>