import { Router } from 'express';
import createUser from '../controllers/user';
import validatClasse from '../middlewares/validateClasse';
import validatLevel from '../middlewares/validateLevel';
import validateName from '../middlewares/validateName';
import validatePassword from '../middlewares/validatePassword';

const router = Router();

router
  .use(validateName)
  .use(validatClasse)
  .use(validatLevel)
  .use(validatePassword)
  .post('/', createUser);

export default router;