<!-- Conteúdo da lista de produtos -->
<div class="secaoConteudoPrincipalTodosOsProdutos">

    <div id="product-list">
        <?php
        // Integre o JSON diretamente no JavaScript
        $produtos = json_decode($produtos_json);
        foreach ($produtos as $product) {
            echo "<div class='product'>";
            echo "<h2>{$product->nomeProduto}</h2>";
            echo "<p><strong>Descrição:</strong> {$product->descricaoProduto}</p>";
            echo "<p><strong>Preço:</strong> \${$product->precoProduto}</p>";
            echo "<p><strong>Disponível:</strong> " . ($product->disponivelProduto ? "Sim" : "Não") . "</p>";
            echo "</div>";
        }
        ?>
    </div>
</div>