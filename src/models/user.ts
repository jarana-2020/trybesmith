import { OkPacket, RowDataPacket } from 'mysql2';
import { NewUser, User } from '../interfaces/interfaces';
import connection from './connection';

const createUser = async (obj: NewUser): Promise<{ id: number, username: string }> => {
  const { username, classe, level, password } = obj;
  const query = 'INSERT INTO Trybesmith.Users(username,classe,level,password) Values(?,?,?,?)';
  const [result] = await connection
    .execute<OkPacket>(query, [username, classe, level, password]);
  return {
    id: result.insertId,
    username,
  };
};

export const getUserByName = async (obj: NewUser):Promise<User | null> => {
  const { username, password } = obj;
  const query = `SELECT username, id 
    FROM Trybesmith.Users WHERE username = ? AND password = ?`;
  const [result] = await connection
    .execute<RowDataPacket[]>(query, [username, password]);
  const [user] = result as User[];

  if (!user) return null;
  
  return user;
};

export default createUser;
