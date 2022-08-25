var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var menu = document.getElementsByClassName('menu');

var imagemDeFundo01 = document.getElementById('imagemDeFundo01');

var cabecalho = document.getElementById('cabecalho');

var secaoImagens = document.getElementById('secaoImagens');

var rodape = document.getElementById('rodape');

var htmlPrincipal = document.getElementById('htmlPrincipal');

var secaoTemas = document.getElementById('secaoTemas');

var imagemAbrirBotaoMenu = document.getElementById('imagemAbrirBotaoMenu');

var botaoMenu = document.getElementById('botaoMenu');

var statusSistema = document.getElementById('statusSistema');

var imagemBotaoMenu = document.getElementById('imagemBotaoMenu');

var botoesCabecalho = document.getElementById('botoesCabecalho');

var relogio = document.getElementById('relogio');

var cordenadas;

var propriedadeCoordenada;

var distanciaImagens;

var menuAberto = false;

var ultimaDirecaoScroll = 0;

var primeiraImagem = 0;

var statusSistema2 = document.getElementById('statusSistema2');

var tempoIntervalo = 100;

var larguraJanela = window.outerWidth;
var alturaJanela = window.outerHeight;

//var larguraJanela = window.innerWidth;
//var alturaJanela = window.innerHeight;

var larguraTela = screen.width;
var alturaTela = screen.height;

//

function tamanhoJanela()
{
    /*
    statusSistema.innerHTML = "screen.availWidth: " + screen.availWidth + "\n/screen.availHeight: " + screen.availHeight + "\n//screen.width: " + screen.width + "\n/screen.heigh: " + screen.height + "\n//window.outerWidth: " + window.outerWidth + "\n/window.outerHeight: " + window.outerHeight + "\n//window.innerWidth: " + window.innerWidth + "\n/window.innerHeight: " + window.innerHeight;
*/
    //distanciaImagens = alturaJanela + 'px solid rgba(0,0,0,1)';

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
                    statusSistema2.innerHTML = "THEME ERRO"
            }
        } else
        {

        }
};

// RELOGIO

setInterval(showTime, 1000);

function showTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

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

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("relogio")
        .innerHTML = "Lookalike 3D || " + "\n" + currentTime;


    function coordenada(elemento, propriedade)
    {
        coordenadas = elemento.getBoundingClientRect();

        propriedadeCoordenada = coordenadas.propriedade;

        return propriedadeCoordenada;
    }

    var teste = imagensProjetos3d[ 0 ];

    statusSistema2.innerHTML = coordenada(teste, "top");

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

    if (propriedadeCabecalho == "35px" || propriedadeCabecalho == "50px")
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

        cabecalho.style.height = "200px";
        //secaoTemas.style.visibility = "visible";
        cabecalho.style.alignItems = "flex-start";
        cabecalho.style.opacity = 1;
        relogio.style.visibility = "hidden";

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "visible";
            menu[ i ].style.opacity = 1;
        }
    } else
    {
        cabecalho.style.height = "35px"
        cabecalho.style.opacity = "1";
        cabecalho.style.alignItems = "flex-start";
        relogio.style.visibility = "visible";

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
    cabecalho.classList.remove('fecharMenu');
    cabecalho.classList.add('abrirMenu');
}

function fecharMenu() 
{
    cabecalho.classList.remove('abrirMenu');
    cabecalho.classList.add('fecharMenu');
}

//statusSistema.innerHTML = '';

/*

imagemBotaoMenu.addEventListener('click', () =>
{
    abrirMenuImagemIcone();
    abrirMenu();
}, false);

*/

cabecalho.addEventListener('animationend', abrindoFechandoMenu, false);

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