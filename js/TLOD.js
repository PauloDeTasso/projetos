var portaPrincipal = document.getElementById('portaPrincipal');

var aleatorio;

var caminho;

function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
}

function abrir()
{
    caminho = '../imagens/doors/door' + aleatorio + '.jpg';

    portaPrincipal.setAttribute('src', caminho);
}
