const imagem = document.getElementById('start')

const visitasdoSite = document.getElementById('visitasSite');

const objetoEmMovimento = document.getElementById('objeto');

const somVento = document.getElementById('somDoVento');

const somLoop = document.getElementById('loop');

const emojiNorte1 = document.getElementById('emojiNorte01');

var contador = 0;

var numeroAleatorioFraseInterno;

var numeroEmojiAleatorio;

var secaoNorteImagem = document.getElementById('secaoNorteImagem');

var secaoSulImagem = document.getElementById('secaoSulImagem');

var secaoLesteImagem = document.getElementById('secaoLesteImagem');

var secaoOesteImagem = document.getElementById('secaoOesteImagem');

/////////////////////////**/

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
    somVento.volume = 0.3;
    playUnico();
    numeroAleatorioFrase(0, 20);
    imagem.setAttribute('src', 'imagens/start' + numeroAleatorioFraseInterno + '.png')
    contador = 1;
}

function retornarImagem()
{
    imagem.setAttribute('src', 'imagens/start0.png')
    /* somVento.pause();*/
}

function numeroEmojisAleatorio(min, max)
{
    numeroEmojiAleatorio = Math.floor(Math.random() * (max - min) + min);
}

function emojiAleatorio()
{
    numeroEmojisAleatorio(1, 40);
    emojiNorte1.setAttribute('src', '../imagens/emojis/' + numeroEmojiAleatorio + '.png');
}

function playUnico()
{
    if (contador == 0 || contador == undefined)
    {
        somVento.play();
    } else
    {

    }

}

function somTerminou()
{
    let confimar = confirm("Ok for a song?");

    if (confimar == true) 
    {
        somLoop.play();
        let show1 = setTimeout("luzes()", 1000);
    } else
    {
        somLoop.pause();
        let show1 = setTimeout("luzes()", 500);
    }
}

function luzes()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    secaoOesteImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    let show = setTimeout("luzes1()", 500);
}

function luzes1()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/azulmarinho.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/azulmarinho.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/azulmarinho.jpg');
    let show = setTimeout("luzes2()", 500);
}

function luzes2()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/azul.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/azul.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/azul.jpg');
    let show = setTimeout("luzes3()", 500);
}

function luzes3()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/lilas.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/lilas.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/lilas.jpg');
    let show = setTimeout("luzes4()", 500);
}

function luzes4()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/verde.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/verde.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/verde.jpg');
    let show = setTimeout("luzes5()", 500);
}

function luzes5()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/amarelo.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/amarelo.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/amarelo.jpg');
    let show = setTimeout("luzes6()", 500);
}

function luzes6()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/laranja.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/laranja.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/laranja.jpg');
    let show = setTimeout("luzes7()", 500);
}

function luzes7()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/vermelho.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/vermelho.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/vermelho.jpg');
    let show = setTimeout("luzes8()", 500);
}

function luzes8()
{
    secaoNorteImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    secaoSulImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    secaoLesteImagem.setAttribute('src', '/imagens/luzes/branco.jpg');
    let show = setTimeout("luzes1()", 500);
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