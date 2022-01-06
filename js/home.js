/* var 'S*/

var numeroDePaginas = window.history.length;

var botaoGif = document.getElementById('botaoGifPrincipal');

var audioPrincipal = document.getElementById("audioPrincipal");

var iconeMudo = document.getElementById('iconeMudo')

var audio1 = document.getElementById('audio1');

var audio2 = document.getElementById('audio2');

var audio3 = document.getElementById('audio3');

var audio4 = document.getElementById('audio4');

var audioSomDaFloresta = document.getElementById('somDaFloresta');

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

var nome = document.getElementById("status");

var portaPrincipal = document.getElementById('portaPrincipal');

var aleatorio;

var caminho;

var mensagemAleatoria;

var numerogerado;

var fraseAtual = "\“Patience is a key element of success.\" - Bill Gates.";

var frase1 = "\“Patience is a key element of success.\" - Bill Gates.";
var frase2 = "\“Being the richest man in the cemetery doesn\’t matter to me. Going to bed at night saying we\’ve done something wonderfulthat\’s what matters to me.\” - Steve Jobs"
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

var secaoGif = document.getElementById('secaoGif');

var iconeSomExtra = document.getElementById('iconeVolumeAltoDemais');

var iconeSomExtra2 = document.getElementById('iconeVolumeBaixoDemais');

var botaoPausar = document.getElementById('iconePause');

var botaoPlay = document.getElementById('iconePlay');

var secaoIframeHome = document.getElementById('iframeHome');

var somCahoeira = document.getElementById('Cachoeira');

var sfssd = document.getElementById('SFSSD');

var gifCodeFooter = document.getElementById('codeFooter');

var secaoGifPrincipal = document.getElementById('SecaoGifPrincipal');

/*var secaoRodapePrincipalIcones = document.getElementById('secaoRodapePrincipalIcones1');*/

var secaoFooter = document.getElementById('rodapePrincipal');

var secaoCabecalho = document.getElementById('secaoCabecalho');

var iconeUsuario = document.getElementById('iconeUsuario');

var secaoNorteImagem = document.getElementById('secaoNorteImagem');

var secaoSulImagem = document.getElementById('secaoSulImagem');

var secaoLesteImagem = document.getElementById('secaoLesteImagem');

var secaoOesteImagem = document.getElementById('secaoOesteImagem');

var barraDeProgresso = document.getElementById('barraDeProgresso');

var secaoTabela = document.getElementById('secaoTabela');

var progresso = 0;

var bodyCarregou = false;
var iframeCarregou = false;
var scriptCarregou = false;

var carregado1 = false;
var carregado2 = false;
var carregado3 = false;
var carregado4 = false;
var carregado5 = false;
var carregado6 = false;
var carregado7 = false;
var carregado8 = false;
var carregado9 = false;
var carregado10 = false;
var carregado11 = false;
var carregado12 = false;
var carregado13 = false;
var carregado14 = false;
var carregado15 = false;
var carregado16 = false;
var carregado17 = false;
var carregado18 = false;
var carregado19 = false;
var carregado20 = false;
var carregado21 = false;
var carregado22 = false;
var carregado23 = false;
var carregado24 = false;
var carregado25 = false;
var carregado26 = false;
var carregado27 = false;
var carregado28 = false;
var carregado29 = false;
var carregado30 = false;
var carregado31 = false;

/////////////////////////////////////////////////////////////////

function play()
{
    audioPrincipal.play();
    somCahoeira.play();
    botaoPlay.setAttribute('src', '../icones/playBrancoTocando.png');
    botaoPausar.setAttribute('src', '../icones/pauseBranco.png');
}

function pausar()
{
    audioPrincipal.pause();
    somCahoeira.pause();
    botaoPlay.setAttribute('src', '../icones/playBranco.png');
    botaoPausar.setAttribute('src', '../icones/pauseBrancoPausado.png');
}

function stop()
{
    audioPrincipal.pause();
    audioPrincipal.currentTime = 0;
}

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
                audio4.volume += 0.0;
                audioSomDaFloresta.volume += 0.0;
                somCahoeira.volume += 0.0;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'hidden';
            } else
            {
                audioPrincipal.volume += 0.0;
                audio1.volume += 0.0;
                audio2.volume += 0.0;
                audio3.volume += 0.0;
                audio4.volume += 0.0;
                audioSomDaFloresta.volume += 0.0;
                somCahoeira.volume += 0.0;
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
                audio4.volume += 0.1;
                audioSomDaFloresta.volume += 0.1;
                somCahoeira.volume += 0.1;
                audio4.volume += 0.1;
                audioSomDaFloresta.volume += 0.1;
                somCahoeira.volume += 0.1;
                iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
                iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
                iconeSomExtra.style.visibility = 'hidden';
            } else
            {
                audioPrincipal.volume += 0.1;
                audio1.volume += 0.1;
                audio2.volume += 0.1;
                audio3.volume += 0.1;
                audio4.volume += 0.1;
                audioSomDaFloresta.volume += 0.1;
                somCahoeira.volume += 0.1;
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
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');

            break;

        case 7:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');

            break;

        case 6:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');

            break;

        case 5:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');

            break;

        case 4:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');

            break;

        case 3:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');

            break;

        case 2:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');

            break;

        case 1:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');

            break;

        case 0:

            audioPrincipal.volume += 0.1;
            audio1.volume += 0.1;
            audio2.volume += 0.1;
            audio3.volume += 0.1;
            audio4.volume += 0.1;
            audioSomDaFloresta.volume += 0.1;
            somCahoeira.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');

            break;

        default:

            audioPrincipal.volume += 0.0;
            audio1.volume += 0.0;
            audio2.volume += 0.0;
            audio3.volume += 0.0;
            audio4.volume += 0.0;
            audioSomDaFloresta.volume += 0.0;
            somCahoeira.volume += 0.0;
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
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');
            iconeSomExtra.style.visibility = 'hidden';

            break;

        case 9:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;
            iconeSomExtra.style.visibility = 'hidden';

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');

            break;

        case 8:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');

            break;

        case 7:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');

            break;

        case 6:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');

            break;

        case 5:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;

            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');

            break;

        case 4:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');

            break;

        case 3:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');

            break;

        case 2:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;


            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');

            break;

        case 1:

            audioPrincipal.volume -= 0.1;
            audio1.volume -= 0.1;
            audio2.volume -= 0.1;
            audio3.volume -= 0.1;
            audio4.volume -= 0.1;
            audioSomDaFloresta.volume -= 0.1;
            somCahoeira.volume -= 0.1;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        case 0:

            audioPrincipal.volume -= 0.0;
            audio1.volume -= 0.0;
            audio2.volume -= 0.0;
            audio3.volume -= 0.0;
            audio4.volume -= 0.0;
            audioSomDaFloresta.volume -= 0.0;
            somCahoeira.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        default:

            audioPrincipal.volume -= 0.0;
            audio1.volume -= 0.0;
            audio2.volume -= 0.0;
            audio3.volume -= 0.0;
            audio4.volume -= 0.0;
            audioSomDaFloresta.volume -= 0.0;
            somCahoeira.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealtoalto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function mudo()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    if (audioPrincipal.muted || audio1.muted || audio2.muted || audio3.muted || audio4.muted || somCahoeira.muted || audioSomDaFloresta.muted)
    {

        if (iconeSomExtra.style.visibility == 'hidden' && volumeArredondado == 10)
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            audio4.muted = false;
            audioSomDaFloresta.muted = false;
            somCahoeira.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            iconeSomExtra.style.visibility = 'visible';
            iconeSomExtra2.style.visibility = 'hidden';
        } else
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            audio4.muted = false;
            audioSomDaFloresta.muted = false;
            somCahoeira.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            iconeSomExtra2.style.visibility = 'hidden';
        }

    } else
    {
        audioPrincipal.muted = true;
        audio1.muted = true;
        audio2.muted = true;
        audio3.muted = true;
        audio4.muted = true;
        audioSomDaFloresta.muted = true;
        somCahoeira.muted = true;
        iconeSomExtra.style.visibility = 'hidden';
        iconeSomExtra2.style.visibility = 'visible';
        iconeMudo.setAttribute('src', '../icones/800x600/mute.png');
    }
}

var audio1tocou = false;
var audio2tocou = false;
var audio3tocou = false;

function alterarGif1()
{
    let styleSecaoGif = window.getComputedStyle(gif1);
    let estiloGifPrincipal = styleSecaoGif.getPropertyValue('visibility');

    if (estiloGifPrincipal == "hidden" && gif1.getAttribute('src') == "../icones/code.gif")
    {
        gif1.style.visibility = 'visible';
        gif1.setAttribute('src', '../icones/code.gif');

    } else if (estiloGifPrincipal == "visible" && gif1.getAttribute('src') == "../icones/code.gif")
    {
        gif1.style.visibility = 'visible';
        gif1.setAttribute('src', '../icones/code10.gif');

    } else if (estiloGifPrincipal == "visible" && gif1.getAttribute('src') == "../icones/code10.gif")
    {
        gif1.setAttribute('src', '../icones/code.gif');

        if (audio1tocou)
        {
            audio1.pause();
        } else
        {
            audio1.play();
            audio1tocou = true;
        }
    }
}

function alterarGif2()
{
    let styleSecaoGif = window.getComputedStyle(gif2);
    let estiloGifPrincipal = styleSecaoGif.getPropertyValue('visibility');

    if (estiloGifPrincipal == "hidden" && gif2.getAttribute('src') == "../icones/code.gif")
    {
        gif2.style.visibility = 'visible';
        gif2.setAttribute('src', '../icones/code.gif');

    } else if (estiloGifPrincipal == "visible" && gif2.getAttribute('src') == "../icones/code.gif")
    {
        gif2.style.visibility = 'visible';
        gif2.setAttribute('src', '../icones/code11.gif');

    } else if (estiloGifPrincipal == "visible" && gif2.getAttribute('src') == "../icones/code11.gif")
    {
        gif2.setAttribute('src', '../icones/code.gif');

        if (audio2tocou)
        {
            audio2.pause();
        } else
        {
            audio2.play();
            audio2tocou = true;
        }
    }
}

function alterarGif3()
{
    let styleSecaoGif = window.getComputedStyle(gif3);
    let estiloGifPrincipal = styleSecaoGif.getPropertyValue('visibility');

    if (estiloGifPrincipal == "hidden" && gif3.getAttribute('src') == "../icones/code.gif")
    {
        gif3.style.visibility = 'visible';
        gif3.setAttribute('src', '../icones/code.gif');

    } else if (estiloGifPrincipal == "visible" && gif3.getAttribute('src') == "../icones/code.gif")
    {
        gif3.style.visibility = 'visible';
        gif3.setAttribute('src', '../icones/code10.gif');

    } else if (estiloGifPrincipal == "visible" && gif3.getAttribute('src') == "../icones/code10.gif")
    {
        gif3.setAttribute('src', '../icones/code13.gif');
    } else if (estiloGifPrincipal == "visible" && gif3.getAttribute('src') == "../icones/code13.gif")
    {
        gif3.setAttribute('src', '../icones/code.gif');

        if (audio3tocou)
        {
            audio3.pause();
        } else
        {
            audio3.play();
            audio3tocou = true;
        }
    }
}

function alterarGif1Off()
{
    gif1.style.visibility = 'hidden';
}

function alterarGif2Off()
{
    gif2.style.visibility = 'hidden';
}

function alterarGif3Off()
{
    gif3.style.visibility = 'hidden';
}

/**/

function alterarTexto1()
{
    tituloPrincipal.innerHTML = "HELP?";
    nome.style.color = 'rgb(130, 130, 130)';
    /*tituloPrincipal.style.backgroundColor = 'rgb(0, 0, 0)';*/
}

function alterarTexto2()
{
    tituloPrincipal.innerHTML = fraseAtual;
    /*tituloPrincipal.style.backgroundColor = 'rgb(0, 0, 0)';*/
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
    audio4.play();
}

function alertMsg()
{
    fraseAtual = fraseAleatoria();
    alert(fraseAtual);
    nome.innerHTML = "Hello! How can I help you!";
    tituloPrincipal.innerHTML = fraseAtual;
}

function abrirSecaoGif()
{
    var style = window.getComputedStyle(secaoGif);
    var top = style.getPropertyValue('display');

    if (top == "none")    
    {
        secaoGif.style.display = 'flex';
    } else
    {
        secaoGif.style.display = 'none';
    }
}

function abrirSecaoGifPrincipal()
{
    let styleGifPrincipal = window.getComputedStyle(secaoCabecalho);
    let estiloGifPrincipal = styleGifPrincipal.getPropertyValue('display');

    if (estiloGifPrincipal == "none")    
    {
        secaoCabecalho.style.display = 'flex';
    } else
    {
        secaoCabecalho.style.display = 'none';
    }
}

/////////////////////////////////////////////////////////////////

function abrirFecharTabela()
{

    var iconeJanela = document.getElementById('iconeJanela');
    let getStyle = window.getComputedStyle(secaoTabela);
    var getDisplay = getStyle.getPropertyValue('display');

    if (getDisplay == "none")    
    {
        secaoTabela.style.display = 'flex';
        iconeJanela.setAttribute('src', '../icones/fecharJanelaBranco.png')
    } else
    {
        secaoTabela.style.display = 'none';
        iconeJanela.setAttribute('src', '../icones/AbrirJanelaBranco2.png')
    }
}

function moveMouseIconeJanela()
{

    var iconeJanela = document.getElementById('iconeJanela');

    if (iconeJanela.getAttribute('src') == '../icones/AbrirJanelaBranco2.png')
    {
        iconeJanela.setAttribute('src', '../icones/AbrirJanelaBranco2p.png')

    } else if (iconeJanela.getAttribute('src') == '../icones/AbrirJanelaBranco2p.png')
    {
        iconeJanela.setAttribute('src', '../icones/AbrirJanelaBranco2.png')
    } else
    {
        if (iconeJanela.getAttribute('src') == '../icones/fecharJanelaBranco.png')
        {
            iconeJanela.setAttribute('src', '../icones/fecharJanelaBrancop.png')

        } else if (iconeJanela.getAttribute('src') == '../icones/fecharJanelaBrancop.png')
        {
            iconeJanela.setAttribute('src', '../icones/fecharJanelaBranco.png')
        } else
        {
            iconeJanela.setAttribute('src', '../icones/GRAVAR.png')
        }
    }
}

var secaoLicense = document.getElementById('license');

function abrirSecaoLicense()
{
    var estiloLicense = window.getComputedStyle(secaoLicense);
    var valorEstilo = estiloLicense.getPropertyValue('display');

    if (valorEstilo == "none")    
    {
        secaoLicense.style.display = 'flex';
    } else
    {
        secaoLicense.style.display = 'none';
    }
}

///////////////////////////////////////////////////////* - ICONES MULTIMIDEA - */

/**/

function statusTextoEmMovimento()
{
    nome.innerHTML = 'Press!';
}

function statusTextoEmMovimentoOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}


/**/

function statusGif()
{
    nome.innerHTML = ''.toUpperCase();
}

function statusGifOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusGifPrincipal()
{
    let styleSecaoGif = window.getComputedStyle(secaoCabecalho);
    let estiloGifPrincipal = styleSecaoGif.getPropertyValue('display');

    if (estiloGifPrincipal == "none")    
    {
        nome.innerHTML = 'Open header'.toUpperCase();
    } else
    {
        nome.innerHTML = 'Close header'.toUpperCase();
    }
}

function statusGifPrincipalOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusBaixarVolume()
{
    nome.innerHTML = 'Turn down volume!'.toUpperCase();
}

function statusBaixarVolumeOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusVolumeMaximo()
{
    nome.innerHTML = 'Maximum Volume!'.toUpperCase();
}

function statusVolumeMaximoOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusPause()
{
    nome.innerHTML = 'Pause!'.toUpperCase();
}

function statusPauseOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusMudo()
{
    nome.innerHTML = 'Mute!'.toUpperCase();
}

function statusMudoOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusPlay()
{
    nome.innerHTML = 'Play!'.toUpperCase();
}

function statusPlayOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusSilencio()
{
    nome.innerHTML = 'Silence!'.toUpperCase();
}

function statusSilencioOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusAumentarVolume()
{
    nome.innerHTML = 'Turn up the volume!'.toUpperCase();
}

function statusAumentarVolumeOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

///////////////////////////////////////////////////////* - ICONES LINGUAGENS - */

function statusHtml()
{
    nome.innerHTML = 'HTML5!';
}

function statusHtmlOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusCss()
{
    nome.innerHTML = 'CSS3!';
}

function statusCssOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusJavascript()
{
    nome.innerHTML = 'Javascript!'.toUpperCase();
}

function statusJavascriptOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusJava()
{
    nome.innerHTML = 'Java!'.toUpperCase();
}

function statusJavaOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}
/**/

function statusMysql()
{
    nome.innerHTML = 'Mysql!'.toUpperCase();
}

function statusMysqlOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}
/**/

function statusNtsl()
{
    nome.innerHTML = 'Ntsl!'.toUpperCase();
}

function statusNtslOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

///////////////////////////////////////////////////////* - BARRA DE ICONES - */

function statusIconeTabelaOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

function statusIconeTabela()
{
    var getStyle = window.getComputedStyle(secaoIframeHome);
    var getDisplay = getStyle.getPropertyValue('display');

    if (getDisplay == "none")    
    {
        nome.innerHTML = 'Maximize Skills!'.toUpperCase();
    } else
    {
        nome.innerHTML = 'Minimize Skills!'.toUpperCase();
    }
}

///////////////////////////////////////////////////////* -  ICONES CONTATOS: - */


/**/

function statusSeniorFullStackSoftwareDeveloper()
{
    nome.innerHTML = 'Senior Full Stack Software Developer!'.toUpperCase();
}

function statusSeniorFullStackSoftwareDeveloperOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusWhatsapp()
{
    nome.innerHTML = 'Whatsapp!'.toUpperCase();
}

function statusWhatsappOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusEnviarEmail()
{
    nome.innerHTML = 'Send Email!'.toUpperCase();
}

function statusEnviarEmailOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusSkype()
{
    nome.innerHTML = 'Skype!'.toUpperCase();
}

function statusSkypeOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusLinkedIn()
{
    nome.innerHTML = 'LinkedIn!'.toUpperCase();
}

function statusLinkedInOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusTwitter()
{
    nome.innerHTML = 'Twitter!'.toUpperCase();
}

function statusTwitterOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusFacebook()
{
    nome.innerHTML = 'Facebook!'.toUpperCase();
}

function statusFacebookOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusInstagram()
{
    nome.innerHTML = 'Instagram!'.toUpperCase();
}

function statusInstagramOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusYoutube()
{
    nome.innerHTML = 'Youtube!'.toUpperCase();
}

function statusYoutubeOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusGithub()
{
    nome.innerHTML = 'Github!'.toUpperCase();
}

function statusGithubOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusLicenseJavascript()
{
    nome.innerHTML = 'License Javascript!'.toUpperCase();
}

function statusLicenseJavascriptOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

/**/

function statusLinkLicenseJavascript()
{
    nome.innerHTML = 'Open License Javascript!'.toUpperCase();
}

function statusLinkLicenseJavascriptOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}

var secaoIconesRodape = document.getElementById('secaoBotaoLicense');

function sfssdCode()
{
    secaoFooter.style.backgroundImage = 'url("")';
    sfssd.style.visibility = 'visible';
    iconeUsuario.style.visibility = 'visible';
}

function sfssdCodeOff()
{
    secaoFooter.style.backgroundImage = 'url("../icones/code9.gif")';
    sfssd.style.visibility = 'hidden';
    iconeUsuario.style.visibility = 'hidden';
}

function mudarCorBotaoGif()
{
    botaoGif.style.backgroundColor = 'aqua';
}

function mudarCorBotaoGifOff()
{
    botaoGif.style.backgroundColor = 'rgb(42, 150, 0)';
}

var statusSistema = document.getElementById('statusSistema');

function colar()
{
    statusSistema.innerHTML = "Cut out!";
    setTimeout("limparStatusSistema()", 10000);
}

function copiou()
{
    statusSistema.innerHTML = "Compiled!";
    setTimeout("limparStatusSistema()", 10000);
}

function colou()
{
    statusSistema.innerHTML = "Pasted";
    setTimeout("limparStatusSistema()", 10000);
}

function audioAmbienteTocando()
{
    statusSistema.innerHTML = "Ambient music playing!";
    setTimeout("limparStatusSistema()", 10000);
}

function audioCachoeiraTocando()
{
    statusSistema.innerHTML = "Sound of waterfall is playing!";
    setTimeout("limparStatusSistema()", 10000);
}

/*
const input = document.querySelector('input');
const log = document.getElementById('log');
 
input.onkeydown = logKey;
 
function logKey(e)
{
    log.textContent += ` ${e.code}`;
}
*/


/*
function aumentarProgressoDaBarra()
{
    progresso += 1;

    if (progresso <= 100)
    {
        setTimeout("aumentarProgressoDaBarra()", 1);

    } else
    {
        statusSistema.innerHTML = "donwloaded!";
    }

    barraDeProgresso.setAttribute('value', progresso);

    setTimeout("limparStatusSistema()", 10000);

}
*/

/*

function progressoDaBarra()
{
    switch (progresso)
    {
        case 0:
            barraDeProgresso.setAttribute('value', '0');
            break;

        case 30:
            barraDeProgresso.setAttribute('value', '30');
            break;

        case 60:
            barraDeProgresso.setAttribute('value', '60');
            break;

        case 90:
            barraDeProgresso.setAttribute('value', '90');
            break;

        case 100:
            barraDeProgresso.setAttribute('value', '100');
            statusSistema.style.visibility = 'visible';
            statusSistema.innerHTML = "donwloaded!";
            break;

        default:

            barraDeProgresso.setAttribute('value', progresso);
    }

    if (progresso => 0 && progresso < 100)
    {
        setTimeout("completarBarraDeProgresso()", 100);
    } else
    {
        setTimeout("progressoDaBarra()", 1);
    }
}

*/

luzes()

function luzes()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/0.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/0.jpg');
    let show = setTimeout("luzes1()", 120);
}

function luzes1()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/1.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/1.jpg');
    let show = setTimeout("luzes2()", 120);
}

function luzes2()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/2.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/2.jpg');
    let show = setTimeout("luzes3()", 120);
}

function luzes3()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/3.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/3.jpg');
    let show = setTimeout("luzes4()", 120);
}

function luzes4()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/4.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/4.jpg');
    let show = setTimeout("luzes5()", 120);
}

function luzes5()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/5.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/5.jpg');
    let show = setTimeout("luzes6()", 120);
}

function luzes6()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/6.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/6.jpg');
    let show = setTimeout("luzes7()", 120);
}

function luzes7()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/7.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/7.jpg');
    let show = setTimeout("luzes8()", 120);
}

function luzes8()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/8.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/8.jpg');
    let show = setTimeout("luzes9()", 120);
}


function luzes16()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/1.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/1.jpg');
    let show = setTimeout("luzes1()", 120);
}

function luzes15()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/2.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/2.jpg');
    let show = setTimeout("luzes16()", 120);
}

function luzes14()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/3.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/3.jpg');
    let show = setTimeout("luzes15()", 120);
}

function luzes13()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/4.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/4.jpg');
    let show = setTimeout("luzes14()", 120);
}

function luzes12()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/5.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/5.jpg');
    let show = setTimeout("luzes13()", 120);
}

function luzes11()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/6.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/6.jpg');
    let show = setTimeout("luzes12()", 120);
}

function luzes10()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/7.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/7.jpg');
    let show = setTimeout("luzes11()", 120);
}

function luzes9()
{
    secaoLesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/8.jpg');
    secaoOesteImagem.setAttribute('src', '../imagens/luzes/preto e branco/8.jpg');
    let show = setTimeout("luzes10()", 120);
}

/*//////////CARREGAMENTOS: */

function bodyCarregado()
{
    if (bodyCarregou)
    {
        statusSistema.style.visibility = 'visible';
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 50;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Main content donwloaded!";
        setTimeout("progressoDaBarra()", 100);
    }
    bodyCarregou = true;
}

function iframeCarregado()
{
    if (iframeCarregou)
    {
        statusSistema.style.visibility = 'visible';
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 25;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "External documents donwloaded!";
        setTimeout("progressoDaBarra()", 1000);
    }
    iframeCarregou = true;
}

function scriptCarregado()
{
    if (scriptCarregou)
    {
        statusSistema.style.visibility = 'visible';
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 25;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Internal process donwloaded!";
        setTimeout("progressoDaBarra()", 1000);
    }
    scriptCarregou = true;
}

//**/

function imagemCarregada1()
{
    if (carregado1)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 1 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado1 = true;
}

function imagemCarregada2()
{
    if (carregado2)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 2 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado2 = true;
}

function imagemCarregada3()
{
    if (carregado3)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 3 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado3 = true;
}

function imagemCarregada4()
{
    if (carregado4)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 4 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado4 = true;
}

function imagemCarregada5()
{
    if (carregado5)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 5 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado5 = true;
}

function imagemCarregada6()
{
    if (carregado6)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 6 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado6 = true;
}

function imagemCarregada7()
{
    if (carregado7)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 7 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado7 = true;
}

function imagemCarregada8()
{
    if (carregado8)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 8 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado8 = true;
}

function imagemCarregada9()
{
    if (carregado9)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 9 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado9 = true;
}

function imagemCarregada10()
{
    if (carregado10)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 10 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado10 = true;
}


function imagemCarregada11()
{
    if (carregado11)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 11 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado11 = true;
}

function imagemCarregada12()
{
    if (carregado12)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 12 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado12 = true;
}

function imagemCarregada13()
{
    if (carregado13)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 13 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado13 = true;
}

function imagemCarregada14()
{
    if (carregado14)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 14 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado14 = true;
}

function imagemCarregada15()
{
    if (carregado15)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 15 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado15 = true;
}

function imagemCarregada16()
{
    if (carregado16)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 16 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado16 = true;
}

function imagemCarregada17()
{
    if (carregado17)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 17 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado17 = true;
}

function imagemCarregada18()
{
    if (carregado18)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 18 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado18 = true;
}

function imagemCarregada19()
{
    if (carregado19)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 19 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado19 = true;
}

function imagemCarregada20()
{
    if (carregado20)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 20 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado20 = true;
}


function imagemCarregada21()
{
    if (carregado21)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 21 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado21 = true;
}

function imagemCarregada22()
{
    if (carregado22)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 22 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado22 = true;
}

function imagemCarregada23()
{
    if (carregado23)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 23 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado23 = true;
}


function imagemCarregada24()
{
    if (carregado24)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 24 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado24 = true;
}


function imagemCarregada25()
{
    if (carregado25)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 25 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado25 = true;
}


function imagemCarregada26()
{
    if (carregado26)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 26 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado26 = true;
}


function imagemCarregada27()
{
    if (carregado27)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 27 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado27 = true;
}


function imagemCarregada28()
{
    if (carregado28)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 28 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado28 = true;
}


function imagemCarregada29()
{
    if (carregado29)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 29 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado29 = true;
}

function imagemCarregada30()
{
    if (carregado30)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 30 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado30 = true;
}

function imagemCarregada31()
{
    if (carregado31)
    {
        setTimeout("progressoDaBarra()", 1000);
    } else
    {
        progresso = progresso + 1;
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = "Image 31 donwloaded"
        setTimeout("progressoDaBarra()", 1000);
    }
    carregado31 = true;
}

/*
function linkEstiloCarregado()
{
    progresso = progresso + 20;
    statusSistema.style.visibility = 'visible';
    statusSistema.innerHTML = "Loading Style";
    setTimeout("progressoDaBarra()", 1);
}

function linkFavIconCarregado()
{
    progresso = progresso + 20;

    statusSistema.style.visibility = 'visible';
    statusSistema.innerHTML = "Loading Icon";
    setTimeout("progressoDaBarra()", 1);
}

*/


function progressoDaBarra()
{
    barraDeProgresso.setAttribute('value', progresso);

    if (progresso >= 0 && progresso < 90)
    {
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = progresso + "%";
        /*statusSistema.innerHTML = "Loading";*/
    }

    if (progresso >= 90 && progresso < 100)
    {
        setTimeout("completarBarraDeProgresso()", 100);

        statusSistema.innerHTML = progresso + "%";
    }

    let progressoVF1 = progresso < 100;

    let progressoVF2 = progresso > 100;

    if (!progressoVF1 && !progressoVF2)
    {
        statusSistema.innerHTML = "100% - Full site donwloaded!";
        setTimeout("limparStatusSistema()", 5000);
    }

    if (progresso > 100)
    {
        setTimeout("limparStatusSistema()", 5000);
    }

}

function completarBarraDeProgresso()
{
    if (progresso >= 90 && progresso < 100)
    {
        progresso += 1;

        barraDeProgresso.setAttribute('value', progresso);
    }
    progressoDaBarra();
}

function limparStatusSistema()
{
    statusSistema.style.visibility = 'hidden';
}

/**/

function voltarPagina() 
{
    window.history.back()
}

/*

function statusJavascript()
{
    nome.innerHTML = 'Javascript!'.toUpperCase();
}

function statusJavascriptOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
}


/*
var iconeHtml5 = getElementById('iconeHtml');

function statusPrincipal()
{
    
    if ()
    
    iconeHtml5.onmousemove = function () { statusHtml };


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