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

            <!-- Seção de filtro por cor -->
            <section id="secaoFiltroCor">
                <input type="checkbox" id="porCorCheckbox">
                <label for="porCorCheckbox">FILTRAR POR COR</label>
                <section id="filtroCor">
                    <label>Escolha a(s) cor(es):</label>
                    <div id="opcoesCores">
                        <!-- Checkbox para cada cor -->
                        <div class="opcaoCor">
                            <input type="checkbox" id="corVermelha" value="vermelho">
                            <label for="corVermelha" class="corVisual" style="background-color: red;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corAzul" value="azul">
                            <label for="corAzul" class="corVisual" style="background-color: blue;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corVerde" value="verde">
                            <label for="corVerde" class="corVisual" style="background-color: green;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corBranca" value="branca">
                            <label for="corBranca" class="corVisual" style="background-color: white;"></label>
                        </div>
                        <!-- Mais cores comuns em roupas femininas -->
                        <div class="opcaoCor">
                            <input type="checkbox" id="corRosa" value="rosa">
                            <label for="corRosa" class="corVisual" style="background-color: pink;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corAmarela" value="amarela">
                            <label for="corAmarela" class="corVisual" style="background-color: yellow;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corLaranja" value="laranja">
                            <label for="corLaranja" class="corVisual" style="background-color: orange;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corRoxa" value="roxa">
                            <label for="corRoxa" class="corVisual" style="background-color: purple;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corMarrom" value="marrom">
                            <label for="corMarrom" class="corVisual" style="background-color: brown;"></label>
                        </div>
                        <div class="opcaoCor">
                            <input type="checkbox" id="corCinza" value="cinza">
                            <label for="corCinza" class="corVisual" style="background-color: gray;"></label>
                        </div>
                        <!-- Adicione mais cores aqui -->
                    </div>
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