<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/produto/produtoModelo/produtoServico/produtoServico.php';

class ProdutoControle
{
    public function listarProdutos()
    {
        try
        {
            $produtos = ProdutoServico::listarProdutos();
            // Retornar o JSON dos produtos
            return json_encode($produtos);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }

    public static function buscarProduto($idProduto)
    {
        try
        {
            // Chama o método para buscar o produto
            $produto = ProdutoServico::buscarProduto($idProduto);

            // Verifica se o produto foi encontrado
            if ($produto)
            {
                // Retorna o JSON do produto
                return json_encode($produto);
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
            // Em caso de erro, retorna uma mensagem de erro 500
            header("HTTP/1.1 500 Internal Server Error");
            throw new Exception($e->getMessage());
        }
    }

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
            $produtoCriado = ProdutoServico::criarProduto($novoProduto);
            echo json_encode($produtoCriado);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }

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
            $produtoAtualizado = ProdutoServico::atualizarProduto($idProduto, $produtoAtualizado);
            echo json_encode($produtoAtualizado);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }

    public static function excluirProduto($idProduto)
    {
        try
        {
            ProdutoServico::excluirProduto($idProduto);
            echo json_encode(array("message" => "Produto excluído com sucesso"));
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
    /************************************************************** */
    /*CAMPO PESQUISAR*/
    public function pesquisarPorTexto($texto)
    {
        try
        {
            // Remover caracteres indesejados, mantendo letras, números, espaços, acentos e pontuações
            $texto = preg_replace('/[^A-Za-z0-9\sáàâãçéèêíìîóòôõúùû]/u', '', $texto);

            // Escapar caracteres especiais para evitar injeção de HTML
            $texto = htmlspecialchars($texto, ENT_QUOTES, 'UTF-8');

            // Sanitizar a entrada para evitar injeção de SQL
            $texto = $this->sanitizeInput($texto);

            // Pesquisar por produtos usando o texto sanitizado
            $produtosPesquisadosPorTexto = ProdutoServico::pesquisarPorTexto($texto);

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
    }

    // Função para sanitizar a entrada
    private function sanitizeInput($input)
    {
        // Remove espaços em branco desnecessários
        $input = trim($input);

        // Remove caracteres especiais, mantendo letras, números e espaços
        $input = preg_replace(
            '/[^A-Za-z0-9\s]/',
            '',
            $input
        );

        // Retorna a entrada sanitizada
        return $input;
    }
}
