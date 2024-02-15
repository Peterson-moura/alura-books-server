const { Router } = require("express");
const { getLivros, getLivro, postLivro, patchLivro } = require("../controladores/livro");

const router = Router();

// Rota para obter todos os livros
router.get("/", getLivros);

// Rota para obter um livro por ID
router.get("/:id", getLivro);

// Rota para adicionar um novo livro
router.post("/", postLivro);

// Rota para atualizar um livro (PATCH)
router.patch("/:id", patchLivro);

// Rota para excluir um livro (DELETE)
router.delete("/", (req, res) => {
  res.status(405).send("Method Not Allowed"); // Método DELETE não permitido
});

module.exports = router;

