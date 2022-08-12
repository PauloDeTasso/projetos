var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var imagemDeFundo01 = document.getElementById('imagemDeFundo01');

var cabecalho = document.getElementById('cabecalho');

var rodape = document.getElementById('rodape');

var htmlPrincipal = document.getElementById('htmlPrincipal');

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

//
tamanhoJanela();

window.addEventListener('resize', function ()
{
    tamanhoJanela();
}, false);

//statusSistema2.innerHTML = ;