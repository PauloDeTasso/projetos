var portaPrincipal = document.getElementById('portaPrincipal');

//var numeroAleatorio = Math.random();
var numeroAleatorio;

var caminho;

function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
    alert(aleatorio);
}

function abrir(aleatorio)
{
    portaPrincipal.setAttribute('src', '../imagens/doors/door' + aleatorio + '.jpg');
}

caminho = '../imagens/doors/door' + aleatorio + '.jpg';

alert(caminho);