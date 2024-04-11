<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';

class VerificarUsuario
{
    public static function verificarEInserirUsuario()
    {
        try
        {
            if (!isset($_COOKIE['usuario_visitou']))
            {
                setcookie('usuario_visitou', 'true', time() + (30 * 24 * 60 * 60), '/'); // Define o cookie por 30 dias
            }

            $ip = $_SERVER['REMOTE_ADDR'];

            $conexao = ConexaoDbBds::conectar();

            // Verifique se o IP já está na tabela Usuario
            $consulta = $conexao->prepare("SELECT id FROM Usuario WHERE ip = ?");
            $consulta->execute([$ip]);

            if ($consulta->rowCount() === 0)
            {
                // Se o IP não está cadastrado, insira na tabela Usuario
                $inserirUsuario = $conexao->prepare("INSERT INTO Usuario (ip) VALUES (?)");
                $inserirUsuario->execute([$ip]);
            }

            // Feche a conexão com o banco de dados
            ConexaoDbBds::fecharConexao($conexao);
        }
        catch (PDOException $e)
        {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
        catch (Exception $e)
        {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
    }

    public static function buscarUsuarioPorIP($ip)
    {
        try
        {
            $conexao = ConexaoDbBds::conectar();

            // Verifique se o IP está na tabela Usuario e retorne o ID do usuário se encontrado
            $consulta = $conexao->prepare("SELECT id FROM Usuario WHERE ip = ?");
            $consulta->execute([$ip]);

            if ($consulta->rowCount() > 0)
            {
                // Se o IP estiver na tabela, retorne o ID do usuário
                $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
                return $resultado['id'];
            }
            else
            {
                // Se o IP não estiver na tabela, retorne false
                return false;
            }
        }
        catch (PDOException $e)
        {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
        catch (Exception $e)
        {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
        finally
        {
            // Feche a conexão com o banco de dados
            ConexaoDbBds::fecharConexao($conexao);
        }
    }

    public static function registrarUsuarioPorIP($ip)
    {
        try
        {
            $conexao = ConexaoDbBds::conectar();

            // Insere o IP na tabela Usuario
            $inserirUsuario = $conexao->prepare("INSERT INTO Usuario (ip) VALUES (?)");
            $inserirUsuario->execute([$ip]);

            // Obtém o ID do usuário recém-inserido
            $usuario_id = $conexao->lastInsertId();

            // Feche a conexão com o banco de dados
            ConexaoDbBds::fecharConexao($conexao);

            return $usuario_id;
        }
        catch (PDOException $e)
        {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
        catch (Exception $e)
        {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
    }
}