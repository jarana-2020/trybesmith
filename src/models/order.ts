import { FieldPacket, OkPacket } from 'mysql2';
import connection from './connection';

const insertOrder = async () => {
  const query = 'INSERT INTO Trybesmith.Orders VALUE()';
  const [order]:[OkPacket, FieldPacket[]] = await connection.execute(query);
  return {
    id: order.insertId,
  };
};

export default insertOrder;