import UserModel from '../database/models/user.model';
import generateToken from '../utils/generateToken';

const login = async (data: { username: string; password: string }): Promise<string> => {
  const { username } = data;
  const userLogin = await UserModel.findOne({ where: { username } });

  if (!userLogin) {
    throw new Error('Usuário não encontrado');
  }

  const userData = userLogin.get({ plain: true });
  const token = generateToken(userData.id.toString(), username);
  return token;
};

export default login;
