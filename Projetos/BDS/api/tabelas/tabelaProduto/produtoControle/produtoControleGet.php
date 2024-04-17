<?php

require_once $tabelaGenericaDaoGet;

$nomeDesseArquivo = basename(__FILE__, '.php');

/*******************************************************************/
//URI = /produtos
if ($subUri[0] === 'produtos' && !isset($subUri[1]))
{
    try
    {
        $produtos_db = TabelaGenericaDaoGet::listarTodos($nomeDesseArquivo);
        $produtos_json = json_encode($produtos_db);
    }
    catch (PDOException $e)
    {
        if (isset($_GET['root']) && $_GET['root'] === 'menu')
        {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
        }
        else if (isset($_GET['root']) && $_GET['root'] === 'produtos')
        {
            require_once $telaHeaderTipo01;
            require_once $telaProdutoPesquisa;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
        }
    }

    if (empty($produtos_json))
    {
        if (isset($_GET['root']) && $_GET['root'] === 'menu')
        {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Falha na obtenção dos dados!', 'Não foi possivel se conectar com os nossos registros no momento', 'Por favor, verifique sua conecção ou tente mais tarde.');
        }
        else if (isset($_GET['root']) && $_GET['root'] === 'produtos')
        {
            require_once $telaHeaderTipo01;
            require_once $telaProdutoPesquisa;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
        }
    }

    require_once $telaHeaderTipo01;
    require_once $telaProdutoPesquisaAvancada;
    require_once $telaTodosOsProdutos;
    require_once $telaFooterTipo01;
    exit();
}

/****************************************************************** */
//URI = /produtos/{NUMERO}}
else if ($subUri[0] === 'produtos' && isset($subUri[1]) && is_numeric($subUri[1]) && !isset($subUri[2]))
{
    $idProduto = $subUri[1];
    require_once $protecaoDeEntrada;
    try
    {
        // Proteger contra injeção de SQL
        $idProdutoVerificado = ProtecaoDeEntrada::validarTexto($idProduto);

        $produtoDb = TabelaGenericaDaoGet::buscarPorID($idProdutoVerificado, $nomeDesseArquivo);

        // Verifica se o produto foi encontrado
        if ($produtoDb)
        {
            $produtoJson = json_encode($produtoDb);
        }
        else
        {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Produto não Encontrado!', 'HTTP/1.1 404 Not Found', "O produto de ID: ($idProduto) não foi encontrado.");
            exit();
        }
    }
    catch (Exception $e)
    {
        header("");
        echo json_encode(array("message" => $e->getMessage()));
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        Utilidades::exibirToast('ERRO!', 'HTTP/1.1 500 Internal Server Error', "$e");
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaProdutoEspecifico;
    require_once $telaFooterTipo01;
}

/****************************************************************** */
//URI = /produtos/pesquisamenu/{TEXTO}
else if ($subUri[0] === 'produtos' && $subUri[1] == 'pesquisamenu' && isset($subUri[2]) && !isset($subUri[3]))
{
    $textoPesquisadoDecodificado = urldecode($subUri[2]);

    require_once $protecaoDeEntrada;
    require_once $validacaoDeEntrada;

    try
    {
        $textoPesquisadoValidado = ValidacaoDeEntrada::validarNome($textoPesquisadoDecodificado);

        if ($textoPesquisadoValidado)
        {
            $textoPesquisadoProtegido = ProtecaoDeEntrada::validarTexto($textoPesquisadoDecodificado);
        }
        else
        {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            Utilidades::exibirToast('Erro!', 'Texto inválido ', "O texto ($textoPesquisadoDecodificado) no campo de pesquisa é inválido.");
            exit();
        }
        $produtosPesquisadosPorTextoDb = TabelaGenericaDaoGet::pesquisarPorTextoColuna('nomeProduto', $textoPesquisadoProtegido, $nomeDesseArquivo);

        if (empty($produtosPesquisadosPorTextoDb))
        {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Produto não encontrado!', 'Tente novamente.', "O texto ($textoPesquisadoDecodificado) no campo de pesquisa não foi encontrado.");
        }
        else
        {
            $produtosPesquisadosPorTextoJson = json_encode($produtosPesquisadosPorTextoDb);
        }
    }
    catch (Exception $e)
    {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', $e);
    }
    require_once $telaHeaderTipo01;
    require_once $telaProdutoPesquisadoPorTexto;
    require_once $telaFooterTipo01;
    exit();
}

/****************************************************************** */
//URI = /produtos/?pmin={NUMERO}&pmax={NUMERO}
else if ($subUri[0] === 'produtos' && isset($_GET['preco_min']) && isset($_GET['preco_max']))
{
    $preco_min = $_GET['preco_min'];
    $preco_max = $_GET['preco_max'];
    require_once $produtoServicoGet;
    require_once $produtoDaoGet;
    echo ProdutoServicoGet::produtosPorPrecoMinMax($preco_min, $preco_max);
}

/****************************************************************** */
//URI = /produtos/promocao
else if ($subUri[0] === 'produtos' && $subUri[1] === 'promocao' && !isset($subUri[2]))
{
    try
    {
        $parametros = array('promocaoProduto' => 1);

        $produtos_db = TabelaGenericaDaoGet::filtrarRegistros($parametros, $nomeDesseArquivo);
        $produtos_json = json_encode($produtos_db);
    }
    catch (PDOException $e)
    {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
    }

    if (empty($produtos_json))
    {
        $tipo_erro = 'Erro de Dados:';
        $mensagem_erro = 'Não foi possivel se conectar com os nossos registros no momento.';
        $recomendacao = 'Por favor, verifique sua conecção ou tente mais tarde.';

        header('Location: /produtos/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro));
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaTodosOsProdutos;
    require_once $telaFooterTipo01;
    exit();
}

//URI = /produtos/promocao/marca
else if ($subUri[0] === 'produtos' && $subUri[1] === 'promocao' && $subUri[2] === 'marca' && !isset($subUri[3]))
{
    echo "<H1>PASSOU AQUI</H1>";
    try
    {
        $parametros = array('promocaoProduto' => 1, 'marcaId' => 1);

        $produtos_db = TabelaGenericaDaoGet::filtrarRegistros($parametros, $nomeDesseArquivo);
        $produtos_json = json_encode($produtos_db);
    }
    catch (PDOException $e)
    {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
    }

    if (empty($produtos_json))
    {
        $tipo_erro = 'Erro de Dados:';
        $mensagem_erro = 'Não foi possivel se conectar com os nossos registros no momento.';
        $recomendacao = 'Por favor, verifique sua conecção ou tente mais tarde.';

        header('Location: /produtos/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro));
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaTodosOsProdutos;
    require_once $telaFooterTipo01;
    exit();
}

/****************************************************************** */
/*
if (empty($produtos_json))
{
    $tipo_erro = 'Erro de Dados:';
    $mensagem_erro = 'Não foi possivel se conectar com os nossos registros no momento.';
    $recomendacao = 'Por favor, verifique sua conecção ou tente mais tarde.';

    header('Location: /produtos/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro). '&recomendacao=' . urlencode($recomendacao));
    exit();
}
*/
//URI = /produtos/erro/?erro=$tipo_erro&mensagem=$mensagem_erro
else if ($subUri[0] === 'produtos' && $subUri[1] === 'erro' && !isset($subUri[2]))
{
    if (isset($_GET['erro']) && isset($_GET['mensagem']))
    {
        $tipo_erro = $_GET['erro'];
        $mensagem_erro = $_GET['mensagem'];
        $recomendacao = $_GET['recomendacao'];
        require_once $telaHeaderTipo01;
        require_once $telaProdutoErro;
        require_once $telaFooterTipo01;
        exit();
    }
    else
    {
        $tipo_erro = "ERRO!";
        $mensagem_erro = "<p>Ocorreu um erro inesperado.</p>";
        require_once $telaHeaderTipo01;
        require_once $telaGenericaErro;
        require_once $telaFooterTipo01;
        exit();
    }
    exit();
}

/****************************************************************** */
//URI = INVALIDA
else
{
    require_once $telaHeaderTipo01;
    require_once $telaInicio;
    require_once $telaFooterTipo01;
    Utilidades::exibirToast('Erro de recurso!', 'URI inválida', "A URI ($uri) é inválida!");
    exit();
}
