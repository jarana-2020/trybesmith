import { FieldPacket, OkPacket } from 'mysql2';
import connection from './connection';

interface Product extends NewProduct {
  id: number;
  orderId: number | null;
}
export interface NewProduct {
  name: string;
  amount: string;
}

const createProduct = async (obj: NewProduct) => {
  const { name, amount } = obj;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';
  const [product]:[OkPacket, FieldPacket[]] = await connection
    .execute(query, [name, amount]);
  return {
    id: product.insertId,
    name,
    amount,
  };
};

export const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as Product[];
};

export const updateProduct = async (id: number, order: number) => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  const [result]: [OkPacket, FieldPacket[]] = await connection.execute(query, [order, id]);
  return result.affectedRows;
};

export default createProduct;