
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

  // Verifica se o menu está aberto ou fechado e adiciona a classe de animação correspondente
  if (menuLateral.classList.contains("open")) {
    menuLateral.style.animationName = "slideInFromLeft"; // Adiciona a animação de entrada
  } else {
    menuLateral.style.animationName = "slideOutToLeft"; // Adiciona a animação de saída
  }
}


/*
// Função para abrir ou fechar o menu e o overlay
function toggleMenu() {
  menuLateral.classList.toggle("open");
  overlay.classList.toggle("open");
}
*/

// Abre ou fecha o menu ao clicar no ícone de hambúrguer

secaoHamburguerMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede a propagação do evento para o documento
  toggleMenu();
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener("click", () => {
  toggleMenu();
});

/*
menuLateral.addEventListener("click", () => {
  toggleMenu();
});
*/
// Fecha o menu ao clicar fora dele
/*
document.addEventListener("click", (event) => {
  const isClickedInsideMenu = menuLateral.contains(event.target);
  if (!isClickedInsideMenu && menuLateral.classList.contains("open")) {
    toggleMenu();
  }
});
*/
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
/*CAMPO PESQUISAR - MENU*/

document.getElementById("btnPesquisar").addEventListener("click", function() {
    // Obter o texto digitado no campo de pesquisa
    var textoPesquisa = document.getElementById("campoPesquisa").value;

    // Redirecionar para a página de pesquisa com o texto como parâmetro GET
    window.location.href = "/produtos/pesquisamenu?textoPesquisa=" + encodeURIComponent(textoPesquisa);
});

/*CAMPO PESQUISAR POR TEXTO*/
document.getElementById("btnIrPesquisaPorTexto").addEventListener("click", function() {
    // Obter o texto digitado no campo de pesquisa
    var textoPesquisa = document.getElementById("entradaPesquisaPorTexto").value;

    // Redirecionar para a página de pesquisa com o texto como parâmetro GET
    window.location.href = "/produtos/pesquisa?textoPesquisa=" + encodeURIComponent(textoPesquisa);
});

/**********************************************/
/*SUBITENS - MENU LATERAL*/

const subitems = document.querySelectorAll(".menuLateral .subitems");
subitems.forEach((subitem) => {
  subitem.style.display = "block";
});

/**********************************************/
/*HAMBUGUER*/
/*
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
*/

/**********************************/
/* ITENS MENU - AÇÃO DE CLICK*/
function enviarRequisicao(url) {
  window.open(url, "_self");

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

/***********************************************/
/*TOAST*/
function exibirToast(titulo, mensagem, recomendacao) {
    var toast = document.getElementById("toast");
    var toastTitulo = document.getElementById("toast-titulo");
    var toastMensagem = document.getElementById("toast-mensagem");
    var toastRecomendacao = document.getElementById("toast-recomendacao");
    
    toastTitulo.innerHTML = titulo;
    toastMensagem.innerHTML = mensagem;
    toastRecomendacao.innerHTML = recomendacao;
    
    toast.classList.add("show");

    setTimeout(function(){
        toast.classList.remove("show");
    }, 7000); 
}

/*******************************************************************/
/*ABERTURA DA PESQUISA POR PESQUISA MENU*/
// Obtém o caminho da URI
    /*
    var uri = window.location.pathname;
    
    // Verifica se a URI corresponde ao padrão desejado
    if (uri.startsWith('/produtos/pesquisamenu/')) {
        // Obtém a seção de pesquisa
        var secaoPesquisa = document.getElementById('secaoPesquisaAvancada');
        
        // Adiciona a classe 'aberta' para mostrar a seção com a animação
        secaoPesquisa.classList.add('aberta');
}
    */

/***********************************************/
/*PESQUISA AVANÇADA*/

/*
// Obtém o botão e a caixa de pesquisa avançada
const btnAbrirPesquisaAvancada = document.getElementById('btnAbrirPesquisaAvancada');
const pesquisaAvancada = document.getElementById('pesquisaAvancada');

// Adiciona um ouvinte de evento para o botão
btnAbrirPesquisaAvancada.addEventListener('click', function ()
{
    // Usa o método toggle para adicionar ou remover a classe 'aberta'
  pesquisaAvancada.classList.toggle('aberta');
  
});
*/


/*CAMPO CORES*/
// Obtém os elementos relevantes
/*
const placeholder = document.querySelector('.custom-select .placeholder');
const options = document.querySelectorAll('.custom-select .options .option');


// Adiciona eventos de clique para exibir/ocultar a lista suspensa
document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.custom-select .options').forEach(opt => opt.style.display = 'none');
    }
});

// Adiciona eventos de clique para selecionar uma opção
options.forEach(option => {
    option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        placeholder.textContent = this.textContent;
        placeholder.style.backgroundColor = value;
        options.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        const select = document.getElementById('cor');
        select.value = value;
        select.dispatchEvent(new Event('change')); // Dispara o evento 'change' no elemento select
    });
});

// Fecha a lista suspensa se clicar fora dela
document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.custom-select .options').forEach(opt => opt.style.display = 'none');
    }
});
*/
/************************************************************/
/*NOME DINAMICO PARA SELEÇÃO NA PESQUISA INICIAL*/
   

/***********************************************************/        
/*
// Código JavaScript para controlar a exibição da pesquisa avançada
document.getElementById("btnAbrirPesquisaAvancada").addEventListener("click", function() {
    var pesquisaAvancada = document.getElementById("pesquisaAvancada");
    if (pesquisaAvancada.style.display === "none") {
        pesquisaAvancada.style.display = "flex";
    } else {
        pesquisaAvancada.style.display = "none";
    }
});

*/
