import express from 'express';
import executeLogin from './controllers/login';
import createNewOrder, { orderById } from './controllers/order';
import createProduct, { getAllProducts } from './controllers/product';
import createUser from './controllers/user';
import errorMidleware from './middlewares/error';
import validatClasse from './middlewares/validateClasse';
import validatLevel from './middlewares/validateLevel';
import validateName from './middlewares/validateName';
import checkOrder from './middlewares/validateOrder';
import validatePassword from './middlewares/validatePassword';
import checkNameProduct, { checkAmountProduct } from './middlewares/validateProduct';
import validateToken from './middlewares/validateToken';

const app = express();

app.use(express.json());
app.post(
  '/users', 
  validateName,
  validatClasse,
  validatLevel,
  validatePassword,
  createUser,
);
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
app.use(errorMidleware);

export default app;
