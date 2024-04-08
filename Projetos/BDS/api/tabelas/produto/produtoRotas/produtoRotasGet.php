<?php

if (!isset($subUri[1]))
{
    // Importar as classes necessárias
    require_once $produtoControle;

    // Criar uma instância do objeto de controle do produto
    $produtoControle = new ProdutoControle();

    $produtos_json = $produtoControle->listarProdutos();

    require_once $headerTipo01;
    require_once $todosOsProdutos;
    require_once $footerTipo01;
    exit();
}
//PRODUTOS/ID
else if (is_numeric($subUri[1]))
{

    // Importar as classes necessárias
    require_once $produtoControle;

    // Criar uma instância do objeto de controle do produto
    $produtoControle = new ProdutoControle();

    // Buscar o produto com base no ID fornecido na URI
    $produto = $produtoControle->buscarProduto($subUri[1]);

    require_once $headerTipo01;
    require_once $produtoEspecifico;
    require_once $footerTipo01;
    //exit();

}
else if ($subUri[1] == 'pesquisa' && isset($subUri[2]))
{
    // Importar as classes necessárias
    require_once $produtoControle;

    // Criar uma instância do objeto de controle do produto
    $produtoControle = new ProdutoControle();

    // Pesquisar produtos com base no texto fornecido na URI
    $produtosPesquisadosPorTexto = $produtoControle->pesquisarPorTexto($subUri[2]);

    require_once $headerTipo01;
    // Verifique se há produtos retornados pela pesquisa
    if (!empty($produtosPesquisadosPorTexto))
    {
        // Se houver produtos, inclua a página de exibição de resultados
        require_once "api/tabelas/produto/produtoTela/produtoTelaPesquisaPorTexto.php";
    }
    else
    {
        // Se não houver produtos, inclua uma página de mensagem indicando isso
        require_once "api/tabelas/produto/produtoTela/produtoTelaErro.php";
    }
    require_once $footerTipo01;
    exit();
}
else
{
    http_response_code(400);
    echo json_encode(array("Erro:" => "A URI ($uri) é inválida!"), JSON_UNESCAPED_UNICODE);
}
