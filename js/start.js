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

function aumentar_volume() {

    var audio = document.getElementById('audio');
    
    if (audio.volume < 1) audio.volume += 0.1;
}

function diminuir_volume() {

    var audio = document.getElementById('audio');

    if (audio.volume > 0) audio.volume -= 0.1;
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