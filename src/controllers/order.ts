import { Request, Response } from 'express';
import { OrderProducts } from '../interfaces/interfaces';
import { PersonalRequest } from '../middlewares/validateToken';
import { ErrorMessage } from '../services/login';
import createOrder, { allOrders, getOrderById } from '../services/order';
import { OrderCreated, ReceivedOrder } from '../types/product';

const createNewOrder = async (req: PersonalRequest, res: Response):
Promise<Response<OrderCreated | Error>> => {
  try {
    const { products } = req.body as OrderProducts;
    const id = req.user as number;
    const order = await createOrder({ user: id, products });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const orderById = async (req: PersonalRequest, res: Response):
Promise<Response<ReceivedOrder | Error>> => {
  try {
    const { id } = req.params;
    const orderId = Number(id);
    const data = await getOrderById(orderId);
    const order = data as ReceivedOrder;
    const orderMessage = data as ErrorMessage;
    if (orderMessage.message) {
      return res.status(orderMessage.code).json(orderMessage.message);
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllOrders = async (_req: Request, res: Response)
:Promise<Response<ReceivedOrder[] | Error>> => {
  try {
    const orders = await allOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default createNewOrder;