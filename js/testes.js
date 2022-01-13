var titulo = document.getElementById('titulo');

var titulo1 = document.getElementById('titulo1');

var titulo2 = document.getElementById('titulo2');

var titulo3 = document.getElementById('titulo3');

var titulo4 = document.getElementById('titulo4');

var pessoa =
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

function Pessoa(nome, peso, vivo, familia, olhos, bateria)
{
    this.nome = nome; //String
    this.peso = peso; //Numero
    this.vivo = vivo;   //Bolleano
    this.familia = familia; //Array
    this.olhos = olhos =
    {
        corDosOlhos: "", //String
        tamanhoDosOlhos: 0, //Numero
        olhosAbertos: false, //Boleano

        olhar: function () //Função
        {
            Pessoa.olhos.olhosAbertos = true; //Boleano
            Pessoa.bateria.consumindoBateria(); //Funcão
        }
    };
    this.bateria = bateria = //Objeto
    {
        carga: 0, //Numero
        consumindo: "", //Boleano
        consumindoBateria: function () //Função
        {
            Pessoa.bateria.carga -= 1;
            Pessoa.bateria.consumindo = true; //Boleano
        },

        carregandoBateria: function ()
        {
            Pessoa.bateria.carga = carga + 0.1;
            Pessoa.bateria.consumindo = false; //Boleano
        }
    }
}

var tasso = new Object(pessoa);

//var tasso = Object.create(pessoa);

var aline = Object.create(pessoa);

var sophia = Object.create(pessoa);

function pessoa()
{
    Pessoa.call(this);
    this.apelido = "Aline Vaqueira";
}

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
tasso.familia[0] = 21;
tasso.olhos.corDosOlhos = "Escuros";
tasso.olhos.tamanhoDosOlhos = 10;
tasso.olhos.olhosAbertos = true;
tasso.bateria.carga = 100;
tasso.bateria.consumindo = true;

aline.nome = "Aline";
aline.peso = 70;
aline.vivo = true;
aline.familia[0] = 17;
aline.olhos.corDosOlhos = "Azuis";
aline.olhos.tamanhoDosOlhos = 12;
aline.olhos.olhosAbertos = false;
aline.bateria.carga = 84;
aline.bateria.consumindo = false;

/*
Object.defineProperty(aline, 'bateria',
{
    carga: 84,
    consumindo: false
}
);
*/


titulo1.innerHTML = tasso.bateria.carga;

titulo2.innerHTML = aline.bateria.carga;

titulo3.innerHTML = Object.getOwnPropertyNames(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

titulo4.innerHTML = Object.keys(tasso); // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso SEPARADOS POR VIRGULAS

/**/

for (let propriedades in tasso) // EXIBE OS NOMES DAS PROPRIEDADES DO OBJETO tasso 
{
    document.writeln(propriedades);
}

document.writeln("<br>");

document.writeln(Object.values(tasso)); // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS

document.writeln("<br>");
document.writeln("<br>");

for (propriedades in tasso) // EXIBE OS VALORES DAS PROPRIEDADES, SEPARADOS POR ESPAÇO
{
    if (tasso.hasOwnProperty(propriedades)) // EXIBE OS VALORES DAS PROPRIEDADES SEPARADOS POR VIRGULAS
    {
        var valores = tasso[propriedades];
        document.writeln(valores);
    }
}
/*
document.writeln("<br>");

document.writeln(Object.values(tasso));

document.writeln("<br>");
document.writeln("<br>");
/*
for (let propriedades2 in aline)
{
    document.writeln(propriedades2);
}

document.writeln("<br>");

document.writeln(Object.values(aline));

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
*/

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

