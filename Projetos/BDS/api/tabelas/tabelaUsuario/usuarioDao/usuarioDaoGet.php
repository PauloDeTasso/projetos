<?php
require_once $coneccaoBds;
require_once $usuarioModelo;

class UsuarioDaoGet
{
    /**************************************************************** */
    /*TODOS OS PRODUTOS*/
    public static function listarUsuarios()
    {
        try
        {
            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "SELECT * FROM Usuario";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            // Obter os resultados
            $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Desconectar
            $conexao = null;

            return $usuarios;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar usuarios: " . $e->getMessage());
        }
    }
    /**************************************************************** */
    /*PRODUTO POR ID*/
    public static function buscarUsuario($idUsuario)
    {
        try
        {
            // Validar se $idUsuario é um número
            if (!is_numeric($idUsuario))
            {
                // Se não for um número, retorna uma mensagem de erro 400
                header("HTTP/1.1 400 Bad Request");
                throw new Exception("ID do usuario inválido");
            }

            // Proteger contra injeção de SQL
            $idUsuario = ProtecaoDeEntrada::validarTexto($idUsuario);

            // Conectar ao banco de dados
            $conexao = ConexaoDbBds::conectar();

            // Preparar e executar a consulta SQL
            $sql = "SELECT * FROM Usuario WHERE idUsuario = :idUsuario";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':idUsuario', $idUsuario);
            $stmt->execute();

            // Obter o resultado como um array associativo
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            // Desconectar
            $conexao = null;

            return $usuario;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao buscar usuario: " . $e->getMessage());
        }
    }
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
    /***/
}