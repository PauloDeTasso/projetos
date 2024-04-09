<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoModelo/produtoModelo.php';

class ProdutoServicoGet
{
    /**************************************************************** */
    /*TODOS OS PRODUTOS*/
    public static function listarProdutos()
    {
        try {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "SELECT * FROM Produto";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            // Obter os resultados
            $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Desconectar
            $conexao = null;

            return $produtos;
        } catch (PDOException $e) {
            throw new Exception("Erro ao listar produtos: " . $e->getMessage());
        }
    }
    /**************************************************************** */
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

            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "SELECT * FROM Produto WHERE idProduto = :idProduto";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':idProduto', $idProduto);
            $stmt->execute();

            // Obter o resultado como um array associativo
            $produto = $stmt->fetch(PDO::FETCH_ASSOC);

            // Desconectar
            $conexao = null;

            return $produto;
        } catch (PDOException $e) {
            throw new Exception("Erro ao buscar produto: " . $e->getMessage());
        }
    }


    /**************************************************************** */
    /*PESQUISAR POR TEXTO*/
    public static function pesquisarPorTexto($texto)
    {
        try {

            $textoValidado = TabelaValidacao::validarNome($texto);
            if ($textoValidado) {
                $textoValidado = $texto;
            }
            $textoProtegido = TabelaProtecaoEntrada::validarTexto($textoValidado);


            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Adicionar curingas à string de pesquisa
            $textoDigitado = "%{$textoProtegido}%";

            // Preparar a consulta SQL usando Prepared Statement
            $sql = "SELECT * FROM produto WHERE nomeProduto LIKE :textoNomeProduto OR descricaoProduto LIKE :textoDescricaoProduto";

            // Preparar a consulta usando Prepared Statement
            $stmt = $conexao->prepare($sql);

            // Vincular os parâmetros corretamente
            $stmt->bindParam(':textoNomeProduto', $textoDigitado, PDO::PARAM_STR);
            $stmt->bindParam(':textoDescricaoProduto', $textoDigitado, PDO::PARAM_STR);

            $stmt->execute();

            // Retornar os resultados da consulta
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine() . '. Consulta SQL: ' . $sql;
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('[' . $errorId . '] Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        } catch (Exception $e) {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine() . '. Consulta SQL: ' . $sql;
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('[' . $errorId . '] Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
    }

    /**************************************************************** */
    /*PRODUTO POR PRECO MINIMO E MAXIMO*/
    public static function produtosPorPrecoMinMax($preco_min, $preco_max)
    {
        try {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL com os parâmetros de preço mínimo e máximo
            $sql = "SELECT * FROM Produto WHERE precoProduto BETWEEN :preco_min AND :preco_max";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':preco_min', $preco_min);
            $stmt->bindParam(':preco_max', $preco_max);
            $stmt->execute();

            // Obter os resultados
            $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Desconectar
            $conexao = null;

            return $produtos;
        } catch (PDOException $e) {
            throw new Exception("Erro ao listar produtos por preço: " . $e->getMessage());
        }
    }
}