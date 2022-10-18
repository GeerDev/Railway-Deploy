const express = require('express');
const app = express();
const cors = require("cors");

const Text = require("./models/Text.js");

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT
app.use(cors());

app.get('/title', async (req,res) => {
    const title = await Text.findOne()
    res.send(title)
})

app.post('/title', async (req,res) => {
    await Text.create({title: "Desplegando en Railway :)"})
    res.send('Título creado con éxito')
})

dbConnection()

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))