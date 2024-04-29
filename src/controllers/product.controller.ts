import { Request, Response } from 'express';
import createProduct from '../services/product.service';

const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const product = await createProduct(productData);
  if (!product) {
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
  res.status(201).json(product);
};

export default createProductController;
