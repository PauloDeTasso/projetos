var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var imagemDeFundo01 = document.getElementById('imagemDeFundo01');

var cabecalho = document.getElementById('cabecalho');

var rodape = document.getElementById('rodape');

var htmlPrincipal = document.getElementById('htmlPrincipal');

var imagemAbrirBotaoMenu = document.getElementById('imagemAbrirBotaoMenu');

var statusSistema = document.getElementById('statusSistema');

var distanciaImagens;

var ultimaDirecaoScroll = 0;

var primeiraImagem = 0;

var statusSistema2 = document.getElementById('statusSistema2');

var tempoIntervalo = 200;

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

setInterval(() =>
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
}, 1);

//

var larguraJanela = window.outerWidth;
var alturaJanela = window.outerHeight;

//var larguraJanela = window.innerWidth;
//var alturaJanela = window.innerHeight;

var larguraTela = screen.width;
var alturaTela = screen.height;

//

function tamanhoJanela()
{
    //statusSistema.innerHTML = "screen.availWidth: " + screen.availWidth + "\n/screen.availHeight: " + screen.availHeight + "\n//screen.width: " + screen.width + "\n/screen.heigh: " + screen.height + "\n//window.outerWidth: " + window.outerWidth + "\n/window.outerHeight: " + window.outerHeight + "\n//window.innerWidth: " + window.innerWidth + "\n/window.innerHeight: " + window.innerHeight;;

    /*
    document.querySelector('.window-size').innerHTML = larguraJanela + 'x' + alturaJanela;

    document.querySelector('.screen-size').innerHTML = larguraTela + 'x' + alturaTela;
*/
    distanciaImagens = alturaJanela + 'px solid rgba(0,0,0,1)';

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        //imagensProjetos3d[ index ].style.border = distanciaImagens;

        imagensProjetos3d[ index ].style.borderWidth = alturaJanela / 2 + "px 0px " + alturaJanela / 2 + "px 0px";

        imagensProjetos3d[ index ].style.width = larguraJanela;

        imagensProjetos3d[ index ].style.height = alturaJanela;
    }

    /*
        var estiloStatus = window.getComputedStyle(cabecalho);
    
        var valorEstiloStatus = estiloStatus.getPropertyValue('height');
    
        var valorDistancia = valorEstiloStatus + ' solid rgba(255,255,255,0)';
    
        imagensProjetos3d[ 0 ].style.border = valorDistancia;
    */

};

//

//statusSistema.innerHTML = imagensProjetos3d[ 0 ].height + "/" + imagensProjetos3d[ 0 ].width;

function statusMenu()
{
    imagemAbrirBotaoMenu.style.width = "28px";
    imagemAbrirBotaoMenu.style.height = "28px";
}

function statusMenuOff()
{
    imagemAbrirBotaoMenu.style.width = "27px";
    imagemAbrirBotaoMenu.style.height = "27px";
}

function abrirFecharMenu()
{
    statusSistema.innerHTML = "Olá";
}

function scrollImagens()
{
    var meioDaImagem0 = imagensProjetos3d[ 0 ].y + imagensProjetos3d[ 0 ].height / 2;

    var meioDaImagem1 = imagensProjetos3d[ 1 ].y + imagensProjetos3d[ 1 ].height;

    var meioDaImagem2 = imagensProjetos3d[ 2 ].y + imagensProjetos3d[ 2 ].height;

    var meioDaImagem3 = imagensProjetos3d[ 3 ].y + imagensProjetos3d[ 3 ].height;

    var meioDaImagem4 = imagensProjetos3d[ 4 ].y + imagensProjetos3d[ 4 ].height;

    var meioDaImagem5 = imagensProjetos3d[ 5 ].y + imagensProjetos3d[ 5 ].height;

    var meioDaImagem6 = imagensProjetos3d[ 6 ].y + imagensProjetos3d[ 6 ].height;

    var meioDaImagem7 = imagensProjetos3d[ 7 ].y + imagensProjetos3d[ 7 ].height;

    var meioDaImagem8 = imagensProjetos3d[ 8 ].y + imagensProjetos3d[ 8 ].height;

    var meioDaImagem9 = imagensProjetos3d[ 9 ].y + imagensProjetos3d[ 9 ].height;

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
        "\n//imagensProjetos3d[0].x: " + imagensProjetos3d[ 0 ].x + */
        "\n//imagensProjetos3d[0].height: " + imagensProjetos3d[ 0 ].height +
        "\n//imagensProjetos3d[0].naturalHeight: " + imagensProjetos3d[ 0 ].naturalHeight +
        "\n//window.innerHeight: " + -window.innerHeight +
        "\n//imagensProjetos3d[0].y: " + imagensProjetos3d[ 0 ].y +
        "\n//meioDaImagem0:.... " + meioDaImagem0 +
        "\n//imagensProjetos3d[1].y: " + imagensProjetos3d[ 1 ].y +
        "\n//meioDaImagem1: " + meioDaImagem1;


    //

    if (meioDaImagem0 < 0 && meioDaImagem0 > (-window.innerHeight - imagensProjetos3d[ 1 ].height))
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/09.png')";

    } else if (meioDaImagem1 < 0 && meioDaImagem1 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/08.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else if (meioDaImagem2 < 0 && meioDaImagem2 > -window.innerHeight)
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/07.png')";

    } else
    {
        htmlPrincipal.style.backgroundImage = "url('../../imagens/Projetos3d/background01.png')";
    }
};

//////////////////////////////////////////

tamanhoJanela();

window.addEventListener('scroll', scrollImagens, false);

window.addEventListener('resize', function ()
{
    tamanhoJanela();
}, false);

//statusSistema2.innerHTML = ;