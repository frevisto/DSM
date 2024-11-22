import express from "express";
import routes from "./routes";

const app = express();
const PORT = 3003;

app.listen(PORT, function(){
    console.log(`Rodando na porta ${PORT}...`);
});

app.use(routes);