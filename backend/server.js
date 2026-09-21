
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

/*app.get("/". () =>{

});

app.post();

app.put();

app.delete();
*/
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})