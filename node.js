const fs = require("fs");

console.log("antes");

fs.readFile("json.js", "utf8", function(erro, dados){
    console.log("dentro");
    console.log(erro);
    console.log(dados);
});

console.log("depois");