var imagem = document.getElementById('start')

var numeroAleatorioFraseInterno;

var somVento = document.getElementById('botaoEntrar');

var visitasdoSite = document.getElementById('visitasSite')

function numeroAleatorioFrase(min, max)
{
    numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function alterarImagem()
{
    numeroAleatorioFrase(0, 6);
    imagem.setAttribute('src', 'imagens/start' + numeroAleatorioFraseInterno + 'min.png')
    somVento.play();
}

function retornarImagem()
{
    imagem.setAttribute('src', 'imagens/start0min.png')
    somVento.pause();
}


