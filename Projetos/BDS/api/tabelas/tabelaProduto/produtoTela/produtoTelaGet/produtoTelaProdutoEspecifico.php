<?php
// Supondo que $produtoJson contenha seu JSON

// Decodificar o JSON para um objeto PHP
$produtoEspecifico = json_decode($produtoJson);

// Verificar se a decodificação foi bem-sucedida
if (
    ($produtoEspecifico === null) && (json_last_error() !== JSON_ERROR_NONE)
)
{
    echo "<div class='secaoConteudoPrincipalProdutoEspecifico'>
            <h1>Erro ao decodificar o JSON.</h1>
          </div>";
}
else
{
    // Exibição do conteúdo com as classes CSS
    echo "<div class='secaoConteudoPrincipalProdutoEspecifico'>
            <div class='produto'>";

    // Iterar sobre as propriedades do objeto
    foreach ($produtoEspecifico as $chave => $valor)
    {
        // Exibir o nome da propriedade e seu valor
        echo "<p><strong>$chave:</strong> $valor</p>";
    }
    echo "</div></div>";
}
