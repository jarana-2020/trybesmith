import express from 'express';
import createNewOrder, { getAllOrders, orderById } from './controllers/order';
import createProduct, { getAllProducts } from './controllers/product';
import errorMidleware from './middlewares/error';
import checkOrder from './middlewares/validateOrder';
import checkNameProduct, { checkAmountProduct } from './middlewares/validateProduct';
import validateToken from './middlewares/validateToken';

import routerUser from './routes/user';
import routerLogin from './routes/login';

const app = express();

app.use(express.json());
app.use('/users', routerUser);
app.use('/login', routerLogin);
app.post(
  '/products', 
  validateToken,
  checkNameProduct,
  checkAmountProduct,
  createProduct,
);
app.get('/products', validateToken, getAllProducts);
app.post('/orders', validateToken, checkOrder, createNewOrder);
app.get('/orders/:id', validateToken, orderById);
app.get('/orders', validateToken, getAllOrders);
app.use(errorMidleware);

export default app;
