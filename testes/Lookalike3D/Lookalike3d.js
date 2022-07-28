var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var distanciaImagens = 100;

var ultimaDirecaoScroll = 0;

function atualizarDistanciaImagens()
{
    /*
    var estiloStatus = window.getComputedStyle(imagensProjetos3d[ 1 ]);
    var valorEstiloStatus = estiloStatus.getPropertyValue('border');
*/

    var valorDistancia = distanciaImagens + 'px solid rgba(255,255,255,0)';;

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        imagensProjetos3d[ index ].style.border = valorDistancia;
    }

}
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