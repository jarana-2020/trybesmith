import express from 'express';
import executeLogin from './controllers/login';
import createUser from './controllers/user';
import validatClasse from './middlewares/validateClasse';
import validatLevel from './middlewares/validateLevel';
import validateName from './middlewares/validateName';
import validatePassword from './middlewares/validatePassword';

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

export default app;
