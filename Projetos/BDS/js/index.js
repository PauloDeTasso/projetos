/*********************************************/
/*MENU LATERAL/ */
const menuLateral = document.getElementById("menuLateral");
const secaoHamburguerMenu = document.querySelector(".secaoHamburguerMenu");
const hamburguerMenu = document.querySelector(".hamburguerMenu");
secaoHamburguerMenu;
const overlay = document.getElementById("overlay");

// Função para abrir ou fechar o menu e o overlay
function toggleMenu() {
  menuLateral.classList.toggle("open");
  overlay.classList.toggle("open");
}

// Abre ou fecha o menu ao clicar no ícone de hambúrguer
secaoHamburguerMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede a propagação do evento para o documento
  toggleMenu();
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener("click", () => {
  toggleMenu();
});

menuLateral.addEventListener("click", () => {
  toggleMenu();
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  const isClickedInsideMenu = menuLateral.contains(event.target);
  if (!isClickedInsideMenu && menuLateral.classList.contains("open")) {
    toggleMenu();
  }
});

// Impede a propagação do evento de clique dentro do menu
menuLateral.addEventListener("click", (event) => {
  event.stopPropagation();
});

//Ouvinte de eventos ao campo de pesquisa dentro do menu lateral
const searchInput = document.querySelector('.menuLateral input[type="search"]');
searchInput.addEventListener("click", (event) => {
  // Evite a propagação do evento de clique para o menu lateral
  event.stopPropagation();
});

/****************************************** */
/*BOTAO PESQUISAR - AÇÃO DE CLIQUE */

// Selecione o botão de pesquisa
const btnPesquisar = document.getElementById("btnPesquisar");

// Adicione um evento de clique ao botão
btnPesquisar.addEventListener("click", () => {
  alert(searchInput.value);
  searchInput.value = "";

  /*
  // Pegue o valor digitado no campo de pesquisa
  const termoPesquisa = searchInput.value;

  // Realize a requisição ao servidor usando AJAX ou fetch
  // Aqui está um exemplo usando fetch e assumindo que você tenha uma página PHP para lidar com a pesquisa
  fetch(`caminho/do/seu/arquivo/php/pesquisa.php?termo=${termoPesquisa}`)
    .then((response) => response.json())
    .then((data) => {
      // Faça algo com os dados recebidos do servidor, como exibí-los na página
      console.log(data);
    })
    .catch((error) => {
      // Trate erros caso a requisição falhe
      console.error("Erro ao realizar a pesquisa:", error);
    });
  */
});

/**********************************************/
/*SUBITENS - MENU LATERAL*/

const subitems = document.querySelectorAll(".menuLateral .subitems");
subitems.forEach((subitem) => {
  subitem.style.display = "block";
});

/**********************************************/
/*HAMBUGUER*/
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    document.querySelector(".hamburguerMenu").style.opacity = "0.3";
    document.querySelector(".secaoHamburguerMenu").style.opacity = "0.3";
  } else {
    document.querySelector(".hamburguerMenu").style.opacity = "1";
    document.querySelector(".secaoHamburguerMenu").style.opacity = "1";
  }
});

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

/*
const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let counter = 0;

carousel.addEventListener("click", (event) => {
  if (event.target === carousel) return;
  if (event.target === carousel.querySelector(".prev")) {
    if (counter > 0) {
      counter--;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      // Efeito especial para transição do último para o primeiro slide
      slides.style.transition = "transform 0.5s ease";
      slides.style.transform = `translateX(${-slideCount * 100}%)`;
      setTimeout(() => {
        slides.style.transition = "";
        counter = slideCount - 1;
        slides.style.transform = `translateX(${-counter * 100}%)`;
      }, 500); // Tempo de espera igual à duração da transição
    }
  } else if (event.target === carousel.querySelector(".next")) {
    if (counter < slideCount - 1) {
      counter++;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      // Efeito especial para transição do primeiro para o último slide
      slides.style.transition = "transform 0.5s ease";
      slides.style.transform = `translateX(0%)`;
      setTimeout(() => {
        slides.style.transition = "";
        counter = 0;
        slides.style.transform = `translateX(${-counter * 100}%)`;
      }, 500); // Tempo de espera igual à duração da transição
    }
  }
});
*/
/**********************************/
/*CARROSSEL PRINCIPAL TOUCH*/

/*
let startX;
let isDragging = false;

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.pageX - carousel.offsetLeft;
});

carousel.addEventListener("mouseup", () => {
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
  isDragging = false;
});

carousel.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const x = event.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Adjust sensitivity here
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});

carousel.addEventListener("touchstart", (event) => {
  isDragging = true;
  startX = event.touches[0].pageX - carousel.offsetLeft;
});

carousel.addEventListener("touchend", () => {
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
  isDragging = false;
});

carousel.addEventListener("touchmove", (event) => {
  if (!isDragging) return;
  const x = event.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Adjust sensitivity here
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});
*/
/**********************************/
/* ITENS MENU - AÇÃO DE CLICK*/
function enviarRequisicao(recurso) {
  alert(recurso);
  /*
  // Aqui você envia a requisição REST ao servidor com base no recurso fornecido
  // Exemplo de requisição usando fetch:
  fetch("https://seuservidor.com/api/" + recurso)
    .then((response) => {
      // Lidar com a resposta do servidor
    })
    .catch((error) => {
      console.error("Erro ao enviar requisição:", error);
    });
    */
}

/**********************************/
/*BOTÃO WHATSAPP*/

var whatsappButton = document.getElementById("whatsapp-button");
var whatsappTooltip = document.getElementById("whatsapp-tooltip");
var isVisible = false; // Variável para controlar se o botão está visível

// Mostra o balão com o texto ao carregar a página
whatsappTooltip.classList.add("active");

// Esconde o balão com o texto após 5 segundos
setTimeout(function () {
  whatsappTooltip.classList.remove("active");
  isVisible = true; // Define que o botão está visível após 5 segundos
  makeLogoPartiallyVisible(); // Chama a função para tornar a logo parcialmente visível
}, 5000);

function makeLogoPartiallyVisible() {
  if (isVisible) {
    // Verifica se o botão está visível antes de ajustar a opacidade
    whatsappButton.classList.add("partially-visible"); // Adiciona a classe para tornar a logo parcialmente visível
    setTimeout(function () {
      whatsappButton.classList.remove("partially-visible"); // Remove a classe após 5 segundos
    }, 5000);
  } else {
    // Se o botão não estiver visível, remove a classe que define opacidade parcial
    whatsappButton.classList.remove("partially-visible");
  }
}

whatsappButton.addEventListener("mouseover", function () {
  whatsappButton.classList.remove("partially-visible"); // Remove a classe de opacidade parcial ao passar o mouse por cima
});

whatsappButton.addEventListener("click", function () {
  makeLogoPartiallyVisible(); // Torna a logo parcialmente visível quando é clicada
  window.open("URL_DO_WHATSAPP", "_blank"); // Substitua "URL_DO_WHATSAPP" pela URL desejada
});

whatsappButton.addEventListener("mouseleave", function () {
  whatsappTooltip.style.display = "none"; // Esconde o tooltip quando o mouse sai da logo
  setTimeout(makeLogoPartiallyVisible, 5000); // Chama a função para restaurar a opacidade após o mouse sair com um atraso de 5 segundos
});
