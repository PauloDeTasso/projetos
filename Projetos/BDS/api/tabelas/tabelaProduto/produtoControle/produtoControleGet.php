<?php

require_once $tabelaGenericaDaoGet;
require_once $produtoDaoGet;

$nomeDesseArquivo = basename(__FILE__, '.php');

/*******************************************************************/
// URI = /produtos
if ($subUri[0] === 'produtos' && !isset($subUri[1])) {
    if (!isset($_GET['categoria'])) {
        // Verifica se há um parâmetro de ordenação na URI
        $opcaoOrdenacao = isset($_GET['ordem']) ? $_GET['ordem'] : 'nomeAsc';

        try {
            $produtos_db = ProdutoDaoGet::listarTodosProdutosImagens($nomeDesseArquivo, $opcaoOrdenacao);
            $produtos_json = json_encode($produtos_db);
        } catch (PDOException $e) {
            // Tratamento de erro
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
            exit();
        }

        if (empty($produtos_json)) {
            // Tratamento de erro
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Falha na obtenção dos dados!', 'Não foi possível se conectar com os nossos registros no momento', 'Por favor, verifique sua conexão ou tente mais tarde.');
            exit();
        }

        // Renderiza a tela de pesquisa avançada e a lista de produtos
        require_once $telaHeaderTipo01;
        require_once $telaProdutoPesquisaAvancada;
        require_once $telaTodosOsProdutos;
        require_once $telaFooterTipo01;
        exit();
    } else {
        // Se a categoria foi fornecida
        $categoria = $_GET['categoria'];

        // Se a subcategoria também foi fornecida
        if (isset($_GET['subcategoria'])) {
            $subcategoria = $_GET['subcategoria'];
        } else {
            $subcategoria = null;
        }

        // Verifica se há um parâmetro de ordenação na URI
        $opcaoOrdenacao = isset($_GET['ordem']) ? $_GET['ordem'] : 'nomeAsc';

        // Lista os produtos com base na categoria e subcategoria (se fornecidos)
        try {
            $produtos_db = ProdutoDaoGet::listarProdutosPorCategoriaSubcategoria($categoria, $subcategoria, $opcaoOrdenacao);
            $produtos_json = json_encode($produtos_db);
        } catch (PDOException $e) {
            // Tratamento de erro
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
            exit();
        }

        if (empty($produtos_json)) {
            // Tratamento de erro
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Falha na obtenção dos dados!', 'Não foi possível se conectar com os nossos registros no momento', 'Por favor, verifique sua conexão ou tente mais tarde.');
            exit();
        }

        // Renderiza a tela de pesquisa avançada e a lista de produtos
        require_once $telaHeaderTipo01;
        require_once $telaProdutoPesquisaAvancada;
        require_once $telaTodosOsProdutos;
        require_once $telaFooterTipo01;
        exit();
    }
}

/****************************************************************** */
//URI = /produtos/{NUMERO}}
else if ($subUri[0] === 'produtos' && isset($subUri[1]) && is_numeric($subUri[1]) && !isset($subUri[2])) {
    $idProduto = $subUri[1];
    require_once $protecaoDeEntrada;
    try {
        // Proteger contra injeção de SQL
        $idProdutoVerificado = ProtecaoDeEntrada::validarTexto($idProduto);

        $produtoDb = TabelaGenericaDaoGet::buscarPorID($idProdutoVerificado, $nomeDesseArquivo);

        // Verifica se o produto foi encontrado
        if ($produtoDb) {
            $produtoJson = json_encode($produtoDb);
        } else {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Produto não Encontrado!', 'HTTP/1.1 404 Not Found', "O produto de ID: ($idProduto) não foi encontrado.");
            exit();
        }
    } catch (Exception $e) {
        header("");
        echo json_encode(array("message" => $e->getMessage()));
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        require_once $tabelaUtilidades;
        Utilidades::exibirToast('ERRO!', 'HTTP/1.1 500 Internal Server Error', "$e");
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaProdutoEspecifico;
    require_once $telaFooterTipo01;
}

/****************************************************************** */
//URI = /produtos/pesquisamenu/{TEXTO}
else if (($subUri[0] === 'produtos') && ($subUri[1] == 'pesquisamenu') ||
    ($subUri[1] == 'pesquisa') && isset($_GET['textoPesquisa'])
) {
    // Verifica se há um parâmetro de ordenação na URI
    $opcaoOrdenacao = isset($_GET['ordem']) ? $_GET['ordem'] : 'nomeAsc';

    $textoPesquisadoDecodificado = urldecode($_GET['textoPesquisa']);

    require_once $protecaoDeEntrada;
    require_once $validacaoDeEntrada;

    try {
        $textoPesquisadoValidado = ValidacaoDeEntrada::validarNome($textoPesquisadoDecodificado);

        if ($textoPesquisadoValidado) {
            $textoPesquisadoProtegido = ProtecaoDeEntrada::validarTexto($textoPesquisadoDecodificado);
        } else {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Erro!', 'Texto inválido ', "O texto ($textoPesquisadoDecodificado) no campo de pesquisa é inválido.");
            exit();
        }

        $produtos_db = ProdutoDaoGet::pesquisarProdutos($textoPesquisadoProtegido, $opcaoOrdenacao);

        if (empty($produtos_db)) {
            require_once $telaHeaderTipo01;
            require_once $telaInicio;
            require_once $telaFooterTipo01;
            require_once $tabelaUtilidades;
            Utilidades::exibirToast('Produto não encontrado!', 'Tente novamente.', "O texto ($textoPesquisadoDecodificado) no campo de pesquisa não foi encontrado.");
            exit();
        } else {
            $produtos_json = json_encode($produtos_db);
        }
    } catch (Exception $e) {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        require_once $tabelaUtilidades;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', $e);
        exit();
    }
    require_once $telaHeaderTipo01;
    require_once $telaProdutoPesquisaAvancada;
    require_once $telaTodosOsProdutos;
    require_once $telaFooterTipo01;
    exit();
}

/**/
// Se o subUri for produtos/pesquisaavancada
/*
else if (($subUri[0] === 'produtos') && ($subUri[1] == 'pesquisaavancada')) {
    require_once 'protecaoDeEntrada.php';
    require_once 'validacaoDeEntrada.php';
    require_once 'ProdutoDAO.php';
    require_once 'telaHeaderTipo01.php';
    require_once 'telaProdutoPesquisaAvancada.php';
    require_once 'telaFooterTipo01.php';

    // Parâmetros da pesquisa avançada
    $categoria = isset($_GET['selecao']) ? $_GET['selecao'] : null;
    $tamanho = isset($_GET['tamanho']) ? $_GET['tamanho'] : null;
    $cor = isset($_GET['corSelect']) ? $_GET['corSelect'] : null;
    $precoMin = isset($_GET['filtro_preco_minimo']) ? $_GET['filtro_preco_minimo'] : null;
    $precoMax = isset($_GET['filtro_preco_maximo']) ? $_GET['filtro_preco_maximo'] : null;
    $disponivel = isset($_GET['porDisponibilidadeCheckbox']) ? $_GET['porDisponibilidadeCheckbox'] : null;
    $promocao = isset($_GET['porPromocaoCheckbox']) ? $_GET['porPromocaoCheckbox'] : null;

    // Faça a validação e proteção dos parâmetros, se necessário

    // Chame o método para pesquisar os produtos avançados
    try {
        $produtos_db = ProdutoDAO::pesquisarProdutosAvancado($categoria, $tamanho, $cor, $precoMin, $precoMax, $disponivel, $promocao);

        // Verifique se há resultados e faça o processamento adequado

        // Renderize a página de resultados com os produtos encontrados
        require_once 'telaHeaderTipo01.php';
        require_once 'telaProdutoPesquisaAvancada.php';
        require_once 'telaFooterTipo01.php';
        exit();
    } catch (Exception $e) {
        // Trate erros, como exibir uma mensagem de erro na página ou registrar em log
        exit("Erro: " . $e->getMessage());
    }
}
*/
/**/

/****************************************************************** */
//URI = /produtos/?pmin={NUMERO}&pmax={NUMERO}
else if ($subUri[0] === 'produtos' && isset($_GET['preco_min']) && isset($_GET['preco_max'])) {
    $preco_min = $_GET['preco_min'];
    $preco_max = $_GET['preco_max'];
    require_once $produtoServicoGet;
    require_once $produtoDaoGet;
    echo ProdutoServicoGet::produtosPorPrecoMinMax($preco_min, $preco_max);
}

/****************************************************************** */
//URI = /produtos/promocao
else if ($subUri[0] === 'produtos' && $subUri[1] === 'promocao' && !isset($subUri[2])) {
    try {
        $parametros = array('promocaoProduto' => 1);

        $produtos_db = TabelaGenericaDaoGet::filtrarRegistros($parametros, $nomeDesseArquivo);
        $produtos_json = json_encode($produtos_db);
    } catch (PDOException $e) {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        require_once $tabelaUtilidades;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
        exit();
    }

    if (empty($produtos_json)) {
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
else if ($subUri[0] === 'produtos' && $subUri[1] === 'promocao' && $subUri[2] === 'marca' && !isset($subUri[3])) {
    try {
        $parametros = array('promocaoProduto' => 1, 'marcaId' => 1);

        $produtos_db = TabelaGenericaDaoGet::filtrarRegistros($parametros, $nomeDesseArquivo);
        $produtos_json = json_encode($produtos_db);
    } catch (PDOException $e) {
        require_once $telaHeaderTipo01;
        require_once $telaInicio;
        require_once $telaFooterTipo01;
        require_once $tabelaUtilidades;
        Utilidades::exibirToast('Erro!', 'HTTP/1.1 500 Internal Server Error', "$e");
        exit();
    }

    if (empty($produtos_json)) {
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



/****************************************************************** */
//URI = /produtos/erro/?erro=$tipo_erro&mensagem=$mensagem_erro
else if ($subUri[0] === 'produtos' && $subUri[1] === 'erro' && !isset($subUri[2])) {
    if (isset($_GET['erro']) && isset($_GET['mensagem'])) {
        $tipo_erro = $_GET['erro'];
        $mensagem_erro = $_GET['mensagem'];
        $recomendacao = $_GET['recomendacao'];
        require_once $telaHeaderTipo01;
        require_once $telaProdutoErro;
        require_once $telaFooterTipo01;
        exit();
    } else {
        $tipo_erro = "ERRO!";
        $mensagem_erro = "<p>Ocorreu um erro inesperado.</p>";
        require_once $telaHeaderTipo01;
        require_once $telaGenericaErro;
        require_once $telaFooterTipo01;
        exit();
    }
}

/****************************************************************** */
//URI = INVALIDA
else {
    require_once $telaHeaderTipo01;
    require_once $telaInicio;
    require_once $telaFooterTipo01;
    require_once $tabelaUtilidades;
    Utilidades::exibirToast('Erro de recurso!', 'URI inválida', "A URI ($uri) é inválida!");
    exit();
}