import { Request, Response } from 'express';
import { Product } from '../interfaces/interfaces';
import { PersonalRequest } from '../middlewares/validateToken';
import createNewProduct, { allProducts } from '../services/product';
import { ProductCreated } from '../types/product';

const createProduct = async (req: PersonalRequest, res: Response):
Promise<Response<ProductCreated | Error>> => {
  try {
    const product = await createNewProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllProducts = async (_req: Request, res: Response):
Promise<Response<Product[] | Error>> => {
  try {
    const products = await allProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default createProduct;