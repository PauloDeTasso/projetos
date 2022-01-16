var titulo = document.getElementById('titulo');

var titulo1 = document.getElementById('titulo1');

var titulo2 = document.getElementById('titulo2');

var titulo3 = document.getElementById('titulo3');

var titulo4 = document.getElementById('titulo4');

var titulo5 = document.getElementById('titulo5');


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

/*

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

var carro = new Object();

var tasso = new Pessoa();

var aline = new Pessoa();

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

var carro1 = new carro();
*/

tasso.nome = "Tasso";
tasso.peso = 80;
tasso.vivo = true;
//tasso.familia[0] = 21;
//tasso.olhos.corDosOlhos = "Escuros";
//tasso.olhos.tamanhoDosOlhos = 10;
//tasso.olhos.olhosAbertos = true;
//tasso.bateria(100, false);
tasso.bateria.carga = 90;
tasso.bateria.consumindo = true;


aline.nome = "Aline";
aline.peso = 70;
aline.vivo = true;
//aline.familia[0] = 17;
//aline.olhos.corDosOlhos = "Azuis";
//aline.olhos.tamanhoDosOlhos = 12;
//aline.olhos.olhosAbertos = false;
aline.bateria.carga = 84;
aline.bateria.consumindo = false;
//aline.bateria(50, true);

/*
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
*/

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


titulo1.innerHTML = irmaos(tasso, aline, Pessoa); // COMPARA SE O OBJETO É IGUAL AO OUTRO

titulo2.innerHTML = Object.entries(tasso); //EXIBE TODOS OS NOMES DAS PROPRIEDADES E SEUS VALORES SEPARADOS POR VIRGULA

titulo3.innerHTML = Object.getOwnPropertyNames(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo4.innerHTML = Object.keys(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo5.innerHTML = irmaos(tasso, aline, Pessoa);

/*
titulo1.innerHTML = Object.getPrototypeOf(tasso) === Pessoa; // COMPARA SE O OBJETO É IGUAL AO OUTRO

titulo2.innerHTML = Object.entries(tasso); //EXIBE TODOS OS NOMES DAS PROPRIEDADES E SEUS VALORES SEPARADOS POR VIRGULA

titulo3.innerHTML = Object.getOwnPropertyNames(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo4.innerHTML = Object.keys(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo5.innerHTML = irmaos(tasso, aline, Pessoa);

/**/


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
*/

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

/*
  
 */


// JOGO PING PONG

var Bola = function ()
{
    this.nome = ""; //NOME
    this.raio = 17; //  bolaRaio
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.movimentoParaDireita = true; // bolaParaDireita
    this.angulo; // bolaAngulo
    this.tempo; // bolaTempo
    this.velocidade = 0; // velocidadeBola
    this.velocidadeEmMemoria; // velocidadeMemorizada
}

var Jogador = function ()
{
    this.altura = 90; // barraHeigth
    this.largura = 30; // barraWidth
    this.posicaoX = 0; // jogadorPosX / oponentePosX
    this.posicaoY = 0; // jogadorPosY / oponentePosY
    this.velocidade = 17; // velocidadeJogador / velocidadeOponente
    this.pontos = 0; //pontosJogador / pontosOponente
    this.movimentoParaCima = false; // jogadorParaCima/ oponenteParaCima
}

var controle = function ()
{
    this.teclaSetaParaCimaPressionada = false; // teclaCimaPressionada
    this.teclaSetaParaBaixoPressionada = false;  // teclaBaixoPressionada
}

var canvas = function (IdCanvas, dimensao)
{
    this.canvas = document.getElementById(IdCanvas);
    this.contexto = canvas.getContext(dimensao);
}


var bola1 = new Bola();

var Usuario1 = new Jogador();

var controle1 = new controle();

var canvas1 = new CanvasGradient("canvas", "2d");

var canvas, context,
    barraWidth, barraHeigth,
    jogadorPosX, jogadorPosY,
    teclaCimaPressionada, teclaBaixoPressionada,
    oponentePosX, oponentePosY,
    oponenteParaCima,
    bolaRaio,
    bolaPosX, bolaPosY,
    bolaParaDireita,
    bolaAngulo,
    bolaTempo,
    velocidadeJogador, velocidadeOponente,
    velocidadeBola, velocidadeMemorizada,
    pontosJogador, pontosOponente;

function iniciarJogo()
{
    pingPongStatusLigado = true;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    barraWidth = 30;
    barraHeigth = 90;
    jogadorPosX = 0;
    jogadorPosY = (canvas.height - barraHeigth) / 2;
    teclaBaixoPressionada = false;
    teclaCimaPressionada = false;

    oponentePosX = canvas.width - barraWidth;
    oponentePosY = 0;
    oponenteParaCima = false;

    bolaRaio = 17;
    bolaPosX = canvas.width / 2;
    bolaPosY = canvas.height / 2;

    bolaParaDireita = false;
    bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bolaTempo = 0;
    velocidadeJogador = 15;
    velocidadeOponente = 30;
    velocidadeBola = 0;
    velocidadeMemorizada = 0;
    pontosJogador = 0;
    pontosOponente = 0;

    document.addEventListener('keyup', keyUp, false);
    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyleft', keyLeft, false);
    document.addEventListener('keyright', keyRight, false);

    setInterval(loopGame, 30);
}

function keyUp(e)
{
    if (e.keyCode == 38)
    {
        teclaCimaPressionada = false;
    } else if (e.keyCode == 40)
    {
        teclaBaixoPressionada = false;
    }
}

function keyDown(e)
{
    if (e.keyCode == 38)
    {
        teclaCimaPressionada = true;
    } else if (e.keyCode == 40)
    {
        teclaBaixoPressionada = true;
    }
}

function keyLeft(e)
{
    if (e.keyCode == 37)
    {
        teclaCimaPressionada = false;
    } else if (e.keyCode == 39)
    {
        teclaBaixoPressionada = false;
    }
}

function keyRight(e)
{
    if (e.keyCode == 37)
    {
        teclaCimaPressionada = true;
    } else if (e.keyCode == 39)
    {
        teclaBaixoPressionada = true;
    }
}

function loopGame()
{

    if (!pingPongStatusLigado)
    {

    } else
    {

        //  JOGADOR ********************************************************************

        if (teclaCimaPressionada != teclaBaixoPressionada)
        { // se o usuário precionar para cima
            if (teclaCimaPressionada)
            { // se para cima for pressionado
                if (jogadorPosY > 0)
                { // se a bola nçao sair da tela
                    jogadorPosY -= velocidadeJogador; // muda posição do jogador
                }
            }
            else
            { // se for para baixo 
                if (jogadorPosY < (canvas.height - barraHeigth))
                { // se a bola não saiu da tela
                    jogadorPosY += velocidadeJogador; // muda posição
                }
            }
        }

        // OPONENTE ********************************************************************************

        if (oponenteParaCima)
        { // caso o oponente estivcer inddo para cima
            oponentePosY -= velocidadeOponente;
            if (oponentePosY <= 0) // se a bola estiver saindo da tela
            {
                oponenteParaCima = false;
            }
        }
        else
        { // se o oponente estiver se movendo para cima
            oponentePosY += velocidadeOponente;
            if (oponentePosY >= canvas.height - barraHeigth)
            { // caso a bola estiver saindo da tela

                oponenteParaCima = true;
            }
        }

        // BOLA **************************************************************************

        if (bolaTempo <= 0) // caso a bola estiver em jogo, o tempo  e zerado apos marcar ponto, abola ficará invisivel por um tempo
        {
            if ((bolaPosX - bolaRaio) <= (jogadorPosX + barraWidth))
            { // caso o jogador encoste na bola no eixo X
                if ((bolaPosY + bolaRaio > jogadorPosY) && (bolaPosY - bolaRaio < jogadorPosY + barraHeigth))
                { // caso o jogador encoste na bola no eixo Y
                    bolaParaDireita = true;

                    if (teclaBaixoPressionada)
                    { // se o usuário estiver indo para baixo e tocar na bola
                        bolaAngulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                    }
                    else
                    {
                        bolaAngulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                    }
                }
            }
            else
            {
                if ((bolaPosX + bolaRaio) >= oponentePosX)
                { // se o oponente encostar na bola no eixo X
                    if ((bolaPosY + bolaRaio) > oponentePosY && (bolaPosY - bolaRaio < oponentePosY + barraHeigth))
                    { // se o oponente encostar na bola no eixo Y

                        bolaParaDireita = false;
                        if (oponenteParaCima)
                        { // caso oponetne estiver indo para cima ao tocar na bola
                            bolaAngulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                        }
                        else
                        { // caso o oponetne estiover info para baico quando tocar na bola
                            bolaAngulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                        }
                    }
                }
            }

            if ((bolaPosY - bolaRaio <= 0) || (bolaPosY + bolaRaio > canvas.height))
            { // se a boal estiver indo para cima ou para baixo na tela
                bolaAngulo = bolaAngulo * -1; // multiplicamos por - 1 para inverter a direção da bola no eixo y
            }
            bolaPosY += bolaAngulo; // move bola para cima ou para baixo de acordo com o cauculo acima

            if (bolaParaDireita)
            {
                bolaPosX += velocidadeBola; // move vbola para direita
            }
            else
            {
                bolaPosX -= velocidadeBola; // move vbola para esquerda
            }
        }

        if ((bolaPosX <= -bolaRaio) || (bolaPosX > canvas.width))
        { // se a bola saiu da tela
            if (bolaTempo >= 50)
            { // se o tempo de deixar a bola invisuivel passou 
                if (bolaPosX <= - bolaRaio)
                { // se bola saiu na esquerda 
                    pontosOponente++;
                }
                else
                { // se bola saiu na direita 
                    pontosJogador++;
                }

                bolaPosX = canvas.width / 2; // coloca bola no centro da tela
                bolaPosY = canvas.height / 2; // coloca bola no centro da tela

                bolaParaDireita = false;
                bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
                bolaTempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
            }
            else
            { // caso o tempo de deixar a bola invisivel não acabou 
                bolaTempo++;
            }
        }

        //  DESENHA TODA A TELA ****************************************************************************
        context.clearRect(0, 0, canvas.width, canvas.height); // limpar a tela antes de desenhar

        //  JOGADOR E OPONENTE *************************************************************************
        context.fillRect(jogadorPosX, jogadorPosY, barraWidth, barraHeigth); /// desenha jogador
        context.fillRect(oponentePosX, oponentePosY, barraWidth, barraHeigth); /// desenha ioponente


        // BOLA ************************************************************************************************
        context.beginPath(); // modo desenho 
        context.arc(bolaPosX, bolaPosY, bolaRaio, 0, Math.PI * 2, true); // desenha o circulo com coordenadas no centro
        context.closePath(); // finaliza o caminho/ não obrigatorio
        context.fill();

        // PLACAR ************************************************************************************************

        var pontosA = pontosJogador; // variaveis temporarias para alterar pontiação
        var pontosB = pontosOponente;

        if (pontosA < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosA = "0" + pontosA;
        }

        if (pontosB < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosB = "0" + pontosB;
        }

        context.font = "38pt Arial"; // tamanho e fonte
        context.fillStyle = "#c4c4c4";
        context.fillText(pontosA + "  " + pontosB, (canvas.width / 2) - 70, 50); // escrevendo texto no centro da tela no top

        //  LINHA DIVISÓRIA
        context.beginPath();
        context.moveTo(canvas.width / 2, 0); // arrumar lapis para fazere a escrita da linha
        context.lineTo(canvas.width / 2, canvas.height);// faz risco na tela no centro
        context.strokeStyle = "#c4c4c4";
        context.stroke();
        context.closePath();

    }

}

/**/

// ////////////////////////////////////

function irParaCima()
{
    if (jogadorPosY > 0)
    { // se a bola nçao sair da tela
        jogadorPosY -= velocidadeJogador; // muda posição do jogador
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (jogadorPosY < (canvas.height - barraHeigth))
    { // se a bola não saiu da tela
        jogadorPosY += velocidadeJogador; // muda posição
    }
}

var imagemBotaoOpcaoDeVelocidade = document.getElementById('imagemBotaoOpcaoVelocidade');

function mudarVelocidade()
{
    if (velocidadeBola == 0)
    {
        velocidadeBola = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');

    } else if (velocidadeBola == 10)
    {
        velocidadeBola = 20;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/2.png');

    } else if (velocidadeBola == 20)
    {
        velocidadeBola = 30;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/3.png');

    } else if (velocidadeBola == 30)
    {
        velocidadeBola = 40;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/4.png');
    } else
    {
        velocidadeBola = 0;
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
    if (velocidadeBola == 0)
    {
        pontosJogador = 0;
        pontosOponente = 0;
        bolaPosX = canvas.width / 2;
        bolaPosY = canvas.height / 2;
        velocidadeBola = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');
        memoria(velocidadeBola);
        velocidadeBola = 0;
        setTimeout("status3()", 1000);
    } else
    {
        pontosJogador = 0;
        pontosOponente = 0;
        bolaPosX = canvas.width / 2;
        bolaPosY = canvas.height / 2;
        memoria(velocidadeBola);
        velocidadeBola = 0;
        setTimeout("status3()", 1000);
    }
}



function status3()
{
    statusPingPong2.style.visibility = 'visible';
    statusPingPong2.innerHTML = 3;
    setTimeout("status2()", 1000);
}

function status2()
{
    statusPingPong2.innerHTML = 2;
    setTimeout("status1()", 1000);
}

function status1()
{
    statusPingPong2.innerHTML = 1;
    setTimeout("statusGO()", 1000);
}

function statusGO()
{
    statusPingPong2.innerHTML = "GO!!!";
    iniciarPartida();
}

const randomBoolean = () => Math.random() >= 0.5;

function iniciarPartida()
{
    bolaParaDireita = randomBoolean();
    bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bolaTempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
    velocidadeBola = velocidadeMemorizada;
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
}

function statusBotaoParaBaixo()
{
    statusPingPong.innerHTML = "MOVE DOWN!";
}

function statusBotaoVelocidade()
{
    statusPingPong.innerHTML = "CHANGE BALL SPEED!";
}

function statusZerarPlacar()
{
    statusPingPong.innerHTML = "RESTART!";
}

function statusCanvas()
{
    statusPingPong.innerHTML = "USE THE KEYBOARD, UP AND DOWN ARROW!";
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



var pingPongStatusLigado = false;

function ligarDesligarPingPong()
{
    if (pingPongStatusLigado)
    {
        pingPongStatusLigado = false;
        canvas = null;
    } else
    {
        pingPongStatusLigado = true;
        iniciarJogo();
    }
}

/*

// JOGO PING PONG

var canvas, context,
    barraWidth, barraHeigth,
    jogadorPosX, jogadorPosY,
    teclaCimaPressionada, teclaBaixoPressionada,
    oponentePosX, oponentePosY,
    oponenteParaCima,
    bolaRaio,
    bolaPosX, bolaPosY,
    bolaParaDireita,
    bolaAngulo,
    bolaTempo,
    velocidadeJogador, velocidadeOponente,
    velocidadeBola, velocidadeMemorizada,
    pontosJogador, pontosOponente;

function iniciarJogo()
{
    pingPongStatusLigado = true;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    barraWidth = 30;
    barraHeigth = 90;
    jogadorPosX = 0;
    jogadorPosY = (canvas.height - barraHeigth) / 2;
    teclaBaixoPressionada = false;
    teclaCimaPressionada = false;

    oponentePosX = canvas.width - barraWidth;
    oponentePosY = 0;
    oponenteParaCima = false;

    bolaRaio = 17;
    bolaPosX = canvas.width / 2;
    bolaPosY = canvas.height / 2;

    bolaParaDireita = false;
    bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bolaTempo = 0;
    velocidadeJogador = 15;
    velocidadeOponente = 30;
    velocidadeBola = 0;
    velocidadeMemorizada = 0;
    pontosJogador = 0;
    pontosOponente = 0;

    document.addEventListener('keyup', keyUp, false);
    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyleft', keyLeft, false);
    document.addEventListener('keyright', keyRight, false);

    setInterval(loopGame, 30);
}

function keyUp(e)
{
    if (e.keyCode == 38)
    {
        teclaCimaPressionada = false;
    } else if (e.keyCode == 40)
    {
        teclaBaixoPressionada = false;
    }
}

function keyDown(e)
{
    if (e.keyCode == 38)
    {
        teclaCimaPressionada = true;
    } else if (e.keyCode == 40)
    {
        teclaBaixoPressionada = true;
    }
}

function keyLeft(e)
{
    if (e.keyCode == 37)
    {
        teclaCimaPressionada = false;
    } else if (e.keyCode == 39)
    {
        teclaBaixoPressionada = false;
    }
}

function keyRight(e)
{
    if (e.keyCode == 37)
    {
        teclaCimaPressionada = true;
    } else if (e.keyCode == 39)
    {
        teclaBaixoPressionada = true;
    }
}

function loopGame()
{

    if (!pingPongStatusLigado)
    {

    } else
    {

        //  JOGADOR ********************************************************************

        if (teclaCimaPressionada != teclaBaixoPressionada)
        { // se o usuário precionar para cima
            if (teclaCimaPressionada)
            { // se para cima for pressionado
                if (jogadorPosY > 0)
                { // se a bola nçao sair da tela
                    jogadorPosY -= velocidadeJogador; // muda posição do jogador
                }
            }
            else
            { // se for para baixo 
                if (jogadorPosY < (canvas.height - barraHeigth))
                { // se a bola não saiu da tela
                    jogadorPosY += velocidadeJogador; // muda posição
                }
            }
        }

        // OPONENTE ********************************************************************************

        if (oponenteParaCima)
        { // caso o oponente estivcer inddo para cima
            oponentePosY -= velocidadeOponente;
            if (oponentePosY <= 0) // se a bola estiver saindo da tela
            {
                oponenteParaCima = false;
            }
        }
        else
        { // se o oponente estiver se movendo para cima
            oponentePosY += velocidadeOponente;
            if (oponentePosY >= canvas.height - barraHeigth)
            { // caso a bola estiver saindo da tela

                oponenteParaCima = true;
            }
        }

        // BOLA **************************************************************************

        if (bolaTempo <= 0) // caso a bola estiver em jogo, o tempo  e zerado apos marcar ponto, abola ficará invisivel por um tempo
        {
            if ((bolaPosX - bolaRaio) <= (jogadorPosX + barraWidth))
            { // caso o jogador encoste na bola no eixo X
                if ((bolaPosY + bolaRaio > jogadorPosY) && (bolaPosY - bolaRaio < jogadorPosY + barraHeigth))
                { // caso o jogador encoste na bola no eixo Y
                    bolaParaDireita = true;

                    if (teclaBaixoPressionada)
                    { // se o usuário estiver indo para baixo e tocar na bola
                        bolaAngulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                    }
                    else
                    {
                        bolaAngulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                    }
                }
            }
            else
            {
                if ((bolaPosX + bolaRaio) >= oponentePosX)
                { // se o oponente encostar na bola no eixo X
                    if ((bolaPosY + bolaRaio) > oponentePosY && (bolaPosY - bolaRaio < oponentePosY + barraHeigth))
                    { // se o oponente encostar na bola no eixo Y

                        bolaParaDireita = false;
                        if (oponenteParaCima)
                        { // caso oponetne estiver indo para cima ao tocar na bola
                            bolaAngulo = Math.floor(Math.random() * 10) - 9; // manda bola para diagonal para cima
                        }
                        else
                        { // caso o oponetne estiover info para baico quando tocar na bola
                            bolaAngulo = Math.floor(Math.random() * 10); // manda bola para diagonal para baixo
                        }
                    }
                }
            }

            if ((bolaPosY - bolaRaio <= 0) || (bolaPosY + bolaRaio > canvas.height))
            { // se a boal estiver indo para cima ou para baixo na tela
                bolaAngulo = bolaAngulo * -1; // multiplicamos por - 1 para inverter a direção da bola no eixo y
            }
            bolaPosY += bolaAngulo; // move bola para cima ou para baixo de acordo com o cauculo acima

            if (bolaParaDireita)
            {
                bolaPosX += velocidadeBola; // move vbola para direita
            }
            else
            {
                bolaPosX -= velocidadeBola; // move vbola para esquerda
            }
        }

        if ((bolaPosX <= -bolaRaio) || (bolaPosX > canvas.width))
        { // se a bola saiu da tela
            if (bolaTempo >= 50)
            { // se o tempo de deixar a bola invisuivel passou 
                if (bolaPosX <= - bolaRaio)
                { // se bola saiu na esquerda 
                    pontosOponente++;
                }
                else
                { // se bola saiu na direita 
                    pontosJogador++;
                }

                bolaPosX = canvas.width / 2; // coloca bola no centro da tela
                bolaPosY = canvas.height / 2; // coloca bola no centro da tela

                bolaParaDireita = false;
                bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
                bolaTempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
            }
            else
            { // caso o tempo de deixar a bola invisivel não acabou 
                bolaTempo++;
            }
        }

        //  DESENHA TODA A TELA ****************************************************************************
        context.clearRect(0, 0, canvas.width, canvas.height); // limpar a tela antes de desenhar

        //  JOGADOR E OPONENTE *************************************************************************
        context.fillRect(jogadorPosX, jogadorPosY, barraWidth, barraHeigth); /// desenha jogador
        context.fillRect(oponentePosX, oponentePosY, barraWidth, barraHeigth); /// desenha ioponente


        // BOLA ************************************************************************************************
        context.beginPath(); // modo desenho 
        context.arc(bolaPosX, bolaPosY, bolaRaio, 0, Math.PI * 2, true); // desenha o circulo com coordenadas no centro
        context.closePath(); // finaliza o caminho/ não obrigatorio
        context.fill();

        // PLACAR ************************************************************************************************

        var pontosA = pontosJogador; // variaveis temporarias para alterar pontiação
        var pontosB = pontosOponente;

        if (pontosA < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosA = "0" + pontosA;
        }

        if (pontosB < 10)
        { // coloca zero a esquerda se for menor que 10 a pontiação 
            pontosB = "0" + pontosB;
        }

        context.font = "38pt Arial"; // tamanho e fonte
        context.fillStyle = "#c4c4c4";
        context.fillText(pontosA + "  " + pontosB, (canvas.width / 2) - 70, 50); // escrevendo texto no centro da tela no top

        //  LINHA DIVISÓRIA
        context.beginPath();
        context.moveTo(canvas.width / 2, 0); // arrumar lapis para fazere a escrita da linha
        context.lineTo(canvas.width / 2, canvas.height);// faz risco na tela no centro
        context.strokeStyle = "#c4c4c4";
        context.stroke();
        context.closePath();

    }

}

/**/

/*

// ////////////////////////////////////

function irParaCima()
{
    if (jogadorPosY > 0)
    { // se a bola nçao sair da tela
        jogadorPosY -= velocidadeJogador; // muda posição do jogador
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (jogadorPosY < (canvas.height - barraHeigth))
    { // se a bola não saiu da tela
        jogadorPosY += velocidadeJogador; // muda posição
    }
}

var imagemBotaoOpcaoDeVelocidade = document.getElementById('imagemBotaoOpcaoVelocidade');

function mudarVelocidade()
{
    if (velocidadeBola == 0)
    {
        velocidadeBola = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');

    } else if (velocidadeBola == 10)
    {
        velocidadeBola = 20;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/2.png');

    } else if (velocidadeBola == 20)
    {
        velocidadeBola = 30;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/3.png');

    } else if (velocidadeBola == 30)
    {
        velocidadeBola = 40;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/4.png');
    } else
    {
        velocidadeBola = 0;
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
    if (velocidadeBola == 0)
    {
        pontosJogador = 0;
        pontosOponente = 0;
        bolaPosX = canvas.width / 2;
        bolaPosY = canvas.height / 2;
        velocidadeBola = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');
        memoria(velocidadeBola);
        velocidadeBola = 0;
        setTimeout("status3()", 1000);
    } else
    {
        pontosJogador = 0;
        pontosOponente = 0;
        bolaPosX = canvas.width / 2;
        bolaPosY = canvas.height / 2;
        memoria(velocidadeBola);
        velocidadeBola = 0;
        setTimeout("status3()", 1000);
    }
}



function status3()
{
    statusPingPong2.style.visibility = 'visible';
    statusPingPong2.innerHTML = 3;
    setTimeout("status2()", 1000);
}

function status2()
{
    statusPingPong2.innerHTML = 2;
    setTimeout("status1()", 1000);
}

function status1()
{
    statusPingPong2.innerHTML = 1;
    setTimeout("statusGO()", 1000);
}

function statusGO()
{
    statusPingPong2.innerHTML = "GO!!!";
    iniciarPartida();
}

const randomBoolean = () => Math.random() >= 0.5;

function iniciarPartida()
{
    bolaParaDireita = randomBoolean();
    bolaAngulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bolaTempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
    velocidadeBola = velocidadeMemorizada;
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
}

function statusBotaoParaBaixo()
{
    statusPingPong.innerHTML = "MOVE DOWN!";
}

function statusBotaoVelocidade()
{
    statusPingPong.innerHTML = "CHANGE BALL SPEED!";
}

function statusZerarPlacar()
{
    statusPingPong.innerHTML = "RESTART!";
}

function statusCanvas()
{
    statusPingPong.innerHTML = "USE THE KEYBOARD, UP AND DOWN ARROW!";
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



var pingPongStatusLigado = false;

function ligarDesligarPingPong()
{
    if (pingPongStatusLigado)
    {
        pingPongStatusLigado = false;
        canvas = null;
    } else
    {
        pingPongStatusLigado = true;
        iniciarJogo();
    }
}

*/