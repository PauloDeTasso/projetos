<!-- Conteúdo da lista de produtos -->
<div class="secaoConteudoPrincipalTodosOsProdutos">

    <div id="product-list">
        <?php
        // Verifique se há produtos retornados pela pesquisa
        if (!empty($produtosPesquisadosPorTexto))
        {
            // Verifique se $produtosPesquisadosPorTexto é uma string antes de tentar decodificá-lo como JSON
            if (is_string($produtosPesquisadosPorTexto))
            {
                // Decodifique o JSON em um array associativo, garantindo que seja codificado em UTF-8
                $produtos = json_decode($produtosPesquisadosPorTexto, true);

                // Verifique se a decodificação do JSON foi bem-sucedida
                if ($produtos !== null)
                {
                    foreach ($produtos as $product)
                    {
                        // Verifique se os campos dos produtos estão em UTF-8 antes de tentar convertê-los
                        $nomeProduto = mb_check_encoding($product['nomeProduto'], 'UTF-8') ? $product['nomeProduto'] : mb_convert_encoding($product['nomeProduto'], 'UTF-8');
                        $descricaoProduto = mb_check_encoding($product['descricaoProduto'], 'UTF-8') ? $product['descricaoProduto'] : mb_convert_encoding($product['descricaoProduto'], 'UTF-8');
                        $precoProduto = mb_check_encoding($product['precoProduto'], 'UTF-8') ? $product['precoProduto'] : mb_convert_encoding($product['precoProduto'], 'UTF-8');
                        $disponivelProduto = mb_check_encoding($product['disponivelProduto'], 'UTF-8') ? $product['disponivelProduto'] : mb_convert_encoding($product['disponivelProduto'], 'UTF-8');

                        echo "<div class='product'>";
                        echo "<h2>{$nomeProduto}</h2>";
                        echo "<p><strong>Descrição:</strong> {$descricaoProduto}</p>";
                        echo "<p><strong>Preço:</strong> \${$precoProduto}</p>";
                        echo "<p><strong>Disponível:</strong> " . ($disponivelProduto ? "Sim" : "Não") . "</p>";
                        echo "</div>";
                    }
                }
                else
                {
                    // Se houver um erro na decodificação do JSON, exiba uma mensagem de erro
                    echo "<p>Erro ao decodificar os dados JSON.</p>";
                }
            }
            else
            {
                // Se $produtosPesquisadosPorTexto já for um array, use-o diretamente
                foreach ($produtosPesquisadosPorTexto as $product)
                {
                    // Exibir produtos diretamente, assumindo que já estão em UTF-8
                    echo "<div class='product'>";
                    echo "<h2>{$product['nomeProduto']}</h2>";
                    echo "<p><strong>Descrição:</strong> {$product['descricaoProduto']}</p>";
                    echo "<p><strong>Preço:</strong> \${$product['precoProduto']}</p>";
                    echo "<p><strong>Disponível:</strong> " . ($product['disponivelProduto'] ? "Sim" : "Não") . "</p>";
                    echo "</div>";
                }
            }
        }
        else
        {
            // Se não houver produtos encontrados, exiba uma mensagem adequada
            echo "<p>Nenhum produto encontrado para a pesquisa.</p>";
        }
        ?>
    </div>
</div>