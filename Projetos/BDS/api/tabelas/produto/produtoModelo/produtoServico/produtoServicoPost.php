<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServicoGet.php';

class ProdutoServicoPost
{
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

            return ProdutoServicoGet::buscarProduto($idProduto);
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao criar produto: " . $e->getMessage());
        }
    }
}