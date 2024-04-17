<?php

// Verifica se a URI corresponde à rota de usuarios
if ($subUri[0] === 'usuarios' && !isset($subUri[1]))
{
    // Importa a classe necessária
    require_once $usuarioServicoGet;
    require_once $usuarioDaoGet;

    // Lista todos os usuarios
    $usuarios_json = UsuarioServicoGet::listarUsuarios();

    if (empty($usuarios_json))
    {
        // Define o tipo de erro e a mensagem detalhada
        $tipo_erro = 'Dados inexistentes para usuarios';
        $mensagem_erro = 'Não existem usuarios para exibir.';

        // Redireciona para a página de erro com o tipo de erro e mensagem
        header('Location: /usuarios/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro));
        exit();
    }

    // Inclui os arquivos de tela
    require_once $telaHeaderTipo01;
    require_once $telaTodosOsUsuarios;
    require_once $telaFooterTipo01;
    exit();
}
else if ($subUri[0] === 'usuarios' && is_numeric($subUri[1]))
{
    // Importa a classe necessária
    require_once $usuarioServicoGet;
    require_once $usuarioDaoGet;
    require_once $protecaoDeEntrada;
    require_once $validacaoDeEntrada;

    // Busca o usuario com base no ID fornecido na URI
    $usuario = UsuarioServicoGet::buscarUsuario($subUri[1]);

    // Inclui os arquivos de tela
    require_once $telaHeaderTipo01;
    require_once $telaUsuarioEspecifico;
    require_once $telaFooterTipo01;
}
// Roteamento para a página de erro
else if (
    $subUri[0] === 'usuarios' && $subUri[1] === 'erro'
)
{
    // Verifica se os parâmetros 'erro' e 'mensagem' estão presentes na URL
    if (isset($_GET['erro']) && isset($_GET['mensagem']))
    {
        $tipo_erro = $_GET['erro'];
        $mensagem_erro = $_GET['mensagem'];

        // Inclui os arquivos de tela
        require_once $telaHeaderTipo01;
        require_once $telaUsuarioErro;
        require_once $telaFooterTipo01;
        exit();
    }
    else
    {
        // Caso não haja parâmetros de erro e mensagem na URL, exibe uma mensagem padrão
        echo "<p>Ocorreu um erro inesperado.</p>";
    }
    exit();
}
else
{
    // Retorna um erro 400 se a URI for inválida
    http_response_code(400);
    echo json_encode(array("Erro:" => "A URI ($uri) é inválida!"), JSON_UNESCAPED_UNICODE);
}