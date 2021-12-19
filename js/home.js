function play()
{
    audio.play();
}

function pause()
{
    audio.pause();
}

function stop()
{
    audio.pause();
    audio.currentTime = 0;
}

function aumentar_volume()
{

    var audio = document.getElementById("audio");

    var iconeAumentarVolume = document.getElementById("iconeSomAumentarVolume");

    var iconeDiminuirVolume = document.getElementById('iconeSomDiminuirVolume');

    var volumeArredondado = Math.round(audio.volume * 10);

    switch (volumeArredondado)
    {

        case 10:

            audio.volume += 0.0;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
            break;

        case 9:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto10.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo10.png');
            break;

        case 8:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');
            break;

        case 7:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');
            break;

        case 6:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');
            break;

        case 5:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');
            break;

        case 4:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');
            break;

        case 3:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');
            break;

        case 2:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');
            break;

        case 1:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');
            break;

        case 0:

            audio.volume += 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');
            break;

        default:

            audio.volume += 0.0;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function diminuir_volume()
{

    var audio = document.getElementById("audio");

    var iconeDiminuirVolume = document.getElementById('iconeSomDiminuirVolume');

    var iconeAumentarVolume = document.getElementById('iconeSomAumentarVolume');

    var volumeArredondado = Math.round(audio.volume * 10);

    switch (volumeArredondado)
    {

        case 10:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto9.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo9.png');
            break;

        case 9:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto8.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo8.png');
            break;

        case 8:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto7.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo7.png');
            break;

        case 7:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto6.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo6.png');
            break;

        case 6:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto5.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo5.png');
            break;

        case 5:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto4.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo4.png');
            break;

        case 4:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto3.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo3.png');
            break;

        case 3:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto2.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo2.png');
            break;

        case 2:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto1.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo1.png');
            break;

        case 1:

            audio.volume -= 0.1;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        case 0:

            audio.volume -= 0.0;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealto0.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo0.png');
            break;

        default:

            audio.volume -= 0.0;
            iconeAumentarVolume.removeAttribute('src');
            iconeDiminuirVolume.removeAttribute('src');
            iconeAumentarVolume.setAttribute('src', '../icones/800x600/volumealtoalto.png');
            iconeDiminuirVolume.setAttribute('src', '../icones/800x600/volumebaixo.png');
    }

}

function mute()
{

    var audio = document.getElementById("audio");
    var icone = document.getElementById('iconeSom')

    if (audio.muted)
    {
        audio.muted = false;
        icone.removeAttribute('src');
        icone.setAttribute('src', '../icones/800x600/sound.png');
        audio.play();
    } else
    {
        audio.pause();
        audio.muted = true;
        icone.removeAttribute('src');
        icone.setAttribute('src', '../icones/800x600/mute.png');
    }
}

function alterarGif1()
{
    var gif1 = document.getElementById('gif1');

    if (gif1.getAttribute('src') == '../icones/code10.gif')
    {
        gif1.removeAttribute('src');
        gif1.setAttribute('src', '../icones/code.gif');
    } else
    {
        gif1.removeAttribute('src');
        gif1.setAttribute('src', '../icones/code10.gif');
    }

};

function alterarGif10()
{
    var gif10 = document.getElementById('gif10');

    if (gif10.getAttribute('src') == '../icones/code.gif')
    {
        gif10.removeAttribute('src');
        gif10.setAttribute('src', '../icones/code12.gif');

    } else if (gif10.getAttribute('src') == '../icones/code12.gif')
    {
        gif10.removeAttribute('src');
        gif10.setAttribute('src', '../icones/code13.gif');
    } else
    {
        gif10.removeAttribute('src');
        gif10.setAttribute('src', '../icones/code.gif');
    }

};

function alterarGif20()
{
    var gif20 = document.getElementById('gif20');

    if (gif20.getAttribute('src') == '../icones/code11.gif')
    {
        gif20.removeAttribute('src');
        gif20.setAttribute('src', '../icones/code.gif');
    } else
    {
        gif20.removeAttribute('src');
        gif20.setAttribute('src', '../icones/code11.gif');
    }

};