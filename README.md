# Insta-Like Backend

Este é o backend do projeto **Insta-Like**, desenvolvido como parte da Imersão Backend. O projeto utiliza Node.js, MongoDB Atlas e Google Cloud para gerenciar imagens, dados de usuários e posts.

## 🛠 Tecnologias Utilizadas
- **Node.js**: Plataforma para desenvolvimento backend.
- **Express**: Framework para criação de rotas e APIs.
- **MongoDB Atlas**: Banco de dados NoSQL utilizado para armazenamento.
- **Google Cloud Run**: Para deploy do backend em um ambiente escalável.
- **Postman**: Para testes das rotas da API.

---

## 🚀 Funcionalidades
1. **Gerenciamento de Usuários**: Cadastro e autenticação.
2. **Upload de Imagens**: Envio de imagens via Postman para armazenar no Google Cloud.
3. **Gerenciamento de Posts**: Criação, listagem e manipulação de posts.

---

## 📁 Estrutura do Projeto
```plaintext
insta-like-back/
├── src/
│   ├── config/
│   │   └── dbConfig.js     # Configuração do banco de dados
│   ├── models/
│   │   └── postModel.js    # Modelo de dados para os posts
│   ├── routes/
│   │   └── postRoutes.js   # Rotas da API para posts
│   ├── services/
│   │   └── cloudStorage.js # Serviço para upload de imagens no Google Cloud
│   └── app.js              # Configuração principal do servidor Express
├── .env                    # Variáveis de ambiente
├── package.json            # Dependências e scripts do projeto
├── services.sh             # Script para ativar serviços do Google Cloud
└── README.md               # Documentação do projeto
