import { Request, Response } from 'express';
import ShoppingItem from '../models/shoppingItem';

// Criar um item
export const createItem = async (req: Request, res: Response) => {
  try {
    const item = new ShoppingItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os itens
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await ShoppingItem.find();
    res.json(items);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar um item
export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await ShoppingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar um item
export const deleteItem = async (req: Request, res: Response) => {
  try {
    await ShoppingItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removido" });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
