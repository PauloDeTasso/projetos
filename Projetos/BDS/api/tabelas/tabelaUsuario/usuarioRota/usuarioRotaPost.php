<?php

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    // Obtém a URI sem o hostname
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    // Divide a URI em partes
    $subUri = explode('/', trim($uri, '/'));

    // Verifica se a URI é /usuario/cadastro
    if ($subUri[0] === 'usuario' && $subUri[1] === 'cadastro')
    {
        // Inclui o controle de usuário para lidar com as operações de cadastro de usuário
        require_once $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuarios/usuarioControle/usuarioControlePost.php';

        // Processa a requisição de cadastro de usuário
        UsuarioControlePost::processarRequisicaoCadastroUsuario();
    }
    else
    {
        // Se a URI não for /usuario/cadastro, retorna um erro
        http_response_code(400); // Requisição inválida
        echo json_encode(array("Erro:" => "URI inválida. Esta rota aceita apenas requisições POST para /usuario/cadastro."));
    }
}
else
{
    // Se a requisição não for POST, retorna um erro
    http_response_code(405); // Método não permitido
    echo json_encode(array("Erro:" => "Método não permitido. Esta rota aceita apenas requisições POST."));
}
