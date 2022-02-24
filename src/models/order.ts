import { FieldPacket, OkPacket } from 'mysql2';
import connection from './connection';

export interface Order {
  productId: number;
}

const insertOrder = async () => {
  const query = 'INSERT INTO Trybesmith.Orders VALUE()';
  const [order]:[OkPacket, FieldPacket[]] = await connection.execute(query);
  return {
    id: order.insertId,
  };
};

export const orderById = async (id: number) => {
  const query = `SELECT P.id as productId 
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as P
    ON O.id = P.orderId
    WHERE O.id = ?`;
  const [result] = await connection.execute(query, [id]);
  const order = result as Order[];
  return order;
};

export default insertOrder;