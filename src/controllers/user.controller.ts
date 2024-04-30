import { Request, Response } from 'express';
import login from '../services/user.service';

const userLoginController = async (req: Request, res: Response) => {
  const token = await login(req.body);
  res.json({ token });
};

export default userLoginController;
