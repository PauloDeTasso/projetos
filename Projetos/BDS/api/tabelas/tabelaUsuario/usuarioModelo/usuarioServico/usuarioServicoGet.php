<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioModelo/usuarioModelo.php';

class UsuarioServicoGet
{
    public static function listarUsuarios()
    {
        try
        {
            $conexao = ConexaoDbBds::conectar();
            $sql = "SELECT * FROM Usuario";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();
            $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $conexao = null;
            return $usuarios;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao listar usuários: " . $e->getMessage());
        }
    }

    /***/
    public static function buscarUsuarioPorId($id)
    {
        try
        {
            $conexao = ConexaoDbBds::conectar();
            $sql = "SELECT * FROM Usuario WHERE id_usuario = ?";
            $stmt = $conexao->prepare($sql);
            $stmt->execute([$id]);
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
            $conexao = null;

            if (!$usuario)
            {
                throw new Exception("Usuário não encontrado.");
            }

            return $usuario;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao buscar usuário por ID: " . $e->getMessage());
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