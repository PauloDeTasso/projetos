<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/DAO/ConexaoDbBds.php';

class ContadorVisitas
{
    public static function registrarVisita($usuario_id = null)
    {
        try {
            $ip = $_SERVER['REMOTE_ADDR'];

            $conexao = ConexaoDbBds::conectar();

            // Se o usuário estiver autenticado, use o $usuario_id fornecido
            // Caso contrário, defina $usuario_id como 0 para visitas não autenticadas
            if ($usuario_id === null) {
                // O usuário não está autenticado, use o ID 0 para visitas não autenticadas
                $usuario_id = 0;
            }

            // Registre a visita na tabela Visitas
            $inserirVisita = $conexao->prepare("INSERT INTO Visitas (usuario_id) VALUES (?)");
            $inserirVisita->execute([$usuario_id]);

            // Feche a conexão com o banco de dados
            ConexaoDbBds::fecharConexao($conexao);
        } catch (PDOException $e) {
            // Lidar com exceções PDO
            $errorMessage = 'Erro ao executar consulta no banco de dados: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('PDOError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        } catch (Exception $e) {
            // Lidar com outras exceções
            $errorMessage = 'Erro inesperado: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine();
            $errorId = uniqid('GeneralError');
            error_log('[' . $errorId . '] ' . $errorMessage);
            throw new Exception('Ocorreu um erro interno. Por favor, tente novamente mais tarde.', 500);
        }
    }
}