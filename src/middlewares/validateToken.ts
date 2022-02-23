import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Secret, verify } from 'jsonwebtoken';

dotenv.config();
const key: Secret = process.env.JWT_SECRET || 'julio';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    verify(authorization, key);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;