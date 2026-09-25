const produtosModel = require("../models/produtosModel");

const listarProdutos = async (req, res) => {
    const produtos = await produtosModel.buscarTodos();

    res.json(produtos);
};

const buscarProduto = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
};

const cadastrarProduto = async (req, res) => {
    const {nome, marca, preco} = req.body;
    const novoProduto = await produtosModel.criar(nome, marca, preco);

    res.status(201).json(novoProduto);
};

const editarProdutos = async (req, res) => {
    const id = req.params.id;
    const {nome, marca, preco} = req.body;
    const produto = await produtosModel.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const produtoAtualizado = await produtosModel.editar(id, nome, marca, preco);

    res.json(produtoAtualizado);
};

const excluirProdutos = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    await produtosModel.excluir(id);

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
