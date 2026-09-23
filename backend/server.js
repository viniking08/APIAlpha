const express = require("express");
const app = express();
const PORT = 3033;

const produtosRoutes = require("./routes/produtosRoute");
const clientesRoutes = require("./routes/clientesRoute");

app.use(express.json());

app.use(produtosRoutes);
app.use(clientesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
