
/*********************************************/
/*CARROSEL PRINCIPAL*/
const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let counter = 0;
let startX;
let isDragging = false;

// Função para lidar com a transição do último para o primeiro slide
function transitionToFirstSlide() {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(${-slideCount * 100}%)`;
  setTimeout(() => {
    slides.style.transition = "";
    counter = slideCount - 1;
    slides.style.transform = `translateX(${-counter * 100}%)`;
  }, 500); // Tempo de espera igual à duração da transição
}

// Função para lidar com a transição do primeiro para o último slide
function transitionToLastSlide() {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(0%)`;
  setTimeout(() => {
    slides.style.transition = "";
    counter = 0;
    slides.style.transform = `translateX(${-counter * 100}%)`;
  }, 500); // Tempo de espera igual à duração da transição
}

// Eventos de clique nos botões prev e next
carousel.addEventListener("click", (event) => {
  if (event.target === carousel.querySelector(".prev")) {
    if (counter > 0) {
      counter--;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      transitionToFirstSlide();
    }
  } else if (event.target === carousel.querySelector(".next")) {
    if (counter < slideCount - 1) {
      counter++;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      transitionToLastSlide();
    }
  }
});

// Eventos de arrastar com o mouse
carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.pageX - carousel.offsetLeft;
});

carousel.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  const endX = event.pageX - carousel.offsetLeft;
  const deltaX = endX - startX;

  if (deltaX > 50 && counter > 0) {
    counter--;
  } else if (deltaX < -50 && counter < slideCount - 1) {
    counter++;
  }

  slides.style.transform = `translateX(${-counter * 100}%)`;
});

carousel.addEventListener("mouseleave", () => {
  if (!isDragging) return;
  isDragging = false;
});

carousel.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const x = event.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Ajuste a sensibilidade aqui
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});

// Eventos de toque
carousel.addEventListener("touchstart", (event) => {
  isDragging = true;
  startX = event.touches[0].pageX - carousel.offsetLeft;
});

carousel.addEventListener("touchend", () => {
  if (!isDragging) return;
  isDragging = false;
  const endX = event.changedTouches[0].pageX - carousel.offsetLeft;
  const deltaX = endX - startX;

  if (deltaX > 50 && counter > 0) {
    counter--;
  } else if (deltaX < -50 && counter < slideCount - 1) {
    counter++;
  }

  slides.style.transform = `translateX(${-counter * 100}%)`;
});

carousel.addEventListener("touchcancel", () => {
  if (!isDragging) return;
  isDragging = false;
});

carousel.addEventListener("touchmove", (event) => {
  if (!isDragging) return;
  const x = event.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Ajuste a sensibilidade aqui
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});

/********************************************/
/*AVANÇO AUTOMATICO DO CARROSSEL*/

// Variável para armazenar o temporizador do auto-avanço
let temporizadorAvancoAutomatico;

// Função para iniciar o temporizador do auto-avanço
// Avança para o próximo slide a cada 5 segundos
function iniciarAvancoAutomaticoCarrossel() {
  if (!temporizadorAvancoAutomatico)
  {
    temporizadorAvancoAutomatico = setInterval(proximoSlide, 5000);
  }
}

// Função para avançar para o próximo slide
function proximoSlide() {
  if (counter < slideCount - 1) {
    counter++;
  } else {
    counter = 0; // Volta para o primeiro slide
  }
  slides.style.transform = `translateX(${-counter * 100}%)`;
  // Inicia o temporizador novamente
  iniciarAvancoAutomaticoCarrossel();
}

// Função para parar o temporizador do auto-avanço
function pararAvancoAutomaticoCarrossel() {
  clearInterval(temporizadorAvancoAutomatico);
  temporizadorAvancoAutomatico = null;
}

// Função para verificar se o elemento está visível na tela
function elementoVisivelNaTela(elemento) {
  const rect = elemento.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/*AÇÕES PARA PAUSAR O EVENTO DE AVANÇO AUTOMATICO DO CARROSSEL  */
const slidesContainer = document.querySelector(".slides");
let touchStartX = 0;
let touchEndX = 0;
let touchTimer;

slidesContainer.addEventListener("touchstart", handleTouchStart);
slidesContainer.addEventListener("touchmove", handleTouchMove);
slidesContainer.addEventListener("touchend", handleTouchEnd);

// Pausar o auto-avanço quando o usuário toca no slide
function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  pararAvancoAutomaticoCarrossel();
}

// Limpar o temporizador para evitar acionamento acidental
function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
  pararAvancoAutomaticoCarrossel();
  clearTimeout(touchTimer);
}

// Reiniciar o auto-avanço após 7 segundo de inatividade
function handleTouchEnd() {
  touchTimer = setTimeout(
    iniciarAvancoAutomaticoCarrossel, 7000);
}

// Verificar a visibilidade do carrossel ao carregar a página
window.addEventListener("load", 
    iniciarAvancoAutomaticoCarrossel);

// Verificar a visibilidade do carrossel ao rolar a página
window.addEventListener("scroll", 
    iniciarAvancoAutomaticoCarrossel);

/**************************************************/
/*BANNER COOKIE*/
// JavaScript para manipular o aviso de cookies
/*

if (!verificarCookiesAceitos()) {
        document.getElementById("cookie-banner").style.display = "block";
}

function aceitarCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    // Configurar um cookie de consentimento que expira em 30 dias
    document.cookie = "cookies_aceitos=true; expires=" + new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";
}

function fecharBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

function verificarCookiesAceitos() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("cookies_aceitos=true")) {
            return true;
        }
    }
    return false;
}

/*****************************************************/
/*TEMPO DE SESSÃO*/
/* Controle de Sessão */
/*
let inativo = false;

function reiniciarTempoSessao() {
    // Reinicie a contagem regressiva para encerrar a sessão após 30 minutos de inatividade
    inativo = false;
    clearTimeout(tempoSessao);
    tempoSessao = setTimeout(finalizarSessao, 1800000); // 30 minutos
}

function finalizarSessao() {
    // Finalize a sessão quando o usuário estiver inativo por 30 minutos
    window.location.href = '/logout'; // Redirecione para a página de logout
}

// Detecta ações do usuário
document.addEventListener('mousemove', reiniciarTempoSessao); // Movimento do mouse
document.addEventListener('mousedown', reiniciarTempoSessao); // Clique do mouse
document.addEventListener('keypress', reiniciarTempoSessao); // Pressionamento de tecla

// Inicie a contagem regressiva inicial
let tempoSessao = setTimeout(finalizarSessao, 1800000); // 30 minutos
*/
