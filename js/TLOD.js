var portaPrincipal = document.getElementById('portaPrincipal');

//var numeroAleatorio = Math.random();
var numeroAleatorio;

function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
    alert(aleatorio);
}

function abrir()
{
    portaPrincipal.setAttribute('src', '../imagens/doors/door02.jpg');

}

