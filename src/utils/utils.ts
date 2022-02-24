import { Order } from '../models/order';

// interface OrderReduced {
//   productIds: number[];
// }

// const getOrder = (array: Order[]) => {
//   const result = array.reduce((ac: OrderReduced, cur) => {
//     ac.id = cur.id;
//     ac.productIds.push(cur.productId);
//     return ac;
//   });
//   return result;
// };

const getOrderProducts = (array: Order[]) => {
  const result = array.map((product) => product.productId);
  return result;
};

export default getOrderProducts;