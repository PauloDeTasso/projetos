<?php

//CONTROLES
$usuarioControleGet = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioControle/usuarioControleGet.php';

//TELAS
$telaTodosOsUsuarios = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioTela/usuarioTelaGet/usuarioTelaTodosOsUsuarios.php';
$telaUsuarioEspecifico = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioTela/usuarioTelaGet/usuarioTelaUsuarioEspecifico.php';
$telaUsuarioErro = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuario/usuarioTela/usuarioTelaErro.php';

// Verificar se a requisição é para listar usuários
if ($subUri[0] === 'usuarios' && !isset($subUri[1]))
{
    require_once $usuarioControleGet;
    $usuarios_json = UsuarioControleGet::listarUsuarios();

    // Verificar se o array de usuários está vazio
    if (empty($usuarios_json))
    {
        // Definir o tipo de erro e a mensagem detalhada
        $tipo_erro = 'Sem dados de usuários';
        $mensagem_erro = 'Não existem usuários para exibir.';

        // Redirecionar para a página de erro com o tipo de erro e mensagem
        header('Location: /usuarios/erro?erro=' . urlencode($tipo_erro) . '&mensagem=' . urlencode($mensagem_erro));
        exit();
    }

    require_once $telaHeaderTipo01;
    require_once $telaTodosOsUsuarios;
    require_once $telaFooterTipo01;
    exit();
}
// Verificar se a requisição é para buscar usuário por ID
else if ($subUri[0] === 'usuarios' && isset($subUri[1]) && is_numeric($subUri[1]))
{
    require_once $usuarioControleGet;
    $id = (int)$subUri[1];
    $usuario_json = UsuarioControleGet::buscarUsuarioPorId($id);

    // Verificar se o usuário foi encontrado
    if (!$usuario_json)
    {
        header("HTTP/1.1 404 Not Found");
        echo json_encode(array("message" => "Usuário não encontrado."));
        exit();
    }

    echo $usuario_json;
    exit();
}
// Roteamento para a página de erro
else if ($subUri[0] === 'usuarios' && $subUri[1] === 'erro')
{
    // Verificar se os parâmetros 'erro' e 'mensagem' estão presentes na URL
    if (isset($_GET['erro']) && isset($_GET['mensagem']))
    {
        $tipo_erro = $_GET['erro'];
        $mensagem_erro = $_GET['mensagem'];

        require_once $telaHeaderTipo01;
        require_once $telaUsuarioErro;
        require_once $telaFooterTipo01;
        exit();
    }
    else
    {
        // Caso não haja parâmetros de erro e mensagem na URL, exibir uma mensagem padrão
        echo "<p>Ocorreu um erro inesperado.</p>";
    }
    exit();
}
else
{
    http_response_code(400);
    echo json_encode(array("Erro:" => "A URI ($uri) é inválida!"), JSON_UNESCAPED_UNICODE);
}