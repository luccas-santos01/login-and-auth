import jwt from 'jsonwebtoken';

type Payload = {
  id: string | number;
  username: string;
};

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (
  id: string | number,
  username: string,
  expiresIn: string = jwtConfig.expiresIn,
): string => {
  const payload: Payload = { id, username };
  return jwt.sign(payload, secret, { expiresIn });
};

export default generateToken;
