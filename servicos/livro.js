const fs = require("fs");

// Função para ler o conteúdo do arquivo "livros.json"
function lerArquivoLivros() {
  const filePath = "livros.json";
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Função para escrever no arquivo "livros.json"
function escreverArquivoLivros(data) {
  const filePath = "livros.json";
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

// Função para obter todos os livros
function getTodosLivros() {
  return lerArquivoLivros();
}

// Função para obter um livro por ID
function getLivrosPorId(id) {
  const livros = lerArquivoLivros();
  return livros.find((livro) => livro.id === id);
}



/**
 * Função para modificar um livro existente no arquivo "livros.json".
 * @param {Object} modificacoes - Objeto contendo as modificações a serem feitas no livro.
 * @param {string} id - ID do livro a ser modificado.
 */
function modificaLivro(modificacoes, id) {
  // Lê o conteúdo atual do arquivo "livros.json"
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

  // Encontra o índice do livro a ser modificado no array de livros
  const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

  // Verifica se o livro com o ID fornecido foi encontrado
  if (indiceModificado === -1) {
    throw new Error("Livro não encontrado.");
  }

  // Cria um novo objeto contendo as modificações para o livro especificado
  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

  // Substitui o livro original pelo livro modificado no array de livros
  livrosAtuais[indiceModificado] = conteudoMudado;

  // Escreve os dados atualizados de volta ao arquivo "livros.json"
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais, null, 2));
}


// Função para inserir um novo livro
function insereLivro(livroNovo) {
  const livros = lerArquivoLivros();
  livros.push(livroNovo);
  escreverArquivoLivros(livros);
}

module.exports = {
  getTodosLivros,
  getLivrosPorId,
  insereLivro,
  modificaLivro,
  
};
