<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServicoPost.php';

class ProdutoControlePost
{
    public static function criarProduto()
    {
        // Obter os dados do produto do corpo da requisição
        $dadosProduto = json_decode(file_get_contents("php://input"), true);

        // Validar os dados do produto (exemplo: verificar se todos os campos obrigatórios foram fornecidos)

        // Criar o objeto ProdutoModelo com os dados fornecidos
        $novoProduto = new ProdutoModelo(
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
            $dadosProduto['dataDaUltimaAtualizacaoProduto']
        );

        try
        {
            $produtoCriado = ProdutoServicoPost::criarProduto($novoProduto);
            echo json_encode($produtoCriado);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
}