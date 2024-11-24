
import express from 'express';
import multer from 'multer';
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';
import cors from "cors";

const corsOptions = {
  origin: "*", // permitir que todos os origens sejam aceitos
  optionSuccessStatus: 200
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

// Cria uma instância do middleware Multer
const upload = multer({ storage: storage });
const routes = (app) => {

  // Configurando o servidor para entender dados enviados no formato JSON. Isso é importante para trabalhar com APIs que enviam e recebem dados JSON.
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota para obter todos os posts do banco de dados. Quando alguém acessa "/posts", ele devolve todos os posts armazenados.
  app.get("/posts", listarPosts);
  // Rota para criar um post
  app.post("/posts", postarNovoPost)
  app.post("/upload", upload.single("imagem"), uploadImagem)
  app.put("/upload/:id", atualizarNovoPost)

};


export default routes;


// Exemplo comentado de uma rota para buscar um post pelo ID.
// Quando a URL é acessada com um ID específico ("/posts/:id"), retorna o post com aquele ID.
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorId(req.params.id); // Busca o índice do post na lista usando o ID da URL.

//     // Se o índice for válido, retorna o post. Caso contrário, exibe um erro de "não encontrado".
//     if (index !== -1) {
//         res.status(200).json(posts[index]); // Retorna o post encontrado.
//     } else {
//         res.status(404).json({ message: "Post não encontrado" }); // Retorna erro 404 se o post não existir.
//     }
// });


// Função comentada (exemplo de busca por índice). Se precisar implementar novamente, pode ser útil:
// Busca o índice de um post na lista pelo ID fornecido.
// function buscarPostPorId(id) {
//     return posts.findIndex((post) => { // Encontra a posição do post na lista usando o método `findIndex`.
//         return post.id === Number(id); // Converte o ID recebido para número e compara com o ID do post.
//     });
// }

