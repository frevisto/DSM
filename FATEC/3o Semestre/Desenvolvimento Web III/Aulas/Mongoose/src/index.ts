import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());



const mongoUrl = "mongodb://localhost:27017/desWebII/clientes";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((e) => {
    console.log("Erro ao conectar ao MongoDB: ", e);
  })
;


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})
;
