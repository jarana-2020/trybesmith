import { NewOrder, Order } from '../interfaces/interfaces';
import insertOrder, { getAllOrders, orderById } from '../models/order';
import { updateProduct } from '../models/product';
import { OrderCreated, ReceivedOrder } from '../types/product';
import getOrderProducts from '../utils/utils';
import { ErrorMessage } from './login';

const createOrder = async (obj: NewOrder):Promise<OrderCreated> => {
  const order = await insertOrder(obj.user);
  const orderId = order.id;
  await Promise.all(obj.products.map(async (id) => {
    await updateProduct(id, orderId);
  }));
  return {
    order: {
      userId: obj.user,
      products: obj.products,
    },
  };
};

export const getOrderById = async (orderId: number):
Promise< ReceivedOrder | ErrorMessage> => {
  const data = await orderById(orderId);
  const message: ErrorMessage = { code: 404, message: { error: 'Order not found' } };
  if (!data.length) {
    return message;
  }
  const products = getOrderProducts(data);
  const { userId } = data[0];
  return {
    id: orderId,
    userId,
    products,
  };
};

const getOrders = async (allOrders: Order[]):Promise<ReceivedOrder[]> => {
  const orders = allOrders.map(async ({ id, userId }) => {
    const order = await orderById(id);
    const products = getOrderProducts(order);
    return { id, userId, products };
  });
  const dataOrders: ReceivedOrder[] = await Promise.all(orders);
  return dataOrders;
};
// consultei a solução do amigo Gustavo Sant'Anna turma Trybe 14B para esta função
export const allOrders = async ():Promise<ReceivedOrder[]> => {
  const result = await getAllOrders();
  const orders = await getOrders(result);
  return orders;
};

export default createOrder;