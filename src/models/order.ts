import { OkPacket, RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/interfaces';
import connection from './connection';

const insertOrder = async (userId: number):Promise<{ id: number }> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUE(?)';
  const [order] = await connection.execute<OkPacket>(query, [userId]);
  return {
    id: order.insertId,
  };
};

export const orderById = async (id: number):Promise<Order[]> => {
  const query = `
    SELECT P.id as productId, O.userId 
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as P
    ON O.id = P.orderId
    WHERE O.id = ?`;
  const [result] = await connection.execute<RowDataPacket[]>(query, [id]);
  const order = result as Order[];
  return order;
};

export const getAllOrders = async ():Promise<Order[]> => {
  const query = `
    SELECT *
    FROM Trybesmith.Orders`;
  const [result] = await connection.execute<RowDataPacket[]>(query);
  const order = result as Order[];
  return order;
};

export default insertOrder;