<!-- Conteúdo da lista de produtos -->
<div class="secaoConteudoPrincipalTodosOsProdutos">

    <?php
    // Integre o JSON diretamente no JavaScript
    $produtos = json_decode($produtos_json);
    foreach ($produtos as $produto)
    {
        echo "<div class='produto'>";
        echo "<h2>{$produto->nomeProduto}</h2>";
        echo "<p><strong>Descrição:</strong> {$produto->descricaoProduto}</p>";
        echo "<p><strong>Preço:</strong> \${$produto->precoProduto}</p>";
        echo "<p><strong>Disponível:</strong> " . ($produto->disponivelProduto ? "Sim" : "Não") . "</p>";
        echo "</div>";
    }
    ?>
</div>