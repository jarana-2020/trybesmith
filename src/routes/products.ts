import { Router } from 'express';
import createProduct, { getAllProducts } from '../controllers/product';
import checkNameProduct, { checkAmountProduct } from '../middlewares/validateProduct';
import validateToken from '../middlewares/validateToken';

const router = Router();

router
  .use(validateToken)
  .get('/', getAllProducts)
  .use(checkNameProduct)
  .use(checkAmountProduct)
  .post('/', createProduct);

export default router;