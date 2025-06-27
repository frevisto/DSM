import mongoose from 'mongoose';

const Vinyl_ItemSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  artista: { type: String, required: true },
  ano: { type: String, required: true },
  genero: { type: String, required: true },
  formato: { type: String, required: true },
  preco: { type: Number, required: true },
});

export default mongoose.model('Vinyl_Item', Vinyl_ItemSchema);

