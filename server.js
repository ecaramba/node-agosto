const express = require("express");
const app = express();
const fs = require("fs");

const nodemailer = require("nodemailer");

/* const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "seuemail@gmail.com",
        pass: "senhasupersecreta"
    }
}; */
const config = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nikolas.boyle88@ethereal.email',
        pass: '1DMWQZBhvafpVWU21P'
    }
}; 
const servidor = nodemailer.createTransport(config);

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
    let opt = {flag: "a"};

    // fs.writeFile("lista.csv", linha, opt, function(erro){
        
    //     res.send("salvo");

    // });

    let conteudo = "<p>Nome: " + req.body.nome +"</p>"
            + "<p> Email: " + req.body.email + "</p>";

    let email = {
        from: "edir@prof.com",
        to: "jhenni.bueno@gmail.com",
        subject: "teste de email",
        html: conteudo
    };
            
    servidor.sendMail(email, function(){
        res.send("email enviado");
    });
    
});

app.listen(3000, function(){
    console.log("servidor iniciado");
});