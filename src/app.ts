import express from 'express';
import errorMidleware from './middlewares/error';

import routerUser from './routes/user';
import routerLogin from './routes/login';
import routerProduct from './routes/products';
import routerOrder from './routes/orders';

const app = express();

app.use(express.json());
app.use('/users', routerUser);
app.use('/login', routerLogin);
app.use('/products', routerProduct);
app.use('/orders', routerOrder);
app.use(errorMidleware);

export default app;
