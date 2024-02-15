const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro} = require("../servicos/livro");

// Função para lidar com todas as solicitações HTTP
function handleRequest(req, res, operation) {
  try {
    // Executa a operação específica com base na solicitação
    const result = operation(req);
    // Retorna uma resposta com status 200 e os dados em formato JSON
    res.status(200).json(result);
  } catch (error) {
    // Se ocorrer um erro, retorna uma resposta com status 500 e a mensagem de erro
    res.status(500).send(error.message);
  }
}

// Rota para obter todos os livros
function getLivros(req, res) {
  // Chama a função handleRequest passando a operação de obter todos os livros
  handleRequest(req, res, () => getTodosLivros());
}

// Rota para obter um livro por ID
function getLivro(req, res) {
  // Chama a função handleRequest passando a operação de obter um livro por ID
  handleRequest(req, res, () => getLivrosPorId(req.params.id));
}

// Rota para adicionar um novo livro
function postLivro(req, res) {
  // Chama a função handleRequest passando a operação de inserir um novo livro
  handleRequest(req, res, () => {
    // Insere o novo livro
    insereLivro(req.body);
    // Retorna uma resposta com status 201 indicando que o livro foi inserido com sucesso
    res.status(201).send("Livro inserido com sucesso");
  });
}



/**
 * Função para lidar com requisições PATCH para modificar um livro.
 * @param {Object} req - Objeto de requisição do Express.
 * @param {Object} res - Objeto de resposta do Express.
 */
function patchLivro(req, res) {
  try {
    const id = req.params.id; // Obtém o ID do livro a ser modificado da requisição
    const body = req.body; // Obtém o corpo da requisição contendo as modificações

    // Chama a função modificaLivro para aplicar as modificações no livro
    modificaLivro(body, id);

    // Retorna uma resposta de sucesso
    res.send("Item modificado com sucesso");
  } catch (error) {
    // Se ocorrer um erro, retorna uma resposta com status 500 e a mensagem de erro
    res.status(500).send(error.message);
  }
}

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
  getLivros,
  getLivro,
  postLivro,
  modificaLivro,
  patchLivro
};
