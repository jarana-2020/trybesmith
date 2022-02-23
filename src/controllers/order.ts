import { Response } from 'express';
import { PersonalRequest } from '../middlewares/validateToken';
import createOrder from '../services/order';

const createNewOrder = async (req: PersonalRequest, res: Response) => {
  const { products } = req.body;
  const id = req.user as number;
  const order = await createOrder({ user: id, products });
  res.status(201).json(order);
};

export default createNewOrder;