<?php
require_once $coneccaoBdsWeb;

class TabelaGenericaDaoGet
{
    private static $conexao;

    //LISTA TODOS OS REGISTROS
    public static function listarTodos($nomeClasseChamadora)
    {
        try
        {
            // Obtém o nome da classe atual
            $nomeArquivo = $nomeClasseChamadora;

            // Remove "ServicoGet" e converte para minúsculas
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeArquivo));

            self::$conexao = ConexaoDbBdsWeb::conectar();
            $query = "SELECT * FROM $nomeTabela";

            $stmt = self::$conexao->prepare($query);
            $stmt->execute();
            $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar registros da tabela $nomeTabela: " . $e->getMessage());
        }
    }

    //BUSCA REGISTRO POR ID
    public static function buscarPorID($id, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT * FROM $nomeTabela WHERE id$nomeTabela = :id";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            $registro = $stmt->fetch(PDO::FETCH_ASSOC);;

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registro;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao recuperar o registro da tabela $nomeTabela com o ID $id: " . $e->getMessage());
        }
    }

    //BUSCA POR TEXTO PESQUISADO EM UMA COLUNA ESPECIFICA
    public static function pesquisarPorTextoColuna($coluna, $textoPesquisado, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            $textoPesquisadoPronto = "%{$textoPesquisado}%";
            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT * FROM $nomeTabela WHERE MATCH ($coluna) AGAINST (:textoPesquisado)";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':textoPesquisado', $textoPesquisadoPronto, PDO::PARAM_STR);
            $stmt->execute();
            $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (empty($registros))
            {
                $queryProduto = "SELECT * FROM $nomeTabela WHERE $coluna LIKE :textoPesquisado";
                $stmtProduto = self::$conexao->prepare($queryProduto);
                $stmtProduto->bindParam(':textoPesquisado', $textoPesquisadoPronto, PDO::PARAM_STR);
                $stmtProduto->execute();
                $registrosProduto = $stmtProduto->fetchAll(PDO::FETCH_ASSOC);

                return $registrosProduto;
            }
            else
            {
                return $registros;
            }
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao pesquisar texto na coluna $coluna da tabela $nomeTabela: " . $e->getMessage());
        }
        finally
        {
            // Feche a conexão após o uso
            ConexaoDbBdsWeb::fecharConexao(self::$conexao);
        }
    }

    //BUSCA POR TEXTO PESQUISADO EM UMA OU VARIAS COLUNAS ESPECIFICAS
    public static function pesquisarPorTextoColunas($texto, $colunas, $nomeClasseChamadora)
    {
        try
        {

            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            // Conectar ao banco de dados
            $conexao = ConexaoDbBdsWeb::conectar();

            // Construir a parte da consulta para as colunas
            $colunasConsulta = implode(', ', array_map(function ($coluna)
            {
                return $coluna . ' LIKE ?';
            }, $colunas));

            // Montar a consulta SQL
            $sql = "SELECT * FROM $nomeTabela WHERE $colunasConsulta";

            // Preparar a consulta usando Prepared Statement
            $stmt = $conexao->prepare($sql);

            // Bind dos parâmetros
            foreach ($colunas as $index => $coluna)
            {
                $stmt->bindValue($index + 1, $texto);
            }

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

    //RETONA REGISTROS COM BASE EM UM OU VARIOS PARAMETROS DOS REGISTROS DA TABELA
    public static function filtrarRegistros($parametros, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $where = [];
            $bindParams = [];

            foreach ($parametros as $campo => $valor)
            {
                $where[] = "$campo = :$campo";
                $bindParams[":$campo"] = $valor;
            }

            $whereClause = implode(' AND ', $where);
            $query = "SELECT * FROM $nomeTabela WHERE $whereClause";
            $stmt = self::$conexao->prepare($query);
            $stmt->execute($bindParams);
            $registros = $stmt->fetchAll();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao filtrar registros da tabela $nomeTabela: " . $e->getMessage());
        }
    }

    //RETORNA TODOS OS REGISTROS ORDENADOS PELO PARA PARAMETRO ESPECIFICO
    public static function ordenarRegistros($campo, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT * FROM $nomeTabela ORDER BY $campo";
            $stmt = self::$conexao->prepare($query);
            $stmt->execute();
            $registros = $stmt->fetchAll();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao ordenar registros da tabela $nomeTabela: " . $e->getMessage());
        }
    }

    //
    public static function paginacaoRegistros($pagina, $tamanho, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $offset = ($pagina - 1) * $tamanho;

            $query = "SELECT * FROM $nomeTabela LIMIT :offset, :tamanho";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
            $stmt->bindParam(':tamanho', $tamanho, PDO::PARAM_INT);
            $stmt->execute();
            $registros = $stmt->fetchAll();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao paginar registros da tabela $nomeTabela: " . $e->getMessage());
        }
    }

    //
    public static function recuperarRelacionamento($id, $relacionamento, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT * FROM $nomeTabela WHERE id = :id";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            $registro = $stmt->fetch();

            if (!$registro)
            {
                throw new Exception("Registro com o ID $id na tabela $nomeTabela não encontrado.");
            }

            $relacionamentoId = $registro[$relacionamento];

            $query = "SELECT * FROM $relacionamento WHERE id = :relacionamentoId";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':relacionamentoId', $relacionamentoId, PDO::PARAM_INT);
            $stmt->execute();
            $relacionamentoRegistro = $stmt->fetch();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $relacionamentoRegistro;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao recuperar o relacionamento $relacionamento da tabela $nomeTabela com o ID $id: " . $e->getMessage());
        }
    }

    //
    public static function contarRegistros($propriedade, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT COUNT($propriedade) AS total FROM $nomeTabela";
            $stmt = self::$conexao->prepare($query);
            $stmt->execute();
            $resultado = $stmt->fetch();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $resultado['total'];
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao contar registros da tabela $nomeTabela: " . $e->getMessage());
        }
    }

    //
    public static function recuperarRegistrosPorIntervalo($campo, $min, $max, $nomeClasseChamadora)
    {
        try
        {
            $nomeClasse = $nomeClasseChamadora;
            $nomeTabela = strtolower(str_replace('ControleGet', '', $nomeClasse));

            self::$conexao = ConexaoDbBdsWeb::conectar();

            $query = "SELECT * FROM $nomeTabela WHERE $campo BETWEEN :min AND :max";
            $stmt = self::$conexao->prepare($query);
            $stmt->bindParam(':min', $min);
            $stmt->bindParam(':max', $max);
            $stmt->execute();
            $registros = $stmt->fetchAll();

            ConexaoDbBdsWeb::fecharConexao(self::$conexao);

            return $registros;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao recuperar registros por intervalo na tabela $nomeTabela: " . $e->getMessage());
        }
    }
}
