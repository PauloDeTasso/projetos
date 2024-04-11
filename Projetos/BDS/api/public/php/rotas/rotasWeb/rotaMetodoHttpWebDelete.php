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
$produtoRotaGet = $_SERVER['DOCUMENT_ROOT'] . '/api/tabelas/tabelaProduto/produtoRota/produtoRotaGet.php';


// Obtém a URI sem o hostname
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Divide a URI em partes
$subUri = explode('/', trim($uri, '/'));

// Verifica a primeira parte da URI
switch ($_SERVER['REQUEST_METHOD'])
{
    case 'DELETE':
        if ($subUri[0] === 'produtos')
        {
            require_once('tabelas/tabelaProduto/produtoRotaDelete.php');
        }
        else if ($subUri[0] === 'clientes')
        {
            require_once('tabelas/cliente/clienteRotaDelete.php');
        }
        else if ($subUri[0] === 'endereco')
        {
            require_once('tabelas/endereco/enderecoRotaDelete.php');
        }
        else if ($subUri[0] === 'configuracao_site')
        {
            require_once('tabelas/configuracao_site/configuracaoSiteRotaDelete.php');
        }
        else if ($subUri[0] === 'usuarios')
        {
            require_once('tabelas/usuarios/usuariosRotaDelete.php');
        }
        else if ($subUri[0] === 'categorias')
        {
            require_once('tabelas/categorias/categoriasRotaDelete.php');
        }
        else if ($subUri[0] === 'subcategorias')
        {
            require_once('tabelas/subcategorias/subcategoriasRotaDelete.php');
        }
        else if ($subUri[0] === 'tamanhos')
        {
            require_once('tabelas/tamanhos/tamanhosRotaDelete.php');
        }
        else if ($subUri[0] === 'estoques')
        {
            require_once('tabelas/estoques/estoquesRotaDelete.php');
        }
        else if ($subUri[0] === 'fornecedores')
        {
            require_once('tabelas/fornecedores/fornecedoresRotaDelete.php');
        }
        else if ($subUri[0] === 'transportadoras')
        {
            require_once('tabelas/transportadoras/transportadorasRotaDelete.php');
        }
        else if ($subUri[0] === 'impostos')
        {
            require_once('tabelas/impostos/impostosRotaDelete.php');
        }
        else if ($subUri[0] === 'favoritos')
        {
            require_once('tabelas/favoritos/favoritosRotaDelete.php');
        }
        else if ($subUri[0] === 'carrinho_de_compras')
        {
            require_once('tabelas/carrinho_de_compras/carrinhoDeComprasRotaDelete.php');
        }
        else if ($subUri[0] === 'pedidos')
        {
            require_once('tabelas/pedidos/pedidosRotaDelete.php');
        }
        else if ($subUri[0] === 'envios')
        {
            require_once('tabelas/envios/enviosRotaDelete.php');
        }
        else if ($subUri[0] === 'pagamentos')
        {
            require_once('tabelas/pagamentos/pagamentosRotaDelete.php');
        }
        else if ($subUri[0] === 'avaliacoes')
        {
            require_once('tabelas/avaliacoes/avaliacoesRotaDelete.php');
        }
        else if ($subUri[0] === 'comentarios')
        {
            require_once('tabelas/comentarios/comentariosRotaDelete.php');
        }
        else if ($subUri[0] === 'url_imagens')
        {
            require_once('tabelas/url_imagens/urlImagensRotaDelete.php');
        }
        else if ($subUri[0] === 'notificacoes')
        {
            require_once('tabelas/notificacoes/notificacoesRotaDelete.php');
        }
        else if ($subUri[0] === 'log_erros')
        {
            require_once('tabelas/log_erros/logErrosRotaDelete.php');
        }
        else if ($subUri[0] === 'atividades_dos_usuarios')
        {
            require_once('tabelas/atividades_dos_usuarios/atividadesDosUsuariosRotaDelete.php');
        }
        else if ($subUri[0] === 'historico_de_vendas')
        {
            require_once('tabelas/historico_de_vendas/historicoDeVendasRotaDelete.php');
        }
        else if ($subUri[0] === 'cupons_promocoes')
        {
            require_once('tabelas/cupons_promocoes/cuponsPromocoesRotaDelete.php');
        }
        else if ($subUri[0] === 'permissoes')
        {
            require_once('tabelas/permissoes/permissoesRotaDelete.php');
        }
        else if ($subUri[0] === 'faq')
        {
            require_once('tabelas/faq/faqRotaDelete.php');
        }
        else if ($subUri[0] === 'analises')
        {
            require_once('tabelas/analises/analisesRotaDelete.php');
        }
        else if ($subUri[0] === 'dados_apis')
        {
            require_once('tabelas/dados_apis/dadosApisRotaDelete.php');
        }
        else if ($subUri[0] === 'cancelamentos')
        {
            require_once('tabelas/cancelamentos/cancelamentosRotaDelete.php');
        }
        else if ($subUri[0] === 'chat_de_mensagens')
        {
            require_once('tabelas/chat_de_mensagens/chatDeMensagensRotaDelete.php');
        }
        else if ($subUri[0] === 'datas_de_criacao')
        {
            require_once('tabelas/datas_de_criacao/datasDeCriacaoRotaDelete.php');
        }
        else if ($subUri[0] === 'datas_de_atualizacoes')
        {
            require_once('tabelas/datas_de_atualizacoes/datasDeAtualizacoesRotaDelete.php');
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
