let nome = "true";

nome = 123;
// verificar o tipo da variavel
console.log( typeof nome );

// vetor -> array
// estrutura de dados
let cidades = ["curitiba", "pinhais"];
console.log( cidades );

// classe -> class
// encapsulamento
class Caneta
{

    // propriedade -> atributo -> adjetivo
    cor = "Azul";

    quantTinta = 100;

    constructor(cor)
    {
        this.cor = cor;
    }

    // função -> métodos -> verbo
    escrever(palavra)
    {
        console.log("escreveu: " + palavra);
        this.quantTinta -= 1;
    }
}

class Quadro extends Caneta
{
    alerta = false;
}

// instância
let bic1 = new Caneta("Vermelho");
let bic2 = new Caneta("Rosa");
let bic3 = bic1;
let bic4 = new Caneta();

bic1.cor = "Vermelho";
bic3.cor = "Preta";

console.log(bic1, bic2, bic3, bic4);

if (bic3 == bic1)
{
    console.log("verdade");
} else
{
    console.log("falso");
}

bic2.escrever("oi turma!!!");
bic2.escrever("blz???");

console.log(bic2);

let pilot = new Quadro();

console.log(pilot);
