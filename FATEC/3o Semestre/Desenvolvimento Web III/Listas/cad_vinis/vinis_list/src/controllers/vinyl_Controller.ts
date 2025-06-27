import { Request, Response } from 'express';
import Vinyl_Item from '../models/vinyl_Item';

// Criar um item
export const createItem = async (req: Request, res: Response) => {
  try {
    const item = new Vinyl_Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os itens
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Vinyl_Item.find();
    res.json(items);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar um item
export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await Vinyl_Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar um item
export const deleteItem = async (req: Request, res: Response) => {
  try {
    await Vinyl_Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removido" });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
