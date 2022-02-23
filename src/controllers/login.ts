import { NextFunction, Request, Response } from 'express';
import { Secret, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
// import { HttpExceptions } from '../middlewares/error';
import loginUser, { ErrorMessage } from '../services/login';
import { User } from '../models/user';

dotenv.config();

const key: Secret = process.env.JWT_SECRET || 'julio';

const executeLogin = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { username } = req.body;
    const data = await loginUser(req.body);
    const user = data as User;
    const userMessage = data as ErrorMessage;
    if (userMessage.message) {
      return res.status(userMessage.code).json(userMessage.message);
    }
    // if (!user) {
    //   return next(new HttpExceptions(401, 'Username or password invalid'));
    // }
    const token = sign({ user: username, id: user.id }, key);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default executeLogin;