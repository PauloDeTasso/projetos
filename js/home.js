var audioPrincipal = document.getElementById("audioPrincipal");

var iconeMudo = document.getElementById('iconeMudo')

var audio1 = document.getElementById('audio1');

var audio2 = document.getElementById('audio2');

var audio3 = document.getElementById('audio3');

var audio4 = document.getElementById('audio4');

var gif1 = document.getElementById('gif1');

var gif2 = document.getElementById('gif2');

var gif3 = document.getElementById('gif3');

var audioSource1 = document.getElementById('audioSource1');

var audioSource2 = document.getElementById('audioSource2');

var audioSource3 = document.getElementById('audioSource3');

var iconeAumentarVolume = document.getElementById("iconeMudoAumentarVolume");

var iconeDiminuirVolume = document.getElementById('iconeMudoDiminuirVolume');

var volumeArredondado = Math.round(audioPrincipal.volume * 10);

var tituloPrincipal = document.getElementById('tituloPrincipal');

var nome = document.getElementById("paulodetasso");

var portaPrincipal = document.getElementById('portaPrincipal');

var aleatorio;

var caminho;

var mensagemAleatoria;

var numerogerado;

var fraseAtual = "\“Patience is a key element of success.\" - Bill Gates.";

var frase1 = "\“Patience is a key element of success.\" - Bill Gates.";
var frase2 = "\“Being the richest man in the cemetery doesn\’t matter to me. Going to bed at night saying we\’ve done something wonderful...that\’s what matters to me.\” - Steve Jobs"
var frase3 = "Programming isn\'t about what you know; it\'s about what you can figure out.\” - Chris Pine"
var frase4 = "\"The only way to learn a new programming language is by writing programs in it.\" - Dennis Ritchie"
var frase5 = "\"Sometimes it\'s better to leave something alone, to pause, and that\'s very true of programming.\" - Joyce Wheeler"
var frase6 = "\"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.\" - Andrew Hunt"
var frase7 = "\“Don\’t let the noise of others\’ opinions drown out your own inner voice.\" - Steve jobs"
var frase8 = "\"The best error message is the one that never shows up.\" - Thomas Fuchs";
var frase9 = "\“The most damaging phrase in the language is.. it\'s always been done this way\” - Grace Hopper"
var frase10 = "\"Don\'t write better error messages, write code that doesn't need them.\" - Jason C. McDonald"

var numeroAleatorioFrase;

var frases = new Array(frase1, frase2, frase3, frase4, frase5, frase6, frase7, frase8, frase9, frase10);

var secaoGift = document.getElementById('secaoGift');

var iconeSomExtra = document.getElementById('iconeVolumeAltoDemais');

var iconeSomExtra2 = document.getElementById('iconeVolumeBaixoDemais');


/////////////////////////////////////////////////////////////////

function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
}

function numeroAleatorioFrase(min, max)
{
    numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function abrir()
{
    caminho = '../imagens/doors/door' + aleatorio + '.jpg';

    portaPrincipal.setAttribute('src', caminho);
}

/////////////////////////////////////////////////////////

function aumentar_volume()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    switch (volumeArredondado)
    {
        case 10:

            if (iconeMudo.getAttribute('src') == '../icones/800x600/mute.png')
            {
                audioPrincipal.volume += 0.0;
                audio1.volume += 0.0;
                audio2.volume += 0.0;
                audio3.volume += 0.0;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'hidden';
            } else
            {
                audioPrincipal.volume += 0.0;
                audio1.volume += 0.0;
                audio2.volume += 0.0;
                audio3.volume += 0.0;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'visible';
            }

            break;

        case 9:

            if (iconeMudo.getAttribute('src') == '../icones/800x600/mute.png')
            {
                audioPrincipal.volume += 0.1;
                audio1.volume += 0.1;
                audio2.volume += 0.1;
                audio3.volume += 0.1;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'hidden';
            } else
            {
                audioPrincipal.volume += 0.1;
                audio1.volume += 0.1;
                audio2.volume += 0.1;
                audio3.volume += 0.1;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'visible';
            }

            break;

        case 8:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');

            break;

        case 7:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');

            break;

        case 6:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');

            break;

        case 5:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');

            break;

        case 4:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');

            break;

        case 3:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');

            break;

        case 2:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');

            break;

        case 1:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');

            break;

        case 0:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');

            break;

        default:

            audioPrincipal.volume += 0.0;
            audio1.volume += 0.0;
            audio2.volume += 0.0;
            audio3.volume += 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function diminuir_volume()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    switch (volumeArredondado)
    {

        case 10:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');
            iconeSomExtra.style.visibility = 'hidden';

            break;

        case 9:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            iconeSomExtra.style.visibility = 'hidden';

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');

            break;

        case 8:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');

            break;

        case 7:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');

            break;

        case 6:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');

            break;

        case 5:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');

            break;

        case 4:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');

            break;

        case 3:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');

            break;

        case 2:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');

            break;

        case 1:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        case 0:

            audioPrincipal.volume -= 0.0;
            audio1.volume -= 0.0;
            audio2.volume -= 0.0;
            audio3.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        default:

            audioPrincipal.volume -= 0.0;
            audio1.volume -= 0.0;
            audio2.volume -= 0.0;
            audio3.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealtoalto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function mudo()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    if (audioPrincipal.muted)
    {

        if (iconeSomExtra.style.visibility == 'hidden' && volumeArredondado == 10)
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            iconeSomExtra.style.visibility = 'visible';
            iconeSomExtra2.style.visibility = 'hidden';
            audioPrincipal.play();
        } else
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            iconeSomExtra2.style.visibility = 'hidden';
            audioPrincipal.play();
        }

    } else
    {
        audioPrincipal.muted = true;
        audio1.muted = true;
        audio2.muted = true;
        audio3.muted = true;
        iconeSomExtra.style.visibility = 'hidden';
        iconeSomExtra2.style.visibility = 'visible';
        iconeMudo.setAttribute('src', '../icones/800x600/mute.png');
        audioPrincipal.pause();
    }
}

function alterarGif1()
{
    if (gif1.getAttribute('src') == '../icones/code.gif')
    {
        gif1.setAttribute('src', '../icones/code10.gif');
        audio1.play();
    } else
    {
        gif1.setAttribute('src', '../icones/code.gif');
    }
}

function alterarGif2()
{
    if (gif2.getAttribute('src') == '../icones/code.gif')
    {
        gif2.setAttribute('src', '../icones/code12.gif');
        audio2.play();

    } else if (gif2.getAttribute('src') == '../icones/code12.gif')
    {
        gif2.setAttribute('src', '../icones/code13.gif');
    } else
    {
        gif2.setAttribute('src', '../icones/code.gif');
    }

}

function alterarGif3()
{
    if (gif3.getAttribute('src') == '../icones/code.gif')
    {
        gif3.setAttribute('src', '../icones/code11.gif');
        audio3.play();
    } else
    {
        gif3.setAttribute('src', '../icones/code.gif');
    }

}

function alterarTexto1()
{
    tituloPrincipal.innerHTML = "HELP?";
    nome.style.color = 'rgb(130, 130, 130)';
    tituloPrincipal.style.backgroundColor = 'rgb(250, 233, 200)';
}

function alterarTexto2()
{
    tituloPrincipal.innerHTML = fraseAtual;
    tituloPrincipal.style.backgroundColor = 'rgb(255, 233, 191)';
}

function abrirLink()
{
    window.open('https://www.google.com', '_blank');
}


function fraseAleatoria()
{
    numeroAleatorioFrase(1, frases.length);
    mensagemAleatoria = frases[numeroAleatorioFraseInterno];
    return mensagemAleatoria;
}

function contagemRegresiva()
{
    var t = setTimeout("show3('3')", 1000);
    var t = setTimeout("show2('2')", 2000);
    var t = setTimeout("show1('1')", 3000);
    var t = setTimeout("alertMsg()", 3500);
}

function show1(texto)
{
    nome.innerHTML = texto;
    audio4.play();
}

function show2(texto)
{
    nome.innerHTML = texto;
    audio4.play();
}

function show3(texto)
{
    nome.innerHTML = texto;
    audio4.play(0);
}

function alertMsg()
{
    fraseAtual = fraseAleatoria();
    alert(fraseAtual);
    nome.innerHTML = "PAULO DE TASSO";
    tituloPrincipal.innerHTML = fraseAtual;
}

function abrirSecaoGift()
{
    var style = window.getComputedStyle(secaoGift);
    var top = style.getPropertyValue('display');

    if (top == "none")    
    {
        secaoGift.style.display = 'flex';
    } else
    {
        secaoGift.style.display = 'none';
    }
}

/////////////////////////////////////////////////////////////////

function abrirFecharTabela()
{
    var secaoIframeHome = document.getElementById('iframeHome');
    var iconeJanela = document.getElementById('iconeJanela');
    var getStyle = window.getComputedStyle(secaoIframeHome);
    var getDisplay = getStyle.getPropertyValue('display');
    if (getDisplay == "none")    
    {
        secaoIframeHome.style.display = 'flex';
        iconeJanela.setAttribute('src', '../icones/fecharJanelaBranco.png')
    } else
    {
        secaoIframeHome.style.display = 'none';
        iconeJanela.setAttribute('src', '../icones/AbrirJanelaBranco.png')
    }
}


/*
function numeroAleatorio(min, max)
{
    aleatorio = Math.floor(Math.random() * (max - min) + min);
}


function alertFrase(numeroAleatorioFrase)
{

    switch (numeroAleatorioFrase)
    {
        case 1:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 2:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 3:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 4:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 5:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 6:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 7:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 8:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 9:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 10:

            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        default:

    }

    return mensagemAleatoria;
}

/////////////////////////////////////////////////////////

/*
function play()
{
    audioPrincipal.play();
}

function pause()
{
    audioPrincipal.pause();
}

function stop()
{
    audioPrincipal.pause();
    audioPrincipal.currentTime = 0;
}
*/

/*

<!-- FOR

for (var contagem = 0; contagem < 5; contagem++)
{
document.writeln(contagem);    
}

-->

<!-- WHILE

    var nome = "Tasso";

    var idade = 35;
    
    if (idade > 36)
    {
        while (idade > 0)
        {
            document.writeln(nome + idade);
            idade = idade - 1;    
        }
        document.writeln("Terminou");

    }else if (idade > 35)
    {
        document.writeln("Não usou o while");
    }
    document.writeln("Fim");

-->

<!-- SWITCH

    var nome = "Tasso";

    var idade = 3;

    switch (idade)
    {
        case 35:
            document.writeln(nome + idade);
            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

         case 34:
            document.writeln(nome + idade);
            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        case 33:
            document.writeln(nome + idade);
            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;

        default:
            document.writeln("default");
            audioPrincipal.muted = false;
        audio1.muted = false;
        audio2.muted = false;
        audio3.muted = false;
break;
    }

-->

*/