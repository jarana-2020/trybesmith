import { Router } from 'express';
import executeLogin from '../controllers/login';
import validateName from '../middlewares/validateName';
import validatePassword from '../middlewares/validatePassword';

const router = Router();

router
  .use(validateName)
  .use(validatePassword)
  .post('/', executeLogin);

export default router;