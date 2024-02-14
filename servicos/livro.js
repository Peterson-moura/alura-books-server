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
  return livros.find(livro => livro.id === id);
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
  insereLivro
};
