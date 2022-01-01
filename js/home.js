
const botaoGif = document.getElementById('botaoGifPrincipal');

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

var nome = document.getElementById("status");

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
                somCahoeira.volume += 0.1;
                audio4.volume += 0.1;
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
            somCahoeira.volume -= 0.0;
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealtoalto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function mudo()
{
    volumeArredondado = Math.round(audioPrincipal.volume * 10);

    if (audioPrincipal.muted || audio1.muted || audio2.muted || audio3.muted || audio4.muted || somCahoeira.muted)
    {

        if (iconeSomExtra.style.visibility == 'hidden' && volumeArredondado == 10)
        {
            audioPrincipal.muted = false;
            audio1.muted = false;
            audio2.muted = false;
            audio3.muted = false;
            audio4.muted = false;
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
        somCahoeira.muted = true;
        iconeSomExtra.style.visibility = 'hidden';
        iconeSomExtra2.style.visibility = 'visible';
        iconeMudo.setAttribute('src', '../icones/800x600/mute.png');
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
    nome.innerHTML = "PAULO DE TASSO";
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
    let styleGifPrincipal = window.getComputedStyle(secaoGifPrincipal);
    let estiloGifPrincipal = styleGifPrincipal.getPropertyValue('display');

    if (estiloGifPrincipal == "none")    
    {
        secaoGifPrincipal.style.display = 'flex';
    } else
    {
        secaoGifPrincipal.style.display = 'none';
    }
}

/////////////////////////////////////////////////////////////////

function abrirFecharTabela()
{

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
    nome.innerHTML = 'Press!'.toUpperCase();
}

function statusTextoEmMovimentoOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}


/**/

function statusGif()
{
    nome.innerHTML = '...'.toUpperCase();
}

function statusGifOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusGifPrincipal()
{
    nome.innerHTML = '...'.toUpperCase();
}

function statusGifPrincipalOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusBaixarVolume()
{
    nome.innerHTML = 'Turn down volume!'.toUpperCase();
}

function statusBaixarVolumeOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusVolumeMaximo()
{
    nome.innerHTML = 'Maximum Volume!'.toUpperCase();
}

function statusVolumeMaximoOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusPause()
{
    nome.innerHTML = 'Pause!'.toUpperCase();
}

function statusPauseOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusMudo()
{
    nome.innerHTML = 'Mute!'.toUpperCase();
}

function statusMudoOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusPlay()
{
    nome.innerHTML = 'Play!'.toUpperCase();
}

function statusPlayOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusSilencio()
{
    nome.innerHTML = 'Silence!'.toUpperCase();
}

function statusSilencioOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusAumentarVolume()
{
    nome.innerHTML = 'Turn up the volume!'.toUpperCase();
}

function statusAumentarVolumeOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

///////////////////////////////////////////////////////* - ICONES LINGUAGENS - */

function statusHtml()
{
    nome.innerHTML = 'HTML5!';
}

function statusHtmlOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusCss()
{
    nome.innerHTML = 'CSS3!';
}

function statusCssOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusJavascript()
{
    nome.innerHTML = 'Javascript!'.toUpperCase();
}

function statusJavascriptOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusJava()
{
    nome.innerHTML = 'Java!'.toUpperCase();
}

function statusJavaOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}
/**/

function statusMysql()
{
    nome.innerHTML = 'Mysql!'.toUpperCase();
}

function statusMysqlOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}
/**/

function statusNtsl()
{
    nome.innerHTML = 'Ntsl!'.toUpperCase();
}

function statusNtslOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

///////////////////////////////////////////////////////* - BARRA DE ICONES - */

function statusIconeTabelaOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
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
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusWhatsapp()
{
    nome.innerHTML = 'Whatsapp!'.toUpperCase();
}

function statusWhatsappOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusEnviarEmail()
{
    nome.innerHTML = 'Send Email!'.toUpperCase();
}

function statusEnviarEmailOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusSkype()
{
    nome.innerHTML = 'Skype!'.toUpperCase();
}

function statusSkypeOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusLinkedIn()
{
    nome.innerHTML = 'LinkedIn!'.toUpperCase();
}

function statusLinkedInOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusTwitter()
{
    nome.innerHTML = 'Twitter!'.toUpperCase();
}

function statusTwitterOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusFacebook()
{
    nome.innerHTML = 'Facebook!'.toUpperCase();
}

function statusFacebookOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusInstagram()
{
    nome.innerHTML = 'Instagram!'.toUpperCase();
}

function statusInstagramOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusYoutube()
{
    nome.innerHTML = 'Youtube!'.toUpperCase();
}

function statusYoutubeOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusGithub()
{
    nome.innerHTML = 'Github!'.toUpperCase();
}

function statusGithubOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusLicenseJavascript()
{
    nome.innerHTML = 'License Javascript!'.toUpperCase();
}

function statusLicenseJavascriptOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}

/**/

function statusLinkLicenseJavascript()
{
    nome.innerHTML = 'Open License Javascript!'.toUpperCase();
}

function statusLinkLicenseJavascriptOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
}



function sfssdCode()
{
    secaoFooter.style.backgroundImage = 'url("")';
    sfssd.style.visibility = 'visible';
}

function sfssdCodeOff()
{
    secaoFooter.style.backgroundImage = 'url("../icones/code9.gif")';
    sfssd.style.visibility = 'hidden';
}

function mudarCorBotaoGif()
{
    botaoGif.style.backgroundColor = 'aqua';
}

function mudarCorBotaoGifOff()
{
    botaoGif.style.backgroundColor = 'green';
}

/*

function statusJavascript()
{
    nome.innerHTML = 'Javascript!'.toUpperCase();
}

function statusJavascriptOff()
{
    nome.innerHTML = 'PAULO DE TASSO';
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