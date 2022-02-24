import insertOrder, { orderById } from '../models/order';
import { updateProduct } from '../models/product';
import getOrderProducts from '../utils/utils';
import { ErrorMessage } from './login';

interface NewOrder {
  user: number;
  products: number[];
}

const createOrder = async (obj: NewOrder) => {
  const order = await insertOrder();
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

export default createOrder;