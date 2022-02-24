import { NewUser } from '../interfaces/interfaces';
import createUser from '../models/user';

const createNewUser = async (obj: NewUser) => {
  const user = await createUser(obj);
  return user;
};

export default createNewUser;