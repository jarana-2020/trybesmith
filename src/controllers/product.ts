import { Request, Response } from 'express';
import createNewProduct from '../services/product';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await createNewProduct(req.body);
    const { id, name, amount } = product;
    return res.status(201).json({ item: { id, name, amount } });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createProduct;