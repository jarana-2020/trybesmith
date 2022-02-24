import insertOrder, { getAllOrders, Order, orderById } from '../models/order';
import { updateProduct } from '../models/product';
import getOrderProducts from '../utils/utils';
import { ErrorMessage } from './login';

interface NewOrder {
  id?: number;
  user: number;
  products: number[];
}

const createOrder = async (obj: NewOrder) => {
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

export const getOrderById = async (userId: number, orderId: number) => {
  const order = await orderById(orderId);
  const message: ErrorMessage = { code: 404, message: { error: 'Order not found' } };
  if (!order.length) {
    return message;
  }
  const products = getOrderProducts(order);
  
  return {
    id: orderId,
    userId,
    products,
  };
};

const getOrders = async (allOrders: Order[]) => {
  const orders = allOrders.map(async ({ id, userId }) => {
    const order = await orderById(id);
    const products = getOrderProducts(order);
    return { id, userId, products };
  });
  const dataOrders = await Promise.all(orders);
  return dataOrders;
};
// consultei a solução do amigo Gustavo Sant'Anna turma Trybe 14B para esta função
export const allOrders = async () => {
  const result = await getAllOrders();
  const orders = await getOrders(result);
  return orders;
};

export default createOrder;