// interface OrderReduced {
//   productIds: number[];
// }

import { Order } from '../interfaces/interfaces';

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