<?php

class ConexaoDbBds
{
    // Configurações do banco de dados
    private static $host = "localhost";
    private static $usuario = "root";
    private static $senha = "";
    private static $banco = "bds";
    private static $charset = "utf8mb4";

    // Método para conectar ao banco de dados
    public static function conectar()
    {
        try
        {
            $dsn = "mysql:host=" . self::$host . ";dbname=" . self::$banco . ";charset=" . self::$charset;
            $conexao = new PDO($dsn, self::$usuario, self::$senha);

            // Configurações adicionais
            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexao->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $conexao->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            return $conexao;
        }
        catch (PDOException $e)
        {
            throw new Exception("Erro ao conectar ao banco de dados: " . $e->getMessage());
        }
    }

    // Método para fechar a conexão com o banco de dados
    public static function fecharConexao($conexao)
    {
        $conexao = null;
    }
}