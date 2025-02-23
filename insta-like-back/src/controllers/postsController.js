// Responsabilidades de lidar com as requisições e repsostas

import { getTodosPosts, criarPost, atualizarPost } from "../models/postModel.js";
import fs from 'fs';
import gerarDescricaoComGemini from "../services/geminiServices.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts no banco. 
    const posts = await getTodosPosts();
    // Envia os posts encontrados com o status HTTP 200 (OK).
    res.status(200).json(posts);
}


export async function postarNovoPost(req, res) {
    // Recebe os dados do novo post via body do request.
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado)
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha ao salvar o post"});
    }
}
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function atualizarNovoPost(req, res) {
    // Recebe os dados do novo post via body do request.
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)
        const post = {
            descricao:descricao,
            imgUrl: urlImagem,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id,post)
        res.status(200).json(postCriado)
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha ao salvar o post"});
    }
}