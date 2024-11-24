//Conecta a aplicação com o banco
import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Importa a função para conectar ao banco de dados.

// Conectando ao banco de dados usando uma string de conexão definida nas variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// `process.env.STRING_CONEXAO` é o valor da string de conexão armazenada no arquivo `.env`.


// Função assincrona para buscar todos os posts no banco de dados.
// Aqui usamos o método `db.collection` para selecionar a coleção "posts" dentro do banco "imersao-backend".
export async function getTodosPosts() {
    const db = conexao.db("imersao-backend"); // Seleciona o banco de dados.
    const colecao = db.collection("posts"); // Seleciona a coleção chamada "posts".
    return colecao.find().toArray(); // Busca todos os documentos da coleção e os transforma em um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-backend"); // Seleciona o banco de dados.
    const colecao = db.collection("posts"); // Seleciona a coleção chamada "posts".
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-backend"); // Seleciona o banco de dados.
    const colecao = db.collection("posts"); // Seleciona a coleção chamada "posts".
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id:new ObjectId(objId)}, {$set:novoPost})
}

