
const express = require("express");
const app = express();
const PORT = 3033;

const produtos = [
    {
        id: 1,
        nome: "notebook",
        marca: "samsung",
        preco: 3500.00,
    },
    {
        id: 2,
        nome: "mouse",
        marca: "redragon",
        preco: 199.90,
    }
]

app.use(express.json());

app.get("/teste", (req, res) => {
    res.send("rota teste f")
});

app.get("/produtos", (req, res) => {
    res.json(produtos)
});

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    const produto = produtos.find(produto => produto.id == id);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }
    res.json(produto);
});

app.post("/produtos", (req, res) => {
    console.log("achou rota")
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});


/*
app.put();

app.delete();
*/
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})