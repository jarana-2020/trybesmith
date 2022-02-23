import { FieldPacket, OkPacket } from 'mysql2';
import connection from './connection';

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

export default createProduct;