var titulo = document.getElementById('titulo');

var titulo1 = document.getElementById('titulo1');

var titulo2 = document.getElementById('titulo2');

var titulo3 = document.getElementById('titulo3');

var titulo4 = document.getElementById('titulo4');

var titulo5 = document.getElementById('titulo5');

var x = document.getElementById('X');

var y = document.getElementById('Y');

var larguraX = document.getElementById('larguraX');

var alturaY = document.getElementById('alturaY');

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

//var carro = new Object();

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

var controle1 = new Controle(87, 83, 65, 68);

var carro = new Jogador();

carro.altura = 50;
carro.largura = 50;
carro.posicaoX = 20;
carro.posicaoY = canvas1.canvas.height - carro.altura;
carro.velocidade = 10;

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

        ////////////testes

        canvas1.contexto.fillRect(carro.posicaoX, carro.posicaoY, carro.largura, carro.altura); /// desenha jogador       
        canvas1.contexto.fillRect(oponente1.posicaoX, oponente1.posicaoY, carro.largura, carro.altura); /// desenha ioponente

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
*/

var imagemBotaoOpcaoDeVelocidade = document.getElementById('imagemBotaoOpcaoVelocidade');

function mudarVelocidade()
{
    if (bola1.velocidade == 0)
    {
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');

    } else if (bola1.velocidade == 10)
    {
        bola1.velocidade = 20;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/2.png');

    } else if (bola1.velocidade == 20)
    {
        bola1.velocidade = 30;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/3.png');

    } else if (bola1.velocidade == 30)
    {
        bola1.velocidade = 40;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/4.png');
    } else
    {
        bola1.velocidade = 0;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/0.png');
    }
}

function memoria(valorMemoria)
{
    bola1.velocidadeEmMemoria = valorMemoria;
    return bola1.velocidadeEmMemoria;
}

var statusPingPong = document.getElementById('statusPingPong');

var statusPingPong2 = document.getElementById('statusPingPong2');

function zerarPlacar()
{
    if (bola1.velocidade == 0)
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas1.canvas.width / 2;
        bola1.posicaoY = canvas1.canvas.height / 2;
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
        setTimeout("status3()", 1000);
    } else
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas1.canvas.width / 2;
        bola1.posicaoY = canvas1.canvas.height / 2;
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
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
    bola1.movimentoParaDireita = randomBoolean();
    bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bola1.tempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
    bola1.velocidade = bola1.velocidadeEmMemoria;
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
    statusPingPong.innerHTML = "USE THE KEYBOARD \'A\' AND \'DAD\', OR UP AND DOWN ARROW!";
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

function checarTecla(e)
{
    var evento = window.event ? window.event : e;
    titulo5.innerText = (evento.keyCode);
}

/*

// JOGO PING PONG

var canvas, context,
    usuario1.largura, usuario1.altura,
    usuario1.posicaoX, usuario1.posicaoY,
    controle1.teclaUp, controle1.teclaDown,
    oponente1.posicaoX, oponente1.posicaoY,
    usuario1.movimentoParaCima,
    bola1.raio,
    bola1.posicaoX, bola1.posicaoY,
    bola1.movimentoParaDireita,
    bola1.angulo,
    bola1.tempo,
    usuario1.velocidade, oponente1.velocidade,
    bola1.velocidade, bola1.velocidadeEmMemoria,
    usuario1.pontos, oponente1.pontos;

function iniciarJogo()
{
    pingPongStatusLigado = true;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    usuario1.largura = 30;
    usuario1.altura = 90;
    usuario1.posicaoX = 0;
    usuario1.posicaoY = (canvas.height - usuario1.altura) / 2;
    controle1.teclaDown = false;
    controle1.teclaUp = false;

    oponente1.posicaoX = canvas.width - usuario1.largura;
    oponente1.posicaoY = 0;
    usuario1.movimentoParaCima = false;

    bola1.raio = 17;
    bola1.posicaoX = canvas.width / 2;
    bola1.posicaoY = canvas.height / 2;

    bola1.movimentoParaDireita = false;
    bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bola1.tempo = 0;
    usuario1.velocidade = 15;
    oponente1.velocidade = 30;
    bola1.velocidade = 0;
    bola1.velocidadeEmMemoria = 0;
    usuario1.pontos = 0;
    oponente1.pontos = 0;

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
        controle1.teclaUp = false;
    } else if (e.keyCode == 40)
    {
        controle1.teclaDown = false;
    }
}

function keyDown(e)
{
    if (e.keyCode == 38)
    {
        controle1.teclaUp = true;
    } else if (e.keyCode == 40)
    {
        controle1.teclaDown = true;
    }
}

function keyLeft(e)
{
    if (e.keyCode == 37)
    {
        controle1.teclaUp = false;
    } else if (e.keyCode == 39)
    {
        controle1.teclaDown = false;
    }
}

function keyRight(e)
{
    if (e.keyCode == 37)
    {
        controle1.teclaUp = true;
    } else if (e.keyCode == 39)
    {
        controle1.teclaDown = true;
    }
}

function loopGame()
{

    if (!pingPongStatusLigado)
    {

    } else
    {

        //  JOGADOR ********************************************************************

        if (controle1.teclaUp != controle1.teclaDown)
        { // se o usuário precionar para cima
            if (controle1.teclaUp)
            { // se para cima for pressionado
                if (usuario1.posicaoY > 0)
                { // se a bola nçao sair da tela
                    usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
                }
            }
            else
            { // se for para baixo 
                if (usuario1.posicaoY < (canvas.height - usuario1.altura))
                { // se a bola não saiu da tela
                    usuario1.posicaoY += usuario1.velocidade; // muda posição
                }
            }
        }

        // OPONENTE ********************************************************************************

        if (usuario1.movimentoParaCima)
        { // caso o oponente estivcer inddo para cima
            oponente1.posicaoY -= oponente1.velocidade;
            if (oponente1.posicaoY <= 0) // se a bola estiver saindo da tela
            {
                usuario1.movimentoParaCima = false;
            }
        }
        else
        { // se o oponente estiver se movendo para cima
            oponente1.posicaoY += oponente1.velocidade;
            if (oponente1.posicaoY >= canvas.height - usuario1.altura)
            { // caso a bola estiver saindo da tela

                usuario1.movimentoParaCima = true;
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

            if ((bola1.posicaoY - bola1.raio <= 0) || (bola1.posicaoY + bola1.raio > canvas.height))
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

        if ((bola1.posicaoX <= -bola1.raio) || (bola1.posicaoX > canvas.width))
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

                bola1.posicaoX = canvas.width / 2; // coloca bola no centro da tela
                bola1.posicaoY = canvas.height / 2; // coloca bola no centro da tela

                bola1.movimentoParaDireita = false;
                bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
                bola1.tempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
            }
            else
            { // caso o tempo de deixar a bola invisivel não acabou 
                bola1.tempo++;
            }
        }

        //  DESENHA TODA A TELA ****************************************************************************
        context.clearRect(0, 0, canvas.width, canvas.height); // limpar a tela antes de desenhar

        //  JOGADOR E OPONENTE *************************************************************************
        context.fillRect(usuario1.posicaoX, usuario1.posicaoY, usuario1.largura, usuario1.altura); /// desenha jogador
        context.fillRect(oponente1.posicaoX, oponente1.posicaoY, usuario1.largura, usuario1.altura); /// desenha ioponente


        // BOLA ************************************************************************************************
        context.beginPath(); // modo desenho 
        context.arc(bola1.posicaoX, bola1.posicaoY, bola1.raio, 0, Math.PI * 2, true); // desenha o circulo com coordenadas no centro
        context.closePath(); // finaliza o caminho/ não obrigatorio
        context.fill();

        // PLACAR ************************************************************************************************

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
    if (usuario1.posicaoY > 0)
    { // se a bola nçao sair da tela
        usuario1.posicaoY -= usuario1.velocidade; // muda posição do jogador
    }
}

function irParaBaixo()
{
    // se for para baixo 
    if (usuario1.posicaoY < (canvas.height - usuario1.altura))
    { // se a bola não saiu da tela
        usuario1.posicaoY += usuario1.velocidade; // muda posição
    }
}

var imagemBotaoOpcaoDeVelocidade = document.getElementById('imagemBotaoOpcaoVelocidade');

function mudarVelocidade()
{
    if (bola1.velocidade == 0)
    {
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');

    } else if (bola1.velocidade == 10)
    {
        bola1.velocidade = 20;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/2.png');

    } else if (bola1.velocidade == 20)
    {
        bola1.velocidade = 30;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/3.png');

    } else if (bola1.velocidade == 30)
    {
        bola1.velocidade = 40;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/4.png');
    } else
    {
        bola1.velocidade = 0;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/0.png');
    }
}

function memoria(valorMemoria)
{
    bola1.velocidadeEmMemoria = valorMemoria;
    return bola1.velocidadeEmMemoria;
}


var statusPingPong = document.getElementById('statusPingPong');

var statusPingPong2 = document.getElementById('statusPingPong2');

function zerarPlacar()
{
    if (bola1.velocidade == 0)
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas.width / 2;
        bola1.posicaoY = canvas.height / 2;
        bola1.velocidade = 10;
        imagemBotaoOpcaoDeVelocidade.setAttribute('src', '../icones/1.png');
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
        setTimeout("status3()", 1000);
    } else
    {
        usuario1.pontos = 0;
        oponente1.pontos = 0;
        bola1.posicaoX = canvas.width / 2;
        bola1.posicaoY = canvas.height / 2;
        memoria(bola1.velocidade);
        bola1.velocidade = 0;
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
    bola1.movimentoParaDireita = randomBoolean();
    bola1.angulo = Math.floor(Math.random() * 21) - 10; // faz bola ir para uma direção aleatória.
    bola1.tempo = 0; // zera  ortempo de deixar a bola invisivel e coloca novamente em jogo
    bola1.velocidade = bola1.velocidadeEmMemoria;
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