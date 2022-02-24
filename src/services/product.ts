import { NewProduct, Product } from '../interfaces/interfaces';
import createProduct, { getAllProducts } from '../models/product';
import { ProductCreated } from '../types/product';

const createNewProduct = async (obj: NewProduct):Promise<ProductCreated> => {
  const product = await createProduct(obj);
  return {
    item: {
      id: product.id,
      name: product.name,
      amount: product.amount,
    },
  };
};

export const allProducts = async ():Promise<Product[]> => {
  const products = await getAllProducts();
  return products;
};

export default createNewProduct;