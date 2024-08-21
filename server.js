const express = require("express");
const app = express();
const fs = require("fs");

const email = require("./email");

// habilita ler form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.send("Oi Turma!!!");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/form.html");    
});

app.get("/lista", function(req, res){
    res.sendFile(__dirname + "/lista.csv");
});

app.post("/contato", function(req, res){

    let linha = req.body.nome +","+req.body.email + "\n";
    
    email(req.body.nome, req.body.email, function(err){
        res.send("email enviado");
    });
    
});

app.listen(3000, function(){
    console.log("servidor iniciado");
});