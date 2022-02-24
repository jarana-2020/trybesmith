import { OkPacket, RowDataPacket } from 'mysql2';
import { NewProduct, Product } from '../interfaces/interfaces';
import { ProductType } from '../types/product';
import connection from './connection';

const createProduct = async (obj: NewProduct):Promise<ProductType> => {
  const { name, amount } = obj;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';
  const [product] = await connection
    .execute<OkPacket>(query, [name, amount]);
  return {
    id: product.insertId,
    name,
    amount,
  };
};

export const getAllProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products as Product[];
};

export const updateProduct = async (id: number, order: number):Promise<number> => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  const [result] = await connection.execute<OkPacket>(query, [order, id]);
  return result.affectedRows;
};

export default createProduct;