<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioModelo/usuarioModelo.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioModelo/usuarioServico/usuarioServicoGet.php';



class UsuarioControleGet
{
    public static function listarUsuarios()
    {
        try
        {
            $usuarios = UsuarioServicoGet::listarUsuarios();
            return json_encode($usuarios);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }

    /***/

    public static function buscarUsuarioPorId($id)
    {
        try
        {
            $usuario = UsuarioServicoGet::buscarUsuarioPorId($id);
            return json_encode($usuario);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
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
    /***/
}
