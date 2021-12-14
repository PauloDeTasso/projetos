var audio = document.getElementById('audio');

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function aumentar_volume()
{

    var audio = document.getElementById('audio');

    var iconeAumentarVolume = document.getElementById('iconeSomAumentarVolume');
    
    var volumeArredondado = Math.round(audio.volume*10);

    switch (volumeArredondado)
    {

        case 10:

            audio.volume += 0.0;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume10.png');

            break;

        case 9:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume9.png');

            break;

        case 8:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume8.png');

            break;

        case 7:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume7.png');
            alert(volumeArredondado);
            break;

        case 6:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume6.png');
            alert(volumeArredondado);
            break;

        case 5:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume5.png');
            break;

        case 4:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume4.png');
            break;

        case 3:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume3.png');
            break;

        case 2:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume2.png');

            break;

        case 1:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume1.png');

            break;

        case 0:

            audio.volume += 0.1;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volume0.png');

            break;

        default:

            audio.volume += 0.0;
            iconeAumentarVolume.setAttribute('src', '/icones/800x600/volumealto0.png');

    }

}

function diminuir_volume() {

    var audio = document.getElementById('audio');

    var iconeDiminuirVolume = document.getElementById('iconeSomDiminuirVolume');

    var volumeArredondado = Math.round(audio.volume*10);

    switch (volumeArredondado) {

        case 10:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume10.png');
            break;

        case 9:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume9.png');
            break;

        case 8:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume8.png');
            break;

        case 7:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume7.png');
            break;

        case 6:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume6.png');
            break;

        case 5:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume5.png');
            break;

        case 4:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume4.png');
            break;

        case 3:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume3.png');
            break;

        case 2:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume2.png');
            break;

        case 1:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume1.png');
            break;

        case 0:

            audio.volume -= 0.1;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volume0.png');
            break;

        default:

            audio.volume -= 0.0;
            iconeDiminuirVolume.setAttribute('src', '/icones/800x600/volumealto0.png');
    }

}

function mute() {
    var audio = document.getElementById('audio');
    var icone = document.getElementById('iconeSom')

    if (audio.muted) {
        audio.muted = false;
        icone.setAttribute('src', '/icones/sound.png');
    } else {
        audio.muted = true;
        icone.setAttribute('src', '/icones/mute.png');
    }
}