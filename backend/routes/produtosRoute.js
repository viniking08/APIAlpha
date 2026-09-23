const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtosController");

router.get("/produtos", produtosController.listarProdutos);
router.get("/produtos/:id", produtosController.buscarProduto);
router.post("/produtos", produtosController.cadastrarProduto);
router.put("/produtos/:id", produtosController.editarProdutos);
router.delete("/produtos/:id", produtosController.excluirProdutos);

module.exports = router;
