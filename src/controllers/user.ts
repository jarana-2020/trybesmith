import { Request, Response } from 'express';
import { Secret, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import createNewUser from '../services/user';

dotenv.config();

const key: Secret = process.env.JWT_SECRET || 'julio';

const createUser = async (req: Request, res: Response) => {
  try {
    const dataUser = req.body;
    const user = await createNewUser(dataUser);
    const token = sign({ id: user.id, userName: user.username }, key);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default createUser;