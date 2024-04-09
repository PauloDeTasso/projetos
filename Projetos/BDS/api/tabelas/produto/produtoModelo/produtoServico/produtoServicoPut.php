<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServicoGet.php';

class ProdutoServicoPut
{
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

            return ProdutoServicoGet::buscarProduto($idProduto);
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao atualizar produto: " . $e->getMessage());
        }
    }
}