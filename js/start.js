var imagem = document.getElementById('start')

var numeroAleatorioFraseInterno;

var somVento = document.getElementById('botaoEntrar');

var visitasdoSite = document.getElementById('visitasSite')

var objetoEmMovimento = document.getElementById('objeto');

function objetoPlay()
{
    objetoEmMovimento.setAttribute()
}

function numeroAleatorioFrase(min, max)
{
    numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function alterarImagem()
{
    numeroAleatorioFrase(0, 13);
    imagem.setAttribute('src', 'imagens/start' + numeroAleatorioFraseInterno + '.png')
    somVento.play();
}

function retornarImagem()
{
    imagem.setAttribute('src', 'imagens/start0min.png')
    somVento.pause();
}

var emojiNorte1 = document.getElementById('emojiNorte01')

var numeroEmojiAleatorio;

function numeroEmojisAleatorio(min, max)
{
    numeroEmojiAleatorio = Math.floor(Math.random() * (max - min) + min);
}

function emojiAleatorio()
{
    numeroEmojisAleatorio(1, 40);
    emojiNorte1.setAttribute('src', '../imagens/emojis/' + numeroEmojiAleatorio + '.png');
}

/*

var areaMapImagem = document.getElementById('areaImagem');

areaMapImagem.addEventListener("touchstart", alterarImagem());
areaMapImagem.addEventListener("touchmove", alterarImagem());
areaMapImagem.addEventListener("touchend", retornarImagem());
/*

function setCookie(nome, valor, dias)
{
    diasms = (new Date()).getTime() + 1000 * 3600 * 24 * dias;
    dias = new Date(diasms);
    expires = dias.toGMTString();
    document.cookie = escape(nome) + "=" + escape(valor) + "; expires=" + expires;
}

var online;

contagemRegresiva();

function contagemRegresiva()
{
    var ativar = setTimeout("visitando()", 6000);
}

/*
function visitando()
{
    online += 1;

    var visitasdoSite = document.getElementById('visitasSite');

    if (!document.cookie)
    {
        setCookie("cookie", "1", 365);
        var visitas = ("<font face='verdana' size='1'>Visitas : 1</font>");
        visitasdoSite.innerHTML = visitas;
    } else
    {
        var cont = document.cookie;
        var dividindo = cont.split("=");
        //document.write(dividindo[1]);
        var numero = parseInt(dividindo[1]);
        var soma = numero + 1;
        var visitas = ("<font face='verdana' size='1'> Visitas: " + soma + "</font>");
        setCookie("cookie", soma, 365);
        visitasdoSite.innerHTML = visitas;
    }

    contagemRegresiva();

}

/*
function contagemRegresiva()
{
    var t = setTimeout("visitando", 1000);  
}

function visitando()
{
    soma = soma +1;  
}
*/