import { Request, Response } from 'express';
import { Secret, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import loginUser, { ErrorMessage } from '../services/login';

dotenv.config();

const key: Secret = process.env.JWT_SECRET || 'julio';

const executeLogin = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await loginUser(req.body);
  const userMessage = user as ErrorMessage;
  if (userMessage.message) {
    return res.status(userMessage.code).json(userMessage.message);
  }
  const token = sign({ user: username }, key);
  return res.status(200).json({ token });
};

export default executeLogin;