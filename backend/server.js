const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.API_PORT;

const produtosRoutes = require("./routes/produtosRoute");
const clientesRoutes = require("./routes/clientesRoute");

app.use(express.json());

app.use(produtosRoutes);
app.use(clientesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
