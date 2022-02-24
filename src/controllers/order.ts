import { Response } from 'express';
import { PersonalRequest } from '../middlewares/validateToken';
import { ErrorMessage } from '../services/login';
import createOrder, { getOrderById } from '../services/order';

const createNewOrder = async (req: PersonalRequest, res: Response) => {
  const { products } = req.body;
  const id = req.user as number;
  const order = await createOrder({ user: id, products });
  res.status(201).json(order);
};

export const orderById = async (req: PersonalRequest, res: Response) => {
  const { id } = req.params;
  const orderId = Number(id);
  const userId = req.user as number;
  const order = await getOrderById(userId, orderId);
  const orderMessage = order as ErrorMessage;
  if (orderMessage.message) {
    return res.status(orderMessage.code).json(orderMessage.message);
  }
  return res.status(200).json(order);
};

export default createNewOrder;