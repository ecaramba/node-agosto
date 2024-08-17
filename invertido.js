const reverso = require("./exercicios");

console.log("Digite > ");

process.stdin.on("data", function(valor){
    let novo = valor.toString();
    console.log(reverso(novo));
    console.log("Digite > ");
});