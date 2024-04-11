<?php
//PRODUTO
$produtoControleGet = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoControle/produtoControleGet.php';

//TELAS
$telaTodosOsProdutos = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoTela/produtoTelaGet/produtoTelaTodosOsProdutos.php';
$telaProdutoEspecifico = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoTela/produtoTelaGet/produtoTelaProdutoEspecifico.php';
$telaProdutoPesquisadoPorTexto = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoTela/produtoTelaGet/produtoTelaPesquisaPorTexto.php';
$telaProdutoErro = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoTela/produtoTelaErro.php';

if ($subUri[0] === 'produtos' && !isset($subUri[1]))
{
    // Importar as classes necessárias
    require_once $produtoControleGet;

    $produtos_json = ProdutoControleGet::listarProdutos();

    if (empty($produtos_json))
    {
        // Definir o tipo de erro e a mensagem detalhada
        $tipo_erro = 'Sem dados de produtos';
        $mensagem_erro = 'Não existem produtos para exibir.';

        // Redirecionar para a página de erro com o tipo de erro e mensagem
        header('Location: /produtos/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro));
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaTodosOsProdutos;
    require_once $telaFooterTipo01;
    exit();
}
//PRODUTOS/ID
else if (is_numeric($subUri[1]))
{

    // Importar as classes necessárias
    require_once $produtoControleGet;

    // Criar uma instância do objeto de controle do produto
    $produtoControleGet = new produtoControleGet();

    // Buscar o produto com base no ID fornecido na URI
    $produto = $produtoControleGet->buscarProduto($subUri[1]);

    require_once $telaHeaderTipo01;
    require_once $telaProdutoEspecifico;
    require_once $telaFooterTipo01;
    //exit();

}
else if ($subUri[1] == 'pesquisa' && isset($subUri[2]))
{
    // Importar as classes necessárias
    require_once $produtoControleGet;

    $produtosPesquisadosPorTexto = ProdutoControleGet::pesquisarPorTexto($subUri[2]);

    require_once $telaHeaderTipo01;
    // Verifique se há produtos retornados pela pesquisa
    if (!empty($produtosPesquisadosPorTexto))
    {
        // Se houver produtos, inclua a página de exibição de resultados
        require_once $telaProdutoPesquisadoPorTexto;
    }
    else
    {
        // Se não houver produtos, inclua uma página de mensagem indicando isso
        require_once $telaProdutoErro;
    }
    require_once $telaFooterTipo01;
    exit();
} // Verifica se há parâmetros de preço mínimo e máximo na URI
else if (isset($_GET['preco_min']) && isset($_GET['preco_max']))
{
    $preco_min = $_GET['preco_min'];
    $preco_max = $_GET['preco_max'];
    require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoControle/produtoControleGet.php';
    $produtoControleGet = new ProdutoControleGet();
    echo $produtoControleGet->listarProdutos($preco_min, $preco_max);
}
else

    // Roteamento para a página de erro
    if ($subUri[0] === 'produtos' && $subUri[1] === 'erro')
    {
        // Verificar se os parâmetros 'erro' e 'mensagem' estão presentes na URL
        if (isset($_GET['erro']) && isset($_GET['mensagem']))
        {
            $tipo_erro = $_GET['erro'];
            $mensagem_erro = $_GET['mensagem'];

            require_once $telaHeaderTipo01;
            require_once $telaProdutoErro;
            require_once $telaFooterTipo01;
            exit();
        }
        else
        {
            // Caso não haja parâmetros de erro e mensagem na URL, exibir uma mensagem padrão
            echo "<p>Ocorreu um erro inesperado.</p>";
        }
        exit();
    }
    else
    {
        http_response_code(400);
        echo json_encode(array("Erro:" => "A URI ($uri) é inválida!"), JSON_UNESCAPED_UNICODE);
    }