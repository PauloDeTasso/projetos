var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var distanciaImagens = 200;

var ultimaDirecaoScroll = 0;
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

var statusSistema = document.getElementById('statusSistema');
var cabecalho = document.getElementById('cabecalho');
var tempoIntervalo = 200;

setInterval(() =>
{
    if (this.scrollY == 0)
    {
        setTimeout(() =>
        {
            cabecalho.style.backgroundColor = "rgba(233, 176, 63, 0.499)";
            cabecalho.style.height = "12%";

        }, tempoIntervalo);

    } else
    {
        setTimeout(() =>
        {
            cabecalho.style.backgroundColor = "rgba(214, 177, 104, 0.499)";
            cabecalho.style.height = "7%";
        }, tempoIntervalo);

    }
}, 1);

function tamanhoJanela()
{
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var larguraTela = screen.width;
    var alturaTela = screen.height;

    document.querySelector('.window-size').innerHTML = larguraJanela + 'x' + alturaJanela;
    document.querySelector('.screen-size').innerHTML = larguraTela + 'x' + alturaTela;

    distanciaImagens = alturaTela / 2;

    var valorDistancia = distanciaImagens + 'px solid rgba(255,255,255,0)';;

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        imagensProjetos3d[ index ].style.border = valorDistancia;

        imagensProjetos3d[ index ].style.width = larguraJanela;
        imagensProjetos3d[ index ].style.height = alturaTela;
    }

};

tamanhoJanela();

window.addEventListener('resize', function ()
{
    tamanhoJanela();
});
