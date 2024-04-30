import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

export const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (username === '' || username === null || username === undefined) {
    return res.status(400).json(({ message: '"username" and "password" are required' }));
  }
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password === '' || password === null || password === undefined) {
    return res.status(400).json(({ message: '"username" and "password" are required' }));
  }
  next();
};

export const validadeUserAcess = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const foundUser = await UserModel.findOne({ where: { username } });
  if (!foundUser) {
    return res.status(401).json(({ message: 'Username or password invalid' }));
  }
  next();
};

export const validadePasswordAcess = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const foundUser = await UserModel.findOne({ where: { username } });
  if (!foundUser || !bcrypt.compareSync(password, foundUser.dataValues.password)) {
    return res.status(401).json(({ message: 'Username or password invalid' }));
  }
  next();
};
