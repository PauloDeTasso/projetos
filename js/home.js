/* var 'S*/

localStorage.senha;

localStorage.acessoLiberado;

var secaoSecreta = document.getElementById('secaoSecreta');

var botaoBestBusiness = document.getElementById('botaoBestBusiness');

var html5 = document.getElementById('html5');

var numeroDePaginas = window.history.length;

var botaoGif = document.getElementById('botaoGifPrincipal');

var audioPrincipal = document.getElementById("audioPrincipal");

var iconeMudo = document.getElementById('iconeMudo')

var audio1 = document.getElementById('audio1');

var audio2 = document.getElementById('audio2');

var audio3 = document.getElementById('audio3');

var audio4 = document.getElementById('audio4');

var fx1 = document.getElementById('fx1');

var fx2 = document.getElementById('fx2');

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

var marquee = document.getElementsByClassName('marquee');

var nome = document.getElementById("status");

var flutuante = document.getElementById("flutuante");

var portaPrincipal = document.getElementById('portaPrincipal');

var botaoAlterarTamanhoTela = document.getElementById('botaoAlterarTamanhoTela');

var canvasHTML5 = document.getElementById('canvas');

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

var secaoIframeHome = document.getElementById('secaoTabela');

var somCachoeira = document.getElementById('Cachoeira');

var sfssd = document.getElementById('SFSSD');

var gifCodeFooter = document.getElementById('codeFooter');

var secaoGifPrincipal = document.getElementById('SecaoGifPrincipal');

var secaoRodapePrincipalIcones = document.getElementById('secaoRodapePrincipalIcones1');

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

var favIcon = document.getElementById('favIcon');

/////////////////////////////////////////////////////////////////


var numero = 0;

var contadorOpacidade = 0;

function imagemAtual()
{

    fx2.play();

    if (numero < 10)
    {
        numero = numero + 1;
        contadorOpacidade = Math.round(numero);
        html5.style.opacity = contadorOpacidade / 10;
        setTimeout("imagemAtual()", 170);
    } else
    {
        //alert('Seja bem vindo!);
    }
}

imagemAtual();

function play()
{
    audioPrincipal.play();
    somCachoeira.play();
    botaoPlay.setAttribute('src', '../icones/playBrancoTocando.png');
    botaoPausar.setAttribute('src', '../icones/pauseBranco.png');
    favIcon.setAttribute('href', '../icones/PLAYICON.png')
}

function pausar()
{
    audioPrincipal.pause();
    somCachoeira.pause();
    audioSomDaFloresta.pause();
    botaoPlay.setAttribute('src', '../icones/playBranco.png');
    botaoPausar.setAttribute('src', '../icones/pauseBrancoPausado.png');
    favIcon.setAttribute('href', '../icones/PAUSEICON.png');
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
                somCachoeira.volume += 0.0;
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
                somCachoeira.volume += 0.0;
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
                somCachoeira.volume += 0.1;
                audio4.volume += 0.1;
                audioSomDaFloresta.volume += 0.1;
                somCachoeira.volume += 0.1;
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
                somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.1;
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
            somCachoeira.volume += 0.0;
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
            somCachoeira.volume -= 0.1;
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
            somCachoeira.volume -= 0.1;
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
            somCachoeira.volume -= 0.1;

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
            somCachoeira.volume -= 0.1;

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
            somCachoeira.volume -= 0.1;

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
            somCachoeira.volume -= 0.1;

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
            somCachoeira.volume -= 0.1;


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
            somCachoeira.volume -= 0.1;


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
            somCachoeira.volume -= 0.1;


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
            somCachoeira.volume -= 0.1;
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
            somCachoeira.volume -= 0.0;
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
            somCachoeira.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealtoalto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function mudo()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    if (audioPrincipal.muted || audio1.muted || audio2.muted || audio3.muted || audio4.muted || somCachoeira.muted || audioSomDaFloresta.muted)
    {

        if (iconeSomExtra.style.visibility == 'hidden' && volumeArredondado == 10)
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            audio4.muted = false;
            audioSomDaFloresta.muted = false;
            somCachoeira.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            favIcon.setAttribute('href', '../icones/800x600/sound.png');
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
            somCachoeira.muted = false;
            iconeMudo.setAttribute('src', '../icones/800x600/sound.png');
            favIcon.setAttribute('href', '../icones/800x600/sound.png');
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
        somCachoeira.muted = true;
        iconeSomExtra.style.visibility = 'hidden';
        iconeSomExtra2.style.visibility = 'visible';
        iconeMudo.setAttribute('src', '../icones/800x600/mute.png');
        favIcon.setAttribute('href', '../icones/800x600/mute.png');
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
    nome.style.color = 'rgb(255, 255, 255)';
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
    mensagemAleatoria = frases[ numeroAleatorioFraseInterno ];
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

var secaoPingPong = document.getElementById('secaoCanvas');

function abrirSecaoPingPong()
{
    var style = window.getComputedStyle(secaoPingPong);
    var top = style.getPropertyValue('display');

    if (top == "none")    
    {
        secaoPingPong.style.display = 'flex';
    } else
    {
        secaoPingPong.style.display = 'none';
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
    var valorEstiloLicense = estiloLicense.getPropertyValue('visibility');

    if (valorEstiloLicense == "hidden")    
    {
        secaoLicense.style.visibility = 'visible';
        secaoFooter.style.backgroundImage = 'url("")';
        sfssd.style.visibility = 'visible';
        iconeUsuario.style.visibility = 'visible';
    } else
    {
        secaoLicense.style.visibility = 'hidden';
        secaoFooter.style.backgroundImage = 'url("../imagens/gif/code9.gif")';
        sfssd.style.visibility = 'hidden';
        iconeUsuario.style.visibility = 'hidden';
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

function statusSecaoPingPong()
{
    nome.innerHTML = 'PLAY GAME!'.toUpperCase();
}

function statusSecaoPingPongOff()
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

function statusStatus()
{
    nome.innerHTML = "Open / Close - Status!"
    statusSistema.innerHTML = "Open / Close - Status!"
}

function statusStatusOff()
{
    nome.innerHTML = 'Hello! How can I help you!';
    statusSistema.innerHTML = "Thanks for the visit!"
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
    secaoFooter.style.backgroundImage = 'url("../imagens/gif/code9.gif")';
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

var botaoSecaoPingPong = document.getElementById('botaoPingPong');

function mudarCorBotaoPingPong()
{
    botaoSecaoPingPong.style.backgroundColor = 'rgb(17,17,17)';
}

function mudarCorBotaoPingPongOff()
{
    botaoSecaoPingPong.style.backgroundColor = 'rgb(0, 0, 0)';
}

var statusSistema = document.getElementById('statusSistema');

function colar()
{
    statusSistema.innerHTML = "Cut out!";
    nome.innerHTML = "Cut out!";
    setTimeout("limparStatusSistema()", 10000);
}

function copiou()
{
    statusSistema.innerHTML = "Compiled!";
    nome.innerHTML = "Compiled!";
    setTimeout("limparStatusSistema()", 10000);
}

function colou()
{
    statusSistema.innerHTML = "Pasted";
    nome.innerHTML = "Pasted";
    setTimeout("limparStatusSistema()", 10000);
}

function audioAmbienteTocando()
{
    statusSistema.innerHTML = "Ambient music playing!";
    nome.innerHTML = "Ambient music playing!";
    setTimeout("limparStatusSistema()", 10000);
}

function audioCachoeiraTocando()
{
    statusSistema.innerHTML = "Sound of waterfall is playing!";
    nome.innerHTML = "Sound of waterfall is playing!";
    setTimeout("limparStatusSistema()", 10000);
}

var urlInterno = "../testes/BestBusiness/BestBusiness.html";

var urlYouBe = "../testes/You Be/You Be.html";

function abrirUrl(url)
{
    window.open(url, "_blank");
}

//

secaoRodapePrincipalIcones1.addEventListener("click", () => { abrirSecaoSecreta() }, false)

//marquee.addEventListener("mousemove", () => { animarAjudar() }, false)

function animarAjudar()
{
    let estiloPopup = window.getComputedStyle(flutuante);
    let estiloPropriedade = estiloPopup.getPropertyValue('justify-content');

    //alert(Object.getOwnPropertyNames(flutuante.style));

    /*
        if (estiloPropriedade == "none")    
        {
            secaoPopup.style.display = 'flex';
        } else
        {
            secaoPopup.style.display = 'none';
        }
    */

    let tempo = 1000;

    if (estiloPropriedade == "left")
    {
        setTimeout(() => { flutuante.style.justifyContent = 'center'; }, tempo);

    } else if (estiloPropriedade == "right")
    {
        setTimeout(() => { flutuante.style.justifyContent = 'left'; }, tempo);
    } else if (estiloPropriedade == "center")
    {
        setTimeout(() => { flutuante.style.justifyContent = 'right'; }, tempo);
    } else
    {
        setTimeout(() => { flutuante.style.justifyContent = 'center'; }, tempo);
    }
}

//botaoBestBusiness.addEventListener('click', function () { abrirBestBusiness("/testes/Best Business/Mercadorias.html") }, false);

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
        setTimeout("progressoDaBarra()", 1);
        bodyCarregou = true;
    } else
    {
        progresso = progresso + 50;
        statusSistema.innerHTML = progresso + " % - Main content donwloaded!";
        setTimeout("progressoDaBarra()", 1);
        bodyCarregou = true;
    }
    bodyCarregou = true;
}

function iframeCarregado()
{
    if (iframeCarregou)
    {
        setTimeout("progressoDaBarra()", 1);
        iframeCarregou = true;

    } else
    {
        progresso = progresso + 50;
        statusSistema.innerHTML = progresso + " % - External documents donwloaded!";
        setTimeout("progressoDaBarra()", 1);
        iframeCarregou = true;
    }
    iframeCarregou = true;
}

function scriptCarregado()
{
    if (scriptCarregou)
    {
        setTimeout("progressoDaBarra()", 1);
        scriptCarregou = true;
    } else
    {
        progresso = progresso + 50;
        statusSistema.innerHTML = progresso + " % - Internal process donwloaded!";
        setTimeout("progressoDaBarra()", 1);
        scriptCarregou = true;
    }
    scriptCarregou = true;
}

//**/

var tempoLimite = false;

//setTimeout("temporizador120S()", 120000);

function temporizador120S()
{
    tempoLimite = true;

    if (tempoLimite && bodyCarregou && scriptCarregou)
    {
        tempoLimite = true;
        progressoDaBarra();
    } else
    {
        document.location.reload(true);
    }
}

function progressoDaBarra()
{
    barraDeProgresso.setAttribute('value', progresso);

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

/*BACKUP FUNCTION 2:
function progressoDaBarra()
{
    barraDeProgresso.setAttribute('value', progresso);

    if (progresso < 100 && tempoLimite && bodyCarregou && scriptCarregou)
    {
        completarBarraDeProgressoTodosCarregados();
    }

    if (progresso >= 0 && progresso < 90)
    {
        statusSistema.style.visibility = 'visible';
        statusSistema.innerHTML = progresso + "%";
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
*/
function completarBarraDeProgresso()
{
    if (progresso >= 90 && progresso < 100)
    {
        progresso += 1;

        barraDeProgresso.setAttribute('value', progresso);
    }
    progressoDaBarra();
}

function completarBarraDeProgressoTodosCarregados()
{
    if (progresso >= 75 && progresso < 100)
    {
        progresso += 1;
        setTimeout("completarBarraDeProgressoTodosCarregados()", 100);
    }
    progressoDaBarra();
}

function limparStatusSistema()
{
    statusSistema.innerHTML = 'Thanks for the visit!';
}

/**/

function voltarPagina() 
{
    window.history.back()
}

progressoDaBarra();

var botaoLicense = document.getElementById('botaoLicense');

function corBotaoLicense()
{
    let styleBotaoLicense = window.getComputedStyle(botaoLicense);
    let styleBotaoLicense2 = styleBotaoLicense.getPropertyValue('background-color');

    if (styleBotaoLicense2 == "rgb(0, 36, 114)")    
    {
        botaoLicense.style.backgroundColor = "rgb(107, 31, 247)";
    } else
    {
        botaoLicense.style.backgroundColor = "rgb(0, 36, 114)";
    }
}

/*
setInterval(relogio, 1000);
function relogio()
{
    const date = new Date();
    document.getElementById("relogio").innerHTML = date.toLocaleTimeString();
}
*/



function CanvasHtml(IdCanvas, dimensao)
{
    this.canvas = document.getElementById(IdCanvas);
    this.contexto = this.canvas.getContext(dimensao)
}

var canvas1 = new CanvasHtml('canvas', '2d');

function Bola()
{
    this.nome = ""; //NOME
    this.cor = "";
    this.raio = 17; //  bola1.raio
    this.posicaoX = canvas1.canvas.width / 2;
    this.posicaoY = canvas1.canvas.height / 2;
    this.movimentoParaDireita = false; // bola1.movimentoParaDireita
    this.angulo = Math.floor(Math.random() * 21) - 10; // bola1.angulo
    this.tempo = 0; // bola1.tempo
    this.velocidade = 0; // bola1.velocidade
    this.velocidadeEmMemoria = 0; // bola1.velocidadeEmMemoria
    this.cor = "rgba(255,255,255,1)"
}

var bola1 = new Bola();

function Jogador()
{
    this.altura = 90; // usuario1.altura
    this.largura = 30; // usuario1.largura
    this.posicaoX = 0; // usuario1.posicaoX / oponente1.posicaoX
    this.posicaoY = (canvas1.canvas.height - this.altura) / 2; // usuario1.posicaoY / oponente1.posicaoY
    this.velocidade = 17; // usuario1.velocidade / oponente1.velocidade
    this.pontos = 0; //usuario1.pontos / oponente1.pontos
    this.movimentoParaCima = false; // jogadorParaCima/ usuario1.movimentoParaCima
    this.cor = "rgba(255,255,000,1)"
}

var usuario1 = new Jogador();

function Oponente()
{
    this.altura = 90; // usuario1.altura
    this.largura = 30; // usuario1.largura
    this.posicaoX = canvas1.canvas.width - this.largura; // usuario1.posicaoX / oponente1.posicaoX
    this.posicaoY = 0; // usuario1.posicaoY / oponente1.posicaoY
    this.velocidade = 30; // usuario1.velocidade / oponente1.velocidade
    this.pontos = 0; //usuario1.pontos / oponente1.pontos
    this.movimentoParaCima = false; // jogadorParaCima/ usuario1.movimentoParaCima
    this.cor = "rgba(255,000,000,1)"
}

var oponente1 = new Oponente();

//var log = document.getElementById('log');

//document.addEventListener('keydown', logKey);

//function logKey(e)
//{
//log.innerHTML += e.code;
//ou
//   log.innerHTML += e.keyCode;
//}

function Controle(key1, key2, key3, key4)
{
    this.teclaSetaParaCimaPressionada = false; // controle1.teclaSetaParaCimaPressionada
    this.teclaSetaParaBaixoPressionada = false;  // controle1.teclaSetaParaBaixoPressionada

    this.keyUp = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaSetaParaCimaPressionada = false;

        } else if (e.keyCode == key2)
        {
            controle1.teclaSetaParaBaixoPressionada = false;
        } else if (e.keyCode == key3)
        {
            controle1.teclaSetaParaCimaPressionada = false;

        } else if (e.keyCode == key4)
        {
            controle1.teclaSetaParaBaixoPressionada = false;
        }
    }

    this.keyDown = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaSetaParaCimaPressionada = true;

        } else if (e.keyCode == key2)
        {
            controle1.teclaSetaParaBaixoPressionada = true;
        } else if (e.keyCode == key3)
        {
            controle1.teclaSetaParaCimaPressionada = true;

        } else if (e.keyCode == key4)
        {
            controle1.teclaSetaParaBaixoPressionada = true;
        }
    }

}

var controle1 = new Controle(38, 40, 65, 68);

// JOGO PING PONG

var intervaloLoopGame = setInterval(loopGame, 30);

/*
function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
*/

var pingPongStatusLigado = false;

function ligarDesligarPingPong()
{
    if (pingPongStatusLigado)
    {
        canvas = null;
        pararIntervaloLoopGame();
    } else
    {
        pingPongStatusLigado = true;
        setInterval
        iniciarJogo();
    }
}

function pararIntervaloLoopGame() 
{
    pingPongStatusLigado = false;
    clearInterval(intervaloLoopGame);
}

function iniciarJogo()
{
    document.addEventListener('keyup', controle1.keyUp, false);
    document.addEventListener('keydown', controle1.keyDown, false);

    setInterval(loopGame, 30);
}

function loopGame()
{

    if (pingPongStatusLigado)
    {
        //  MOVIMENTAR JOGADOR ********************************************************************

        if (controle1.teclaSetaParaCimaPressionada != controle1.teclaSetaParaBaixoPressionada)
        { // se o usuário precionar para cima
            if (controle1.teclaSetaParaCimaPressionada)
            { // se para cima for pressionado
                if (usuario1.posicaoY > 0)
                { // se a bola não sair da tela
                    usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
                }
            }
            else
            { // se for para baixo 
                if (usuario1.posicaoY < (canvas1.canvas.height - usuario1.altura))
                { // se a bola não saiu da tela
                    usuario1.posicaoY += usuario1.velocidade; // muda posição
                }
            }
        }

        // OPONENTE ********************************************************************************

        if (oponente1.movimentoParaCima)
        { // caso o oponente estivcer inddo para cima
            oponente1.posicaoY -= oponente1.velocidade;
            if (oponente1.posicaoY <= 0) // se a bola estiver saindo da tela
            {
                oponente1.movimentoParaCima = false;
            }
        }
        else
        { // se o oponente estiver se movendo para baixo
            oponente1.posicaoY += oponente1.velocidade;
            if (oponente1.posicaoY >= canvas1.canvas.height - oponente1.altura)
            { // caso a bola estiver saindo da tela
                oponente1.movimentoParaCima = true;
            }
        }

        // BOLA **************************************************************************

        if (bola1.tempo <= 0) // caso a bola estiver em jogo, o tempo  e zerado apos marcar ponto, abola ficará invisivel por um tempo
        {
            if ((bola1.posicaoX - bola1.raio) <= (usuario1.posicaoX + usuario1.largura))
            { // caso o jogador encoste na bola no eixo X
                if ((bola1.posicaoY + bola1.raio > usuario1.posicaoY) && (bola1.posicaoY - bola1.raio < usuario1.posicaoY + usuario1.altura))
                { // caso o jogador encoste na bola no eixo Y
                    usuario1.cor = "rgba(100,100,000,1)"
                    bola1.movimentoParaDireita = true;
                    setTimeout(() => { usuario1.cor = "rgba(255,255,000,1)" }, 300)
                    if (controle1.teclaSetaParaBaixoPressionada)
                    { // se o usuário estiver indo para baixo e tocar na bola
                        bola1.angulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                    }
                    else
                    {
                        bola1.angulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                    }
                }
            }
            else
            {
                if ((bola1.posicaoX + bola1.raio) >= oponente1.posicaoX)
                { // se o oponente encostar na bola no eixo X
                    if ((bola1.posicaoY + bola1.raio) > oponente1.posicaoY && (bola1.posicaoY - bola1.raio < oponente1.posicaoY + usuario1.altura))
                    { // se o oponente encostar na bola no eixo Y
                        oponente1.cor = "rgba(100,000,000,1)"
                        bola1.movimentoParaDireita = false;

                        setTimeout(() => { oponente1.cor = "rgba(255,000,000,1)" }, 300)
                        if (usuario1.movimentoParaCima)
                        { // caso oponetne estiver indo para cima ao tocar na bola
                            bola1.angulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                        }
                        else
                        { // caso o oponetne estiover info para baico quando tocar na bola
                            bola1.angulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                        }
                    }
                }
            }

            if ((bola1.posicaoY - bola1.raio <= 0) || (bola1.posicaoY + bola1.raio > canvas1.canvas.height))
            { // se a boal estiver indo para cima ou para baixo na tela
                bola1.angulo = bola1.angulo * -1; // multiplicamos por - 1 para inverter a direção da bola no eixo y
            }
            bola1.posicaoY += bola1.angulo; // move bola para cima ou para baixo de acordo com o cauculo acima

            if (bola1.movimentoParaDireita)
            {
                bola1.posicaoX += bola1.velocidade; // move vbola para direita
            }
            else
            {
                bola1.posicaoX -= bola1.velocidade; // move vbola para esquerda
            }
        }

        if ((bola1.posicaoX <= -bola1.raio) || (bola1.posicaoX > canvas1.canvas.width))
        { // se a bola saiu da tela
            if (bola1.tempo >= 50)
            { // se o tempo de deixar a bola invisuivel passou 
                if (bola1.posicaoX <= - bola1.raio)
                { // se bola saiu na esquerda 
                    oponente1.pontos++;
                }
                else
                { // se bola saiu na direita 
                    usuario1.pontos++;
                }

                bola1.posicaoX = canvas1.canvas.width / 2; // coloca bola no centro da tela
                bola1.posicaoY = canvas1.canvas.height / 2; // coloca bola no centro da tela

                bola1.movimentoParaDireita = randomBoolean();
                bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
                bola1.tempo = 0; // zera  o tempo de deixar a bola invisivel e coloca novamente em jogo
            }
            else
            { // caso o tempo de deixar a bola invisivel não acabou 
                bola1.tempo++;
            }
        }

        //  DESENHA TODA A TELA ***********************************************************************************
        canvas1.contexto.clearRect(0, 0, canvas1.canvas.width, canvas1.canvas.height); // limpar a tela antes de desenhar

        //  JOGADOR E OPONENTE ***********************************************************************************
        canvas1.contexto.fillStyle = usuario1.cor;

        canvas1.contexto.fillRect(usuario1.posicaoX, usuario1.posicaoY, usuario1.largura, usuario1.altura); /// desenha jogador       

        canvas1.contexto.fillStyle = oponente1.cor;

        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, usuario1.largura, usuario1.altura); /// desenha ioponente

        // BOLA ***********************************************************************************


        canvas1.contexto.fillStyle = bola1.cor;

        canvas1.contexto.beginPath(); // modo desenho 
        canvas1.contexto.arc(bola1.posicaoX, bola1.posicaoY, bola1.raio, 0, Math.PI * 2, true); // desenha o circulo com coordenadas no centro
        canvas1.contexto.closePath(); // finaliza o caminho/ não obrigatorio
        canvas1.contexto.fill();


        // PLACAR ***********************************************************************************

        var pontosA = usuario1.pontos; // variaveis temporarias para alterar pontiação
        var pontosB = oponente1.pontos;

        if (pontosA < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosA = "0" + pontosA;
        }

        if (pontosB < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosB = "0" + pontosB;
        }

        canvas1.contexto.font = "38pt Arial"; // tamanho e fonte
        canvas1.contexto.fillStyle = "rgba(0,255,0)";
        canvas1.contexto.fillText(pontosA + "  " + pontosB, (canvas1.canvas.width / 2) - 70, 50); // escrevendo texto no centro da tela no top

        //  LINHA DIVISÓRIA
        canvas1.contexto.beginPath();
        canvas1.contexto.moveTo(canvas1.canvas.width / 2, 0); // arrumar lapis para fazer a escrita da linha
        canvas1.contexto.lineTo(canvas1.canvas.width / 2, canvas1.canvas.height);// faz risco na tela no centro
        canvas1.contexto.strokeStyle = "rgba(255,255,255,1";
        canvas1.contexto.stroke();
        canvas1.contexto.closePath();

    } else
    {
        statusPingPong2.innerHTML = "PING PONG - OFFLINE!";
        setTimeout("limparStatusPingPong2()", 3000);
    }

}
/**/

// ////////////////////////////////////

function irParaCima()
{
    if (usuario1.posicaoY > 0)
    { // se a bola nçao sair da tela
        usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (usuario1.posicaoY < (canvas1.canvas.height - usuario1.altura))
    { // se a bola não saiu da tela
        usuario1.posicaoY += usuario1.velocidade; // muda posição
    }
}

var imagemBotaoOpcaoDeVelocidade = document.getElementById('imagemBotaoOpcaoVelocidade');

function mudarVelocidade()
{
    if (bola1.velocidade == 0)
    {
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');

    } else if (bola1.velocidade == 10)
    {
        bola1.velocidade = 20;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/2.png');

    } else if (bola1.velocidade == 20)
    {
        bola1.velocidade = 30;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/3.png');

    } else if (bola1.velocidade == 30)
    {
        bola1.velocidade = 40;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/4.png');
    } else
    {
        bola1.velocidade = 0;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/0.png');
    }
}

function memoria(valorMemoria)
{
    velocidadeMemorizada = valorMemoria;
    return velocidadeMemorizada;
}


var statusPingPong = document.getElementById('statusPingPong');

var statusPingPong2 = document.getElementById('statusPingPong2');

function zerarPlacar()
{
    if (bola1.velocidade == 0)
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas1.canvas.width / 2;
        bola1.posicaoY = canvas1.canvas.height / 2;
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
        setTimeout("status3()", 1000);
    } else
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas1.canvas.width / 2;
        bola1.posicaoY = canvas1.canvas.height / 2;
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
        setTimeout("status3()", 1000);
    }
}

function status3()
{
    statusPingPong2.style.visibility = 'visible';
    statusPingPong2.innerHTML = 3;
    nome.innerHTML = 3;
    setTimeout("status2()", 1000);
}

function status2()
{
    statusPingPong2.innerHTML = 2;
    nome.innerHTML = 2;
    setTimeout("status1()", 1000);
}

function status1()
{
    statusPingPong2.innerHTML = 1;
    nome.innerHTML = 1;
    setTimeout("statusGO()", 1000);
}

function statusGO()
{
    statusPingPong2.innerHTML = "GO!!!";
    nome.innerHTML = "GO!!!";
    iniciarPartida();
}

const randomBoolean = () => Math.random() >= 0.5;

function iniciarPartida()
{
    bola1.movimentoParaDireita = randomBoolean();
    bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bola1.tempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
    bola1.velocidade = velocidadeMemorizada;
    setTimeout("limparStatusPingPong()", 1000);
    setTimeout("limparStatusPingPong2()", 3000);
}

function limparStatusPingPong()
{
    statusPingPong.innerHTML = "PING PONG";
}


function limparStatusPingPong2()
{
    statusPingPong2.style.visibility = "hidden"
}

function statusBotaoParaCima()
{
    statusPingPong.innerHTML = "MOVE UP!";
    nome.innerHTML = "MOVE UP!";
}

function statusBotaoParaBaixo()
{
    statusPingPong.innerHTML = "MOVE DOWN!";
    nome.innerHTML = "MOVE DOWN!";
}

function statusBotaoVelocidade()
{
    statusPingPong.innerHTML = "CHANGE BALL SPEED!";
    nome.innerHTML = "CHANGE BALL SPEED!";
}

function statusZerarPlacar()
{
    statusPingPong.innerHTML = "RESTART!";
    nome.innerHTML = "RESTART!";
}

function statusCanvas()
{
    statusPingPong.innerHTML = "On the keyboard use the \"A\" or \"D\" key or the up or down arrow.";
    nome.innerHTML = "On the keyboard use the \"A\" or \"D\" key or the up or down arrow.";
}

// ////////////////////////////////////////////////// POPUP:

var secaoPopup = document.getElementById('secaoPopup');

function abrirFecharPopup()
{
    var estiloPopup = window.getComputedStyle(secaoPopup);
    var estiloPropriedade = estiloPopup.getPropertyValue('display');

    if (estiloPropriedade == "none")    
    {
        secaoPopup.style.display = 'flex';
    } else
    {
        secaoPopup.style.display = 'none';
    }
}

// ////////////////////////////////////////////////// CRONOMETRO:
/*
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start()
{
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause()
{
    clearInterval(cron);
}

function reset()
{
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}

function timer()
{
    if ((millisecond += 10) == 1000)
    {
        millisecond = 0;
        second++;
    }
    if (second == 60)
    {
        second = 0;
        minute++;
    }
    if (minute == 60)
    {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input)
{
    return input > 10 ? input : `0${input}`
}
*/
//////////////////////////////////// - CHECAR CODIGO TECLADO

function checarTecla(e)
{
    var evento = window.event ? window.event : e;
    statusPingPong.innerText = (evento.keyCode);
}

// //////////////////////////////////////////////////

var botaoStatus = document.getElementById('imagemBotaoStatus');

function abrirFecharStatus()
{
    var estiloStatus = window.getComputedStyle(nome);
    var valorEstiloStatus = estiloStatus.getPropertyValue('visibility');

    if (valorEstiloStatus == "hidden")    
    {
        flutuante.style.display = 'flex';
        nome.style.visibility = 'visible';
        botaoStatus.style.opacity = 1;
    } else
    {
        nome.style.visibility = 'hidden';
        flutuante.style.display = 'none';
        botaoStatus.style.opacity = 0.0;
    }
}

function alterarTamanhoTela()
{
    if (canvasHTML5.getAttribute("width") == "700px")
    {
        canvasHTML5.setAttribute("width", "500px");
    } else
    {
        canvasHTML5.setAttribute("width", "700px");
    }
}

function statusTamanhoTela()
{

}

//

function abrirSecaoSecreta()
{
    var estiloCssSecaoSecreta = window.getComputedStyle(secaoSecreta);

    var propriedadeCssSecaoSecreta = estiloCssSecaoSecreta.getPropertyValue('display');

    //SE ACESSO LIBERADO:
    if (localStorage.acessoLiberado == "true")
    {
        //MUDA O DISPLAY:
        if (propriedadeCssSecaoSecreta == "none")    
        {
            secaoSecreta.style.display = 'flex';
        } else
        {
            secaoSecreta.style.display = 'none';
        }
    }
    //SE ACESSO NÃO LIBERADO:
    else if (localStorage.acessoLiberado == "false")
    {
        //PEDE A SENHA
        var senhaDigitada = prompt("Digite a senha de acesso:")

        localStorage.senha = senhaDigitada;
        //SE A SENHA FOR CORRETA:

        if (localStorage.senha.toLowerCase() == "oxi")
        {
            //LIBERA ACESSO TEMPORARIO:
            localStorage.acessoLiberado = true;

            //MUDA O DISPLAY:
            if (propriedadeCssSecaoSecreta == "none")    
            {
                secaoSecreta.style.display = 'flex';
            } else
            {
                secaoSecreta.style.display = 'none';
            }
        }
        // SE SENHA INCORRETA
        else
        {
            //PEDE A SENHA
            var senhaDigitada = prompt("Digite a senha de acesso:")

            localStorage.senha = senhaDigitada;
            //SE A SENHA FOR CORRETA:
            if (localStorage.senha.toLowerCase() == "oxi")
            {
                //LIBERA ACESSO TEMPORARIO:
                localStorage.acessoLiberado = true;

                //SE SECAO FECHADA:
                if (propriedadeCss == "none")    
                {
                    //ABRE A SECAO:
                    secaoSecreta.style.display = 'flex';
                }
                //SE SECAO ABERTA:
                else
                {
                    // FECHA A SECAO
                    secaoSecreta.style.display = 'none';
                }
            }
            //SE A SENHA NÃO FOR CORRETA:
            else
            {
                nome.innerHTML = "SENHA INCORRETA!"
            }
        }
    } else
    {
        //PEDE A SENHA
        var senhaDigitada = prompt("Digite a senha de acesso:")

        localStorage.senha = senhaDigitada;

        //SE A SENHA FOR CORRETA:
        if (localStorage.senha.toLowerCase() == "oxi")
        {
            //LIBERA ACESSO TEMPORARIO:
            localStorage.acessoLiberado = true;

            //SE SECAO FECHADA:
            if (propriedadeCss == "none")    
            {
                //ABRE A SECAO:
                secaoSecreta.style.display = 'flex';
            }
            //SE SECAO ABERTA:
            else
            {
                // FECHA A SECAO
                secaoSecreta.style.display = 'none';
            }
        }
        //SE A SENHA NÃO FOR CORRETA:
        else
        {
            nome.innerHTML = "SENHA INCORRETA!"
        }
    }
}
// ////////////////////////////////////////////////// CANVAS 2:
/*

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

// animation variables
var currentX = 10;
var currentY = 10;
var frameCount = 60;
var timer;
var points;
var currentFrame;


function animate()
{
    var point = points[currentFrame++];
    draw(point.x, point.y);

    // refire the timer until out-of-points
    if (currentFrame < points.length)
    {
        timer = setTimeout(animate, 1000 / 60);
    }
}

function linePoints(x1, y1, x2, y2, frames)
{
    var dx = x2 - x1;
    var dy = y2 - y1;
    var length = Math.sqrt(dx * dx + dy * dy);
    var incrementX = dx / frames;
    var incrementY = dy / frames;
    var a = new Array();

    a.push({
        x: x1,
        y: y1
    });
    for (var frame = 0; frame < frames - 1; frame++)
    {
        a.push({
            x: x1 + (incrementX * frame),
            y: y1 + (incrementY * frame)
        });
    }
    a.push({
        x: x2,
        y: y2
    });
    return (a);
}

function draw(x, y)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "gray";
    ctx.rect(x, y, 30, 20);
    ctx.fill();
    ctx.stroke();
}

function handleMouseDown(e)
{
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    $("#downlog").html("Down: " + mouseX + " / " + mouseY);

    // Put your mousedown stuff here
    points = linePoints(currentX, currentY, mouseX, mouseY, frameCount);
    currentFrame = 0;
    currentX = mouseX;
    currentY = mouseY;
    animate();
}

$("#canvas").mousedown(function (e)
{
    handleMouseDown(e);
});

draw(10, 10);
*/
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

*/