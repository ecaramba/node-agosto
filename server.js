const express = require("express");
const app = express();
const fs = require("fs");

// habilita ler form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.send("Oi Turma!!!");
});

app.get("/contato", function(req, res){
    res.send("<html><body><h1>página de contato</h1></body></html>");
});

app.post("/contato", function(req, res){

    let linha = req.body.nome +","+req.body.email + "\n";
    let opt = {flag: "a"};

    fs.writeFile("lista.csv", linha, opt, function(erro){
        
        res.send("salvo");

    });
    
});

app.listen(3000, function(){
    console.log("servidor iniciado");
});