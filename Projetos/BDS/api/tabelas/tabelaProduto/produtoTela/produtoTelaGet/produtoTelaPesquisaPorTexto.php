<section class="todosOsProdutos">
    <?php
    require_once $telaProdutoOrdenacao;

    // Decodificar os dados dos produtos pesquisados por texto
    $produtos_pesquisados_db = json_decode($produtosPesquisadosPorTextoJson, true);

    // Função de comparação para ordenar os tamanhos
    function compararTamanhos($a, $b)
    {
        $tamanhos_ordem = array("PP", "P", "M", "G", "GG", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60");
        $indice_a = array_search($a, $tamanhos_ordem);
        $indice_b = array_search($b, $tamanhos_ordem);
        return $indice_a - $indice_b;
    }

    // Iterar sobre os produtos pesquisados por texto para criar o HTML correspondente
    foreach ($produtos_pesquisados_db as $produto) {
        // Verificar se há uma imagem para o produto
        $primeira_imagem = isset($produto['imagens'][0]['urlImagem']) ? $produto['imagens'][0]['urlImagem'] : '';

        // Exibir as informações do produto
        echo '<div class="produto">';
        echo '<div class="imagem" style="background-image: url(\'' . $primeira_imagem . '\')"></div>';
        echo '<div class="detalhes">';
        echo '<h2>' . $produto['nomeProduto'] . '</h2>';
        echo '<p>Preço: R$' . number_format($produto['precoProduto'], 2, ',', '.') . '</p>';

        // Agrupar tamanhos únicos e ordená-los
        $tamanhos_unicos = array_unique($produto['tamanhos']);
        usort($tamanhos_unicos, 'compararTamanhos');

        // Exibir os tamanhos disponíveis
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
</section>

<style>
.todosOsProdutos {
    position: relative;
    top: 130px;
    margin-bottom: 130px;
    width: 94%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.produto:hover {
    box-shadow: 2px 4px 8px rgba(255, 70, 140, 0.4);
}

.imagem {
    width: 100%;
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
    margin-top: 5px;
    margin-bottom: 5px;
}

.tamanhos ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.tamanhos li {
    width: 20px;
    height: 20px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    font-size: x-small;
    font-weight: 600;
    padding: 1px;
}
</style>