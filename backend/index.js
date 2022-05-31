const express = require("express");
const app = express();

// Método GET para pegar os valores
app.get('/', (req, res) => {
    res.send("Hello word")
})

// Definir porta de acesso à API
app.listen(3001, ()=>{
    console.log("rodando servidor");
})