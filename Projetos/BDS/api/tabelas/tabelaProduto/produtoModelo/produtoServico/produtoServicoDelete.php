<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';

class ProdutoServicoDelete
{
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
}