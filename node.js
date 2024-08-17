// modulo do node
const fs = require("fs/promises");
// modulo proprio
const reverso = require("./exercicios");

//modulo externo
const excel = require("excel");

excel("arquivo.xslx").then(function(data)
{

})

console.log("antes");

fs.readFile("json.js", "utf8", function(erro, dados){
    console.log("dentro");
    console.log(erro);
    console.log( reverso(dados) );
});

console.log("depois");