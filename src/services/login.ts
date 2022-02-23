import { getUserByName, NewUser } from '../models/user';

export interface ErrorMessage {
  code: number;
  message:{ error: string }
}

const loginUser = async (obj: NewUser) => {
  const user = await getUserByName(obj);
  const message: ErrorMessage = { code: 401, message: { error: 'Username or password invalid' } };
  if (!user) {
    return message;
  } 
  
  return user;
};

export default loginUser;