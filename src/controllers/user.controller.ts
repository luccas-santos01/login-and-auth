import { Request, Response } from 'express';
import { login, showUsers } from '../services/user.service';

export const userLoginController = async (req: Request, res: Response) => {
  const token = await login(req.body);
  res.json({ token });
};

export const showUsersController = async (req: Request, res: Response) => {
  const users = await showUsers();
  res.json(users);
};
