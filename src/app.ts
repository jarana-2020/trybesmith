import express from 'express';
import createNewOrder, { getAllOrders, orderById } from './controllers/order';
import errorMidleware from './middlewares/error';
import checkOrder from './middlewares/validateOrder';
import validateToken from './middlewares/validateToken';

import routerUser from './routes/user';
import routerLogin from './routes/login';
import routerProduct from './routes/products';

const app = express();

app.use(express.json());
app.use('/users', routerUser);
app.use('/login', routerLogin);
app.use('/products', routerProduct);
app.post('/orders', validateToken, checkOrder, createNewOrder);
app.get('/orders/:id', validateToken, orderById);
app.get('/orders', validateToken, getAllOrders);
app.use(errorMidleware);

export default app;
