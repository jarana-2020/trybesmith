import { Router } from 'express';
import createNewOrder, { getAllOrders, orderById } from '../controllers/order';
import checkOrder from '../middlewares/validateOrder';
import validateToken from '../middlewares/validateToken';

const router = Router();

router
  .use(validateToken)
  .get('/:id', orderById)
  .get('/', getAllOrders)
  .use(checkOrder)
  .post('/', createNewOrder);

export default router;