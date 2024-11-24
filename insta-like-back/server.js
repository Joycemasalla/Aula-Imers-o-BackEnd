import express from 'express'; // Aqui usamos o Express, uma biblioteca para criar e gerenciar um servidor web.
import routes from './src/routes/postsRoutes.js';



// Criando o servidor. O `express()` é a função que inicializa o servidor.Onde esta toda a lógica do express
const app = express(); 
app.use(express.static("uploads"));
routes(app);

// Iniciando o servidor na porta 3000.
// Quando o servidor está rodando, ele exibe a mensagem "Servidor rodando na porta 3000" no terminal.
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});





// Dica: Use o comando `node --watch server.js` para monitorar alterações no código.
// Assim, o servidor é reiniciado automaticamente toda vez que você salva o arquivo.

// Outro atalho útil no editor: ALT + Z -> Ativa a quebra automática de linhas longas para facilitar a leitura.

