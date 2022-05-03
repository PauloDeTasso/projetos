///////////////////////////// ATRIBUIÇÃO DE METODOS DO SISTEMA NATIVO:

Storage.prototype.setObj = function (key, obj)
{
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key)
{
    return JSON.parse(this.getItem(key))
}

///////////////////////////// VARIAVEIS DOS ELEMENTOS HTML:

//BARRAS NECESSIDADES:

var barraFome = document.getElementById('barraFome');

var barraSede = document.getElementById('barraSede');

var barraBanheiro = document.getElementById('barraBanheiro');

var barraHigiene = document.getElementById('barraHigiene');

var barraEnergia = document.getElementById('barraEnergia');

var barraEstresse = document.getElementById('barraEstresse');

var barraSocial = document.getElementById('barraSocial');

var barraSaude = document.getElementById('barraSaude');

//CANVAS:

var telaCanvas = document.getElementById('telaCanvas');
var contexto = telaCanvas.getContext('2d');

//STATUS SAIDAS:

status1 = document.getElementById('status1');
status2 = document.getElementById('status2');
status3 = document.getElementById('status3');
status4 = document.getElementById('status4');
status5 = document.getElementById('status5');

///////////////////////////// VARIAVEIS LOCAIS:

// NECESSIDADES:

if (localStorage.primeiroAcesso == undefined)
{
    localStorage.fomeStatus = new Number();
    localStorage.sedeStatus = new Number();
    localStorage.banheiroStatus = new Number();
    localStorage.higieneStatus = new Number();
    localStorage.energiaStatus = new Number();
    localStorage.estresseStatus = new Number();
    localStorage.socialStatus = new Number();
    localStorage.saudeStatus = new Number();

    localStorage.primeiroAcesso = "Definido";
} else
{
    localStorage.primeiroAcesso = "Definido";
}

// SENTIMENTOS - EMOÇÃO:

var sentimentosBons = ['FELICIDADE', 'ALEGRIA', 'GRATIDÃO', 'ESPERANÇA', 'ANIMAÇÃO', 'EUFORIA', 'PAIXÃO', 'AUTOESTIMA ALTA', 'ADMIRAÇÃO', 'ADORAÇÃO', 'ALIVIO', 'EXCITAÇÃO', 'DESEJO', 'CURIOSIDADE', 'SURPRESA', 'ESPIRITUAL', 'SATIFAÇÃO', 'CALMA', 'CORAGEM', 'AMOR', 'CONFIANÇA', 'FORÇA', 'SAÚDAVEL', 'PAZ', 'CARIDADE', 'COMPREENSÃO', 'ENTUSIASMO', 'ORGULHO', 'PROSPERIDADE'];

var sentimentosRuins = ['LUTO', 'INGRATIDÃO', 'DEPRESSÃO', 'RAIVA', 'DESCONFIANÇA', 'MEDO', 'CIUMES', 'AUTOESTIMA BAIXA', 'APAVORAÇÃO', 'FRAQUEZA', 'INQUIETAÇÃO', 'FÚRIA', 'NEUROZE', 'DOR', 'LOUCURA', 'DESESPERO', 'ÓDIO', 'ARREPENDIMENTO', 'ANSIEDADE', 'CONFUSÃO', 'ESPANTO', 'INVEJA', 'HORROR', 'NOJO', 'TÉDIO', 'VIGANÇA', 'TRISTEZA', 'DECEPÇÃO', 'CARENCIA'];

localStorage.setObj('sentimentosBons', sentimentosBons);

localStorage.setObj('sentimentosRuins', sentimentosRuins);

// ITENS:

localStorage.dinheiro;
localStorage.celular;
localStorage.relogio;
localStorage.computador;

// DADOS:

localStorage.nome;
localStorage.generoSexo;
localStorage.idade;
localStorage.vivo;

// REGISTROS:

localStorage.dataAtual;
localStorage.horaAtual;
localStorage.dataCriação;
localStorage.horaCriação;
localStorage.primeiraAcao;
localStorage.ultimaAcao;
localStorage.acaoMaisUsada;
localStorage.acaoMenosUsada;
localStorage.sentimentoMaisUsado;
localStorage.sentimentoMenosUsado;
localStorage.alimentoMaisUsado;
localStorage.alimentoMenosUsado;

//

var botaoComer = document.getElementById('botaoComer');
var botaoBeber = document.getElementById('botaoBeber');
var botaoUsarBanheiro = document.getElementById('botaoUsarBanheiro');

//

var botaoPlay = document.getElementById('botaoPlay');
var botaoStop = document.getElementById('botaoStop');
var botaoIrParaDireita = document.getElementById('botaoIrParaDireita');
var botaoIrParaEsquerda = document.getElementById('botaoIrParaEsquerda');
var botaoIrParaCima = document.getElementById('botaoIrParaCima');
var botaoIrParaBaixo = document.getElementById('botaoIrParaBaixo');

/////////////////////////////VARIAVEIS DATA E HORA:

var data = new Date();
var hora = data.getHours();          // 0-23
var min = data.getMinutes();        // 0-59
var seg = data.getSeconds();        // 0-59
var dia = data.getDate();           // 1-31
var mes = getMes();          // 0-11 
var ano = data.getFullYear();       // 4 dígitos

//

//////////////////// METODOS/ FUNÇÕES:

//////// DO SISTEMA:

function getMes()
{
    switch (data.getMonth())
    {
        case 0:
            return 01;
            break;
        case 1:
            return 02;
            break;
        case 2:
            return 03;
            break;
        case 3:
            return 04;
            break;
        case 4:
            return 05;
            break;
        case 5:
            return 06;
            break;
        case 6:
            return 07;
            break;
        case 7:
            return 08;
            break;
        case 8:
            return 09;
            break;
        case 9:
            return 10;
            break;
        case 10:
            return 11;
            break;
        case 11:
            return 12;
            break;
        default:
            return "Erro!";
    }
}

//////// DE AÇÃO:

//// AÇÕES DO SISTEMA:


//// AÇÕES DO PERSONAGEM:

// COMER:

function comer(comida)
{

    if (comida == "cochinha")
    {
        localStorage.fomeStatus = localStorage.fomeStatus - 30;
        if (localStorage.fomeStatus <= 0)
        {
            localStorage.fomeStatus = 0;
            barraFome.value = localStorage.fomeStatus;
        } else
        {
            barraFome.value = localStorage.fomeStatus;
        }
    } else
    {
        localStorage.fomeStatus = localStorage.fomeStatus - 10;
        barraFome.value = localStorage.fomeStatus;
    }
}

// BEBER:

function beber(bebida)
{

    if (bebida == "agua")
    {
        localStorage.sedeStatus = localStorage.sedeStatus - 30;
        if (localStorage.sedeStatus <= 0)
        {
            localStorage.sedeStatus = 0;
        } else
        {
            barraSede.value = localStorage.sedeStatus;
        }
    } else
    {
        localStorage.sedeStatus = localStorage.sedeStatus - 10;
        barraSede.value = localStorage.sedeStatus
    }
}

// USAR BANHEIRO:

function usarBanheiro()
{
    localStorage.banheiroStatus = localStorage.banheiroStatus - 30;

    if (localStorage.banheiroStatus <= 0)
    {
        localStorage.banheiroStatus = 0;
        barraBanheiro.value = localStorage.banheiroStatus;
    } else
    {
        barraBanheiro.value = localStorage.banheiroStatus;
    }
}

//////// DE REAÇÃO/ EVENTOS:

////  REAÇÕES DAS NECESSIDADES:

// FOME:

setTimeout(fome, 1000);

function fome()
{

    localStorage.fomeStatus = parseInt(localStorage.fomeStatus) + 1;

    if (localStorage.fomeStatus >= 100)
    {
        localStorage.fomeStatus = 100;
        barraFome.value = localStorage.fomeStatus;
    } else
    {
        barraFome.value = localStorage.fomeStatus;

    }

    setTimeout(fome, 1000);
}

// SEDE:

setTimeout(sede, 1000);

function sede()
{
    localStorage.sedeStatus = parseInt(localStorage.sedeStatus) + 1;

    if (localStorage.sedeStatus >= 100)
    {
        localStorage.sedeStatus = 100;
        barraSede.value = localStorage.sedeStatus;
    } else
    {
        barraSede.value = localStorage.sedeStatus;
    }

    setTimeout(sede, 1000);
}

// USAR BANHEIRO:

setTimeout(banheiro, 1000);

function banheiro()
{
    localStorage.banheiroStatus = parseInt(localStorage.banheiroStatus) + 1;

    if (localStorage.banheiroStatus >= 100)
    {
        localStorage.banheiroStatus = 100;
        barraBanheiro.value = localStorage.banheiroStatus;
    } else
    {
        barraBanheiro.value = localStorage.banheiroStatus;
    }

    setTimeout(banheiro, 1000);
}

//// REAÇÕES DE ATIVIDADES/ LOCAIS:



//// REAÇÕES DA HISTORIA:



//////////////////// DEFINIÇÃO DE EVENTOS:

//BOTÕES:

botaoComer.addEventListener("click", function () { comer('cochinha') }, false);
botaoBeber.addEventListener("click", function () { beber('agua') }, false);
botaoUsarBanheiro.addEventListener("click", usarBanheiro, false);

//////////////////// SAIDAS:

status1.innerHTML = "Oi";

status2.innerHTML = "Oi";

status3.innerHTML = "Oi";

status4.innerHTML = localStorage.getObj('sentimentosBons')[0];

status5.innerHTML = localStorage.getObj('sentimentosRuins')[1];

//////////////////// CANVAS:

// CRIANDO UM OBJETO:

function Player()
{
    this.largura = 100; //
    this.altura = 200; // 
    this.posicaoX = 40; //
    this.posicaoY = 40; //   
    this.velocidade = 10; //
}

var player1 = new Player();

var loop;

//setTimeout(loopDesenho, 0)

loopDesenho()

function loopDesenho()
{
    // LIMPA A AREA ESPECIFICADA DO DESENHO
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.clearRect(0, 0, 500, 500);

    // var imagem = document.getElementById("imagem");

    // USANDO UMA IMAGEM COMO PREENCHIMENTO DO DESENHO:
    // var estiloImagem = contexto.createPattern(imagem, "no-repeat");
    // "repeat" (ambas direcoes)
    // "repeat-x" (somente na horizontal)
    // "repeat-y" (somente verticais)
    // "no-repeat" (nenhuma direção)

    //USANDO A IMAGEM PARA PREENCHIMENTO DO DESENHO:
    // contexto.fillStyle = estiloImagem;

    // DESENHA A IMAGEM NA POSIÇÃO DESEJADA
    // (URL IMAGEM, POSICAO X, POSICAO Y, LARGURA, ALTURA))
    //contexto.drawImage(imagem, 0, 0, 500, 500);

    ////DESENHANDO RETANGULOS:

    ////DESENHANDO UM RETANGULO - RETANGULO 1

    contexto.fillStyle = "rgb(000,00,100)"; // COR DO PREENCHIMENTO 

    // DESENHA RETANGULO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.fillRect(0, 0, 100, 200);

    //FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 1: 
    //contexto.fill();

    // LIMPA A AREA DE DESENHO - (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.clearRect(10, 10, 20, 20);

    //// RETANGULO 2 - PLAYER 1:

    contexto.fillStyle = "rgba(100,00,000,0.5)"; // USANDO TRANSPARENCIA RGBA

    contexto.fillRect(player1.posicaoX, player1.posicaoY, player1.largura, player1.altura); // DESENHA PLAYER 1       

    // FINALIZAR PREENCHENDO O DESENHO COM O ESTILO PASSADO ANTERIORMENTE DO RETANGULO 2: 
    //contexto.fill();

    //// DESENHANDO LINHAS:

    // COMEÇA O DESENHO DE LINHA NESSA POSSIÇÃO - (POSICAO X, POSICAO Y)
    contexto.moveTo(300, 300);

    // FINALIZAR O DESENHO DE LINHA NESSA POSIÇÃO - (POSICAO X, POSICAO Y)
    contexto.lineTo(400, 400);

    // DESENHA UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO DESENHADA E FINALIZA A LINHA NAS NOVAS POSIÇÕES PASSADAS 
    contexto.lineTo(400, 450);

    // DESENHA MAIS UMA NOVA LINHA A PARTIR DA ULTIMA POSIÇÃO
    contexto.lineTo(450, 450);

    // AGORA MOVE A POSIÇÃO DE INICIO DE DESENHO DE LINHA PARA OUTRA POSIÇÃO, SEM SER A ULTIMA POSIÇÃO:
    contexto.moveTo(400, 470);

    // E AGORA FINALIZAR O DESENHO DE LINHA NESSA POSIÇÃO:
    contexto.lineTo(450, 470);

    // DEFINE A LARGURA DE LINHA:
    contexto.lineWidth = 3;

    // DEFINE O ESTILO/COR DA LINHA:
    contexto.strokeStyle = "rgb(100,0,0)";

    // DESENHA UMA LINHA COMO UM RETANGULO
    // (USADO COMO CONTORNO DE PREENCHIMENTOS)
    // (POSICAO X, POSICAO Y, LARGURA, ALTURA)
    contexto.strokeRect(150, 150, 100, 100);

    // REDENRIZA O DESENHO DE LINHA:
    contexto.stroke();

    // DESENHA UM CIRCULO:
    // (POSICAO X, POSICAO Y, RAIO, ANGULO INICIAL, ANGULO FINAL, SENTIDO)
    // SENTIDO = TRUE (SENTIDO HORÁRIO / = FALSE (SENTIDO ANTI HORARIO)
    contexto.arc(10, 200, 100, 0, 360, true);
    contexto.fill();

    loop = requestAnimationFrame(loopDesenho);
}

//CONFIGURAÇÕES EVENTOS BOTÕES:

botaoPlay.addEventListener('click', play, false);
botaoStop.addEventListener('click', stop, false);
botaoIrParaEsquerda.addEventListener('click', irParaEsquerda, false);
botaoIrParaDireita.addEventListener('click', irParaDireita, false);
botaoIrParaCima.addEventListener('click', irParaCima, false);
botaoIrParaBaixo.addEventListener('click', irParaBaixo, false);

// FUNÇÕES:

function play()
{

}

function stop()
{

}

function irParaEsquerda()
{
    player1.posicaoX = player1.posicaoX - player1.velocidade;
    loopDesenho();
}

function irParaDireita()
{
    player1.posicaoX = player1.posicaoX + player1.velocidade;
    loopDesenho();
}

function irParaCima()
{
    player1.posicaoY = player1.posicaoY - player1.velocidade;
    loopDesenho();
}

function irParaBaixo()
{
    player1.posicaoY = player1.posicaoY + player1.velocidade;
    loopDesenho();
}

//

//////////////////// RASCUNHOS:

/*

// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Hoje é ' + str_data + ' às ' + str_hora);

//////////////////////



var corpo = document.getElementById('corpo');

var numero = 0;

function encherBarra()
{
    if (numero == 0)
    {
        numero = 1;
        var barra = document.getElementById('barra');
        var tamanhoBarra = 1;
        var completarBarra = setInterval(preencherBarra, 10);

        function preencherBarra()
        {
            if (tamanhoBarra >= 100)
            {
                clearInterval(completarBarra);
                numero = 0;
            } else
            {
                tamanhoBarra++;
                barra.style.width = tamanhoBarra + "%";
            }
        }
    }
}

function encherBarra2()
{
    var barra2 = document.getElementById('fome');

    if (numero == 0)
    {
        numero = 1;
        var tamanhoBarra = 1;
        var completarBarra2 = setInterval(preencherBarra2, 10);

        function preencherBarra2()
        {
            if (tamanhoBarra >= 100)
            {
                clearInterval(completarBarra2);
                numero = 0;
            } else
            {
                tamanhoBarra++;
                barra2.value = tamanhoBarra;
            }
        }
    }
}

/*

function Pessoa() //UM CONSTRUTOR DO OBJETO PESSOA
{
    this.nome = "";
    this.peso = 0;
    this.vivo = false;
    this.familia = [];
    this.olhos = {};
    this.bateria = function (carga, consumindo)
    {
        this.bateria.carga = carga;
        this.bateria.consumindo = consumindo;
    };
}

function Bola() //UM CONSTRUTOR DO OBJETO BOLA
{
    this.nome = "";
    this.tamanho = 0;
    this.peso = 0;
    this.emMovimento = false;
    this.tipodeEsporte = [];
    this.cor = {};
    this.movimento = function (norte, sul, leste, oeste)
    {
        this.movimento.norte = norte;
        this.movimento.sul = sul;
        this.movimento.leste = leste;
        this.movimento.oeste = oeste;
        direcaoBola();
    };
}

function direcaoBola()
{
    if (this.movimento.norte == true
        && this.movimento.sul == false
        && this.movimento.leste == false
        && this.movimento.oeste == false)
    {
        Bola.posicaoY--;

    } else if (this.movimento.norte == false
        && this.movimento.sul == true
        && this.movimento.leste == false
        && this.movimento.oeste == false)
    {
        Bola.posicaoY++;
    }
}
*/

/*
Pessoa.olhos.corDosOlhos = "";
Pessoa.olhos.tamanhoDosOlhos = 0;
Pessoa.olhos.olhosAbertos = false;
Pessoa.olhos.olhar = function ()
{
    this.olhos.olhosAbertos = true;
    this.bateria.consumindoBateria();
}

Pessoa.bateria.carga = 0;
Pessoa.bateria.consumindo = "";
Pessoa.bateria.consumindoBateria = function ()
{
    this.bateria.carga -= 1;
    this.bateria.consumindo = true;
};

Pessoa.bateria.carregandoBateria = function ()
{
    this.bateria.carga = carga + 0.1;
    this.bateria.consumindo = false;
};

*/

/*

pessoa =
{
    nome: "",
    peso: 0,
    vivo: true,
    familia: [],
    olhos:
    {
        corDosOlhos: "",
        tamanhoDosOlhos: 0,
        olhosAbertos: false,

        olhar: function ()
        {
            pessoa.olhos.olhosAbertos = true;
            pessoa.bateria.consumindoBateria();
        }
    },

    bateria:
    {
        carga: 0,
        consumindo: "",
        consumindoBateria: function ()
        {
            pessoa.bateria.carga -= 1;
            pessoa.bateria.consumindo = true;
        },

        carregandoBateria: function ()
        {
            pessoa.bateria.carga = carga + 0.1;
            pessoa.bateria.consumindo = false;
        }
    }
};
*/

/*
var Pessoa = function (nome, peso, vivo, familia)
{
    this.nome = nome; //String
    this.peso = peso; //Numero
    this.vivo = vivo;   //Bolleano
    this.familia = familia; //Array
    this.olhos =
    {
        corDosOlhos: "", //String
        tamanhoDosOlhos: 0, //Numero
        olhosAbertos: false, //Boleano

        olhar: function () //Função
        {
            this.olhos.olhosAbertos = true; //Boleano
            this.bateria.consumindoBateria(); //Funcão
        }
    };

    this.bateria =
    {
        carga: 0, //Numero
        consumindo: "", //Boleano
        consumindoBateria: function () //Função
        {
            this.bateria.carga -= 1;
            this.bateria.consumindo = true; //Boleano
        },

        carregandoBateria: function ()
        {
            this.bateria.carga = carga + 0.1;
            this.bateria.consumindo = false; //Boleano
        }
    }
}

*/

//var carro = new Object();

//tasso = new Pessoa("Tasso", 80, true, [21]);

//var tasso = Object.create(Pessoa);

//var aline = new Object(Pessoa);
/*
var aline = Object.create(pessoa);
*/

//var sophia = Object.create(Pessoa);

/*

/*
function pessoa()
{
    Pessoa.call(this);
    this.apelido = "Aline Vaqueira";
}
*/

/*
var carro = function ()
{
    this.a = 1;
    this.b = 2;
}

Object.defineProperty(aline, 'bateria',
{
    carga: 84,
    consumindo: false
}
);
*/
/*
titulo1.innerHTML = tasso.nome;

titulo2.innerHTML = tasso.bateria.carga;

titulo3.innerHTML = aline.nome;

titulo4.innerHTML = aline.bateria.carga;

//titulo5.innerHTML = Pessoa;
titulo5.innerHTML = tasso.bateria.consumindo;

document.writeln(aline.bateria.consumindo);

function irmaos(objeto1, objeto2, objetoPai)
{
    var objetoFamilia1 = objeto1 instanceof objetoPai;
    var objetoFamilia2 = objeto2 instanceof objetoPai;

    if (objetoFamilia1 == true && objetoFamilia2 == true)
    {
        var resultado = true;
    } else
    {
        var resultado = false;
    }

    return resultado;
}

/*

titulo1.innerHTML = Object.getPrototypeOf(tasso) === Pessoa; // COMPARA SE O OBJETO É IGUAL AO OUTRO

titulo2.innerHTML = Object.entries(tasso); //EXIBE TODOS OS NOMES DAS PROPRIEDADES E SEUS VALORES SEPARADOS POR VIRGULA

titulo3.innerHTML = Object.getOwnPropertyNames(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo4.innerHTML = Object.keys(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo5.innerHTML = irmaos(tasso, aline, Pessoa);

for (let propriedades in tasso) // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso
{
    document.writeln(propriedades);
}

document.writeln("<br>");

document.writeln(Object.values(tasso)); // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS

document.writeln("<br>");
document.writeln("<br>");
/*
for (propriedades in tasso) // EXIBE OS VALORES DAS PROPRIEDADES, SEPARADOS POR ESPAÇO
{
    if (tasso.hasOwnProperty(propriedades)) // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS
    {
        var valores = tasso[propriedades];
        document.writeln(valores);
    }
}
*/
/*
document.writeln("<br>");

document.writeln(Object.values(tasso));

document.writeln("<br>");
document.writeln("<br>");

for (let propriedades2 in aline)
{
    document.writeln(propriedades2);
}

document.writeln("<br>");

document.writeln(Object.values(aline));

document.writeln("<br>");
document.writeln("<br>");


//titulo3.innerHTML = Object.getOwnPropertyNames(tasso.prototype);

/*

for(let propriedades3 in sophia)
    {
    document.writeln(propriedades3);
    }

document.writeln("<br>");

document.writeln(Object.values(sophia));

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
}

var oponente1 = new Oponente();

var oponente2 = new Oponente();

oponente2.posicaoX = 0;
oponente2.posicaoY = 0;
oponente2.altura = 50;
oponente2.largura = 50;
oponente2.velocidade = 20;

const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e)
{
    //log.innerHTML += e.code;
    //ou
    log.innerHTML += e.keyCode;
}

function Controle(key1, key2, key3, key4)
{
    this.teclaUp = false; // controle1.teclaUp
    this.teclaDown = false;  // controle1.teclaDown

    this.teclaLeft = false; // controle1.teclaParaEsquerdaPressionada
    this.teclaRight = false;  // controle1.teclaParaDireitaPressionada

    this.keyUp = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaUp = false;

        } else if (e.keyCode == key2)
        {
            controle1.teclaDown = false;

        } else if (e.keyCode == key3)
        {
            controle1.teclaLeft = false;

        } else if (e.keyCode == key4)
        {
            controle1.teclaRight = false;
        }
    }

    this.keyDown = function (e)
    {
        if (e.keyCode == key1)
        {
            controle1.teclaUp = true;

        } else if (e.keyCode == key2)
        {
            controle1.teclaDown = true;

        } else if (e.keyCode == key3)
        {
            controle1.teclaLeft = true;

        } else if (e.keyCode == key4)
        {
            controle1.teclaRight = true;
        }
    }

}

//////////////////////////

titulo1.innerHTML = "ola";

titulo2.innerHTML = "oi";

titulo3.innerHTML = "oi";

titulo4.innerHTML = "Oi";

titulo5.innerHTML = "Oie";

// JOGO PING PONG

function iniciarJogo()
{
    pingPongStatusLigado = true;

    document.addEventListener('keyup', controle1.keyUp, false);
    document.addEventListener('keydown', controle1.keyDown, false);

    setInterval(loopGame, 30);
}

function loopGame()
{

    if (pingPongStatusLigado)
    {
        //  MOVIMENTAR JOGADOR  -
        //VERTICAL:********************************************************************

        if (controle1.teclaUp != controle1.teclaDown)
        { // se o usuário precionar para cima
            if (controle1.teclaUp)
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

        //VERTICAL:

        if (controle1.teclaLeft != controle1.teclaRight)
        { // se o usuário precionar para a esquerda
            if (controle1.teclaLeft)
            { // se para esquerda for pressionado
                if (carro.posicaoX > 0)
                { // se a bola não sair da tela
                    // muda posição do jogador
                    carro.posicaoX -= carro.velocidade;

                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
            else
            { // se for para direita
                if (carro.posicaoX < (canvas1.canvas.width - carro.largura))
                { // se a bola não saiu da tela
                    // muda posição
                    carro.posicaoX += carro.velocidade;

                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
        }

        //HORIZONTAL:

        if (controle1.teclaUp != controle1.teclaDown)
        { // se o usuário precionar para cima
            if (controle1.teclaUp)
            { // se para cima for pressionado
                if (carro.posicaoY > 0)
                { // se a bola não sair da tela
                    // muda posição do jogador
                    carro.posicaoY -= carro.velocidade;
                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
                }
            }
            else
            { // se for para baixo
                if (carro.posicaoY < (canvas1.canvas.height - carro.altura))
                { // se a bola não saiu da tela
                    // muda posição
                    carro.posicaoY += carro.velocidade;
                    x.innerHTML = "X = " + carro.posicaoX;
                    y.innerHTML = "Y = " + carro.posicaoY;
                    larguraX.innerHTML = "Lagura Total X = " + canvas1.canvas.width;
                    alturaY.innerHTML = "Lagura Total Y = " + canvas1.canvas.height;
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

        //2

        if (oponente2.movimentoParaDireita)
        { // caso o oponente estivcer inddo para direita
            oponente2.posicaoX += oponente2.velocidade;
            if (oponente2.posicaoX >= canvas1.canvas.width - oponente2.largura) // se a bola estiver saindo da tela
            {
                oponente2.movimentoParaDireita = false;
            }
        }
        else
        { // se o oponente estiver se movendo para esquerda
            oponente2.posicaoX -= oponente2.velocidade;
            if (oponente2.posicaoX <= 0)
            { // caso a bola estiver saindo da tela
                oponente2.movimentoParaDireita = true;
            }
        }

        // BOLA **************************************************************************

        if (bola1.tempo <= 0) // caso a bola estiver em jogo, o tempo  e zerado apos marcar ponto, abola ficará invisivel por um tempo
        {
            if ((bola1.posicaoX - bola1.raio) <= (usuario1.posicaoX + usuario1.largura))
            { // caso o jogador encoste na bola no eixo X
                if ((bola1.posicaoY + bola1.raio > usuario1.posicaoY) && (bola1.posicaoY - bola1.raio < usuario1.posicaoY + usuario1.altura))
                { // caso o jogador encoste na bola no eixo Y
                    bola1.movimentoParaDireita = true;

                    if (controle1.teclaDown)
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

                        bola1.movimentoParaDireita = false;
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
        canvas1.contexto.fillRect(usuario1.posicaoX, usuario1.posicaoY, usuario1.largura, usuario1.altura); /// desenha jogador
        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, usuario1.largura, usuario1.altura); /// desenha ioponente

        /////////// TESTES:

        canvas1.contexto.fillRect(carro.posicaoX, carro.posicaoY, carro.largura, carro.altura); /// desenha jogador
        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, carro.largura, carro.altura); /// desenha ioponente

        canvas1.contexto.fillRect(oponente2.posicaoX, oponente2.posicaoY, oponente2.largura, oponente2.altura); /// desenha ioponente

        //////////////////////////////////

        // BOLA ***********************************************************************************

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
        canvas1.contexto.fillStyle = "#c4c4c4";
        canvas1.contexto.fillText(pontosA + "  " + pontosB, (canvas1.canvas.width / 2) - 70, 50); // escrevendo texto no centro da tela no top

        //  LINHA DIVISÓRIA
        canvas1.contexto.beginPath();
        canvas1.contexto.moveTo(canvas1.canvas.width / 2, 0); // arrumar lapis para fazer a escrita da linha
        canvas1.contexto.lineTo(canvas1.canvas.width / 2, canvas1.canvas.height);// faz risco na tela no centro
        canvas1.contexto.strokeStyle = "#c4c4c4";
        canvas1.contexto.stroke();
        canvas1.contexto.closePath();

    } else
    {
        statusPingPong2.innerHTML = "PINGP PONG - OFFLINE!";
        setTimeout("limparStatusPingPong2()", 3000);
    }

}

/**/

// ////////////////////////////////////

/*
function irParaCima()
{
    if (usuario1.posicaoY > 0)
    { // se a bola nçao sair da tela
        usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
        carro.posicaoY -= carro.velocidade;
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (usuario1.posicaoY < (canvas1.canvas.height - usuario1.altura))
    { // se a bola não saiu da tela
        usuario1.posicaoY += usuario1.velocidade; // muda posição
        carro.posicaoY += carro.velocidade;
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
*/