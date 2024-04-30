import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import generateToken from '../utils/generateToken';
import { User } from '../types/User';
import { Product } from '../types/Product';

export type UserWithProducts = User & { productIds: Product[] };

export const login = async (data: { username: string; password: string }): Promise<string> => {
  const { username } = data;
  const userLogin = await UserModel.findOne({ where: { username } });

  if (!userLogin) {
    throw new Error('Usuário não encontrado');
  }

  const userData = userLogin.dataValues;
  const token = generateToken(userData.id.toString(), username);
  return token;
};

export const showUsers = async (): Promise<Array<{ username: string; productIds: number[] }>> => {
  const users = await UserModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  return users.map((user) => {
    const userData = user.dataValues as UserWithProducts;
    return {
      username: userData.username,
      productIds: userData.productIds.map((product) => product.id),
    };
  });
};
