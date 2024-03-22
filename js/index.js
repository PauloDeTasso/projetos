var html5 = document.getElementById("html5");

var imagem = document.getElementById("imagemStart");

var imagemLookalike3d = document.getElementById("imagemLookalike3d");

var visitasdoSite = document.getElementById("visitasSite");

var objetoEmMovimento = document.getElementById("objeto");

var somVento = document.getElementById("somDoVento");

var somLoop = document.getElementById("loop");

var somRespiracao = document.getElementById("respiracao");

var fx1 = document.getElementById("fx1");

var fx2 = document.getElementById("fx2");

var emojiNorte1 = document.getElementById("emojiNorte01");

var contador = 0;

var contador2 = 0;

var numeroAleatorioFraseInterno;

var numeroEmojiAleatorio;

var secaoNorteImagem = document.getElementById("secaoNorteImagem");

var secaoSulImagem = document.getElementById("secaoSulImagem");

var secaoLesteImagem = document.getElementById("secaoLesteImagem");

var secaoOesteImagem = document.getElementById("secaoOesteImagem");

var statusSistema = document.getElementById("statusSistema");

/////////////////////////**/

somVento.volume = 0.3;

function objetoPlay() {
  objetoEmMovimento.setAttribute();
}

function numeroAleatorioFrase(min, max) {
  numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function alterarImagem(pagina) {
  if (pagina == "Lookalike3d") {
    numeroAleatorioFrase(0, 9);
    imagemLookalike3d.setAttribute(
      "src",
      "imagens/Projetos3d/ROLETA/0" + numeroAleatorioFraseInterno + ".png"
    );
    contador = 1;
  } else if (pagina == "Cwt") {
    numeroAleatorioFrase(0, 20);
    imagem.setAttribute(
      "src",
      "imagens/start" + numeroAleatorioFraseInterno + ".png"
    );
    contador = 1;
  } else {
  }
}

function retornarImagem(pagina) {
  if (pagina == "Lookalike3d") {
    imagemLookalike3d.setAttribute("src", "imagens/Projetos3d/LOGO/LOGO04.png");
  } else if (pagina == "Cwt") {
    imagem.setAttribute("src", "imagens/start0.png");
  } else {
  }
}

function numeroEmojisAleatorio(min, max) {
  numeroEmojiAleatorio = Math.floor(Math.random() * (max - min) + min);
}

function emojiAleatorio() {
  numeroEmojisAleatorio(1, 40);
  emojiNorte1.setAttribute(
    "src",
    "../imagens/emojis/" + numeroEmojiAleatorio + ".png"
  );
}

function playUnico() {
  if (contador == 0 || contador == undefined) {
    somVento.play();
  } else {
  }
}

var imagensGirou = false;
var imagensGiroulLookalike = false;

var contadorOpacidade = 1.9;

function goHome(pagina) {
  if (pagina == "Lookalike3d") {
    if (imagensGiroulLookalike) {
      abrirPagina("Projetos/Lookalike3D/Lookalike3d.html", "_self");
    } else {
      girarImagens(pagina);
    }

    //abrirPagina('Projetos/Lookalike3D/Lookalike3d.html', '_self')
  } else if (pagina == "Cwt") {
    if (imagensGirou) {
      window.location.href = "docs/Home.html";
    } else {
      girarImagens(pagina);
    }
  } else if (pagina == "BDS") {
    window.location.href = "Projetos/BDS/index.html";
  } else {
    alert("Escolha um Site para entrar!");
  }
}

function girarImagens(pagina) {
  if (pagina == "Lookalike3d") {
    contador2 = 0;
    setTimeout(() => {
      imagemAtual(1, pagina);
    }, 70);
    fx1.play();
  } else if (pagina == "Cwt") {
    contador2 = 0;
    setTimeout(() => {
      imagemAtual(1, pagina);
    }, 70);
    fx1.play();
  } else {
  }
}

function imagemAtual(contador2, pagina) {
  if (pagina == "Lookalike3d") {
    if (contador2 >= 20) {
      imagensGiroulLookalike = true;
      goHome(pagina);
    } else {
      contadorOpacidade = contadorOpacidade - 0.1;

      contador2++;

      imagemLookalike3d.setAttribute(
        "src",
        "imagens/Projetos3d/ROLETA/0" + contador2 + ".png"
      );

      html5.style.opacity = contadorOpacidade;

      setTimeout(() => {
        imagemAtual(contador2, pagina);
      }, 70);
    }
  } else if (pagina == "Cwt") {
    if (contador2 >= 19) {
      imagensGirou = true;
      goHome("Cwt");
    } else {
      contadorOpacidade = contadorOpacidade - 0.1;

      contador2++;

      imagem.setAttribute("src", "imagens/start" + contador2 + ".png");

      html5.style.opacity = contadorOpacidade;

      setTimeout(() => {
        imagemAtual(contador2, pagina);
      }, 70);
    }
  } else {
  }
}

/* SE BARRA DE PROGRESSO = 100 ENTÃO: 

let som = setTimeout("somTerminou()", 7000);

function somTerminou()
{
    let confimar = confirm("Ok for a song?");

    if (confimar == true) 
    {
        somLoop.play();
        somVento.play();
        somRespiracao, play();
    } else
    {
        somLoop.pause();
        somVento.pause();
        somRespiracao.pause();
    }
}
*/

luzes();

function luzes() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/0.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/0.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/0.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/0.jpg");
  let show = setTimeout("luzes1()", 120);
}

function luzes1() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  let show = setTimeout("luzes2()", 120);
}

function luzes2() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  let show = setTimeout("luzes3()", 120);
}

function luzes3() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  let show = setTimeout("luzes4()", 120);
}

function luzes4() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  let show = setTimeout("luzes5()", 120);
}

function luzes5() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  let show = setTimeout("luzes6()", 120);
}

function luzes6() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  let show = setTimeout("luzes7()", 120);
}

function luzes7() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  let show = setTimeout("luzes8()", 120);
}

function luzes8() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  let show = setTimeout("luzes9()", 120);
}

function luzes16() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/1.jpg");
  let show = setTimeout("luzes1()", 120);
}

function luzes15() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/2.jpg");
  let show = setTimeout("luzes16()", 120);
}

function luzes14() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/3.jpg");
  let show = setTimeout("luzes15()", 120);
}

function luzes13() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/4.jpg");
  let show = setTimeout("luzes14()", 120);
}

function luzes12() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/5.jpg");
  let show = setTimeout("luzes13()", 120);
}

function luzes11() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/6.jpg");
  let show = setTimeout("luzes12()", 120);
}

function luzes10() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/7.jpg");
  let show = setTimeout("luzes11()", 120);
}

function luzes9() {
  secaoNorteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoSulImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoLesteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  secaoOesteImagem.setAttribute("src", "imagens/luzes/preto e branco/8.jpg");
  let show = setTimeout("luzes10()", 120);
}

function abrirPagina(link, target) {
  window.open(link, target);
}

function detectar_mobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

if (detectar_mobile()) {
} else {
}

/* COLORIDAS: 

function luzes()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/branco.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/branco.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/preto.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/preto.jpg');
    let show = setTimeout("luzes1()", 100);
}

function luzes1()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/azulmarinho.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/azulmarinho.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/branco.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/branco.jpg');
    let show = setTimeout("luzes2()", 100);
}

function luzes2()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/azul.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/azul.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/azulmarinho.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/azulmarinho.jpg');
    let show = setTimeout("luzes3()", 100);
}

function luzes3()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/lilas.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/lilas.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/azul.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/azul.jpg');
    let show = setTimeout("luzes4()", 100);
}

function luzes4()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/verde.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/verde.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/lilas.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/lilas.jpg');
    let show = setTimeout("luzes5()", 100);
}

function luzes5()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/amarelo.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/amarelo.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/verde.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/verde.jpg');
    let show = setTimeout("luzes6()", 100);
}

function luzes6()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/laranja.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/laranja.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/amarelo.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/amarelo.jpg');
    let show = setTimeout("luzes7()", 100);
}

function luzes7()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/vermelho.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/vermelho.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/laranja.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/laranja.jpg');
    let show = setTimeout("luzes8()", 100);
}

function luzes8()
{
    secaoNorteImagem.setAttribute('src', 'imagens/luzes/preto.jpg');
    secaoSulImagem.setAttribute('src', 'imagens/luzes/preto.jpg');
    secaoLesteImagem.setAttribute('src', 'imagens/luzes/vermelho.jpg');
    secaoOesteImagem.setAttribute('src', 'imagens/luzes/vermelho.jpg');
    let show = setTimeout("luzes1()", 100);
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
