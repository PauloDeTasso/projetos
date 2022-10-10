
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

var larguraJanela2 = window.innerWidth;
var alturaJanela2 = window.innerHeight;

var larguraTela = screen.width;
var alturaTela = screen.height;

var cartao = document.getElementById('cartao');

cartao.addEventListener('mouseenter', () => { cartao.classList.toggle('virar') }, false);

//

function tamanhoJanela()
{
    var larguraJanela = window.outerWidth;
    var alturaJanela = window.outerHeight;

    var larguraJanela2 = window.innerWidth;
    var alturaJanela2 = window.innerHeight;

    var larguraTela = screen.width;
    var alturaTela = screen.height;

    /*
        statusSistema.innerHTML = "screen.availWidth: " + screen.availWidth + "\n/screen.availHeight: " + screen.availHeight + "\n//screen.width: " + screen.width + "\n/screen.heigh: " + screen.height + "\n//window.outerWidth: " + window.outerWidth + "\n/window.outerHeight: " + window.outerHeight + "\n//window.innerWidth: " + window.innerWidth + "\n/window.innerHeight: " + window.innerHeight;
    */
    //distanciaImagens = alturaJanela + 'px solid rgba(0,0,0,1)';

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {/*
        imagensProjetos3d[ index ].style.borderStyle = "solid";

        imagensProjetos3d[ index ].style.borderColor = "rgba(0,0,0,0)";

        imagensProjetos3d[ index ].style.opacity = 1;
        */
        /*
                imagensProjetos3d[ index ].style.borderWidth = alturaJanela / 2 + "px 0px " + alturaJanela / 2 + "px 0px";
        */

        imagensProjetos3d[ index ].style.margin = alturaJanela / 2 + "px 0px";

        imagensProjetos3d[ index ].style.width = "100%";

        imagensProjetos3d[ index ].style.height = "auto";

        imagensProjetos3d[ 0 ].style.marginTop = alturaJanela + "px";
        imagensProjetos3d[ imagensProjetos3d.length - 1 ].style.marginBottom = alturaJanela + "px";
    }

};

//

function iconeTamanho(icone)
{
    icone.style.width = "55px";
    icone.style.height = "55px";
}

function iconeTamanhoMenor(icone)
{
    icone.style.width = "50px";
    icone.style.height = "50px";
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

    /*    statusSistema.innerHTML =
            "top: " + coordenada(imagensProjetos3d[ 0 ], "top") +
            " bottom: " + coordenada(htmlPrincipal, "bottom") +
            " left: " + coordenada(imagensProjetos3d[ 0 ], "left") + " right: " + coordenada(imagensProjetos3d[ 0 ], "right") +
            " x: " + coordenada(imagensProjetos3d[ 0 ], "x") +
            " y: " + coordenada(imagensProjetos3d[ 0 ], "y") +
            " width: " + coordenada(imagensProjetos3d[ 0 ], "width") +
            " height: " + coordenada(imagensProjetos3d[ 0 ], "height");
    
    statusSistema.innerHTML = "se" + coordenada(imagensProjetos3d[ 0 ], "top") + " for menor que " + coordenada(htmlPrincipal, "top") + " e " + coordenada(imagensProjetos3d[ 0 ], "bottom") + "< " + (-window.outerHeight - imagensProjetos3d[ 0 ].height);
*/

    // var xxx = imagemDeFundo.src;
    /*
        setInterval(() =>
        {
            *//*
statusSistema.innerHTML = /*"top: " + coordenada(secaoImagemDeFundo, "top") +
" bottom: " + coordenada(secaoImagemDeFundo, "bottom") +
" left: " + coordenada(secaoImagemDeFundo, "left") + " right: " + coordenada(secaoImagemDeFundo, "right") +
" x: " + coordenada(secaoImagemDeFundo, "x") +
" y: " + coordenada(secaoImagemDeFundo, "y") +
" width: " + coordenada(secaoImagemDeFundo, "width") +
" height: " + coordenada(secaoImagemDeFundo, "height") + "/-------------/ " +
"top: " + coordenada(imagemDeFundo, "top") +
" bottom: " + coordenada(imagemDeFundo, "bottom") +
" left: " + coordenada(imagemDeFundo, "left") + " right: " + coordenada(imagemDeFundo, "right") +
" x: " + coordenada(imagemDeFundo, "x") +
" y: " + coordenada(imagemDeFundo, "y") +
" width: " + coordenada(imagemDeFundo, "width") +
" height: " + coordenada(imagemDeFundo, "height") + "/-------------/ " +
"top: " + coordenada(imagensProjetos3d[ 0 ], "top") +
" bottom: " + coordenada(imagensProjetos3d[ 0 ], "bottom") +
" left: " + coordenada(imagensProjetos3d[ 0 ], "left") + " right: " + coordenada(imagensProjetos3d[ 0 ], "right") +
" x: " + coordenada(imagensProjetos3d[ 0 ], "x") +
" y: " + coordenada(imagensProjetos3d[ 0 ], "y") +
" width: " + coordenada(imagensProjetos3d[ 0 ], "width") +
" height: " + coordenada(imagensProjetos3d[ 0 ], "height") +
" ALTURA IMG0: " + (imagensProjetos3d[ 0 ].y + imagensProjetos3d[ 0 ].height) + " ALTURA FUNDO: " + (imagemDeFundo.y) +
" ////////////////////////////////////////////////// SE TOP DA IMG0: " + (imagensProjetos3d[ 0 ].y + imagensProjetos3d[ 0 ].height) + " FOR < MENOR QUE " + (imagemDeFundo.y) + " TOP DA IMAGEM DE FUNDO" + imagensProjetos3d[ imagensProjetos3d.length - 1 ].y + "----" +
document.height + " ///***////" + document.documentElement.scrollTop + "*** " + document.documentElement.scrollHeight*/

    /*
}, 10000);
*/
    //statusSistema.innerHTML = coordenada(secaoImagemDeFundo, "top");

    /*
        statusSistema.innerHTML = "SE " + imagensProjetos3d[ 0 ].y + " FOR MENOR QUE -550 E " + coordenada(imagensProjetos3d[ 0 ], "bottom") + " FOR MENOR QUE -550";
    */

    if (this.scrollY == 0)
    {
        setTimeout(() =>
        {
            cabecalho.style.height = "70px";
            imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";

            for (let i = 0; i < menu.length; i++) 
            {
                menu[ i ].style.visibility = "hidden";
            }
            secaoTemas.style.visibility = "hidden";

            relogio.style.color = "rgb(255,255,255)"

        }, tempoIntervalo);

        //SE O SCROOL ESTIVER 100% EM BAIXO:
    } else if (Math.abs(document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop) < 1)
    {
        setTimeout(() =>
        {
            //imagemDeFundo.style.top = "120px";
            cabecalho.style.height = "70px";

            for (let i = 0; i < menu.length; i++) 
            {
                menu[ i ].style.visibility = "hidden";
            }
            secaoTemas.style.visibility = "hidden";

            relogio.style.color = "rgb(255,255,255)"

        }, tempoIntervalo);

    } else
    {
        setTimeout(() =>
        {
            cabecalho.style.height = "70px";

            for (let i = 0; i < menu.length; i++) 
            {
                menu[ i ].style.visibility = "hidden";
            }
            secaoTemas.style.visibility = "hidden";

            relogio.style.color = "rgb(0, 0, 0)"

        }, tempoIntervalo);

    };

    ///////////
    /*
        var imagem1width = imagensProjetos3d[ 0 ].width;
    
        var imagem1height = imagensProjetos3d[ 0 ].height;
    
        //
    
        var imagem1LarguraCoordenada = coordenada(imagensProjetos3d[ 0 ], "width");
    
        var imagem1AlturaCoordenada = coordenada(imagensProjetos3d[ 0 ], "height");
    
        //
    
        var imagem1offsetWidth = imagensProjetos3d[ 0 ].offsetWidth;
    
        var imagem1offsetHeight = imagensProjetos3d[ 0 ].offsetHeight;
    
        //
    
        var imagem1offsetTop = imagensProjetos3d[ 0 ].offsetTop;
    
        var imagem1offsetLeft = imagensProjetos3d[ 0 ].offsetLeft;
    
        var imagem1offsetParent = imagensProjetos3d[ 0 ].offsetParent;
    
        //
    
        var imagem1clientWidth = imagensProjetos3d[ 0 ].clientWidth;
    
        var imagem1clientHeight = imagensProjetos3d[ 0 ].clientHeight;
    
        var imagem1clientTop = imagensProjetos3d[ 0 ].clientTop;
    
        var imagem1clientLeft = imagensProjetos3d[ 0 ].clientLeft;
    
        //
    
        var imagem1elementFromPoint = document.elementFromPoint(0, 0);
    
        //
    
        var imagem1X = imagensProjetos3d[ 0 ].x;
        var imagem1Y = imagensProjetos3d[ 0 ].y;
    
        var imagemDeFundoX = imagemDeFundo.x;
        var imagemDeFundoY = imagemDeFundo.y;
    
        ///////////2
    
        var imagemDeFundowidth = imagemDeFundo.width;
    
        var imagemDeFundoheight = imagemDeFundo.height;
    
        //
    
        var imagemDeFundoLarguraCoordenada = coordenada(imagemDeFundo, "width");
    
        var imagemDeFundoAlturaCoordenada = coordenada(imagemDeFundo, "height");
    
        //
    
        var imagemDeFundooffsetWidth = imagemDeFundo.offsetWidth;
    
        var imagemDeFundooffsetHeight = imagemDeFundo.offsetHeight;
    
        //
    
        var imagemDeFundooffsetTop = imagemDeFundo.offsetTop;
    
        var imagemDeFundooffsetLeft = imagemDeFundo.offsetLeft;
    
        var imagemDeFundooffsetParent = imagemDeFundo.offsetParent;
    
        //
    
        var imagemDeFundoclientWidth = imagemDeFundo.clientWidth;
    
        var imagemDeFundoclientHeight = imagemDeFundo.clientHeight;
    
        var imagemDeFundoclientTop = imagemDeFundo.clientTop;
    
        var imagemDeFundoclientLeft = imagemDeFundo.clientLeft;
    
        //
    
        var imagemDeFundoelementFromPoint = document.elementFromPoint(0, 0);
    */
    //
    /*
        var topoImagem0 = imagensProjetos3d[ 0 ].y;
        var topoImagem1 = imagensProjetos3d[ 1 ].y;
        var topoImagem2 = imagensProjetos3d[ 2 ].y;
        var topoImagem3 = imagensProjetos3d[ 3 ].y;
        */

    /*
    var topoImagem4 = imagensProjetos3d[ 4 ].y;
    var topoImagem5 = imagensProjetos3d[ 5 ].y;
    var topoImagem6 = imagensProjetos3d[ 6 ].y;
    var topoImagem7 = imagensProjetos3d[ 7 ].y;
    var topoImagem8 = imagensProjetos3d[ 8 ].y;
    var topoImagem9 = imagensProjetos3d[ 9 ].y;
    var topoImagem10 = imagensProjetos3d[ 10 ].y;
    var topoImagem11 = imagensProjetos3d[ 11 ].y;
    var topoImagem12 = imagensProjetos3d[ 12 ].y;
    var topoImagem13 = imagensProjetos3d[ 13 ].y;
    var topoImagem14 = imagensProjetos3d[ 14 ].y;
    var topoImagem15 = imagensProjetos3d[ 15 ].y;
    var topoImagem16 = imagensProjetos3d[ 16 ].y;
*/
    //

    /*
    var baseImagem0 = (imagensProjetos3d[ 0 ].y) + (imagensProjetos3d[ 0 ].height);
    var baseImagem1 = (imagensProjetos3d[ 1 ].y) + (imagensProjetos3d[ 1 ].height);
    var baseImagem2 = (imagensProjetos3d[ 2 ].y) + (imagensProjetos3d[ 2 ].height);
    var baseImagem3 = (imagensProjetos3d[ 3 ].y) + (imagensProjetos3d[ 3 ].height);
*/

    /*
    var baseImagem0 = (imagensProjetos3d[ 0 ].y) + (alturaJanela);
    var baseImagem1 = (imagensProjetos3d[ 1 ].y) + (alturaJanela);
    var baseImagem2 = (imagensProjetos3d[ 2 ].y) + (alturaJanela);
    var baseImagem3 = (imagensProjetos3d[ 3 ].y) + (alturaJanela);
    */

    /*
    var baseImagem0 = (imagensProjetos3d[ 0 ].y) + (alturaJanela / 2);
    var baseImagem1 = (imagensProjetos3d[ 1 ].y) + (alturaJanela / 2);
    var baseImagem2 = (imagensProjetos3d[ 2 ].y) + (alturaJanela / 2);
    var baseImagem3 = (imagensProjetos3d[ 3 ].y) + (alturaJanela / 2);
    /*

    var baseImagem4 = (imagensProjetos3d[ 4 ].y) + (alturaJanela / 2);
    var baseImagem5 = (imagensProjetos3d[ 5 ].y) + (alturaJanela / 2);
    var baseImagem6 = (imagensProjetos3d[ 6 ].y) + (alturaJanela / 2);
    var baseImagem7 = (imagensProjetos3d[ 7 ].y) + (alturaJanela / 2);
    var baseImagem8 = (imagensProjetos3d[ 8 ].y) + (alturaJanela / 2);
    var baseImagem9 = (imagensProjetos3d[ 9 ].y) + (alturaJanela / 2);
    var baseImagem10 = (imagensProjetos3d[ 10 ].y) + (alturaJanela / 2);
    var baseImagem11 = (imagensProjetos3d[ 11 ].y) + (alturaJanela / 2);
    var baseImagem12 = (imagensProjetos3d[ 12 ].y) + (alturaJanela / 2);
    var baseImagem13 = (imagensProjetos3d[ 13 ].y) + (alturaJanela / 2);
    var baseImagem14 = (imagensProjetos3d[ 14 ].y) + (alturaJanela / 2);
    var baseImagem15 = (imagensProjetos3d[ 15 ].y) + (alturaJanela / 2);    
    var baseImagem16 = (imagensProjetos3d[ 16 ].y) + (alturaJanela / 2);
*/

    /*
    var topoImagem1 = imagensProjetos3d[ 0 ].y;
     
    var topoImagemDeFundo = -(imagemDeFundo.y + imagemDeFundo.height);
     
    var baseImagem1 = (imagensProjetos3d[ 0 ].y) + (imagensProjetos3d[ 0 ].height);
     
    var baseImagemDeFundo = imagemDeFundo.y;
    */

    var larguraJanela = window.outerWidth;
    var alturaJanela = window.outerHeight;

    var larguraJanela2 = window.innerWidth;
    var alturaJanela2 = window.innerHeight;

    var larguraTela = screen.width;
    var alturaTela = screen.height;

    var topoImagemDeFundo = imagemDeFundo.y;
    var baseImagemDeFundo = (imagemDeFundo.y + imagemDeFundo.height);

    var topoImagem0 = (imagensProjetos3d[ 0 ].y);
    var topoImagem1 = (imagensProjetos3d[ 1 ].y);
    var topoImagem2 = (imagensProjetos3d[ 2 ].y);
    var topoImagem3 = (imagensProjetos3d[ 3 ].y);

    var baseImagem0 = topoImagem0 + imagensProjetos3d[ 0 ].height;
    var baseImagem1 = topoImagem1 + imagensProjetos3d[ 1 ].height;
    var baseImagem2 = topoImagem2 + imagensProjetos3d[ 2 ].height;
    var baseImagem3 = topoImagem3 + imagensProjetos3d[ 3 ].height;

    ////////

    //0

    if (topoImagem0 < topoImagemDeFundo && baseImagem0 < baseImagemDeFundo && topoImagem1 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/01.png";

    } else if (topoImagem0 > topoImagemDeFundo && baseImagem0 > baseImagemDeFundo && topoImagem1 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";

        //1

    } else if (topoImagem1 < topoImagemDeFundo && baseImagem1 < baseImagemDeFundo && topoImagem2 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/04.png";

    } else if (topoImagem1 > topoImagemDeFundo && baseImagem1 > baseImagemDeFundo && baseImagem2 > topoImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/01.png";

        //2

    } else if (topoImagem2 < topoImagemDeFundo && baseImagem2 < baseImagemDeFundo && topoImagem3 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/03.png";

    } else if (topoImagem2 > topoImagemDeFundo && baseImagem2 > baseImagemDeFundo && baseImagem3 > topoImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/04.png";

        //3

    } else if (topoImagem3 < topoImagemDeFundo && baseImagem3 < baseImagemDeFundo && topoImagem2 < baseImagemDeFundo) 
    {
        imagemDeFundo.src = "";

    } else if (topoImagem3 > topoImagemDeFundo && baseImagem3 > baseImagemDeFundo && baseImagem2 < topoImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/03.png";

        /*
                //4
        
            } else if (topoImagem4 < topoImagemDeFundo && baseImagem4 < baseImagemDeFundo && topoImagem5 > baseImagemDeFundo) 
            {
                imagemDeFundo.src = "../../imagens/Projetos3d/01.png";
        
            } else if (topoImagem4 > topoImagemDeFundo && baseImagem4 > baseImagemDeFundo && baseImagem5 > topoImagemDeFundo) 
            {
                imagemDeFundo.src = "../../imagens/Projetos3d/02.png";
        
                //5
                
                    } else if (topoImagem5 < topoImagemDeFundo && baseImagem5 < baseImagemDeFundo && topoImagem6 > baseImagemDeFundo) 
                    {
                        imagemDeFundo.src = "../../imagens/Projetos3d/06.png";
                
                    } else if (topoImagem5 > topoImagemDeFundo && baseImagem5 > baseImagemDeFundo && baseImagem6 > topoImagemDeFundo) 
                    {
                        imagemDeFundo.src = "../../imagens/Projetos3d/05.png";
                        
                                //6
                        
                            } else if (topoImagem6 < topoImagemDeFundo && baseImagem6 < baseImagemDeFundo && topoImagem7 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/06.png";
                        
                            } else if (topoImagem6 > topoImagemDeFundo && baseImagem6 > baseImagemDeFundo && baseImagem7 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/05.png";
                        
                                //7
                        
                            } else if (topoImagem7 < topoImagemDeFundo && baseImagem7 < baseImagemDeFundo && topoImagem8 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/07.png";
                        
                            } else if (topoImagem7 > topoImagemDeFundo && baseImagem7 > baseImagemDeFundo && baseImagem8 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/06.png";
                        
                                //8
                        
                            } else if (topoImagem8 < topoImagemDeFundo && baseImagem8 < baseImagemDeFundo && topoImagem9 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/08.png";
                        
                            } else if (topoImagem8 > topoImagemDeFundo && baseImagem8 > baseImagemDeFundo && baseImagem9 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/07.png";
                        
                                //9
                        
                            } else if (topoImagem9 < topoImagemDeFundo && baseImagem9 < baseImagemDeFundo && topoImagem10 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/09.png";
                        
                            } else if (topoImagem9 > topoImagemDeFundo && baseImagem9 > baseImagemDeFundo && baseImagem10 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/08.png";
                        
                                //10
                        
                            } else if (topoImagem10 < topoImagemDeFundo && baseImagem10 < baseImagemDeFundo && topoImagem11 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/10.png";
                        
                            } else if (topoImagem10 > topoImagemDeFundo && baseImagem10 > baseImagemDeFundo && baseImagem11 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/09.png";
                        
                                //11
                        
                            } else if (topoImagem11 < topoImagemDeFundo && baseImagem11 < baseImagemDeFundo && topoImagem12 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/11.png";
                        
                            } else if (topoImagem11 > topoImagemDeFundo && baseImagem11 > baseImagemDeFundo && baseImagem12 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/10.png";
                        
                                //12
                        
                            } else if (topoImagem12 < topoImagemDeFundo && baseImagem12 < baseImagemDeFundo && topoImagem13 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/12.png";
                        
                            } else if (topoImagem12 > topoImagemDeFundo && baseImagem12 > baseImagemDeFundo && baseImagem13 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/11.png";
                        
                                //13
                        
                            } else if (topoImagem13 < topoImagemDeFundo && baseImagem13 < baseImagemDeFundo && topoImagem14 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/13.png";
                        
                            } else if (topoImagem13 > topoImagemDeFundo && baseImagem13 > baseImagemDeFundo && baseImagem14 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/12.png";
                        
                                //14
                        
                            } else if (topoImagem14 < topoImagemDeFundo && baseImagem14 < baseImagemDeFundo && topoImagem15 > baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/14.png";
                        
                            } else if (topoImagem14 > topoImagemDeFundo && baseImagem14 > baseImagemDeFundo && baseImagem15 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/13.png";
                        
                                //15
                        
                            } else if (topoImagem15 < topoImagemDeFundo && baseImagem15 < baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/15.png";
                        
                            } else if (topoImagem15 > topoImagemDeFundo && baseImagem15 > baseImagemDeFundo && baseImagem16 > topoImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/14.png";
                        
                                //16
                        
                            } else if (topoImagem16 < topoImagemDeFundo && baseImagem16 < baseImagemDeFundo) 
                            {
                                imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";
                        */
    } else
    {
        imagemDeFundo.src = "";
    }

    /////////

    /*
     
    if (topoImagem1 < topoImagemDeFundo && baseImagem1 < baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/10.png";
     
    } else if (topoImagem1 > topoImagemDeFundo && baseImagem1 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";
     
    } else
    {
        //  imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";
    }
     
    */

    ////////////////////
    /*
        statusSistema.innerHTML = xxx + "<br>" + "<br>" +
            /*
            "imagem1width: " + imagem1width + "<br>" +
            "imagem1LarguraCoordenada: " + imagem1LarguraCoordenada + "<br>" +
            "imagem1offsetWidth: " + imagem1offsetWidth + "<br>" +
            "imagem1clientWidth: " + imagem1clientWidth + "<br>" +
            "imagem1height: " + imagem1height + "<br>" +
            "imagem1clientHeight: " + imagem1clientHeight + "<br>" +
            "imagem1AlturaCoordenada: " + imagem1AlturaCoordenada + "<br>" +
            "imagem1offsetHeight: " + imagem1offsetHeight + "<br>" +
            "imagem1offsetTop: " + imagem1offsetTop + "<br>" +
            "imagem1offsetLeft: " + imagem1offsetLeft + "<br>" +
            "imagem1offsetParent: " + imagem1offsetParent + "<br>" +
            "imagem1clientTop: " + imagem1clientTop + "<br>" +
            "imagem1clientLeft: " + imagem1clientLeft + "<br>" +
            "imagem1elementFromPoint: " + imagem1elementFromPoint + "<br>" +
            "imagem1X: " + imagem1X + "<br>" +
            "imagemDeFundoX: " + imagemDeFundoX + "<br>" +
            "imagem1Y: " + imagem1Y + "<br>" +
            "imagemDeFundoY: " + imagemDeFundoY + "<br>" +
            *//*
"topoImagem11: " + topoImagem11 + "<br>" +
"baseImagem11: " + baseImagem11 + "<br>" + "<br>" +
"topoImagem12: " + topoImagem12 + "<br>" +
"baseImagem12: " + baseImagem12 + "<br>" + "<br>" +
"topoImagemDeFundo: " + topoImagemDeFundo + "<br>" +
"baseImagemDeFundo: " + baseImagemDeFundo;

//////////

/*
statusSistema2.innerHTML = xxx + "<br>" + "<br>" +
 
"imagemDeFundowidth: " + imagemDeFundowidth + "<br>" +
"imagemDeFundoLarguraCoordenada: " + imagemDeFundoLarguraCoordenada + "<br>" +
"imagemDeFundooffsetWidth: " + imagemDeFundooffsetWidth + "<br>" +
"imagemDeFundoclientWidth: " + imagemDeFundoclientWidth + "<br>" +
"imagemDeFundoheight: " + imagemDeFundoheight + "<br>" +
"imagemDeFundoclientHeight: " + imagemDeFundoclientHeight + "<br>" +
"imagemDeFundoAlturaCoordenada: " + imagemDeFundoAlturaCoordenada + "<br>" +
"imagemDeFundooffsetHeight: " + imagemDeFundooffsetHeight + "<br>" +
"imagemDeFundooffsetTop: " + imagemDeFundooffsetTop + "<br>" +
"imagemDeFundooffsetLeft: " + imagemDeFundooffsetLeft + "<br>" +
"imagemDeFundooffsetParent: " + imagemDeFundooffsetParent + "<br>" +
"imagemDeFundoclientTop: " + imagemDeFundoclientTop + "<br>" +
"imagemDeFundoclientLeft: " + imagemDeFundoclientLeft + "<br>" +
"imagemDeFundoelementFromPoint: " + imagemDeFundoelementFromPoint + "<br>" +
"imagem1X: " + imagem1X + "<br>" +
"imagemDeFundoX: " + imagemDeFundoX + "<br>" +
"imagem1Y: " + imagem1Y + "<br>" +
"imagemDeFundoY: " + imagemDeFundoY + "<br>" +
 
"topoImagem1: " + topoImagem1 + "<br>" +
"topoImagemDeFundo: " + topoImagemDeFundo + "<br>" +
"baseImagem1: " + baseImagem1 + "<br>" +
"baseImagemDeFundo: " + baseImagemDeFundo;
*/
    /*

    if (statusSistema.y == undefined || statusSistema.y == "undefined")
    {
 
    } else
    {
        alert(statusSistema.y)
    }
 
    bloco.y = (statusSistema.y);
    */
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
    /*
        if (hour > 12)
        {
            hour -= 12;
            am_pm = " || PM";
        }
        if (hour == 0)
        {
            hr = 12;
            am_pm = " || AM";
        }
    *//*
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    */
    let currentTime = hour + ":"
        + min + ":" + sec + "s || 3D™";

    relogio.innerHTML = "Lookalike® || " + "\n" + currentTime;

    //statusSistema2.innerHTML = coordenada(imagensProjetos3d[ 0 ], "top");

}

showTime();

//////////////////////////////////////////

tamanhoJanela();

window.addEventListener('scroll', scrollImagens, false);

window.addEventListener('resize', function ()
{
    tamanhoJanela();
}, false);


/*
function atualizarDistanciaImagens()
{
    /*
    var estiloStatus = window.getComputedStyle(imagensProjetos3d[ 1 ]);
    var valorEstiloStatus = estiloStatus.getPropertyValue('border');
*/
/*
    var valorDistancia = distanciaImagens + 'px solid rgba(255,255,255,0)';;
 
    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        imagensProjetos3d[ index ].style.border = valorDistancia;
    }
}
* /
 
/*
window.addEventListener('scroll', function (e)
{
    // mesma posição
    //if (e.scrollY === ultimaDirecaoScroll) return;
 
    var resultado = this.scrollY < ultimaDirecaoScroll ? "Cima" : "Baixo"
 
    if (e.scrollY === ultimaDirecaoScroll)
    {
        resultado = "Igual"
    }
 
    ultimaDirecaoScroll = this.scrollY;
 
    if (resultado == "Cima")
    {
        distanciaImagens -= 1;
        atualizarDistanciaImagens();
    } else if (resultado == "Baixo")
    {
        distanciaImagens += 1;
 
        atualizarDistanciaImagens();
    } else
    {
        distanciaImagens = distanciaImagens;
    }
 
}, false);
*/

/////////

//
/*
setInterval(() =>
{
 
    ////
    /*
        //IMAGEM EM BAIXO
        if (imagensProjetos3d[ primeiraImagem ].y > 0)
        {
            htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/background01.png')";
 
            statusSistema.innerHTML = imagensProjetos3d[ primeiraImagem ].y + "MENOR QUE alturaJanela " + alturaJanela;
 
            //IMAGEM EM CIMA
        } else if (imagensProjetos3d[ primeiraImagem ].y < 0)
        {
            htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/00.png')";
 
            statusSistema.innerHTML = imagensProjetos3d[ primeiraImagem ].y + "MAIOR QUE alturaJanela" + alturaJanela;
 
        } else
        {
            statusSistema.innerHTML = "IGUAL A alturaJanela";
        }
  */
/*
}, 1);
*/
//


/*
cabecalho.animate([
    // keyframes
    {
        transform: 'translateY(0px)'
    },
 
    {
        transform: 'translateY(300px)'
    }
], {
    // timing options
    duration: 1000,
    //iterations: Infinity
});
*/


////backup funcao scrool
/*
 
function scrollImagens()
{
 
    if (this.scrollY == 0)
    {
        setTimeout(() =>
        {
            cabecalho.style.backgroundColor = "rgba(250, 200, 120, .7)";
            cabecalho.style.height = "12%";
 
        }, tempoIntervalo);
 
    } else
    {
        setTimeout(() =>
        {
            cabecalho.style.backgroundColor = "rgba(214, 177, 104, 0.499)";
            cabecalho.style.height = "5%";
        }, tempoIntervalo);
 
    }
 
    var topoDaImagem0 = imagensProjetos3d[ 0 ].y + imagensProjetos3d[ 0 ].height / 2;
 
    var topoDaImagem1 = imagensProjetos3d[ 1 ].y + imagensProjetos3d[ 1 ].height / 2;
 
    var topoDaImagem2 = imagensProjetos3d[ 2 ].y + imagensProjetos3d[ 2 ].height / 2;
 
    var topoDaImagem3 = imagensProjetos3d[ 3 ].y + imagensProjetos3d[ 3 ].height / 2;
 
    var topoDaImagem4 = imagensProjetos3d[ 4 ].y + imagensProjetos3d[ 4 ].height / 2;
 
    var topoDaImagem5 = imagensProjetos3d[ 5 ].y + imagensProjetos3d[ 5 ].height / 2;
 
    var topoDaImagem6 = imagensProjetos3d[ 6 ].y + imagensProjetos3d[ 6 ].height / 2;
 
    var topoDaImagem7 = imagensProjetos3d[ 7 ].y + imagensProjetos3d[ 7 ].height / 2;
 
    var topoDaImagem8 = imagensProjetos3d[ 8 ].y + imagensProjetos3d[ 8 ].height / 2;
 
    var topoDaImagem9 = imagensProjetos3d[ 9 ].y + imagensProjetos3d[ 9 ].height / 2;
 
    /*
    statusSistema.innerHTML =
        /*"//screen.availWidth: " + screen.availWidth +
        "\n//screen.availHeight: " + screen.availHeight +
        "\n//screen.width..: " + screen.width +
        "\n//screen.heigh: " + screen.height +
        "\n//window.outerWidth: " + window.outerWidth +
        "\n/window.outerHeight: " + window.outerHeight +
        "\n//window.innerWidth: " + window.innerWidth +
        "\n//window.innerHeight: " + window.innerHeight +
        "\n//imagensProjetos3d[0].width: " + imagensProjetos3d[ 0 ].width +
        "\n//imagensProjetos3d[0].height: " + imagensProjetos3d[ 0 ].height +
        "\n//imagensProjetos3d[0].naturalWidth: " + imagensProjetos3d[ 0 ].naturalWidth +
        "\n//imagensProjetos3d[0].naturalHeight: " + imagensProjetos3d[ 0 ].naturalHeight +
        "\n//imagensProjetos3d[0].x: " + imagensProjetos3d[ 0 ].x +
        "\n//imagensProjetos3d[0].height: " + imagensProjetos3d[ 0 ].height +
        "\n/window.outerHeight: " + window.outerHeight +
        "\n//window.innerHeight: " + -window.innerHeight +
        "\n//imagensProjetos3d[0].y: " + imagensProjetos3d[ 0 ].y +
        "\n//topoDaImagem0:.... " + topoDaImagem0 +
        "\n//imagensProjetos3d[1].y: " + imagensProjetos3d[ 1 ].y +
        "\n//topoDaImagem1: " + topoDaImagem1;
 
    //
 
    if (topoDaImagem0 < 0 && topoDaImagem0 > (-window.outerHeight - imagensProjetos3d[ 0 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/10.png')";
 
    } else if (topoDaImagem1 < 0 && topoDaImagem1 > (-window.outerHeight - imagensProjetos3d[ 1 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/09.png')";
 
    } else if (topoDaImagem2 < 0 && topoDaImagem2 > (-window.outerHeight - imagensProjetos3d[ 2 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/08.png')";
 
    } else if (topoDaImagem3 < 0 && topoDaImagem3 > (-window.outerHeight - imagensProjetos3d[ 3 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";
 
    } else if (topoDaImagem4 < 0 && topoDaImagem4 > (-window.outerHeight - imagensProjetos3d[ 4 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/06.png')";
 
    } else if (topoDaImagem5 < 0 && topoDaImagem5 > (-window.outerHeight - imagensProjetos3d[ 5 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/05.png')";
 
    } else if (topoDaImagem6 < 0 && topoDaImagem6 > (-window.outerHeight - imagensProjetos3d[ 6 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/04.png')";
 
    } else if (topoDaImagem7 < 0 && topoDaImagem7 > (-window.outerHeight - imagensProjetos3d[ 7 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/03.png')";
 
    } else if (topoDaImagem8 < 0 && topoDaImagem8 > (-window.outerHeight - imagensProjetos3d[ 8 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/02.png')";
 
    } else if (topoDaImagem9 < 0 && topoDaImagem9 > (-window.outerHeight - imagensProjetos3d[ 9 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/01.png')";
 
    } else
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/background01.png')";
    }
};
 
*/

/*
var elementosDaClasse = document.getElementsByClassName('elementosDaClasse'),
    tamanhoArrai = elementosDaClasse.length,
    i;
 
for (i = 0; i < tamanhoArrai; i++)
{
    elementosDaClasse[ i ].classList.add('move');
}
 
//var elementosDaClasse = document.querySelector('.box');
 
elementosDaClasse.addEventListener('transitionend', animacaoFinalizada, false);
 
var elementosDaClasse = document.querySelector('.elementosDaClasse');
 
var animation = elementosDaClasse.animate([
    { transform: 'translate(0)' },
    { transform: 'translate(150px, 200px)' }
], 500);
 
animation.addEventListener('finish', function ()
{
    elementosDaClasse.style.transform = 'translate(150px, 200px)';
});
*/
////
/*
 
cabecalho.animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-300px)' }
], {
    // timing options
    duration: 1000,
    iterations: Infinity
});
 
 */

/////
/*
var repeticao = 0
 
secaoImagens.addEventListener('animationiteration', () =>
{
    alert("repetiu " + ++repeticao + " vezes. ");
});
 
secaoImagens.addEventListener('animationstart', () =>
{
    alert("começou");
});
 
secaoImagens.addEventListener('animationend', animacaoFinalizada);
 
function animacaoFinalizada()
{
    alert("A animação foi finalizada!");
}
*/


/*
    statusSistema.innerHTML =
        "//screen.availWidth: " + screen.availWidth +
        "\n//screen.availHeight: " + screen.availHeight +
        "\n//screen.width..: " + screen.width +
        "\n//screen.heigh: " + screen.height +
        "\n//window.outerWidth: " + window.outerWidth +
        "\n/window.outerHeight: " + window.outerHeight +
        "\n//window.innerWidth: " + window.innerWidth +
        "\n//window.innerHeight: " + window.innerHeight +
        "\n//imagensProjetos3d[0].width: " + imagensProjetos3d[ 0 ].width +
        "\n//imagensProjetos3d[0].height: " + imagensProjetos3d[ 0 ].height +
        "\n//imagensProjetos3d[0].naturalWidth: " + imagensProjetos3d[ 0 ].naturalWidth +
        "\n//imagensProjetos3d[0].naturalHeight: " + imagensProjetos3d[ 0 ].naturalHeight +
        "\n//imagensProjetos3d[0].x: " + imagensProjetos3d[ 0 ].x +
        "\n//imagensProjetos3d[0].height: " + imagensProjetos3d[ 0 ].height +
        "\n/window.outerHeight: " + window.outerHeight +
        "\n//window.innerHeight: " + -window.innerHeight +
        "\n//imagensProjetos3d[0].y: " + imagensProjetos3d[ 0 ].y +
        "\n//topoDaImagem0:.... " + topoDaImagem0 +
        "\n//imagensProjetos3d[1].y: " + imagensProjetos3d[ 1 ].y +
        "\n//topoDaImagem1: " + topoDaImagem1;
*/

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

    cabecalho.style.animation = "none";
    setTimeout(function ()
    {
        cabecalho.style.animation = "";
    }, 100);
}

function abrindoFechandoMenu()
{
    /*
    var estiloCabecalho = window.getComputedStyle(cabecalho);
    var propriedadeCabecalho = estiloCabecalho.getPropertyValue('height');
    */

    /*
    if (propriedadeCabecalho == "35px" || propriedadeCabecalho == "50px")
    */
    //alert(menuAberto)
    if (menuAberto)
    {
        cabecalho.style.height = "120px";
        secaoTemas.style.visibility = "visible";
        cabecalho.style.alignItems = "flex-start";
        cabecalho.style.opacity = 1;
        relogio.style.visibility = "hidden";

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "visible";
        }

    } else
    {
        cabecalho.style.height = "70px"
        cabecalho.style.opacity = "1";
        cabecalho.style.alignItems = "flex-start";
        relogio.style.display = "flex";

        secaoTemas.style.visibility = "hidden"

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "hidden";
        }
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
                open("../Lookalike3D/Lookalike3d.html", "_self")
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

//statusSistema.innerHTML = '';

/*
 
imagemBotaoMenu.addEventListener('click', () =>
{
    abrirMenuImagemIcone();
    abrirMenu();
}, false);
 
*/

function abrirPagina(link, target)
{
    window.open(link, target);
}

function itemMenuAnimacaoFinalizada()
{
    for (let i = 0; i < secaoTemas.length; i++) 
    {
        secaoTemas[ i ].style.visibility = "visible";
        secaoTemas[ i ].style.opacity = 1;
    }
}

//

function detectar_mobile()
{
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    )
    {
        return true;
    }
    else
    {
        return false;
    }
}

if (detectar_mobile())
{
    if (screen.height > screen.width) 
    {
        imagemDeFundo.style.top = alturaJanela / 3.3 + "px";
    } else
    {
        imagemDeFundo.style.top = "0px";
    }

} else
{
    imagemDeFundo.style.top = "0px";
}

//

cabecalho.addEventListener('animationend', abrindoFechandoMenu, false);

//secaoOptions.addEventListener('animationend', itemMenuAnimacaoFinalizada, false);

/*
function scrollImagens()
{

    if (this.scrollY == 0)
    {
        setTimeout(() =>
        {
            cabecalho.style.height = "50px";
            htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/background01.png')";

            for (let i = 0; i < menu.length; i++)
            {
                menu[ i ].style.visibility = "hidden";
            }

        }, tempoIntervalo);

    } else
    {
        setTimeout(() =>
        {
            cabecalho.style.height = "35px";
            cabecalho.style.alignItems = "flex-start"

            for (let i = 0; i < menu.length; i++)
            {
                menu[ i ].style.visibility = "hidden";
            }
            secaoTemas.style.visibility = "hidden"

        }, tempoIntervalo);

    }

    //

    var topoDaImagem0 = imagensProjetos3d[ 0 ].y + imagensProjetos3d[ 0 ].height / 2;

    var topoDaImagem1 = imagensProjetos3d[ 1 ].y + imagensProjetos3d[ 1 ].height / 2;

    var topoDaImagem2 = imagensProjetos3d[ 2 ].y + imagensProjetos3d[ 2 ].height / 2;

    var topoDaImagem3 = imagensProjetos3d[ 3 ].y + imagensProjetos3d[ 3 ].height / 2;

    var topoDaImagem4 = imagensProjetos3d[ 4 ].y + imagensProjetos3d[ 4 ].height / 2;

    var topoDaImagem5 = imagensProjetos3d[ 5 ].y + imagensProjetos3d[ 5 ].height / 2;

    var topoDaImagem6 = imagensProjetos3d[ 6 ].y + imagensProjetos3d[ 6 ].height / 2;

    var topoDaImagem7 = imagensProjetos3d[ 7 ].y + imagensProjetos3d[ 7 ].height / 2;

    var topoDaImagem8 = imagensProjetos3d[ 8 ].y + imagensProjetos3d[ 8 ].height / 2;

    var topoDaImagem9 = imagensProjetos3d[ 9 ].y + imagensProjetos3d[ 9 ].height / 2;

    //

    if (topoDaImagem0 < -50 && topoDaImagem0 > (-window.outerHeight - imagensProjetos3d[ 0 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/10.png')";

    } else if (topoDaImagem1 < 0 && topoDaImagem1 > (-window.outerHeight - imagensProjetos3d[ 1 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/09.png')";

    } else if (topoDaImagem2 < 0 && topoDaImagem2 > (-window.outerHeight - imagensProjetos3d[ 2 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/08.png')";

    } else if (topoDaImagem3 < 0 && topoDaImagem3 > (-window.outerHeight - imagensProjetos3d[ 3 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (topoDaImagem4 < 0 && topoDaImagem4 > (-window.outerHeight - imagensProjetos3d[ 4 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/06.png')";

    } else if (topoDaImagem5 < 0 && topoDaImagem5 > (-window.outerHeight - imagensProjetos3d[ 5 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/05.png')";

    } else if (topoDaImagem6 < 0 && topoDaImagem6 > (-window.outerHeight - imagensProjetos3d[ 6 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/04.png')";

    } else if (topoDaImagem7 < 0 && topoDaImagem7 > (-window.outerHeight - imagensProjetos3d[ 7 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/03.png')";

    } else if (topoDaImagem8 < 0 && topoDaImagem8 > (-window.outerHeight - imagensProjetos3d[ 8 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/02.png')";

    } else if (topoDaImagem9 < 0 && topoDaImagem9 > (-window.outerHeight - imagensProjetos3d[ 9 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/01.png')";

    } else
    {
        //  htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/background01.png')";
    }
};

*/
/*
setInterval(() =>
{
    var larguraJanela = window.outerWidth;
    var alturaJanela = window.outerHeight;

    var larguraJanela2 = window.innerWidth;
    var alturaJanela2 = window.innerHeight;

    var larguraTela = screen.width;
    var alturaTela = screen.height;

    var topoImagemDeFundo = imagemDeFundo.y;
    var baseImagemDeFundo = (imagemDeFundo.y + imagemDeFundo.height);

    var topoImagem0 = (imagensProjetos3d[ 0 ].y);

    var topoImagem1 = (imagensProjetos3d[ 1 ].y);
    var topoImagem2 = (imagensProjetos3d[ 2 ].y);
    var topoImagem3 = (imagensProjetos3d[ 3 ].y);

    var baseImagem0 = topoImagem0 + imagensProjetos3d[ 0 ].height;

    var baseImagem1 = topoImagem0 + imagensProjetos3d[ 1 ].height;
    var baseImagem2 = topoImagem0 + imagensProjetos3d[ 2 ].height;
    var baseImagem3 = topoImagem0 + imagensProjetos3d[ 3 ].height;

    statusSistema.innerHTML = "larguraJanela: " + larguraJanela + "<br>/larguraJanela2: " + larguraJanela2 + "<br>/larguraTela: " + larguraTela + "<br><br>/alturaJanela: " + alturaJanela + "<br>/alturaJanela2: " + alturaJanela2 + "<br>/alturaTela: " + alturaTela + "<br><br>/imagensProjetos3d[ 0 ].height: " + imagensProjetos3d[ 0 ].height + "<br>/imagemDeFundo.height: " + imagemDeFundo.height + "<br><br>/topoImagemDeFundo: " + topoImagemDeFundo + "<br>/baseImagemDeFundo: " + baseImagemDeFundo + "<br><br>/topoImagem0: " + topoImagem0 + "<br>/baseImagem0: " + baseImagem0;

}, 0);
*/
/*
    //0

    if (topoImagem0 < topoImagemDeFundo && baseImagem0 < baseImagemDeFundo && topoImagem1 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/01.png";

    } else if (topoImagem0 > topoImagemDeFundo && baseImagem0 > baseImagemDeFundo && topoImagem1 > baseImagemDeFundo) 
    {
        imagemDeFundo.src = "../../imagens/Projetos3d/background01.png";
*/