import insertOrder from '../models/order';
import { updateProduct } from '../models/product';

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

export default createOrder;