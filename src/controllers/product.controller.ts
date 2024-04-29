import { Request, Response } from 'express';
import { create, show } from '../services/product.service';

export const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const product = await create(productData);
  if (!product) {
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
  res.status(201).json(product);
};

export const showProductController = async (req: Request, res: Response) => {
  const products = await show();
  if (!products) {
    res.status(500).json({ message: 'Erro ao exibir produtos' });
  }
  res.status(200).json(products);
};
