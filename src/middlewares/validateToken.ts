import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Secret, verify } from 'jsonwebtoken';

export interface PersonalRequest extends Request {
  user?: number;
}
interface Token {
  id: number,
  userName: string,
  iat: number,
}

dotenv.config();
const key: Secret = process.env.JWT_SECRET || 'julio';

const validateToken = (req: PersonalRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    const decode = verify(authorization, key);
    const token = decode as Token;
    req.user = token.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;