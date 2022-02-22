import express from 'express';
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

export default app;
