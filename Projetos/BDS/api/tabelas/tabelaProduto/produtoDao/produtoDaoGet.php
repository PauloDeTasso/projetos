<?php
require_once $coneccaoBdsWeb;

class ProdutoDaoGet
{
    private static $conexao;

    //LISTA TODOS OS REGISTROS
    public static function listarTodosProdutosImagens($nomeClasseChamadora, $opcaoOrdenacao)
    {
        try
        {
            // Obtém o nome da classe atual
            $nomeArquivo = $nomeClasseChamadora;

            // Remove "ControleGet" e converte para minúsculas
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeArquivo));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            // Define a coluna de ordenação com base na opção selecionada
            switch ($opcaoOrdenacao)
            {
                case 'nomeAsc':
                    $ordenacao = 'nomeProduto ASC';
                    break;
                case 'nomeDesc':
                    $ordenacao = 'nomeProduto DESC';
                    break;
                case 'precoAsc':
                    $ordenacao = 'precoProduto ASC';
                    break;
                case 'precoDesc':
                    $ordenacao = 'precoProduto DESC';
                    break;
                default:
                    $ordenacao = 'nomeProduto ASC';
                    break;
            }

            // Atualiza a query SQL para incluir a ordenação
            $query = "SELECT p.*, c.nomeCategoria, s.nomeSubcategoria, m.nomeMarca, cor.nomeCor FROM Produto p
                      LEFT JOIN Categoria c ON p.categoriaId = c.idCategoria
                      LEFT JOIN Subcategoria s ON p.subcategoriaId = s.idSubcategoria
                      LEFT JOIN Marcas m ON p.marcaId = m.idMarca
                      LEFT JOIN Cor cor ON p.corId = cor.idCor
                      ORDER BY $ordenacao";

            $stmt = self::$conexao->prepare($query);
            $stmt->execute();
            $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Para cada produto, obter imagens e tamanhos relacionados
            foreach ($registros as &$produto)
            {
                $produto['imagens'] = self::obterImagensProduto($produto['idProduto']);
                $produto['tamanhos'] = self::obterTamanhosProduto($produto['idProduto'], $produto['nomeProduto']);
            }

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar registros da tabela Produto: " . $e->getMessage());
        }
    }


    /****/
    public static function listarProdutosPorCategoriaSubcategoria($categoria, $subcategoria = null, $opcaoOrdenacao = 'nomeAsc')
    {
        try
        {
            // Define a coluna de ordenação com base na opção selecionada
            switch ($opcaoOrdenacao)
            {
                case 'nomeAsc':
                    $ordenacao = 'Produto.nomeProduto ASC';
                    break;
                case 'nomeDesc':
                    $ordenacao = 'Produto.nomeProduto DESC';
                    break;
                case 'precoAsc':
                    $ordenacao = 'Produto.precoProduto ASC';
                    break;
                case 'precoDesc':
                    $ordenacao = 'Produto.precoProduto DESC';
                    break;
                default:
                    // Por padrão, ordene pelo nome do produto em ordem ascendente
                    $ordenacao = 'Produto.nomeProduto ASC';
                    break;
            }

            self::$conexao = ConexaoDbBdsWeb::conectar();

            // Query base para listar produtos
            $query = "SELECT Produto.*, Categoria.*
                  FROM Produto
                  JOIN Categoria ON Produto.categoriaId = Categoria.idCategoria";

            // Verifica se a subcategoria está definida
            if ($subcategoria)
            {
                $query .= " JOIN Subcategoria ON Produto.subcategoriaId = Subcategoria.idSubcategoria";
            }

            $query .= " WHERE Categoria.nomeCategoria = :categoria";

            // Verifica se a subcategoria está definida
            if ($subcategoria)
            {
                $query .= " AND Subcategoria.nomeSubcategoria = :subcategoria";
            }

            // Adiciona a ordenação
            $query .= " ORDER BY $ordenacao";

            $stmt = self::$conexao->prepare($query);

            // Vincula os parâmetros da categoria e subcategoria, se aplicável
            $stmt->bindParam(':categoria', $categoria, PDO::PARAM_STR);
            if ($subcategoria)
            {
                $stmt->bindParam(':subcategoria', $subcategoria, PDO::PARAM_STR);
            }

            $stmt->execute();
            $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Para cada produto, obter imagens e tamanhos relacionados
            foreach ($registros as &$produto)
            {
                $produto['imagens'] = self::obterImagensProduto($produto['idProduto']);
                $produto['tamanhos'] = self::obterTamanhosProduto($produto['idProduto'], $produto['nomeProduto']);
            }

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar produtos por categoria: " . $e->getMessage());
        }
    }

    // Lista os produtos com base na pesquisa por texto
    public static function pesquisarProdutos($textoPesquisa, $opcaoOrdenacao)
    {
        try
        {
            self::$conexao = ConexaoDbBdsWeb::conectar();

            // Define a coluna de ordenação com base na opção selecionada
            switch ($opcaoOrdenacao)
            {
                case 'nomeAsc':
                    $ordenacao = 'nomeProduto ASC';
                    break;
                case 'nomeDesc':
                    $ordenacao = 'nomeProduto DESC';
                    break;
                case 'precoAsc':
                    $ordenacao = 'precoProduto ASC';
                    break;
                case 'precoDesc':
                    $ordenacao = 'precoProduto DESC';
                    break;
                default:
                    $ordenacao = 'nomeProduto ASC';
                    break;
            }

            $produtos = [];

            // Se nenhum resultado for encontrado, executa a lógica original do método
            $queryOriginal = "SELECT * FROM Produto 
                  WHERE 
                  nomeProduto LIKE :textoPesquisa1 OR 
                  descricaoProduto LIKE :textoPesquisa2 OR 
                  (SELECT nomeCategoria FROM Categoria WHERE Categoria.idCategoria = Produto.categoriaId) LIKE :textoPesquisa3 OR 
                  (SELECT nomeSubcategoria FROM Subcategoria WHERE Subcategoria.idSubcategoria = Produto.subcategoriaId) LIKE :textoPesquisa4 OR 
                  (SELECT nomeMarca FROM Marcas WHERE Marcas.idMarca = Produto.marcaId) LIKE :textoPesquisa5 OR 
                  (SELECT nomeCor FROM Cor WHERE Cor.idCor = Produto.corId) LIKE :textoPesquisa6 OR 
                  (SELECT nomeTamanho FROM Tamanho WHERE Tamanho.idTamanho = Produto.tamanhoId) LIKE :textoPesquisa7 OR 
                  (SELECT descricaoPromocao FROM Promocao WHERE Promocao.idPromocao = Produto.idProduto) LIKE :textoPesquisa8
                  ORDER BY $ordenacao"; // Aqui aplicamos a ordenação diretamente na consulta SQL

            $stmt = self::$conexao->prepare($queryOriginal);
            $stmt->bindValue(':textoPesquisa1', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa2', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa3', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa4', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa5', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa6', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa7', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->bindValue(':textoPesquisa8', "%$textoPesquisa%", PDO::PARAM_STR);
            $stmt->execute();
            $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Para cada produto, obter imagens e tamanhos relacionados
            foreach ($produtos as &$produto)
            {
                $produto['imagens'] = self::obterImagensProduto($produto['idProduto']);
                $produto['tamanhos'] = self::obterTamanhosProduto($produto['idProduto']);
            }

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $produtos;
        }
        catch (PDOException $e)
        {
            echo "<p>$e</p>";
            throw new Exception("Erro ao pesquisar produtos: " . $e->getMessage());
        }
    }


    // Função para obter imagens relacionadas a um produto
    private static function obterImagensProduto($produtoId)
    {
        $query = "SELECT urlImagem FROM Imagem WHERE produtoId = :produtoId";
        $stmt = self::$conexao->prepare($query);
        $stmt->bindParam(':produtoId', $produtoId, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Função para obter os tamanhos relacionados a um produto
    private static function obterTamanhosProduto($produtoId)
    {
        try
        {
            $query = "SELECT t.nomeTamanho 
          FROM Tamanho t 
          JOIN Produto p ON t.idTamanho = p.tamanhoId 
          WHERE p.idProduto = :produtoId
          ORDER BY t.idTamanho DESC";

            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':produtoId', $produtoId, PDO::PARAM_INT);
            $stmt->execute();
            $tamanhos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Extrair apenas os nomes dos tamanhos
            $nomesTamanhos = array_column($tamanhos, 'nomeTamanho');

            // Ordenar os tamanhos em ordem alfabética
            sort($nomesTamanhos);

            return $nomesTamanhos;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao obter os tamanhos do produto: " . $e->getMessage());
        }
    }

    /**************************************************************** */
    /*TODOS OS PRODUTOS*//*
    public static function listarProdutos()
    {
        try
        {
            $registros = TabelaGenericaDaoGet::listarTodos();
            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar produtos: " . $e->getMessage());
        }
    }
    /**************************************************************** */
    /*PRODUTO POR ID*//*
    public static function buscarProduto($idProduto)
    {

        try
        {
            $registro = TabelaGenericaDaoGet::buscarPorID($idProduto);
            echo json_encode($registro);
        }
        catch (Exception $e)
        {
            echo json_encode(array("erro" => $e->getMessage()));
        }
    }


    /**************************************************************** */

    /*PESQUISAR POR TEXTO - COLUNAS*/
    /*
    public static function pesquisarPorTexto($texto)
    {
        try
        {

            $textoValidado = ValidacaoDeEntrada::validarNome($texto);
            if ($textoValidado)
            {
                $textoValidado = $texto;
            }
            $textoProtegido = ProtecaoDeEntrada::validarTexto($textoValidado);


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

    /**************************************************************** */
    /*PRODUTO POR PRECO MINIMO E MAXIMO*/
    /*
    public static function produtosPorPrecoMinMax($preco_min, $preco_max)
    {
        try
        {
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
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar produtos por preço: " . $e->getMessage());
        }
    }
    */
}