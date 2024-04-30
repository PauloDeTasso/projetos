<section class="secaoConteudoPrincipalTodosOsProdutos">

    <?php require_once $telaProdutoOrdenacao; ?>

    <section class="todosOsProdutos">

        <?php

        // Decodifica os dados dos produtos
        $produtos_db = json_decode($produtos_json, true);
        /*
        echo '<pre>';
        print_r($produtos_db);
        echo '</pre>';
        */
        // Função de comparação para ordenar os tamanhos
        function compararTamanhos($a, $b)
        {
            global $tamanhos_ordem;
            $indice_a = array_search($a, $tamanhos_ordem);
            $indice_b = array_search($b, $tamanhos_ordem);
            return $indice_a - $indice_b;
        }

        // Array com a ordem desejada dos tamanhos
        $tamanhos_ordem = array("PP", "P", "M", "G", "GG", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60");

        // Itera sobre os produtos para criar o HTML correspondente
        $produtos_exibidos = []; // Para armazenar nomes de produtos já exibidos
        foreach ($produtos_db as $produto) {
            // Verifica se o produto já foi exibido
            if (in_array($produto['nomeProduto'], $produtos_exibidos)) {
                continue; // Se já foi exibido, pula para o próximo produto
            }

            // Adiciona o nome do produto aos exibidos
            $produtos_exibidos[] = $produto['nomeProduto'];

            // Pega a primeira imagem do produto, se houver
            $primeira_imagem = isset($produto['imagens'][0]['urlImagem']) ? $produto['imagens'][0]['urlImagem'] : '';

            echo '<div class="produto" onclick="exibirDadosProduto(' . $produto['idProduto'] . ')">';
            echo '<div class="imagem" style="background-image: url(\'' . $primeira_imagem . '\')"></div>';
            echo '<div class="detalhes">';
            echo '<h2>' . $produto['nomeProduto'] . '</h2>';
            echo '<p>Preço: R$' . number_format($produto['precoProduto'], 2, ',', '.') . '</p>';

            // Agrupa tamanhos únicos
            $tamanhos_unicos = array_unique(array_merge(...array_column(array_filter($produtos_db, function ($p) use ($produto) {
                return $p['nomeProduto'] === $produto['nomeProduto'];
            }), 'tamanhos')));

            // Ordenar os tamanhos
            usort($tamanhos_unicos, 'compararTamanhos');

            echo '<div class="tamanhos">';
            echo '<ul>';
            foreach ($tamanhos_unicos as $tamanho) {
                echo '<li>' . $tamanho . '</li>';
            }
            echo '</ul>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }
        ?>
        <div id="toast2" class="toast2"></div>

    </section>

</section>

<style>
    .todosOsProdutos {
        position: relative;
        top: 30px;
        margin-bottom: 130px;
        width: 94%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /*grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));*/
        gap: 5px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .produto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 90%;
        border: 0px solid #4a4a4a;
        border-radius: 8px;
        margin: 5px;
        background-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

    }

    .produto:hover {
        box-shadow: 0px 0px 8px rgba(255, 070, 140, 0.5);
    }

    .imagem {
        width: 100%;
        /* Defina a proporção de aspecto usando padding-bottom: 200% (o dobro da largura) */
        padding-bottom: 200%;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .detalhes h2 {
        font-size: small;
        margin: 0;
        margin-bottom: 5px;
        font-weight: 100;
    }

    .detalhes p {
        font-size: small;
        color: #2a2a2a;
        margin: 0;
        margin-bottom: 10px;
        font-weight: 500;
    }

    .tamanhos {
        display: flex;
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .tamanhos ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 2px;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .tamanhos li {
        width: 20px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        margin-right: 0px;
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        font-size: x-small;
        font-weight: 600;
        padding: 1px;
    }
</style>

<script>
    var produtos_db = <?php echo json_encode($produtos_db); ?>;

    function exibirDadosProduto(idProduto) {

        var produto = produtos_db.find(function(p) {
            return p.idProduto === idProduto;
        });

        if (produto) {

            var toast2 = document.getElementById("toast2");

            // Limpa o conteúdo anterior do toast2
            toast2.innerHTML = "";

            // Adiciona cada propriedade do produto ao toast2
            for (var chave in produto) {

                if (produto.hasOwnProperty(chave)) {
                    var linha = document.createElement("div");
                    linha.innerHTML = chave + ": " + produto[chave];
                    toast2.appendChild(linha);
                }
            }

            // Exibe o toast2 apenas se houver dados
            if (toast2.children.length > 0) {
                toast2.style.display = "block";
                // Oculta o toast2 após 5 segundos
                setTimeout(function() {
                    toast2.style.display = "none";
                }, 10000);
            }

        } else {
            alert("Produto não encontrado.");
        }
    }
</script>

<style>
    #toast2 {
        display: none;
        position: fixed;
        top: 30%;
        padding: 10px;
        background-color: #333;
        color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        text-align: center;
    }
</style>