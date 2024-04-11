<?php
// Define os rotass dos arquivos para cada método HTTP
$rotaGET = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb/rotaMetodoHttpWebGet.php';
$rotaPOST = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb/rotaMetodoHttpWebPost.php';
$rotaPUT = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb/rotaMetodoHttpWebPut.php';
$rotaDELETE = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb/rotaMetodoHttpWebDelete.php';
$rotaPATCH = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/rotas/rotasWeb/rotaMetodoHttpWebPatch.php';

// Verifica o método HTTP da requisição
switch ($_SERVER['REQUEST_METHOD'])
{
    case 'GET':
        require_once $rotaGET;
        break;
    case 'POST':
        require_once $rotaPOST;
        break;
    case 'PUT':
        require_once $rotaPUT;
        break;
    case 'DELETE':
        require_once $rotaDELETE;
        break;
    case 'PATCH':
        require_once $rotaPATCH;
        break;
    default:
        // Se o método HTTP não for suportado, retorna um erro
        echo json_encode(array("Erro:" => 'Método HTTP: ' . $_SERVER['REQUEST_METHOD'] . ' não permitido'), JSON_UNESCAPED_UNICODE);
        http_response_code(405); // Método não permitido
        break;
}
