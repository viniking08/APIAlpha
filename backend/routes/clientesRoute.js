const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientesController");

router.get("/clientes", clientesController.listarClientes);
router.get("/clientes/:id", clientesController.buscarCliente);
router.post("/clientes", clientesController.cadastrarCliente);
router.put("/clientes/:id", clientesController.editarCliente);
router.delete("/clientes/:id", clientesController.excluirCliente);

module.exports = router;
