// ecmascript 6 -> 2015

// tipagem fraca
// tipagem dinamica
let nome = "edir"; // string
let idade = 12; // number - int
let peso = 43.7; // number - float
let acordado = true; // boolean

let cidades = ["curtiba", "pinhais", "colombo"]; // array

// não pode ser alterado o valor
const marca = "AUDI";

// não outra variavel com mesmo nome
let outro = "jose";

if ("12" === 12)
{
    console.log("verdade");
} else 
{
    console.log("falso");
}


let n1 = 4;
let n2 = 6;
let n3 = 3;
let n4 = 5;

// e -> p -> s
// escopo da função
function soma(n1, n2)
{
    let res = n1 + n2 + n3;

    function outra(n2, n3)
    {
        return n2 + n3 + n4;
    }
    
    console.log(outra(1, 2))

    return res;
}

let valor = soma(3, 5);
console.log(valor);

let sub = function(n1, n2)
{
    return n1 - n2;
}

console.log(sub(3, 4));

function calculadora(n1, n2, op)
{
    return op(n1, n2);
}

console.log( calculadora(10, 2, sub) );
console.log( calculadora(10, 2, soma) );
