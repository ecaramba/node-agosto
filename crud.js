// CRUD -> manipulação de banco de dados
// Create -> cadastrar
// Read -> listar
// Update -> atualização
// Delete -> apagar

const { MongoClient } = require("mongodb");

const urlcon = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/";

const conexao = new MongoClient(urlcon);

async function lerDados()
{
    let db = await conexao.connect();  
    let pasta = db.db("edir").collection("contatos");  
    let dados = await pasta.find({}).toArray();

    console.log(dados);
}

lerDados();


