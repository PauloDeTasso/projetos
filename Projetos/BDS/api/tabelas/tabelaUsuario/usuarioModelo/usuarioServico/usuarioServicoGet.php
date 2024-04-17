<?php

class UsuarioServicoGet
{
    /************************************************************** */
    /*TODOS OS PRODUTOS*/
    public static function listarUsuarios()
    {
        try
        {
            $usuarios = UsuarioDaoGet::listarUsuarios();
            // Retornar o JSON dos usuarios
            return json_encode($usuarios);
        }
        catch (Exception $e)
        {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(array("message" => $e->getMessage()));
        }
    }
    /************************************************************** */
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

            // Chama o método para buscar o usuario
            $usuario = UsuarioDaoGet::buscarUsuario($idUsuario);

            // Verifica se o usuario foi encontrado
            if ($usuario)
            {
                // Retorna o JSON do usuario
                return json_encode($usuario);
            }
            else
            {
                // Se o usuario não for encontrado, retorna uma mensagem de erro 404
                header("HTTP/1.1 404 Not Found");
                throw new Exception("Usuario não encontrado");
            }
        }
        catch (Exception $e)
        {
            // Em caso de erro, retorna uma mensagem de erro 500
            header("HTTP/1.1 500 Internal Server Error");
            throw new Exception($e->getMessage());
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
