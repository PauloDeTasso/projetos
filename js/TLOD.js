var portaPrincipal = document.getElementById('portaPrincipal');

//var numeroAleatorio = Math.random();
var aleatorio;

var caminho;

function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
    alert(aleatorio);
}

function abrir()
{
    caminho = '\'src\'' + ',' + '\'../imagens/doors/door' + aleatorio + '.jpg\'';
    alert(caminho);
    portaPrincipal.setAttribute(caminho);
}
