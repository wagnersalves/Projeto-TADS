const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

//Conexão com o BD
const conn = require ("./db/conn")

conn();

//Routes
const routes = require("./routes/router")

app.use("/api", routes)

//Atesta funcionamento do servidor, criado script em package json. Reinicia o servidor quando salvamos os arquivos.
app.listen(3000, function () {
    console.log("Servidor Online!")
})

