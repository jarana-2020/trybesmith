import { FieldPacket, OkPacket } from 'mysql2';
import { Order } from '../interfaces/interfaces';
import connection from './connection';

const insertOrder = async (userId: number) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUE(?)';
  const [order]:[OkPacket, FieldPacket[]] = await connection.execute(query, [userId]);
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

export const getAllOrders = async () => {
  const query = `
    SELECT *
    FROM Trybesmith.Orders`;
  const [result] = await connection.execute(query);
  const order = result as Order[];
  return order;
};

export default insertOrder;