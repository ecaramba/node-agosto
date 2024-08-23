const express = require("express");
const app = express();
const fs = require("fs");

const email = require("./email");
const crud = require("./crud");

// habilita ler form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.send("Oi Turma!!!");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/form.html");    
});

app.get("/lista", async function(req, res){
    //res.sendFile(__dirname + "/lista.csv");
    let dados = await crud.lerDados();

    res.json(dados);
});

app.post("/contato", async function(req, res){

    let linha = req.body.nome +","+req.body.email + "\n";
    
    await crud.cadastrar(req.body.nome, req.body.email);

    email(req.body.nome, req.body.email, function(err){
        res.send("email enviado");
    });

    
});


app.listen(3000, function(){
    console.log("servidor iniciado");
});