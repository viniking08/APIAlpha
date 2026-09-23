const clientes = require("../models/clientesModel");

const listarClientes = (req, res) => {
    res.json(clientes);
};

const buscarCliente = (req, res) => {
    const id = req.params.id;

    const cliente = clientes.find(cliente => cliente.id == id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    res.json(cliente);
};

const cadastrarCliente = (req, res) => {
    const novoCliente = {
        id: clientes.length + 1,
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email
    };

    clientes.push(novoCliente);

    res.status(201).json(novoCliente);
};

const editarCliente = (req, res) => {
    const id = req.params.id;

    const cliente = clientes.find(cliente => cliente.id == id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    cliente.nome = req.body.nome;
    cliente.telefone = req.body.telefone;
    cliente.email = req.body.email;

    res.json(cliente);
};

const excluirCliente = (req, res) => {
    const id = req.params.id;

    const clienteIndex = clientes.findIndex(cliente => cliente.id == id);

    if (clienteIndex === -1) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    clientes.splice(clienteIndex, 1);

    res.json({
        mensagem: "Cliente deletado com sucesso"
    });
};

module.exports = {
    listarClientes,
    buscarCliente,
    cadastrarCliente,
    editarCliente,
    excluirCliente
};
