import { NewProduct } from '../interfaces/interfaces';
import createProduct, { getAllProducts } from '../models/product';

const createNewProduct = async (obj: NewProduct) => {
  const product = await createProduct(obj);
  return product;
};

export const allProducts = async () => {
  const products = await getAllProducts();
  return products;
};

export default createNewProduct;