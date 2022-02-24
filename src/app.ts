import express from 'express';
import executeLogin from './controllers/login';
import createNewOrder, { getAllOrders, orderById } from './controllers/order';
import createProduct, { getAllProducts } from './controllers/product';
import errorMidleware from './middlewares/error';
import validateName from './middlewares/validateName';
import checkOrder from './middlewares/validateOrder';
import validatePassword from './middlewares/validatePassword';
import checkNameProduct, { checkAmountProduct } from './middlewares/validateProduct';
import validateToken from './middlewares/validateToken';

import routerUser from './routes/user';

const app = express();

app.use(express.json());
app.use('/users', routerUser);
app.post('/login', validateName, validatePassword, executeLogin);
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
