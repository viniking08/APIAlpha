const produtos = require("../models/produtosModel");

const listarProdutos = (req, res) => {
    res.json(produtos);
};

const buscarProduto = (req, res) => {
    const id = req.params.id;

    const produto = produtos.find(produto => produto.id == id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
};

const cadastrarProduto = (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
};

const editarProdutos = (req, res) => {
    const id = req.params.id;

    const produto = produtos.find(produto => produto.id == id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.marca = req.body.marca;
    produto.preco = req.body.preco;

    res.json(produto);
};

const excluirProdutos = (req, res) => {
    const id = req.params.id;

    const produtoIndex = produtos.findIndex(produto => produto.id == id);

    if (produtoIndex === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(produtoIndex, 1);

    res.json({
        mensagem: "Produto deletado com sucesso"
    });
};

module.exports = {
    listarProdutos,
    buscarProduto,
    cadastrarProduto,
    editarProdutos,
    excluirProdutos
};
