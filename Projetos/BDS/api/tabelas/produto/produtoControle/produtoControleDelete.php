<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServicoDelete.php';

class ProdutoControleDelete
{
    public static function excluirProduto($idProduto)
    {
        try
        {
            ProdutoServicoDelete::excluirProduto($idProduto);
            echo json_encode(array("message" => "Produto excluído com sucesso"));
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
}