<?php
//URL'S
$urlCssMobile768 = "http://localhost/api/public/css/index/mobileMax768.css";
$urlCssPcMin768 =  "http://localhost/api/public/css/index/pcMin768.css";
$urlJs = "http://localhost/api/public/js/index/index.js";
$favIcon = "http://localhost/api/public/recursos/imagens/logos/Logo002-PNG.png";

//TELAS
$telaHeaderTipo01 = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/headers/telaHeaderTipo1.php';
$telaFooterTipo01 = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/footers/telaFooterTipo1.php';
$telaInicio = $_SERVER['DOCUMENT_ROOT'] . '/api/public/php/mains/telaInicio.php';

//ROTAS
$usuarioRotaPost = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaUsuarios/usuarioRota/usuarioRotaPost.php';

// Obtém a URI sem o hostname
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Divide a URI em partes
$subUri = explode('/', trim($uri, '/'));

// Verifica a primeira parte da URI
switch ($_SERVER['REQUEST_METHOD'])
{
    case 'POST':
        // Se o endpoint for 'usuarios', chama a rota para lidar com a solicitação POST
        if ($subUri[0] === 'usuario')
        {
            require_once $usuarioRotaPost;
        }
        else if ($subUri[0] === 'produtos')
        {
            require_once('tabelas/tabelaProduto/produtoRotaPost.php');
        }
        else if ($subUri[0] === 'clientes')
        {
            require_once('tabelas/cliente/clienteRotaPost.php');
        }
        else if ($subUri[0] === 'endereco')
        {
            require_once('tabelas/endereco/enderecoRotaPost.php');
        }
        else if ($subUri[0] === 'configuracao_site')
        {
            require_once('tabelas/configuracao_site/configuracaoSiteRotaPost.php');
        }
        else if ($subUri[0] === 'usuarios')
        {
            require_once('tabelas/usuarios/usuariosRotaPost.php');
        }
        else if ($subUri[0] === 'categorias')
        {
            require_once('tabelas/categorias/categoriasRotaPost.php');
        }
        else if ($subUri[0] === 'subcategorias')
        {
            require_once('tabelas/subcategorias/subcategoriasRotaPost.php');
        }
        else if ($subUri[0] === 'tamanhos')
        {
            require_once('tabelas/tamanhos/tamanhosRotaPost.php');
        }
        else if ($subUri[0] === 'estoques')
        {
            require_once('tabelas/estoques/estoquesRotaPost.php');
        }
        else if ($subUri[0] === 'fornecedores')
        {
            require_once('tabelas/fornecedores/fornecedoresRotaPost.php');
        }
        else if ($subUri[0] === 'transportadoras')
        {
            require_once('tabelas/transportadoras/transportadorasRotaPost.php');
        }
        else if ($subUri[0] === 'impostos')
        {
            require_once('tabelas/impostos/impostosRotaPost.php');
        }
        else if ($subUri[0] === 'favoritos')
        {
            require_once('tabelas/favoritos/favoritosRotaPost.php');
        }
        else if ($subUri[0] === 'carrinho_de_compras')
        {
            require_once('tabelas/carrinho_de_compras/carrinhoDeComprasRotaPost.php');
        }
        else if ($subUri[0] === 'pedidos')
        {
            require_once('tabelas/pedidos/pedidosRotaPost.php');
        }
        else if ($subUri[0] === 'envios')
        {
            require_once('tabelas/envios/enviosRotaPost.php');
        }
        else if ($subUri[0] === 'pagamentos')
        {
            require_once('tabelas/pagamentos/pagamentosRotaPost.php');
        }
        else if ($subUri[0] === 'avaliacoes')
        {
            require_once('tabelas/avaliacoes/avaliacoesRotaPost.php');
        }
        else if ($subUri[0] === 'comentarios')
        {
            require_once('tabelas/comentarios/comentariosRotaPost.php');
        }
        else if ($subUri[0] === 'url_imagens')
        {
            require_once('tabelas/url_imagens/urlImagensRotaPost.php');
        }
        else if ($subUri[0] === 'notificacoes')
        {
            require_once('tabelas/notificacoes/notificacoesRotaPost.php');
        }
        else if ($subUri[0] === 'log_erros')
        {
            require_once('tabelas/log_erros/logErrosRotaPost.php');
        }
        else if ($subUri[0] === 'atividades_dos_usuarios')
        {
            require_once('tabelas/atividades_dos_usuarios/atividadesDosUsuariosRotaPost.php');
        }
        else if ($subUri[0] === 'historico_de_vendas')
        {
            require_once('tabelas/historico_de_vendas/historicoDeVendasRotaPost.php');
        }
        else if ($subUri[0] === 'cupons_promocoes')
        {
            require_once('tabelas/cupons_promocoes/cuponsPromocoesRotaPost.php');
        }
        else if ($subUri[0] === 'permissoes')
        {
            require_once('tabelas/permissoes/permissoesRotaPost.php');
        }
        else if ($subUri[0] === 'faq')
        {
            require_once('tabelas/faq/faqRotaPost.php');
        }
        else if ($subUri[0] === 'analises')
        {
            require_once('tabelas/analises/analisesRotaPost.php');
        }
        else if ($subUri[0] === 'dados_apis')
        {
            require_once('tabelas/dados_apis/dadosApisRotaPost.php');
        }
        else if ($subUri[0] === 'cancelamentos')
        {
            require_once('tabelas/cancelamentos/cancelamentosRotaPost.php');
        }
        else if ($subUri[0] === 'chat_de_mensagens')
        {
            require_once('tabelas/chat_de_mensagens/chatDeMensagensRotaPost.php');
        }
        else if ($subUri[0] === 'datas_de_criacao')
        {
            require_once('tabelas/datas_de_criacao/datasDeCriacaoRotaPost.php');
        }
        else if ($subUri[0] === 'datas_de_atualizacoes')
        {
            require_once('tabelas/datas_de_atualizacoes/datasDeAtualizacoesRotaPost.php');
        }
        else
        {
            http_response_code(400);
            echo json_encode(array("Erro:" => "A URI ($uri) é inválida!"), JSON_UNESCAPED_UNICODE);
        }

        break;

    default:
        // Se o método HTTP não for suportado, retorna um erro
        echo json_encode(array("Erro:" => 'Método HTTP: ' . $_SERVER['REQUEST_METHOD'] . ' não permitido'), JSON_UNESCAPED_UNICODE);
        http_response_code(405); // Método não permitido

        break;
}
