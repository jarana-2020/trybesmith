import createUser, { NewUser } from '../models/user';

const createNewUser = async (obj: NewUser) => {
  const user = await createUser(obj);
  return user;
};

export default createNewUser;