
var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var menu = document.getElementsByClassName('menu');

var imagemDeFundo01 = document.getElementById('imagemDeFundo01');

var cabecalho = document.getElementById('cabecalho');

var secaoImagens = document.getElementById('secaoImagens');

var rodape = document.getElementById('rodape');

var htmlPrincipal = document.getElementById('htmlPrincipal');

var secaoTemas = document.getElementById('secaoTemas');

var botaoMenu = document.getElementById('botaoMenu');

var statusSistema = document.getElementById('statusSistema');

var secaoItemsHome = document.getElementById('secaoItemsHome');
var secaoItemsProducts = document.getElementById('secaoItemsProducts');
var secaoItemsCollections = document.getElementById('secaoItemsCollections');
var secaoItemsHome = document.getElementById('secaoItemsHome');

var imagemBotaoMenu = document.getElementById('imagemBotaoMenu');
var home = document.getElementById('home');
var products = document.getElementById('products');
var collections = document.getElementById('collections');
var options = document.getElementById('options');
var contact = document.getElementById('contact');
var itemContact = document.getElementById('itemContact');

var divCadeiras = document.getElementById('divCadeiras');
var divMesas = document.getElementById('divMesas');
var divArmarios = document.getElementById('divArmarios');
var divCama = document.getElementById('divCama');
var divComodas = document.getElementById('divComodas');
var divTelevisao = document.getElementById('divTelevisao');
var divRack = document.getElementById('divRack');
var divSofa = document.getElementById('divSofa');
var divBancos = document.getElementById('divBancos');
var divChicaras = document.getElementById('divChicaras');
var divTacas = document.getElementById('divTacas');

var divSala = document.getElementById('divSala');
var divQuarto = document.getElementById('divQuarto');
var divCozinha = document.getElementById('divCozinha');
var divBanheiro = document.getElementById('divBanheiro');
var divEscritorio = document.getElementById('divEscritorio');
var divQuarto = document.getElementById('divQuarto');
var divGaragem = document.getElementById('divGaragem');
var divJardim = document.getElementById('divJardim');
var divExternalArea = document.getElementById('divExternalArea');
var divSotao = document.getElementById('divSotao');
var divPorao = document.getElementById('divPorao');

var botoesCabecalho = document.getElementById('botoesCabecalho');

var relogio = document.getElementById('relogio');

var secaoImagemDeFundo = document.getElementById('secaoImagemDeFundo');

var bloco = document.getElementById('bloco');

var secaoOptions = document.getElementById('secaoOptions');

var imagemDeFundo = document.getElementById('imagemDeFundo');

var imagemInstagram = document.getElementById('imagemInstagram');

var imagemFacebook = document.getElementById('imagemFacebook');

var imagemTwitter = document.getElementById('imagemTwitter');

var imagemBotaoGaleriaComoda001 = document.getElementById('imagemBotaoGaleriaComoda001');

var imagemBotaoGaleriaRack001 = document.getElementById('imagemBotaoGaleriaRack001');

var imagemBotaoGaleriaRack002 = document.getElementById('imagemBotaoGaleriaRack002');

var imagemBotaoGaleriaGuardaRoupa001 = document.getElementById('imagemBotaoGaleriaGuardaRoupa001');

var imagemBotaoGaleriaMesaDeCentro001 = document.getElementById('imagemBotaoGaleriaMesaDeCentro001');


var menuCommodes = document.getElementById('menuCommodes');

var menuRack01 = document.getElementById('menuRack01');

var menuRack02 = document.getElementById('menuRack02');

var menuCloset = document.getElementById('menuCloset');

var menuCenterTable = document.getElementById('menuCenterTable');

var botaoPassarImagens01 = document.getElementById('botaoPassarImagens01');

var botaoPassarImagens02 = document.getElementById('botaoPassarImagens02');

var titulosMenu = document.getElementsByClassName('titulosMenu');

var coordenadas = {};

var propriedadeCoordenada = {};

var distanciaImagens;

var menuAberto = false;

var ultimaDirecaoScroll = 0;

var primeiraImagem = 0;

var posicaoImagens;

var statusSistema2 = document.getElementById('statusSistema2');

var tempoIntervalo = 100;

var larguraJanela = window.outerWidth;
var alturaJanela = window.outerHeight;

var larguraTela = screen.width;
var alturaTela = screen.height;

var cartao = document.getElementById('cartao');

cartao.addEventListener('mouseenter', () => { cartao.classList.toggle('virar') }, false);

//

function abrirPagina(link, target)
{
    window.open(link, target);
}

function tamanhoJanela()
{

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        imagensProjetos3d[ index ].style.borderStyle = "solid";

        imagensProjetos3d[ index ].style.borderColor = "rgba(0,0,0,0)";

        imagensProjetos3d[ index ].style.opacity = 1;

        imagensProjetos3d[ index ].style.borderWidth = alturaJanela / 2 + "px 0px " + alturaJanela / 2 + "px 0px";

        imagensProjetos3d[ index ].style.width = "100%";

        imagensProjetos3d[ index ].style.height = "auto";
    }

};

//

function iconeTamanho(icone)
{
    icone.style.width = "40px";
    icone.style.height = "40px";
}

function iconeTamanhoMenor(icone)
{
    icone.style.width = "35px";
    icone.style.height = "35px";
}

function iconeOpacidade(icone)
{
    icone.style.opacity = "1";
    icone.style.backgroundColor = "rgba(200,200,200,.5)";
}

function iconeOpacidadeMenor(icone)
{
    icone.style.opacity = ".5";
    icone.style.backgroundColor = "rgba(200,200,200,0)";
}

function scrollImagens()
{

};

//

var botoes = document.getElementsByName("tema");

for (let index = 0; index < botoes.length; index++)
{
    botoes[ index ].addEventListener('change', checar, false);
}

function checar()
{
    let i = 0;
    for (i in botoes)
        if (botoes[ i ].checked)
        {
            switch (botoes[ i ].value)
            {
                case "A":
                    htmlPrincipal.style.backgroundColor = "rgba(0, 0, 0, 0)";

                    rodape.style.backgroundColor = "rgb(111, 0, 255);";

                    rodape.style.color = "rgb(111, 0, 255);";
                    break;

                case "B":
                    htmlPrincipal.style.backgroundColor = "rgba(0, 0, 0, 0)";

                    rodape.style.backgroundColor = "rgb(111, 0, 255);";

                    rodape.style.color = "rgb(111, 0, 255);";
                    break;

                default:
                    statusSistema2.innerHTML = "THEME ERRO";
            }
        } else
        {

        }
};

function coordenada(elemento, propriedade)
{
    coordenadas = elemento.getBoundingClientRect();

    propriedadeCoordenada = coordenadas[ propriedade ];

    return parseInt(propriedadeCoordenada);
}

// RELOGIO

setInterval(showTime, 1000);

function showTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    let currentTime = hour + ":"
        + min + ":" + sec + "s || 3D™";

    relogio.innerHTML = "Lookalike® || " + "\n" + currentTime;
}

showTime();

//////////////////////////////////////////

tamanhoJanela();

window.addEventListener('scroll', scrollImagens, false);

window.addEventListener('resize', function ()
{
    tamanhoJanela();
}, false);

/////////////

function abrirFecharMenu()
{
    var estiloCabecalho = window.getComputedStyle(cabecalho);
    var propriedadeCabecalho = estiloCabecalho.getPropertyValue('height');

    if (propriedadeCabecalho == "70px")
    {
        menuAberto = true;
        abrirMenu();
    } else 
    {
        menuAberto = false;
        fecharMenu();
    }
}

function abrindoFechandoMenu()
{
    if (menuAberto)
    {
        cabecalho.style.visibility = "visible";
        cabecalho.style.opacity = 1;
        cabecalho.style.height = "120px";
        cabecalho.style.alignItems = "flex-start";

        //secaoTemas.style.visibility = "visible";
        relogio.style.display = "none";

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "visible";
        }

        secaoItemsContact.style.visibility = "visible";

    } else
    {
        cabecalho.style.height = "70px"
        cabecalho.style.opacity = "1";
        cabecalho.style.alignItems = "flex-start";

        relogio.style.display = "flex";

        //secaoTemas.style.visibility = "hidden"

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "hidden";
        }

        secaoItemsContact.style.visibility = "hidden";
    }
}

function playImagens() 
{
    htmlPrincipal.classList.toggle('playImagens');
}

function abrirMenuImagemIcone() 
{
    imagemBotaoMenu.classList.toggle('abrirMenuImagemIcone');
}

function abrirMenu() 
{
    cabecalho.classList.remove('abrirMenu');
    cabecalho.classList.add('abrirMenu');
    relogio.classList.remove('opacidade10')
    relogio.classList.add('opacidade10')
}

function fecharMenu() 
{
    cabecalho.classList.remove('fecharMenu');
    cabecalho.classList.add('fecharMenu');
}

function abrirOptions()
{
    secaoOptions.classList.remove('abrirItemMenu');
    secaoOptions.classList.add('abrirItemMenu');
}

function abrirFecharItemMenu(elemento, acao, event)
{
    event = event || window.event;

    var i;

    switch (elemento)
    {
        case secaoItemsHome:

            i = 0;

            if (event.type == "click" || event.type == "touchstart")
            {
                open("../../Lookalike3D/Lookalike3d.html", "_self")
            } else
            {

            }

            break;

        case secaoItemsProducts:
            i = 1;
            break;

        case secaoItemsCollections:
            i = 2;
            break;

        case secaoItemsOptions:
            i = 3;
            break;

        case secaoItemsContact:
            i = 4;
            break;

        default:
            i = 0;
    }

    if (acao)
    {
        elemento.style.visibility = "visible";

        titulosMenu[ i ].style.color = "rgb(255,255,255)";

    } else
    {
        elemento.style.visibility = "hidden";

        titulosMenu[ i ].style.color = "rgb(35, 240, 255)";
    }
}

function itemMenuAnimacaoFinalizada()
{

    for (let i = 0; i < secaoTemas.length; i++) 
    {
        secaoTemas[ i ].style.visibility = "visible";
        secaoTemas[ i ].style.opacity = 1;
    }
}

var imagemBotaoPassarImagens01 = document.getElementById('imagemBotaoPassarImagens01');

var imagemBotaoPassarImagens02 = document.getElementById('imagemBotaoPassarImagens02');

var imagensAtuaisGaleriaArray = [];

var produtoAtual;

var arrayAtual = 0;

function imagensAtuaisGaleria(produto)
{
    switch (produto)
    {
        case menuCommodes:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/03.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCommodes;

            break;

        case menuRack01:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/RACKS/Rack001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/RACKS/Rack001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/RACKS/Rack001/03.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuRack01;

            break;

        case menuRack02:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/RACKS/Rack002/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/RACKS/Rack002/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/RACKS/Rack002/03.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuRack02;

            break;

        case menuCloset:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/03.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCloset;

            break;

        case menuCenterTable:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/03.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCenterTable;

            break;

        default:

            imagemDeFundo.classList.toggle('opacidade01');

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/00.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/00.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/00.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = produtoAtual;

            break;
    }

    imagemBotaoPassarImagens01.style.visibility = "hidden";
    imagemBotaoPassarImagens02.style.visibility = "visible";
};

function acaoBotaoImagensAtuaisGaleria(direcao)
{
    switch (direcao)
    {
        case 'esquerda':

            imagemDeFundo.classList.toggle('opacidade01');

            if (arrayAtual <= 0)
            {
                arrayAtual = 0;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                imagemBotaoPassarImagens01.style.visibility = "hidden";
                imagemBotaoPassarImagens02.style.visibility = "visible";

            } else if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
            {
                arrayAtual = imagensAtuaisGaleriaArray.length - 1;

                --arrayAtual;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "visible";

            } else
            {
                --arrayAtual;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                if (arrayAtual <= 0)
                {
                    imagemBotaoPassarImagens01.style.visibility = "hidden";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                } else
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                }
            }

            break;

        case 'direita':

            imagemDeFundo.classList.toggle('opacidade01');

            if (arrayAtual <= 0)
            {
                arrayAtual = 0;

                arrayAtual++;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "visible";

            } else if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
            {
                arrayAtual = imagensAtuaisGaleriaArray.length - 1;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "hidden";

            } else
            {
                arrayAtual++;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "hidden";
                } else
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                }
            }

            break;

        default:

            break;
    }
}

imagemBotaoGaleriaComoda001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCommodes)
}, false);

imagemBotaoGaleriaRack001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuRack01)
}, false);

imagemBotaoGaleriaRack002.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuRack02)
}, false);

imagemBotaoGaleriaGuardaRoupa001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCloset)
}, false);

imagemBotaoGaleriaMesaDeCentro001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCenterTable)
}, false);

cabecalho.addEventListener('animationend', abrindoFechandoMenu, false);

secaoOptions.addEventListener('animationend', itemMenuAnimacaoFinalizada, false);

imagemBotaoPassarImagens01.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('esquerda')
}, false);

imagemBotaoPassarImagens02.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('direita')
}, false);

/*
botaoPassarImagens01.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('esquerda')
}, false);

botaoPassarImagens02.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('direita')
}, false);
*/