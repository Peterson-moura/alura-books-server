
const express = require('express')
const rotalivro = require("./rotas/livro")
const app = express()
app.use(express.json())
const port = 8000

app.use('/livros', rotalivro)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
