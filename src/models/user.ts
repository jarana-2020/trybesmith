import { FieldPacket, OkPacket } from 'mysql2';
import connection from './connection';

export interface NewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

const createUser = async (obj: NewUser): Promise<{ id: number, username: string }> => {
  const { username, classe, level, password } = obj;
  const query = 'INSERT INTO Trybesmith.Users(username,classe,level,password) Values(?,?,?,?)';
  const [result]: [OkPacket, FieldPacket[]] = await connection
    .execute(query, [username, classe, level, password]);
  return {
    id: result.insertId,
    username,
  };
};

export default createUser;
