import { Request, Response } from 'express';
import { PersonalRequest } from '../middlewares/validateToken';
import createNewProduct, { allProducts } from '../services/product';

const createProduct = async (req: PersonalRequest, res: Response) => {
  try {
    const product = await createNewProduct(req.body);
    const { id, name, amount } = product;
    return res.status(201).json({ item: { id, name, amount } });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await allProducts();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createProduct;