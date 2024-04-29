import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

export const create = async (data: Product): Promise<ProductSequelizeModel> => {
  const product = await ProductModel.create(data);
  return product;
};

export const show = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();
  return products;
};
