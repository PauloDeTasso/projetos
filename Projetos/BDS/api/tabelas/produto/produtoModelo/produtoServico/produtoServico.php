<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';

class ProdutoServico
{
    public static function listarProdutos()
    {
        try
        {
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
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar produtos: " . $e->getMessage());
        }
    }

    // Modifique o método buscarProduto para retornar JSON
    public static function buscarProduto($idProduto)
    {
        try
        {
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
            // return json_encode($produto);
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao buscar produto: " . $e->getMessage());
        }
    }

    public static function criarProduto($produto)
    {
        try
        {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "INSERT INTO Produto (nomeProduto, descricaoProduto, categoriaId, marcaId, produtoTamanhoId, bustoProduto, cinturaProduto, quadrilProduto, corId, precoProduto, pesoProduto, quantidadeProduto, disponivelProduto, promocaoProduto, dataDeCadastroProduto, dataDaUltimaAtualizacaoProduto) VALUES (:nomeProduto, :descricaoProduto, :categoriaId, :marcaId, :produtoTamanhoId, :bustoProduto, :cinturaProduto, :quadrilProduto, :corId, :precoProduto, :pesoProduto, :quantidadeProduto, :disponivelProduto, :promocaoProduto, :dataDeCadastroProduto, :dataDaUltimaAtualizacaoProduto)";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':nomeProduto', $produto->getNomeProduto());
            $stmt->bindValue(':descricaoProduto', $produto->getDescricaoProduto());
            $stmt->bindValue(':categoriaId', $produto->getCategoriaId());
            $stmt->bindValue(':marcaId', $produto->getMarcaId());
            $stmt->bindValue(':produtoTamanhoId', $produto->getProdutoTamanhoId());
            $stmt->bindValue(':bustoProduto', $produto->getBustoProduto());
            $stmt->bindValue(':cinturaProduto', $produto->getCinturaProduto());
            $stmt->bindValue(':quadrilProduto', $produto->getQuadrilProduto());
            $stmt->bindValue(':corId', $produto->getCorId());
            $stmt->bindValue(':precoProduto', $produto->getPrecoProduto());
            $stmt->bindValue(':pesoProduto', $produto->getPesoProduto());
            $stmt->bindValue(':quantidadeProduto', $produto->getQuantidadeProduto());
            $stmt->bindValue(':disponivelProduto', $produto->isDisponivelProduto());
            $stmt->bindValue(':promocaoProduto', $produto->isPromocaoProduto());
            $stmt->bindValue(':dataDeCadastroProduto', $produto->getDataDeCadastroProduto());
            $stmt->bindValue(':dataDaUltimaAtualizacaoProduto', $produto->getDataDaUltimaAtualizacaoProduto());
            $stmt->execute();

            // Obter o ID do produto criado
            $idProduto = $conexao->lastInsertId();

            // Desconectar
            $conexao = null;

            return self::buscarProduto($idProduto);
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao criar produto: " . $e->getMessage());
        }
    }

    public static function atualizarProduto($idProduto, $produto)
    {
        try
        {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "UPDATE Produto SET nomeProduto = :nomeProduto, descricaoProduto = :descricaoProduto, categoriaId = :categoriaId, marcaId = :marcaId, produtoTamanhoId = :produtoTamanhoId, bustoProduto = :bustoProduto, cinturaProduto = :cinturaProduto, quadrilProduto = :quadrilProduto, corId = :corId, precoProduto = :precoProduto, pesoProduto = :pesoProduto, quantidadeProduto = :quantidadeProduto, disponivelProduto = :disponivelProduto, promocaoProduto = :promocaoProduto, dataDaUltimaAtualizacaoProduto = :dataDaUltimaAtualizacaoProduto WHERE idProduto = :idProduto";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':idProduto', $idProduto);
            $stmt->bindValue(':nomeProduto', $produto->getNomeProduto());
            $stmt->bindValue(':descricaoProduto', $produto->getDescricaoProduto());
            $stmt->bindValue(':categoriaId', $produto->getCategoriaId());
            $stmt->bindValue(':marcaId', $produto->getMarcaId());
            $stmt->bindValue(':produtoTamanhoId', $produto->getProdutoTamanhoId());
            $stmt->bindValue(':bustoProduto', $produto->getBustoProduto());
            $stmt->bindValue(':cinturaProduto', $produto->getCinturaProduto());
            $stmt->bindValue(':quadrilProduto', $produto->getQuadrilProduto());
            $stmt->bindValue(':corId', $produto->getCorId());
            $stmt->bindValue(':precoProduto', $produto->getPrecoProduto());
            $stmt->bindValue(':pesoProduto', $produto->getPesoProduto());
            $stmt->bindValue(':quantidadeProduto', $produto->getQuantidadeProduto());
            $stmt->bindValue(':disponivelProduto', $produto->isDisponivelProduto());
            $stmt->bindValue(':promocaoProduto', $produto->isPromocaoProduto());
            $stmt->bindValue(':dataDaUltimaAtualizacaoProduto', $produto->getDataDaUltimaAtualizacaoProduto());
            $stmt->execute();

            // Desconectar
            $conexao = null;

            return self::buscarProduto($idProduto);
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao atualizar produto: " . $e->getMessage());
        }
    }

    public static function excluirProduto($idProduto)
    {
        try
        {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "DELETE FROM Produto WHERE idProduto = :idProduto";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':idProduto', $idProduto);
            $stmt->execute();

            // Desconectar
            $conexao = null;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao excluir produto: " . $e->getMessage());
        }
    }

    /**************************************************************** */
    /*PESQUISAR POR TEXTO*/
    public static function pesquisarPorTexto($texto)
    {
        try
        {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Adicionar curingas à string de pesquisa
            $textoDigitado = "%{$texto}%";

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
        }
        catch (PDOException $e)
        {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine() . '. Consulta SQL: ' . $sql;
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('[' . $errorId . '] Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
        catch (Exception $e)
        {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine() . '. Consulta SQL: ' . $sql;
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('[' . $errorId . '] Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
    }
}
