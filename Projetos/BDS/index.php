<?php
/*
// Arquivo de inclusão para configuração e inicialização
//require_once 'api/config/init.php';

// Defina a duração da sessão para 30 minutos (em segundos)
session_set_cookie_params(1800); // 30 minutos

// Inicie a sessão
session_start();

// Defina o tempo limite da sessão para 30 minutos (em segundos)
$session_timeout = 1800; // 30 minutos

// Inclua a classe VerificarUsuario para verificar e inserir usuários
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/config/php/verificarUsuario.php';

// Inclua a classe ContadorVisitas para registrar visitas
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/config/php/contadoDeVisitas.php';

// Registre a visita para usuários não autenticados
$ip = $_SERVER['REMOTE_ADDR'];

// Verificar se o usuário já está registrado com base no endereço IP
$usuario_id = VerificarUsuario::buscarUsuarioPorIP($ip);

if (!$usuario_id) {
    // Se o usuário não estiver registrado, crie um novo registro na tabela Usuario
    $usuario_id = VerificarUsuario::registrarUsuarioPorIP($ip);
}

// Registre a visita
ContadorVisitas::registrarVisita($usuario_id);
*/
/*
// Função para verificar se a solicitação vem de um dispositivo móvel
function ehDispositivoMovel()
{
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    return preg_match('/(Mobile|iP(hone|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|UCWEB|Polaris|FxiOS|MQQBrowser|MicroMessenger|MiuiBrowser|SamsungBrowser|SEMC-Browser|Firefox|CriOS|Safari|Trident.*?; Touch;)/i', $userAgent);
}

// Verifica se a solicitação vem de um dispositivo móvel
$ehDispositivoMovel = ehDispositivoMovel();

// Verifica se é um aplicativo móvel (usando um cabeçalho personalizado)
$ehAppMovel = isset($_SERVER['HTTP_X_APP_MOBILE']) && $_SERVER['HTTP_X_APP_MOBILE'] === 'true';

// Verifica se o hostname contém "localhost" ou o nome do site em produção
$hostname = $_SERVER['HTTP_HOST'];

// Verifica se o hostname corresponde ao localhost ou ao nome do site em produção
$ehLocalhost = ($hostname === 'localhost');
$ehSiteProducao = ($hostname === 'belladonnastore.com');

// Verifica se a URI começa com /api
$uri = $_SERVER['REQUEST_URI'];
$ehRotaApi = (strpos($uri, '/api') === 0);

// Se for um aplicativo móvel, abre a rota API
if ($ehDispositivoMovel && $ehAppMovel && ($ehLocalhost || $ehSiteProducao) && $ehRotaApi)
{
    require_once $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasPorMetodoHttpApi.php';
    exit();
}

// Se for localhost ou site de produção, abre a rota da Web
if ($ehLocalhost || $ehSiteProducao)
{*/
require_once $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasPorMetodoHttpWeb.php';
exit(); // Saímos do script após abrir a rota da Web
    /*
}

// Se não for nenhum dos casos anteriores, retorna uma mensagem JSON de erro
header('Content-Type: application/json');
echo json_encode(array('error' => 'Erro de reconhecimento de dispositivo. Por favor, contate o desenvolvedor.'));
exit();
*/