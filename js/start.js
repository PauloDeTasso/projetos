var imagem = document.getElementById('start')

var numeroAleatorioFraseInterno;

function numeroAleatorioFrase(min, max)
{
    numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function alterarImagem()
{
    numeroAleatorioFrase(0, 6);
    imagem.setAttribute('src', 'imagens/start' + numeroAleatorioFraseInterno + 'min.png')
}

function retornarImagem()
{
    imagem.setAttribute('src', 'imagens/start0min.png')
}


