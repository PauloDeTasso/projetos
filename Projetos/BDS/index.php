<?php

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
    require_once $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasApi.php';
    exit();
}

// Se for localhost ou site de produção, abre a rota da Web
if ($ehLocalhost || $ehSiteProducao)
{
    require_once $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb.php';
    exit();
}

// Se não for nenhum dos casos anteriores, retorna uma mensagem JSON informando ao usuário para contatar o desenvolvedor por erro de reconhecimento de dispositivo
header('Content-Type: application/json');
echo json_encode(array('error' => 'Erro de reconhecimento de dispositivo. Por favor, contate o desenvolvedor.'));
exit();
