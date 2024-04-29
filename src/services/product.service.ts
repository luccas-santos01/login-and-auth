import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (data: Product): Promise<ProductSequelizeModel> => {
  const product = await ProductModel.create(data);
  return product;
};

export default create;
