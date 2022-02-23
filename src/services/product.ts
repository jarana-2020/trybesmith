import createProduct, { NewProduct } from '../models/product';

const createNewProduct = async (obj: NewProduct) => {
  const product = await createProduct(obj);
  return product;
};

export default createNewProduct;