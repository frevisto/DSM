import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoppingRoutes from './routes/shoppingRoutes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/shopping-list')
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error(err));

app.use('/api', shoppingRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
