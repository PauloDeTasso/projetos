<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoModelo/produtoServico/produtoServicoGet.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaGenerica/validacaoGenerico/protecaoDeEntradaGenerico.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaGenerica/validacaoGenerico/validacaoGenerico.php';

class ProdutoControleGet
{
    /************************************************************** */
    /*TODOS OS PRODUTOS*/
    public static function listarProdutos()
    {
        try {
            $produtos = ProdutoServicoGet::listarProdutos();
            // Retornar o JSON dos produtos
            return json_encode($produtos);
        } catch (Exception $e) {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
    /************************************************************** */
    /*PRODUTO POR ID*/
    public static function buscarProduto($idProduto)
    {
        try {
            // Validar se $idProduto é um número
            if (!is_numeric($idProduto)) {
                // Se não for um número, retorna uma mensagem de erro 400
                header("HTTP/1.1 400 Bad Request");
                throw new Exception("ID do produto inválido");
            }

            // Proteger contra injeção de SQL
            $idProduto = TabelaProtecaoEntrada::validarTexto($idProduto);

            // Chama o método para buscar o produto
            $produto = ProdutoServicoGet::buscarProduto($idProduto);

            // Verifica se o produto foi encontrado
            if ($produto) {
                // Retorna o JSON do produto
                return json_encode($produto);
            } else {
                // Se o produto não for encontrado, retorna uma mensagem de erro 404
                header("HTTP/1.1 404 Not Found");
                throw new Exception("Produto não encontrado");
            }
        } catch (Exception $e) {
            // Em caso de erro, retorna uma mensagem de erro 500
            header("HTTP/1.1 500 Internal Server Error");
            throw new Exception($e->getMessage());
        }
    }


    /************************************************************** */
    /*CAMPO PESQUISAR*/
    public static function pesquisarPorTexto($texto)
    {
        try {
            $textoValidado = TabelaValidacao::validarNome($texto);
            if ($textoValidado) {
                $textoValidado = $texto;
            }
            $textoProtegido = TabelaProtecaoEntrada::validarTexto($textoValidado);

            $produtosPesquisadosPorTexto = ProdutoServicoGet::pesquisarPorTexto($textoProtegido);

            return $produtosPesquisadosPorTexto;
        } catch (PDOException $e) {
            // Lidar com exceções PDO
            $errorMessage = 'Erro PDO ao pesquisar por texto: ' . $e->getMessage();
            error_log($errorMessage);
            throw new Exception('Erro ao pesquisar por texto. Detalhes: ' . $errorMessage);
        } catch (Exception $e) {
            // Lidar com outras exceções
            $errorMessage = 'Erro ao pesquisar por texto: ' . $e->getMessage();
            error_log($errorMessage);
            throw new Exception($errorMessage);
        }

        /*
        try
        {
            // Remover caracteres indesejados, mantendo letras, números, espaços, acentos e pontuações
            $texto = preg_replace('/[^A-Za-z0-9\sáàâãçéèêíìîóòôõúùû]/u', '', $texto);

            // Escapar caracteres especiais para evitar injeção de HTML
            $texto = htmlspecialchars($texto, ENT_QUOTES, 'UTF-8');

            // Sanitizar a entrada para evitar injeção de SQL
            $texto = $this->sanitizeInput($texto);

            // Pesquisar por produtos usando o texto sanitizado
            $produtosPesquisadosPorTexto = ProdutoServicoGet::pesquisarPorTexto($texto);

            // Retornar os resultados da pesquisa
            return $produtosPesquisadosPorTexto;
        }
        catch (PDOException $e)
        {
            // Lidar com exceções PDO
            $errorMessage = 'Erro PDO ao pesquisar por texto: ' . $e->getMessage();
            error_log($errorMessage);
            throw new Exception('Erro ao pesquisar por texto. Detalhes: ' . $errorMessage);
        }
        catch (Exception $e)
        {
            // Lidar com outras exceções
            $errorMessage = 'Erro ao pesquisar por texto: ' . $e->getMessage();
            error_log($errorMessage);
            throw new Exception($errorMessage);
        }
        */
    }

    /************************************************************** */
    /*PRODUTO POR PRECO MINIMO E MAXIMO*/
    public function produtosPorPrecoMinMax($preco_min, $preco_max)
    {
        try {
            $produtos = ProdutoServicoGet::produtosPorPrecoMinMax($preco_min, $preco_max);
            return json_encode($produtos);
        } catch (Exception $e) {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
}