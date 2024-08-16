const fs = require("fs");
const reverso = require("./exercicios");

console.log("antes");

fs.readFile("json.js", "utf8", function(erro, dados){
    console.log("dentro");
    console.log(erro);
    console.log( reverso(dados) );
});

console.log("depois");