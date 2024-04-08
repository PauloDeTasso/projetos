<!-------------------------CONTEUDO CENTRAL---------------------------->

<?php
// Converter a string JSON de volta para um array associativo
$produto_array = json_decode($produto, true);

// Verificar se a conversão foi bem-sucedida
if ($produto_array === null) {
    // Tratar caso a conversão falhe
    echo "Erro ao decodificar o JSON.";
} else {
    // Exibir os detalhes do produto
?>
<div class="secaoConteudoPrincipalProdutoEspecifico">
    <div class="product">
        <h2>Detalhes do Produto</h2>
        <ul>
            <?php foreach ($produto_array as $chave => $valor) : ?>
            <li><strong><?php echo $chave; ?>:</strong> <?php echo $valor; ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
<?php
}
?>