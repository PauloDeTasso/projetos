<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServicoPut.php';

class ProdutoControlePut
{
    public static function atualizarProduto($idProduto)
    {
        // Obter os dados do produto do corpo da requisição
        $dadosProduto = json_decode(file_get_contents("php://input"), true);

        // Validar os dados do produto (exemplo: verificar se todos os campos obrigatórios foram fornecidos)

        // Criar o objeto ProdutoModelo com os dados fornecidos
        $produtoAtualizado = new ProdutoModelo(
            $dadosProduto['nomeProduto'],
            $dadosProduto['descricaoProduto'],
            $dadosProduto['categoriaId'],
            $dadosProduto['marcaId'],
            $dadosProduto['produtoTamanhoId'],
            $dadosProduto['bustoProduto'],
            $dadosProduto['cinturaProduto'],
            $dadosProduto['quadrilProduto'],
            $dadosProduto['corId'],
            $dadosProduto['precoProduto'],
            $dadosProduto['pesoProduto'],
            $dadosProduto['quantidadeProduto'],
            $dadosProduto['disponivelProduto'],
            $dadosProduto['promocaoProduto'],
            $dadosProduto['dataDeCadastroProduto'],
            $dadosProduto['dataDaUltimaAtualizacaoProduto'],
            $idProduto
        );

        try
        {
            $produtoAtualizado = ProdutoServicoPut::atualizarProduto($idProduto, $produtoAtualizado);
            echo json_encode($produtoAtualizado);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
}