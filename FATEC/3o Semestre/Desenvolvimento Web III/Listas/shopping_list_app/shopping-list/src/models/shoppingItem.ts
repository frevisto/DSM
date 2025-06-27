import mongoose from 'mongoose';

const ShoppingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model('ShoppingItem', ShoppingItemSchema);
