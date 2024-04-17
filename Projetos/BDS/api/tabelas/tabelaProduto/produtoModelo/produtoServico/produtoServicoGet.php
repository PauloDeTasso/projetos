<?php

class ProdutoServicoGet
{
    /************************************************************** */
    /*TODOS OS PRODUTOS*/
    public static function listarProdutos()
    {
        try
        {
            $registros = TabelaGenericaDaoGet::listarTodos();
            return json_encode($registros);;
        }
        catch (PDOException $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
    /************************************************************** */
    /*PRODUTO POR ID*/
    public static function buscarProdutoPorID($idProduto)
    {
        try
        {
            // Validar se $idProduto é um número
            if (!is_numeric($idProduto))
            {
                // Se não for um número, retorna uma mensagem de erro 400
                header("HTTP/1.1 400 Bad Request");
                throw new Exception("ID do produto inválido");
            }

            // Proteger contra injeção de SQL
            $idProduto = ProtecaoDeEntrada::validarTexto($idProduto);

            $registro = TabelaGenericaDaoGet::buscarPorID($idProduto);

            // Verifica se o produto foi encontrado
            if ($registro)
            {
                // Retorna o JSON do produto
                return json_encode($registro);
            }
            else
            {
                // Se o produto não for encontrado, retorna uma mensagem de erro 404
                header("HTTP/1.1 404 Not Found");
                throw new Exception("Produto não encontrado");
            }
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
        /*
        try {
            // Validar se $idProduto é um número
            if (!is_numeric($idProduto)) {
                // Se não for um número, retorna uma mensagem de erro 400
                header("HTTP/1.1 400 Bad Request");
                throw new Exception("ID do produto inválido");
            }

            // Proteger contra injeção de SQL
            $idProduto = ProtecaoDeEntrada::validarTexto($idProduto);

            // Chama o método para buscar o produto
            $produto = ProdutoDaoGet::buscarProduto($idProduto);

            
        } catch (Exception $e) {
            // Em caso de erro, retorna uma mensagem de erro 500
            header("HTTP/1.1 500 Internal Server Error");
            throw new Exception($e->getMessage());
        }
        */
    }

    /************************************************************** */
    /*CAMPO PESQUISAR - COLUNA*/
    public static function pesquisarPorTextoColuna($texto)
    {
        try
        {
            $textoValidado = ValidacaoDeEntrada::validarNome($texto);
            if ($textoValidado)
            {
                $textoValidado = $texto;
            }
            $textoProtegido = ProtecaoDeEntrada::validarTexto($textoValidado);

            $colunas = ['nomeProduto', 'descricaoProduto'];
            $resultados = TabelaGenericaDaoGet::pesquisarPorTextoColunas($textoProtegido, $colunas);

            return $resultados;
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
    }

    /************************************************************** */
    /*CAMPO PESQUISAR - COLUNAS*/
    public static function pesquisarPorTextoColunas($texto)
    {
        try
        {
            $textoValidado = ValidacaoDeEntrada::validarNome($texto);
            if ($textoValidado)
            {
                $textoValidado = $texto;
            }
            $textoProtegido = ProtecaoDeEntrada::validarTexto($textoValidado);

            $produtosPesquisadosPorTexto = ProdutoDaoGet::pesquisarPorTexto($textoProtegido);

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
    }

    /************************************************************** */


    /*PRODUTO POR PRECO MINIMO E MAXIMO*/
    public static function produtosPorPrecoMinMax($preco_min, $preco_max)
    {
        try
        {
            $produtos = ProdutoDaoGet::produtosPorPrecoMinMax($preco_min, $preco_max);
            return json_encode($produtos);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
}